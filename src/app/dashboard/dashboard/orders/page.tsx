'use client';
import { useState, useEffect } from 'react';
import { Eye, ChevronLeft, ChevronRight, FileText, MapPin, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';


interface UserData { name: string; email: string; phone?: string; company?: string; }
interface SelectedItem {
    collection_date: string;
    resolution: string;
    collection_vehicle_short: string;
    cloud_cover_percent: number;
    coverage: number;
    objectid: string;
}
interface Order {
    orderId: string;
    configID: string;
    userId: string;
    status: string;
    createdAt: string;
    estimatedPrice: number;
    additionalNotes: string;
    userData: UserData;
    processingTypes: string[];
    selectedItems: SelectedItem[];
    pdf_url?: string;
    orderConfigURL?: string;
    company?: string;
    phone?: string;
}


export default function OrdersPage() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
    const [totalCount, setTotalCount] = useState(0);
    const [openView, setOpenView] = useState(false);
    const [currentOrder, setCurrentOrder] = useState<Order | null>(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => { fetchOrders(); }, []);


    const fetchOrders = async () => {
        try {
            setLoading(true);
            const res = await fetch('/api/orders');
            const result = await res.json();
            if (result.success) {
                setOrders(result.data);
                setTotalCount(result.count);
            }
        } catch { 
        } finally {
            setLoading(false);
        }
    };


    const handleSortByDate = () => {
        const newSortOrder = sortOrder === 'desc' ? 'asc' : 'desc';
        setSortOrder(newSortOrder);
        const sortedOrders = [...orders].sort((a, b) =>
            newSortOrder === 'desc'
                ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        setOrders(sortedOrders);
        setPage(0);
    };


    const handleChangePage = (newPage: number) => setPage(newPage);
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(Number(event.target.value));
        setPage(0);
    };


    const transformConfigUrl = (s3Url: string | undefined): string | null => {
        if (!s3Url) return null;
        const match = s3Url.match(/order_config_[^/]+\.json$/);
        if (!match) return null;
        const filename = match[0].replace('.json', '');
        return `https://explorer.ruangbumi.com/?savedconfig=${filename}`;
    };


    const displayedOrders = orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    const formatPrice = (price: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
    const formatDate = (date: string) => new Date(date).toLocaleString('id-ID', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });


    return (
        <>
            <h1 className="text-2xl font-bold mb-2">Orders</h1>
            <div className="flex justify-between mb-4">
                <div>Total Orders: {totalCount}</div>
                <Button
                    className="bg-[#CBFE33] hover:bg-[#CBFE33] text-gray-900"
                    onClick={handleSortByDate}
                >
                    Sort by Date ({sortOrder === 'desc' ? 'Terbaru' : 'Terlama'})
                </Button>


            </div >
            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-center">Order ID</TableHead>
                            <TableHead className="text-center">Customer</TableHead>
                            <TableHead className="text-center">Email</TableHead>
                            <TableHead className="text-center">Status</TableHead>
                            <TableHead className="text-center">Estimated Price</TableHead>
                            <TableHead className="text-center">Created At</TableHead>
                            <TableHead className="text-center">PDF Order</TableHead>
                            <TableHead className="text-center">Preview Imagery</TableHead>
                            <TableHead className="text-center">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={9} className="text-center h-32">
                                    <div className="flex items-center justify-center">
                                        <Loader2 className="w-6 h-6 animate-spin text-gray-500 mr-2" />
                                        <span className="text-muted-foreground">Loading orders...</span>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ) : displayedOrders.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={9} className="text-center h-32">
                                    <span className="text-muted-foreground">Tidak ada data.</span>
                                </TableCell>
                            </TableRow>
                        ) : (
                            displayedOrders.map((order) => (
                                <TableRow key={order.orderId}>
                                    <TableCell className="text-center">{order.orderId}</TableCell>
                                    <TableCell className="text-center">{order.userData?.name}</TableCell>
                                    <TableCell className="text-center">{order.userData?.email}</TableCell>
                                    <TableCell className="text-center">{order.status}</TableCell>
                                    <TableCell className="text-center">{formatPrice(order.estimatedPrice)}</TableCell>
                                    <TableCell className="text-center">{formatDate(order.createdAt)}</TableCell>
                                    <TableCell className="text-center">
                                        {order.pdf_url ? (
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                asChild
                                            >
                                                <a href={order.pdf_url} target="_blank" rel="noopener noreferrer">
                                                    <FileText className="w-4 h-4" />
                                                </a>
                                            </Button>
                                        ) : (
                                            <span className="text-muted-foreground">-</span>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-center">
                                        {transformConfigUrl(order.orderConfigURL) ? (
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                asChild
                                            >
                                                <a href={transformConfigUrl(order.orderConfigURL)!} target="_blank" rel="noopener noreferrer">
                                                    <MapPin className="w-4 h-4" />
                                                </a>
                                            </Button>
                                        ) : (
                                            <span className="text-muted-foreground">-</span>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-center">
                                        <Button variant="ghost" size="icon" onClick={() => { setCurrentOrder(order); setOpenView(true); }}>
                                            <Eye className="w-4 h-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex justify-end items-center gap-2 mt-4">
                <Button variant="ghost" size="icon" disabled={page === 0} onClick={() => handleChangePage(page - 1)}>
                    <ChevronLeft />
                </Button>
                <span>Page {page + 1} of {Math.ceil(totalCount / rowsPerPage)}</span>
                <Button variant="ghost" size="icon" disabled={(page + 1) * rowsPerPage >= totalCount} onClick={() => handleChangePage(page + 1)}>
                    <ChevronRight />
                </Button>
                <select value={rowsPerPage} onChange={handleChangeRowsPerPage} className="ml-2 border p-1 rounded">
                    {[10, 20, 50].map(n => <option key={n} value={n}>{n}/halaman</option>)}
                </select>
            </div>


            <Dialog open={openView} onOpenChange={setOpenView}>
                <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>Order Detail</DialogTitle>
                    </DialogHeader>
                    {currentOrder && (
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="font-semibold text-sm text-muted-foreground">Order ID</p>
                                    <p className="text-sm">{currentOrder.orderId}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-muted-foreground">Config ID</p>
                                    <p className="text-sm">{currentOrder.configID}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-muted-foreground">Status</p>
                                    <p className="text-sm">{currentOrder.status}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-muted-foreground">Created At</p>
                                    <p className="text-sm">{formatDate(currentOrder.createdAt)}</p>
                                </div>
                            </div>


                            <div className="border-t pt-4">
                                <h3 className="font-semibold mb-2">Customer Information</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="font-semibold text-sm text-muted-foreground">Name</p>
                                        <p className="text-sm">{currentOrder.userData.name}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm text-muted-foreground">Email</p>
                                        <p className="text-sm">{currentOrder.userData.email}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm text-muted-foreground">Phone</p>
                                        <p className="text-sm">{currentOrder.userData.phone || currentOrder.phone || '-'}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm text-muted-foreground">Company</p>
                                        <p className="text-sm">{currentOrder.userData.company || currentOrder.company || '-'}</p>
                                    </div>
                                </div>
                            </div>


                            <div className="border-t pt-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="font-semibold text-sm text-muted-foreground">Estimated Price</p>
                                        <p className="text-sm">{formatPrice(currentOrder.estimatedPrice)}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm text-muted-foreground">Processing Types</p>
                                        <p className="text-sm">{currentOrder.processingTypes.join(', ')}</p>
                                    </div>
                                </div>
                            </div>


                            <div className="border-t pt-4">
                                <p className="font-semibold text-sm text-muted-foreground mb-2">Additional Notes</p>
                                <p className="text-sm">{currentOrder.additionalNotes || 'No additional notes'}</p>
                            </div>


                            {currentOrder.pdf_url && (
                                <div className="border-t pt-4">
                                    <p className="font-semibold text-sm text-muted-foreground mb-2">PDF Order</p>
                                    <Button variant="outline" size="sm" asChild>
                                        <a href={currentOrder.pdf_url} target="_blank" rel="noopener noreferrer">
                                            <FileText className="w-4 h-4 mr-2" />
                                            Download PDF
                                        </a>
                                    </Button>
                                </div>
                            )}


                            <div className="border-t pt-4">
                                <p className="font-semibold mb-2">Selected Items ({currentOrder.selectedItems.length})</p>
                                <div className="space-y-3">
                                    {currentOrder.selectedItems.map((item, index) => (
                                        <div key={index} className="border rounded-lg p-3 text-sm">
                                            <p className="font-semibold mb-2">Item #{index + 1}</p>
                                            <div className="grid grid-cols-2 gap-2 text-xs">
                                                <div><span className="text-muted-foreground">Collection Date:</span> {item.collection_date}</div>
                                                <div><span className="text-muted-foreground">Resolution:</span> {item.resolution}</div>
                                                <div><span className="text-muted-foreground">Satellite:</span> {item.collection_vehicle_short}</div>
                                                <div><span className="text-muted-foreground">Cloud Cover:</span> {item.cloud_cover_percent}%</div>
                                                <div><span className="text-muted-foreground">Coverage:</span> {item.coverage?.toFixed(2)} km²</div>
                                                <div><span className="text-muted-foreground">Object ID:</span> {item.objectid}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                    <DialogFooter>
                        <Button className="bg-[#f16363] hover:bg-[#f16363] text-white" variant="default" onClick={() => setOpenView(false)}>Tutup</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}

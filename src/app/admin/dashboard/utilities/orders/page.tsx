// src/app/admin/dashboard/utilities/orders/page.tsx

'use client';

import React, { useState, useEffect } from 'react';
import {
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Snackbar,
  Alert,
  CircularProgress,
  TablePagination,
  Chip,
  Grid,
  Button,
  ButtonGroup
} from '@mui/material';
import PageContainer from '@/app/admin/dashboard/components/container/PageContainer';
import DashboardCard from '@/app/admin/dashboard/components/shared/DashboardCard';
import BlankCard from '@/app/admin/dashboard/components/shared/BlankCard';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import MyLocationIcon from '@mui/icons-material/MyLocation';


interface UserData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  id?: string;
  image?: string;
}

interface SelectedItem {
  collection_date: string;
  offnadir: string | string[];
  resolution: string;
  collection_vehicle_short: string;
  cloud_cover_percent: string | number;
  coverage: number;
  api: string;
  objectid: string;
  order_id: string;
  [key: string]: any;
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
  company?: string;
  phone?: string;
  pdf_url?: string;
  orderConfigURL?: string;
}

interface SnackbarState {
  open: boolean;
  message: string;
  severity: 'success' | 'error' | 'info' | 'warning';
}

const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [openViewDialog, setOpenViewDialog] = useState(false);
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: '',
    severity: 'success'
  });

  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Sort state
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc'); // default terbaru dulu

  // Fetch orders dari API
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await fetch('/api/orders');

      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }

      const result = await response.json();

      if (result.success) {
        setOrders(result.data);
        setTotalCount(result.count);
      } else {
        throw new Error(result.message || 'Failed to load orders');
      }

    } catch (error) {
      console.error('Error fetching orders:', error);
      showSnackbar('Failed to load orders', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleOpenViewDialog = (order: Order): void => {
    setCurrentOrder(order);
    setOpenViewDialog(true);
  };

  const handleCloseViewDialog = (): void => {
    setOpenViewDialog(false);
  };

  const showSnackbar = (
    message: string,
    severity: 'success' | 'error' | 'info' | 'warning' = 'success'
  ): void => {
    setSnackbar({
      open: true,
      message,
      severity
    });
  };

  const handleCloseSnackbar = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ): void => {
    if (reason === 'clickaway') return;
    setSnackbar({ ...snackbar, open: false });
  };

  const handleChangePage = (_event: unknown, newPage: number): void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Fungsi untuk toggle sort order
  const handleSortByDate = (): void => {
    const newSortOrder = sortOrder === 'desc' ? 'asc' : 'desc';
    setSortOrder(newSortOrder);

    const sortedOrders = [...orders].sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();

      return newSortOrder === 'desc' ? dateB - dateA : dateA - dateB;
    });

    setOrders(sortedOrders);
    setPage(0); // Reset ke halaman pertama setelah sort
  };

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      return date.toLocaleString('id-ID', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return dateString;
    }
  };

  const getStatusColor = (status: string): "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning" => {
    // Tambahkan null/undefined check
    if (!status) {
      return 'default';
    }

    switch (status.toLowerCase()) {
      case 'submitted':
        return 'info';
      case 'processing':
        return 'warning';
      case 'completed':
        return 'success';
      case 'cancelled':
        return 'error';
      default:
        return 'default';
    }
  };


  // Data yang ditampilkan di halaman saat ini
  const displayedOrders = orders.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const transformConfigUrl = (s3Url: string | undefined): string | null => {
    if (!s3Url) return null;

    // Extract filename dari s3://thumbnailsasset/order_configs/order_config_muhammadsafii-1763446189.json
    const match = s3Url.match(/order_config_[^/]+\.json$/);
    if (!match) return null;

    // Remove .json extension
    const filename = match[0].replace('.json', '');

    return `https://explorer.ruangbumi.com/?savedconfig=${filename}`;
  };


  return (
    <PageContainer title="Orders Management" description="Manage all orders">
      <DashboardCard title="Orders Management">
        <>
          <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">
              Total Orders: {totalCount}
            </Typography>

            <Button
              variant="outlined"
              startIcon={sortOrder === 'desc' ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
              onClick={handleSortByDate}
            >
              Sort by Date ({sortOrder === 'desc' ? 'Terbaru' : 'Terlama'})
            </Button>
          </Box>

          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
              <CircularProgress />
            </Box>
          ) : (
            <>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Order ID</TableCell>
                      <TableCell align="center">Customer</TableCell>
                      <TableCell align="center">Email</TableCell>
                      <TableCell align="center">Status</TableCell>
                      <TableCell align="center">Estimated Price</TableCell>
                      <TableCell align="center">Created At</TableCell>
                      <TableCell align="center">PDF Order</TableCell>
                      <TableCell align="center">Preview Imagery</TableCell>
                      <TableCell align="center">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {displayedOrders.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={7} align="center">
                          No orders found.
                        </TableCell>
                      </TableRow>
                    ) : (
                      displayedOrders.map((order) => (
                        <TableRow key={order.orderId}>
                          <TableCell align="center">{order.orderId.substring(0, 20)}...</TableCell>
                          <TableCell align="center">{order.userData.name}</TableCell>
                          <TableCell align="center">
                            <Typography
                              component="a"
                              href={`mailto:${order.userData.email}`}
                              variant="body2"
                              sx={{
                                color: 'primary.main',
                                textDecoration: 'none',
                                cursor: 'pointer',
                                '&:hover': {
                                  textDecoration: 'underline',
                                },
                              }}
                            >
                              {order.userData.email}
                            </Typography>
                          </TableCell>
                          <TableCell align="center">
                            <Chip
                              label={order.status}
                              color={getStatusColor(order.status)}
                              size="small"
                            />
                          </TableCell>
                          <TableCell align="center">{formatPrice(order.estimatedPrice)}</TableCell>
                          <TableCell align="center">{formatDate(order.createdAt)}</TableCell>
                          {/* PDF Order Column */}
                          <TableCell align="center">
                            {order.pdf_url ? (
                              <IconButton
                                component="a"
                                href={order.pdf_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                size="small"
                                color="error"
                              >
                                <PictureAsPdfIcon />
                              </IconButton>
                            ) : (
                              <Typography variant="body2" color="text.secondary">-</Typography>
                            )}
                          </TableCell>

                          {/* Order Config URL Column */}
                          <TableCell align="center">
                            {transformConfigUrl(order.orderConfigURL) ? (
                              <IconButton
                                component="a"
                                href={transformConfigUrl(order.orderConfigURL)!}
                                target="_blank"
                                rel="noopener noreferrer"
                                size="small"
                                color="primary"
                              >
                                <MyLocationIcon />
                              </IconButton>
                            ) : (
                              <Typography variant="body2" color="text.secondary">-</Typography>
                            )}
                          </TableCell>
                          <TableCell align="center">
                            <IconButton
                              onClick={() => handleOpenViewDialog(order)}
                              size="small"
                            >
                              <VisibilityIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </TableContainer>

              <TablePagination
                rowsPerPageOptions={[5, 10, 25, 50]}
                component="div"
                count={totalCount}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage="Rows per page:"
                labelDisplayedRows={({ from, to, count }) => `${from}-${to} dari ${count}`}
              />
            </>
          )}
        </>
      </DashboardCard>

      {/* View Order Dialog */}
      <Dialog
        open={openViewDialog}
        onClose={handleCloseViewDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Order Details</DialogTitle>
        <DialogContent>
          {currentOrder && (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="subtitle2">Order ID</Typography>
                <Typography variant="body1">{currentOrder.orderId}</Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="subtitle2">Config ID</Typography>
                <Typography variant="body1">{currentOrder.configID}</Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="subtitle2">Status</Typography>
                <Chip
                  label={currentOrder.status}
                  color={getStatusColor(currentOrder.status)}
                  size="small"
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6">Customer Information</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="subtitle2">Name</Typography>
                <Typography variant="body1">{currentOrder.userData.name}</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="subtitle2">Email</Typography>
                <Typography variant="body1">{currentOrder.userData.email}</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="subtitle2">Phone</Typography>
                <Typography variant="body1">
                  {currentOrder.userData.phone || currentOrder.phone || '-'}
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="subtitle2">Company</Typography>
                <Typography variant="body1">
                  {currentOrder.userData.company || currentOrder.company || '-'}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="subtitle2">Estimated Price</Typography>
                <Typography variant="body1">{formatPrice(currentOrder.estimatedPrice)}</Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="subtitle2">Processing Types</Typography>
                <Box sx={{ mt: 1 }}>
                  {currentOrder.processingTypes.map((type, index) => (
                    <Chip key={index} label={type} sx={{ mr: 1, mb: 1 }} />
                  ))}
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="subtitle2">Additional Notes</Typography>
                <Typography variant="body1">
                  {currentOrder.additionalNotes || 'No additional notes'}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="subtitle2">Created At</Typography>
                <Typography variant="body1">{formatDate(currentOrder.createdAt)}</Typography>
              </Grid>

              {currentOrder.pdf_url && (
                <Grid item xs={12}>
                  <Typography variant="subtitle2">PDF Order</Typography>
                  <Button
                    variant="outlined"
                    href={currentOrder.pdf_url}
                    target="_blank"
                    sx={{ mt: 1 }}
                  >
                    Download PDF
                  </Button>
                </Grid>
              )}

              <Grid item xs={12}>
                <Typography variant="h6">Selected Items</Typography>
                <Typography variant="body2">
                  Total: {currentOrder.selectedItems.length} item(s)
                </Typography>
              </Grid>

              {currentOrder.selectedItems.map((item, index) => (
                <Grid item xs={12} key={index}>
                  <BlankCard>
                    <Box sx={{ p: 2 }}>
                      <Typography variant="subtitle2" sx={{ mb: 1 }}>
                        Item #{index + 1}
                      </Typography>
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <Typography variant="caption" color="textSecondary">
                            Collection Date:
                          </Typography>
                          <Typography variant="body2">{item.collection_date}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="caption" color="textSecondary">
                            Resolution:
                          </Typography>
                          <Typography variant="body2">{item.resolution}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="caption" color="textSecondary">
                            Satellite:
                          </Typography>
                          <Typography variant="body2">
                            {item.collection_vehicle_short}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="caption" color="textSecondary">
                            Cloud Cover:
                          </Typography>
                          <Typography variant="body2">{item.cloud_cover_percent}%</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="caption" color="textSecondary">
                            Coverage:
                          </Typography>
                          <Typography variant="body2">
                            {item.coverage?.toFixed(2)} km²
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant="caption" color="textSecondary">
                            Object ID:
                          </Typography>
                          <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>
                            {item.objectid}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </BlankCard>
                </Grid>
              ))}
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseViewDialog}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar untuk notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </PageContainer>
  );
};

export default OrdersPage;

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
  Grid
} from '@mui/material';
import PageContainer from '@/app/admin/dashboard/components/container/PageContainer';
import DashboardCard from '@/app/admin/dashboard/components/shared/DashboardCard';
import BlankCard from '@/app/admin/dashboard/components/shared/BlankCard';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface UserData {
  name: string;
  email: string;
  phone: string;
  company: string;
}

interface SelectedItem {
  collection_date: string;
  offnadir: string;
  resolution: string;
  collection_vehicle_short: string;
  cloud_cover_percent: string;
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

  return (
    <PageContainer title="Orders" description="Manage orders">
      <DashboardCard title="Orders Management">
        <>
          <Box mb={2}>
            <Typography variant="body2" color="textSecondary">
              Total Orders: {totalCount}
            </Typography>
          </Box>
          <BlankCard>
            {loading ? (
              <Box display="flex" justifyContent="center" p={3}>
                <CircularProgress />
              </Box>
            ) : (
              <>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell><strong>Order ID</strong></TableCell>
                        <TableCell><strong>Customer</strong></TableCell>
                        <TableCell><strong>Email</strong></TableCell>
                        <TableCell><strong>Status</strong></TableCell>
                        <TableCell><strong>Estimated Price</strong></TableCell>
                        <TableCell><strong>Created At</strong></TableCell>
                        <TableCell align="center"><strong>Actions</strong></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {displayedOrders.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={7} align="center">
                            <Typography variant="body2" color="textSecondary" py={3}>
                              No orders found.
                            </Typography>
                          </TableCell>
                        </TableRow>
                      ) : (
                        displayedOrders.map((order) => (
                          <TableRow key={order.orderId} hover>
                            <TableCell>
                              <Typography variant="body2" fontWeight={500}>
                                {order.orderId.substring(0, 8)}...
                              </Typography>
                            </TableCell>
                            <TableCell>{order.userData.name}</TableCell>
                            <TableCell>{order.userData.email}</TableCell>
                            <TableCell>
                              <Chip 
                                label={order.status} 
                                color={getStatusColor(order.status)} 
                                size="small" 
                              />
                            </TableCell>
                            <TableCell>{formatPrice(order.estimatedPrice)}</TableCell>
                            <TableCell>{formatDate(order.createdAt)}</TableCell>
                            <TableCell align="center">
                              <IconButton
                                color="primary"
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
                  count={orders.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  labelRowsPerPage="Baris per halaman:"
                  labelDisplayedRows={({ from, to, count }) => 
                    `${from}-${to} dari ${count}`
                  }
                />
              </>
            )}
          </BlankCard>
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
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" color="textSecondary">
                    Order ID
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {currentOrder.orderId}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="textSecondary">
                    Config ID
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {currentOrder.configID}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="textSecondary">
                    Status
                  </Typography>
                  <Box mb={2}>
                    <Chip 
                      label={currentOrder.status} 
                      color={getStatusColor(currentOrder.status)} 
                    />
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="subtitle1" gutterBottom>
                    <strong>Customer Information</strong>
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="textSecondary">
                    Name
                  </Typography>
                  <Typography variant="body2">{currentOrder.userData.name}</Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="textSecondary">
                    Email
                  </Typography>
                  <Typography variant="body2">{currentOrder.userData.email}</Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="textSecondary">
                    Phone
                  </Typography>
                  <Typography variant="body2">{currentOrder.userData.phone}</Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="textSecondary">
                    Company
                  </Typography>
                  <Typography variant="body2">{currentOrder.userData.company}</Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="subtitle2" color="textSecondary">
                    Estimated Price
                  </Typography>
                  <Typography variant="h6" color="primary">
                    {formatPrice(currentOrder.estimatedPrice)}
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="subtitle2" color="textSecondary">
                    Processing Types
                  </Typography>
                  <Box mt={1}>
                    {currentOrder.processingTypes.map((type, index) => (
                      <Chip 
                        key={index} 
                        label={type} 
                        size="small" 
                        style={{ marginRight: 4, marginBottom: 4 }} 
                      />
                    ))}
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="subtitle2" color="textSecondary">
                    Additional Notes
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {currentOrder.additionalNotes || 'No additional notes'}
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="subtitle2" color="textSecondary">
                    Created At
                  </Typography>
                  <Typography variant="body2">
                    {formatDate(currentOrder.createdAt)}
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="subtitle1" gutterBottom mt={2}>
                    <strong>Selected Items</strong>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    Total: {currentOrder.selectedItems.length} item(s)
                  </Typography>
                  
                  {currentOrder.selectedItems.map((item, index) => (
                    <Paper key={index} elevation={1} sx={{ p: 2, mb: 2 }}>
                      <Typography variant="subtitle2" gutterBottom>
                        Item #{index + 1}
                      </Typography>
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <Typography variant="caption" color="textSecondary">
                            Collection Date:
                          </Typography>
                          <Typography variant="body2">
                            {item.collection_date}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="caption" color="textSecondary">
                            Resolution:
                          </Typography>
                          <Typography variant="body2">
                            {item.resolution}
                          </Typography>
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
                          <Typography variant="body2">
                            {item.cloud_cover_percent}%
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="caption" color="textSecondary">
                            Coverage:
                          </Typography>
                          <Typography variant="body2">
                            {item.coverage?.toFixed(2)} km²
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="caption" color="textSecondary">
                            Object ID:
                          </Typography>
                          <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>
                            {item.objectid}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  ))}
                </Grid>
              </Grid>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Box p={1}>
            <Typography 
              variant="button" 
              color="primary" 
              onClick={handleCloseViewDialog}
              style={{ cursor: 'pointer' }}
            >
              Close
            </Typography>
          </Box>
        </DialogActions>
      </Dialog>

      {/* Snackbar untuk notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
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

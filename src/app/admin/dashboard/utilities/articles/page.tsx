'use client';
import React, { useState, useEffect } from 'react';
import {
  Typography,
  Grid,
  Button,
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
  DialogContentText,
  DialogTitle,
  TextField,
  Box,
  Chip,
  Tabs,
  Tab,
  InputAdornment,
  Snackbar,
  Alert,
  CircularProgress
} from '@mui/material';
import PageContainer from '@/app/admin/dashboard/components/container/PageContainer';
import DashboardCard from '@/app/admin/dashboard/components/shared/DashboardCard';
import BlankCard from '@/app/admin/dashboard/components/shared/BlankCard';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ImageIcon from '@mui/icons-material/Image';
import LinkIcon from '@mui/icons-material/Link';

// Define interfaces for the types
interface Article {
  id: number;
  title: string;
  short_description: string;
  category: string;
  author: string;
  date_posted: string;
  content: string;
  images: string;
}

interface SnackbarState {
  open: boolean;
  message: string;
  severity: 'success' | 'error' | 'info' | 'warning';
}

const ArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [openViewDialog, setOpenViewDialog] = useState<boolean>(false);
  const [currentArticle, setCurrentArticle] = useState<Article>({
    id: 0,
    title: '',
    short_description: '',
    category: '',
    author: '',
    date_posted: '',
    content: '',
    images: '',
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: '',
    severity: 'success'
  });

  // Fetch articles from API
  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await fetch('/api/articles');
      if (!response.ok) {
        throw new Error('Failed to fetch articles');
      }
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error('Error fetching articles:', error);
      showSnackbar('Failed to load articles', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleOpenDialog = (article: Article | null, isEdit: boolean = false): void => {
    if (article) {
      setCurrentArticle(article);
    } else {
      setCurrentArticle({
        id: 0, // Backend will assign the actual ID
        title: '',
        short_description: '',
        category: '',
        author: '',
        date_posted: new Date().toISOString().split('T')[0], // Today's date as default
        content: '',
        images: '',
      });
    }
    setIsEditing(isEdit);
    setOpenDialog(true);
  };

  const handleCloseDialog = (): void => {
    setOpenDialog(false);
  };

  const handleOpenDeleteDialog = (article: Article): void => {
    setCurrentArticle(article);
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = (): void => {
    setOpenDeleteDialog(false);
  };

  const handleOpenViewDialog = (article: Article): void => {
    setCurrentArticle(article);
    setOpenViewDialog(true);
  };

  const handleCloseViewDialog = (): void => {
    setOpenViewDialog(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setCurrentArticle({ ...currentArticle, [name]: value });
  };

  const showSnackbar = (message: string, severity: 'success' | 'error' | 'info' | 'warning' = 'success'): void => {
    setSnackbar({
      open: true,
      message,
      severity
    });
  };

  const handleCloseSnackbar = (_event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') return;
    setSnackbar({ ...snackbar, open: false });
  };

  // Create or update article
  const handleSaveArticle = async (): Promise<void> => {
    try {
      const method = isEditing ? 'PUT' : 'POST';
      const url = isEditing ? `/api/articles/${currentArticle.id}` : '/api/articles';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentArticle),
      });

      if (!response.ok) {
        throw new Error(`Failed to ${isEditing ? 'update' : 'create'} article`);
      }

      // Refresh articles list
      await fetchArticles();
      
      handleCloseDialog();
      showSnackbar(`Article ${isEditing ? 'updated' : 'created'} successfully`);
    } catch (error) {
      console.error('Error saving article:', error);
      showSnackbar(`Failed to ${isEditing ? 'update' : 'create'} article`, 'error');
    }
  };

  // Delete article
  const handleDeleteArticle = async (): Promise<void> => {
    try {
      const response = await fetch(`/api/articles/${currentArticle.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete article');
      }

      // Refresh articles list
      await fetchArticles();
      
      handleCloseDeleteDialog();
      showSnackbar('Article deleted successfully');
    } catch (error) {
      console.error('Error deleting article:', error);
      showSnackbar('Failed to delete article', 'error');
    }
  };

  const getCategoryColor = (category: string): "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning" => {
    const categoryColors: Record<string, "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning"> = {
      'Frontend': 'primary',
      'Backend': 'secondary',
      'Design': 'success',
      'DevOps': 'warning',
      'Mobile': 'info'
    };
    
    return categoryColors[category] || 'default';
  };

  return (
    <PageContainer title="Articles Management" description="Manage your blog articles">
      <DashboardCard title="Blog Articles">
        <Grid container spacing={3}>
          <Grid item xs={12} display="flex" justifyContent="flex-end" mb={2}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={() => handleOpenDialog(null, false)}
            >
              Add New Article
            </Button>
          </Grid>
          <Grid item xs={12}>
            <BlankCard>
              {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
                  <CircularProgress />
                </Box>
              ) : (
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="articles table">
                    <TableHead>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Author</TableCell>
                        <TableCell>Date Posted</TableCell>
                        <TableCell align="center">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {articles.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={7} align="center">
                            No articles found. Create your first article!
                          </TableCell>
                        </TableRow>
                      ) : (
                        articles.map((article) => (
                          <TableRow key={article.id}>
                            <TableCell>{article.id}</TableCell>
                            <TableCell>
                              {article.images ? (
                                <Box
                                  component="img"
                                  src={article.images}
                                  alt={article.title}
                                  sx={{
                                    width: 60,
                                    height: 40,
                                    objectFit: 'cover',
                                    borderRadius: 1,
                                  }}
                                />
                              ) : (
                                <Box
                                  sx={{
                                    width: 60,
                                    height: 40,
                                    bgcolor: 'grey.200',
                                    borderRadius: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  }}
                                >
                                  <Typography variant="caption" color="text.secondary">
                                    No image
                                  </Typography>
                                </Box>
                              )}
                            </TableCell>
                            <TableCell>{article.title}</TableCell>
                            <TableCell>
                              <Chip 
                                label={article.category} 
                                color={getCategoryColor(article.category)}
                                size="small"
                              />
                            </TableCell>
                            <TableCell>{article.author}</TableCell>
                            <TableCell>{new Date(article.date_posted).toLocaleDateString()}</TableCell>
                            <TableCell align="center">
                              <IconButton
                                color="info"
                                aria-label="view"
                                onClick={() => handleOpenViewDialog(article)}
                              >
                                <VisibilityIcon />
                              </IconButton>
                              <IconButton
                                color="primary"
                                aria-label="edit"
                                onClick={() => handleOpenDialog(article, true)}
                              >
                                <EditIcon />
                              </IconButton>
                              <IconButton
                                color="error"
                                aria-label="delete"
                                onClick={() => handleOpenDeleteDialog(article)}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </BlankCard>
          </Grid>
        </Grid>
      </DashboardCard>

      {/* Article Form Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>{isEditing ? 'Edit Article' : 'Add New Article'}</DialogTitle>
        <DialogContent>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
            <Tabs value={0}>
              <Tab label="Article Information" />
            </Tabs>
          </Box>
          
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Article Title"
                name="title"
                value={currentArticle.title}
                onChange={handleInputChange}
                placeholder="Enter a compelling title for your article"
                required
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Short Description"
                name="short_description"
                value={currentArticle.short_description}
                onChange={handleInputChange}
                placeholder="Write a brief description of your article (appears in previews)"
                multiline
                rows={2}
                required
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Category"
                name="category"
                value={currentArticle.category}
                onChange={handleInputChange}
                placeholder="e.g. Technology, Business, Design"
                required
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Author"
                name="author"
                value={currentArticle.author}
                onChange={handleInputChange}
                required
              />
            </Grid>
            
            {/* Image Section */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                Article Image
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 120,
                    height: 80,
                    bgcolor: 'grey.100',
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px dashed grey.400',
                    overflow: 'hidden',
                  }}
                >
                  {currentArticle.images ? (
                    <Box 
                      component="img" 
                      src={currentArticle.images} 
                      alt="Featured" 
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  ) : (
                    <ImageIcon color="disabled" />
                  )}
                </Box>
                <TextField
                  fullWidth
                  label="Image URL"
                  name="images"
                  value={currentArticle.images}
                  onChange={handleInputChange}
                  placeholder="Enter URL of the article image"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LinkIcon fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button variant="outlined" component="label">
                  Upload
                  <input type="file" hidden accept="image/*" />
                </Button>
              </Box>
            </Grid>
            
            {/* Publication Details */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date Posted"
                name="date_posted"
                type="date"
                value={currentArticle.date_posted}
                onChange={handleInputChange}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            
            {/* Article Content */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                Article Content
              </Typography>
              <TextField
                fullWidth
                name="content"
                value={currentArticle.content}
                onChange={handleInputChange}
                multiline
                rows={10}
                placeholder="Write your article content here."
                required
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSaveArticle} variant="contained" color="primary">
            {isEditing ? 'Update Article' : 'Publish Article'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the article "{currentArticle.title}"? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
          <Button onClick={handleDeleteArticle} variant="contained" color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* View Article Dialog */}
      <Dialog open={openViewDialog} onClose={handleCloseViewDialog} maxWidth="md" fullWidth>
        <DialogTitle>Article Preview</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom color="primary">
                {currentArticle.title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
                  By {currentArticle.author} • {new Date(currentArticle.date_posted).toLocaleDateString()}
                </Typography>
                <Chip
                  label={currentArticle.category}
                  color={getCategoryColor(currentArticle.category)}
                  size="small"
                />
              </Box>
            </Grid>
            
            {currentArticle.images && (
              <Grid item xs={12}>
                <Box
                  component="img"
                  src={currentArticle.images}
                  alt={currentArticle.title}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: 300,
                    objectFit: 'cover',
                    borderRadius: 1,
                    mb: 2
                  }}
                />
              </Grid>
            )}
            
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                Short Description
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontStyle: 'italic' }}>
                {currentArticle.short_description}
              </Typography>
            </Grid>
            
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                Content
              </Typography>
              <Typography variant="body1" paragraph sx={{ whiteSpace: 'pre-line' }}>
                {currentArticle.content}
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseViewDialog}>Close</Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              handleCloseViewDialog();
              handleOpenDialog(currentArticle, true);
            }}
          >
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </PageContainer>
  );
};

export default ArticlesPage;
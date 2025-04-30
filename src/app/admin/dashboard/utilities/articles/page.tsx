'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
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

// Dynamically import React-Quill with SSR disabled
const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <CircularProgress size={24} />
});
import 'react-quill/dist/quill.snow.css';

// Define interfaces for the types
interface Article {
  id: number;
  title: string;
  description: string;
  author: string;
  date_published: string;
  content: string;
  image_cover: string;
  thumbnail_image_1?: string;
  thumbnail_image_2?: string;
  thumbnail_image_3?: string;
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
    description: '',
    author: '',
    date_published: '',
    content: '',
    image_cover: '',
    thumbnail_image_1: '',
    thumbnail_image_2: '',
    thumbnail_image_3: '',
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

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Article
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
  
    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', 'articles');
  
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
  
      const data = await res.json();
      setCurrentArticle((prev) => ({
        ...prev,
        [field]: data.url,
      }));
    } catch (err) {
      console.error('Upload error', err);
      showSnackbar('Upload failed', 'error');
    }
  };
  
  const handleOpenDialog = (article: Article | null, isEdit: boolean = false): void => {
    if (article) {
      setCurrentArticle(article);
    } else {
      setCurrentArticle({
        id: 0, // Backend will assign the actual ID
        title: '',
        description: '',
        author: '',
        date_published: new Date().toISOString().split('T')[0], // Today's date as default
        content: '',
        image_cover: '',
        thumbnail_image_1: '',
        thumbnail_image_2: '',
        thumbnail_image_3: '',
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

  // Handle rich editor content change
  const handleEditorChange = (content: string): void => {
    setCurrentArticle({ ...currentArticle, content });
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
      console.log("Saving article:", currentArticle);
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

  // Configure Quill editor toolbar options
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ align: [] }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'align',
    'link', 'image'
  ];

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
                        <TableCell>Cover Image</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Author</TableCell>
                        <TableCell>Date Published</TableCell>
                        <TableCell align="center">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {articles.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} align="center">
                            No articles found. Create your first article!
                          </TableCell>
                        </TableRow>
                      ) : (
                        articles.map((article) => (
                          <TableRow key={article.id}>
                            <TableCell>{article.id}</TableCell>
                            <TableCell>
                              {article.image_cover ? (
                                <Box
                                  component="img"
                                  src={article.image_cover}
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
                            <TableCell>{article.author}</TableCell>
                            <TableCell>{new Date(article.date_published).toLocaleDateString()}</TableCell>
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
          
          <Grid container spacing={2} mt={1}>
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
                label="Description"
                name="description"
                value={currentArticle.description}
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
                label="Author"
                name="author"
                value={currentArticle.author}
                onChange={handleInputChange}
                required
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date Published"
                name="date_published"
                type="date"
                value={currentArticle.date_published}
                onChange={handleInputChange}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            
            {/* Cover Image Section */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                Cover Image
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
                  {currentArticle.image_cover ? (
                    <Box 
                      component="img" 
                      src={currentArticle.image_cover} 
                      alt="Cover" 
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  ) : (
                    <ImageIcon color="disabled" />
                  )}
                </Box>
                <TextField
                  fullWidth
                  label="Cover Image URL"
                  name="image_cover"
                  value={currentArticle.image_cover}
                  onChange={handleInputChange}
                  placeholder="Enter URL of the article cover image"
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
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, 'image_cover')}
                  />
                </Button>
              </Box>
            </Grid>
            
            {/* Thumbnail Images Section */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                Thumbnail Images
              </Typography>
              
              {/* Thumbnail Image 1 */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
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
                  {currentArticle.thumbnail_image_1 ? (
                    <Box 
                      component="img" 
                      src={currentArticle.thumbnail_image_1} 
                      alt="Thumbnail 1" 
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  ) : (
                    <ImageIcon color="disabled" />
                  )}
                </Box>
                <TextField
                  fullWidth
                  label="Thumbnail Image 1 URL"
                  name="thumbnail_image_1"
                  value={currentArticle.thumbnail_image_1}
                  onChange={handleInputChange}
                  placeholder="Enter URL of thumbnail image 1"
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
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, 'thumbnail_image_1')}
                  />
                </Button>
              </Box>
              
              {/* Thumbnail Image 2 */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
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
                  {currentArticle.thumbnail_image_2 ? (
                    <Box 
                      component="img" 
                      src={currentArticle.thumbnail_image_2} 
                      alt="Thumbnail 2" 
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  ) : (
                    <ImageIcon color="disabled" />
                  )}
                </Box>
                <TextField
                  fullWidth
                  label="Thumbnail Image 2 URL"
                  name="thumbnail_image_2"
                  value={currentArticle.thumbnail_image_2}
                  onChange={handleInputChange}
                  placeholder="Enter URL of thumbnail image 2"
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
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, 'thumbnail_image_2')}
                  />
                </Button>
              </Box>
              
              {/* Thumbnail Image 3 */}
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
                  {currentArticle.thumbnail_image_3 ? (
                    <Box 
                      component="img" 
                      src={currentArticle.thumbnail_image_3} 
                      alt="Thumbnail 3" 
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  ) : (
                    <ImageIcon color="disabled" />
                  )}
                </Box>
                <TextField
                  fullWidth
                  label="Thumbnail Image 3 URL"
                  name="thumbnail_image_3"
                  value={currentArticle.thumbnail_image_3}
                  onChange={handleInputChange}
                  placeholder="Enter URL of thumbnail image 3"
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
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, 'thumbnail_image_3')}
                  />
                </Button>
              </Box>
            </Grid>
            
            {/* Article Content - Rich Text Editor */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                Article Content
              </Typography>
              <Box sx={{ border: '1px solid #ddd', borderRadius: 1, mb: 2 }}>
                <ReactQuill
                  value={currentArticle.content}
                  onChange={handleEditorChange}
                  modules={modules}
                  formats={formats}
                  style={{ height: 300 }}
                  placeholder="Write your article content here..."
                />
              </Box>
              {/* <Typography variant="caption" color="text.secondary">
                Use the toolbar above to format your content. You can add headings, lists, links, images, and more.
              </Typography> */}
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
                <Typography variant="body2" color="text.secondary">
                  By {currentArticle.author} • {new Date(currentArticle.date_published).toLocaleDateString()}
                </Typography>
              </Box>
            </Grid>
            
            {currentArticle.image_cover && (
              <Grid item xs={12}>
                <Box
                  component="img"
                  src={currentArticle.image_cover}
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
                Description
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontStyle: 'italic' }}>
                {currentArticle.description}
              </Typography>
            </Grid>
            
            {/* Thumbnail Images */}
            {(currentArticle.thumbnail_image_1 || currentArticle.thumbnail_image_2 || currentArticle.thumbnail_image_3) && (
              <Grid item xs={12}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Article Images
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  {currentArticle.thumbnail_image_1 && (
                    <Box
                      component="img"
                      src={currentArticle.thumbnail_image_1}
                      alt="Thumbnail 1"
                      sx={{
                        width: 200,
                        height: 120,
                        objectFit: 'cover',
                        borderRadius: 1
                      }}
                    />
                  )}
                  {currentArticle.thumbnail_image_2 && (
                    <Box
                      component="img"
                      src={currentArticle.thumbnail_image_2}
                      alt="Thumbnail 2"
                      sx={{
                        width: 200,
                        height: 120,
                        objectFit: 'cover',
                        borderRadius: 1
                      }}
                    />
                  )}
                  {currentArticle.thumbnail_image_3 && (
                    <Box
                      component="img"
                      src={currentArticle.thumbnail_image_3}
                      alt="Thumbnail 3"
                      sx={{
                        width: 200,
                        height: 120,
                        objectFit: 'cover',
                        borderRadius: 1
                      }}
                    />
                  )}
                </Box>
              </Grid>
            )}
            
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                Content
              </Typography>
              {/* Render HTML content safely */}
              <Box 
                sx={{ 
                  '& img': { maxWidth: '100%', height: 'auto' },
                  '& a': { color: 'primary.main' },
                }}
                dangerouslySetInnerHTML={{ __html: currentArticle.content }} 
              />
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
    </PageContainer>
  );
};

export default ArticlesPage;
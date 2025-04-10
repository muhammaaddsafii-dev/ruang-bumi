'use client';
import React, { useState } from 'react';
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
  InputAdornment,
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

// Mock data untuk artikel dengan struktur yang sesuai
const initialArticles = [
  {
    id: 1,
    title: 'Getting Started with React',
    short_description: 'Learn the fundamentals of React and how to create your first React application in this beginner-friendly guide.',
    category: 'Frontend',
    author: 'John Doe',
    date_posted: '2025-03-15',
    content: 'React is a popular JavaScript library for building user interfaces. In this article, we will explore the basics of React and how to get started with your first React application.\n\nReact uses a component-based architecture that allows you to build reusable UI components. Each component has its own state and props, making it easy to manage and update your application.',
    images: '/images/react-basics.jpg',
  },
  {
    id: 2,
    title: 'Advanced CSS Techniques',
    short_description: 'Explore advanced CSS techniques including Grid, Flexbox, animations, and responsive design patterns.',
    category: 'Design',
    author: 'Jane Smith',
    date_posted: '2025-03-20',
    content: 'Take your CSS skills to the next level with these advanced techniques. We\'ll cover CSS Grid, Flexbox, animations, and more to help you create stunning web designs.\n\nModern CSS offers powerful features that were once only possible with JavaScript. Learn how to leverage these capabilities to create responsive and dynamic user interfaces.',
    images: '/images/advanced-css.jpg',
  },
  {
    id: 3,
    title: 'RESTful API Best Practices',
    short_description: 'Discover best practices for designing and implementing RESTful APIs that are scalable, secure, and maintainable.',
    category: 'Backend',
    author: 'Alex Johnson',
    date_posted: '2025-03-22',
    content: 'RESTful APIs are essential for modern web applications. This guide covers best practices for designing, implementing, and documenting RESTful APIs that are scalable and maintainable.\n\nLearn about resource naming conventions, HTTP methods, status codes, authentication strategies, and versioning approaches that will help you build robust APIs.',
    images: '/images/api-design.jpg',
  },
];

const ArticlesPage = () => {
  const [articles, setArticles] = useState(initialArticles);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openViewDialog, setOpenViewDialog] = useState(false);
  const [currentArticle, setCurrentArticle] = useState({
    id: 0,
    title: '',
    short_description: '',
    category: '',
    author: '',
    date_posted: '',
    content: '',
    images: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleOpenDialog = (article = null, isEdit = false) => {
    if (article) {
      setCurrentArticle(article);
    } else {
      setCurrentArticle({
        id: articles.length + 1, // Simple ID generation
        title: '',
        short_description: '',
        category: '',
        author: '',
        date_posted: new Date().toISOString().split('T')[0], // Default hari ini
        content: '',
        images: '',
      });
    }
    setIsEditing(isEdit);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenDeleteDialog = (article) => {
    setCurrentArticle(article);
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const handleOpenViewDialog = (article) => {
    setCurrentArticle(article);
    setOpenViewDialog(true);
  };

  const handleCloseViewDialog = () => {
    setOpenViewDialog(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentArticle({ ...currentArticle, [name]: value });
  };

  const handleSaveArticle = () => {
    if (isEditing) {
      // Update existing article
      setArticles(
        articles.map((article) =>
          article.id === currentArticle.id ? currentArticle : article
        )
      );
    } else {
      // Add new article
      setArticles([...articles, currentArticle]);
    }
    handleCloseDialog();
  };

  const handleDeleteArticle = () => {
    setArticles(articles.filter((article) => article.id !== currentArticle.id));
    handleCloseDeleteDialog();
  };

  const getCategoryColor = (category) => {
    const categoryColors = {
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
                    {articles.map((article) => (
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
                        <TableCell>{article.date_posted}</TableCell>
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
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </BlankCard>
          </Grid>
        </Grid>
      </DashboardCard>

      {/* Article Form Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>{isEditing ? 'Edit Article' : 'Add New Article'}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Article Title"
                name="title"
                value={currentArticle.title}
                onChange={handleInputChange}
                placeholder="Enter a compelling title for your article"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Short Description"
                name="short_description"
                multiline
                rows={2}
                value={currentArticle.short_description}
                onChange={handleInputChange}
                placeholder="Write a brief description of your article that will appear in previews"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Category"
                name="category"
                value={currentArticle.category}
                onChange={handleInputChange}
                placeholder="e.g. Frontend, Backend, Design"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Author"
                name="author"
                value={currentArticle.author}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date Posted"
                name="date_posted"
                type="date"
                value={currentArticle.date_posted}
                onChange={handleInputChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
              {currentArticle.images && (
                <Box 
                  sx={{ 
                    mt: 1, 
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Box
                    component="img"
                    src={currentArticle.images}
                    alt="Preview"
                    sx={{
                      width: 100,
                      height: 60,
                      objectFit: 'cover',
                      borderRadius: 1,
                      mr: 2
                    }}
                  />
                  <Typography variant="caption" color="text.secondary">
                    Image Preview
                  </Typography>
                </Box>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Content"
                name="content"
                multiline
                rows={8}
                value={currentArticle.content}
                onChange={handleInputChange}
                placeholder="Write your article content here"
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
                  By {currentArticle.author} • {currentArticle.date_posted}
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
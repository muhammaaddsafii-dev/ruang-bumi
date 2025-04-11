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
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Snackbar,
  Alert,
  CircularProgress,
  SelectChangeEvent
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

// Define the project type
interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  client: string;
  status: 'Completed' | 'In Progress' | 'On Hold' | 'Planned';
  start_date: string;
  end_date: string;
  thumbnail: string;
  technologies: string;
}

// Define snackbar state type
interface SnackbarState {
  open: boolean;
  message: string;
  severity: 'success' | 'error' | 'info' | 'warning';
}

// Define event type for synthetic events
interface CustomEvent {
  event: React.SyntheticEvent;
  reason: string;
}

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [openViewDialog, setOpenViewDialog] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState<Project>({
    id: 0,
    title: '',
    description: '',
    category: '',
    client: '',
    status: 'In Progress',
    start_date: '',
    end_date: '',
    thumbnail: '',
    technologies: ''
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: '',
    severity: 'success'
  });

  // Fetch projects from API
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await fetch('/api/projects');
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
      showSnackbar('Failed to load projects', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleOpenDialog = (project: Project | null = null, isEdit: boolean = false): void => {
    if (project) {
      setCurrentProject(project);
    } else {
      setCurrentProject({
        id: 0, // Backend will assign the actual ID
        title: '',
        description: '',
        category: '',
        client: '',
        status: 'In Progress',
        start_date: new Date().toISOString().split('T')[0], // Today's date as default
        end_date: '',
        thumbnail: '',
        technologies: ''
      });
    }
    setIsEditing(isEdit);
    setOpenDialog(true);
  };

  const handleCloseDialog = (): void => {
    setOpenDialog(false);
  };

  const handleOpenDeleteDialog = (project: Project): void => {
    setCurrentProject(project);
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = (): void => {
    setOpenDeleteDialog(false);
  };

  const handleOpenViewDialog = (project: Project): void => {
    setCurrentProject(project);
    setOpenViewDialog(true);
  };

  const handleCloseViewDialog = (): void => {
    setOpenViewDialog(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent): void => {
    const { name, value } = e.target;
    setCurrentProject({ ...currentProject, [name]: value });
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

  // Create or update project
  const handleSaveProject = async (): Promise<void> => {
    try {
      const method = isEditing ? 'PUT' : 'POST';
      const url = isEditing ? `/api/projects/${currentProject.id}` : '/api/projects';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentProject),
      });

      if (!response.ok) {
        throw new Error(`Failed to ${isEditing ? 'update' : 'create'} project`);
      }

      // Refresh projects list
      await fetchProjects();
      
      handleCloseDialog();
      showSnackbar(`Project ${isEditing ? 'updated' : 'created'} successfully`);
    } catch (error) {
      console.error('Error saving project:', error);
      showSnackbar(`Failed to ${isEditing ? 'update' : 'create'} project`, 'error');
    }
  };

  // Delete project
  const handleDeleteProject = async (): Promise<void> => {
    try {
      const response = await fetch(`/api/projects/${currentProject.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete project');
      }

      // Refresh projects list
      await fetchProjects();
      
      handleCloseDeleteDialog();
      showSnackbar('Project deleted successfully');
    } catch (error) {
      console.error('Error deleting project:', error);
      showSnackbar('Failed to delete project', 'error');
    }
  };

  const getStatusColor = (status: string): "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning" => {
    const statusColors: Record<string, "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning"> = {
      'Completed': 'success',
      'In Progress': 'warning',
      'On Hold': 'error',
      'Planned': 'info'
    };
    
    return statusColors[status] || 'default';
  };

  return (
    <PageContainer title="Projects Management" description="Manage your portfolio projects">
      <DashboardCard title="Portfolio Projects">
        <Grid container spacing={3}>
          <Grid item xs={12} display="flex" justifyContent="flex-end" mb={2}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={() => handleOpenDialog(null, false)}
            >
              Add New Project
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
                  <Table sx={{ minWidth: 650 }} aria-label="projects table">
                    <TableHead>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Thumbnail</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Client</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Timeline</TableCell>
                        <TableCell align="center">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {projects.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={8} align="center">
                            No projects found. Create your first project!
                          </TableCell>
                        </TableRow>
                      ) : (
                        projects.map((project) => (
                          <TableRow key={project.id}>
                            <TableCell>{project.id}</TableCell>
                            <TableCell>
                              {project.thumbnail ? (
                                <Box
                                  component="img"
                                  src={project.thumbnail}
                                  alt={project.title}
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
                            <TableCell>{project.title}</TableCell>
                            <TableCell>{project.client}</TableCell>
                            <TableCell>{project.category}</TableCell>
                            <TableCell>
                              <Chip 
                                label={project.status} 
                                color={getStatusColor(project.status)}
                                size="small"
                              />
                            </TableCell>
                            <TableCell>
                              {`${new Date(project.start_date).toLocaleDateString()} ${project.end_date ? ' - ' + new Date(project.end_date).toLocaleDateString() : ''}`}
                            </TableCell>
                            <TableCell align="center">
                              <IconButton
                                color="info"
                                aria-label="view"
                                onClick={() => handleOpenViewDialog(project)}
                              >
                                <VisibilityIcon />
                              </IconButton>
                              <IconButton
                                color="primary"
                                aria-label="edit"
                                onClick={() => handleOpenDialog(project, true)}
                              >
                                <EditIcon />
                              </IconButton>
                              <IconButton
                                color="error"
                                aria-label="delete"
                                onClick={() => handleOpenDeleteDialog(project)}
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

      {/* Project Form Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>{isEditing ? 'Edit Project' : 'Add New Project'}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Project Title"
                name="title"
                value={currentProject.title}
                onChange={handleInputChange}
                placeholder="Enter a title for your project"
                required
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={currentProject.description}
                onChange={handleInputChange}
                placeholder="Write a detailed description of the project"
                multiline
                rows={3}
                required
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Category"
                name="category"
                value={currentProject.category}
                onChange={handleInputChange}
                placeholder="e.g. Web Development, Mobile App, Design"
                required
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Client"
                name="client"
                value={currentProject.client}
                onChange={handleInputChange}
                placeholder="Client name or company"
                required
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Status</InputLabel>
                <Select
                  name="status"
                  value={currentProject.status}
                  label="Status"
                  onChange={handleInputChange}
                >
                  <MenuItem value="Planned">Planned</MenuItem>
                  <MenuItem value="In Progress">In Progress</MenuItem>
                  <MenuItem value="On Hold">On Hold</MenuItem>
                  <MenuItem value="Completed">Completed</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Technologies"
                name="technologies"
                value={currentProject.technologies}
                onChange={handleInputChange}
                placeholder="e.g. React, Node.js, PostgreSQL"
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Start Date"
                name="start_date"
                type="date"
                value={currentProject.start_date}
                onChange={handleInputChange}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="End Date (leave empty if ongoing)"
                name="end_date"
                type="date"
                value={currentProject.end_date || ''}
                onChange={handleInputChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            
            {/* Thumbnail Image Section */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                Project Thumbnail
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
                  {currentProject.thumbnail ? (
                    <Box 
                      component="img" 
                      src={currentProject.thumbnail} 
                      alt="Thumbnail" 
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  ) : (
                    <ImageIcon color="disabled" />
                  )}
                </Box>
                <TextField
                  fullWidth
                  label="Thumbnail URL"
                  name="thumbnail"
                  value={currentProject.thumbnail}
                  onChange={handleInputChange}
                  placeholder="Enter URL of the project thumbnail image"
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
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSaveProject} variant="contained" color="primary">
            {isEditing ? 'Update Project' : 'Save Project'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the project "{currentProject.title}"? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
          <Button onClick={handleDeleteProject} variant="contained" color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* View Project Dialog */}
      <Dialog open={openViewDialog} onClose={handleCloseViewDialog} maxWidth="md" fullWidth>
        <DialogTitle>Project Details</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom color="primary">
                {currentProject.title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
                  Client: {currentProject.client}
                </Typography>
                <Chip
                  label={currentProject.status}
                  color={getStatusColor(currentProject.status)}
                  size="small"
                  sx={{ mr: 1 }}
                />
                <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                  {`${new Date(currentProject.start_date).toLocaleDateString()} ${currentProject.end_date ? ' - ' + new Date(currentProject.end_date).toLocaleDateString() : ' - Present'}`}
                </Typography>
              </Box>
            </Grid>
            
            {currentProject.thumbnail && (
              <Grid item xs={12}>
                <Box
                  component="img"
                  src={currentProject.thumbnail}
                  alt={currentProject.title}
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
                Category
              </Typography>
              <Typography variant="body1" paragraph>
                {currentProject.category}
              </Typography>
            </Grid>
            
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                Description
              </Typography>
              <Typography variant="body1" paragraph sx={{ whiteSpace: 'pre-line' }}>
                {currentProject.description}
              </Typography>
            </Grid>
            
            {currentProject.technologies && (
              <Grid item xs={12}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Technologies Used
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {currentProject.technologies.split(',').map((tech, index) => (
                    <Chip key={index} label={tech.trim()} size="small" />
                  ))}
                </Box>
              </Grid>
            )}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseViewDialog}>Close</Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              handleCloseViewDialog();
              handleOpenDialog(currentProject, true);
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

export default ProjectsPage;
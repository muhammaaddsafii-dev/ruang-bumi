'use client';
import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Stack, 
  Skeleton,
  Box,
  Avatar ,
  Grid,
} from '@mui/material';
import { IconArticle, IconClipboardList } from '@tabler/icons-react';

interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: number | string;
  loading: boolean;
  color: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, title, value, loading, color }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar sx={{ bgcolor: `${color}.light`, color: `${color}.dark` }}>
            {icon}
          </Avatar>
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle2" color="textSecondary">
              {title}
            </Typography>
            {loading ? (
              <Skeleton variant="text" width={60} height={40} />
            ) : (
              <Typography variant="h4">{value}</Typography>
            )}
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export const StatsOverview = () => {
  const [articleCount, setArticleCount] = useState<number>(0);
  const [projectCount, setProjectCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        
        // Fetch article count
        const articlesResponse = await fetch('/api/articles/count');
        if (!articlesResponse.ok) throw new Error('Failed to fetch article count');
        const articlesData = await articlesResponse.json();
        
        // Fetch project count
        const projectsResponse = await fetch('/api/projects/count');
        if (!projectsResponse.ok) throw new Error('Failed to fetch project count');
        const projectsData = await projectsResponse.json();
        
        setArticleCount(articlesData.count);
        setProjectCount(projectsData.count);
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <StatsCard
          icon={<IconArticle size={24} />}
          title="Total Articles"
          value={articleCount}
          loading={loading}
          color="primary"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <StatsCard
          icon={<IconClipboardList size={24} />}
          title="Total Projects"
          value={projectCount}
          loading={loading}
          color="secondary"
        />
      </Grid>
    </Grid>
  );
};
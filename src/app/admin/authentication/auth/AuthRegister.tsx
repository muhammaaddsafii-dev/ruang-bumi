'use client';

import React, { useState } from 'react';
import { Box, Typography, Button, Alert } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../AuthContext';

import CustomTextField from '@/app/admin/dashboard/components/forms/theme-elements/CustomTextField';
import { Stack } from '@mui/system';

interface registerType {
    title?: string;
    subtitle?: JSX.Element | JSX.Element[];
    subtext?: JSX.Element | JSX.Element[];
}

const AuthRegister = ({ title, subtitle, subtext }: registerType) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { register, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate inputs
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('All fields are required');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    const success = await register(name, email, password);
    if (success) {
      router.push('/admin/dashboard');
    } else {
      setError('Registration failed. Username or email may already be in use.');
    }
  };

  return (
    <>
        {title ? (
            <Typography fontWeight="700" variant="h2" mb={1}>
                {title}
            </Typography>
        ) : null}

        {subtext}

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <Box>
              <Stack mb={3}>
                  <Typography 
                    variant="subtitle1"
                    fontWeight={600} 
                    component="label" 
                    htmlFor='name' 
                    mb="5px"
                  >
                    Name
                  </Typography>
                  <CustomTextField 
                    id="name" 
                    variant="outlined" 
                    fullWidth 
                    value={name}
                    // onChange={(e) => setName(e.target.value)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    required
                  />

                  <Typography 
                    variant="subtitle1"
                    fontWeight={600} 
                    component="label" 
                    htmlFor='email' 
                    mb="5px" 
                    mt="25px"
                  >
                    Email Address
                  </Typography>
                  <CustomTextField 
                    id="email" 
                    variant="outlined" 
                    fullWidth 
                    value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    required
                  />

                  <Typography 
                    variant="subtitle1"
                    fontWeight={600} 
                    component="label" 
                    htmlFor='password' 
                    mb="5px" 
                    mt="25px"
                  >
                    Password
                  </Typography>
                  <CustomTextField 
                    id="password" 
                    type="password"
                    variant="outlined" 
                    fullWidth 
                    value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    required
                  />
              </Stack>
              <Button 
                color="primary" 
                variant="contained" 
                size="large" 
                fullWidth 
                type="submit"
                disabled={loading}
              >
                {loading ? 'Signing Up...' : 'Sign Up'}
              </Button>
          </Box>
        </form>
        {subtitle}
    </>
  );
}

export default AuthRegister;
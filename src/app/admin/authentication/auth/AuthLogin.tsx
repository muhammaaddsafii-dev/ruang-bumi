'use client';

import React, { useState } from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
  Alert,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useAuth } from '../AuthContext';

import CustomTextField from "@/app/admin/dashboard/components/forms/theme-elements/CustomTextField";

interface loginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rememberDevice, setRememberDevice] = useState(true);
  const router = useRouter();
  const { login, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate inputs
    if (!usernameOrEmail.trim() || !password.trim()) {
      setError('All fields are required');
      return;
    }

    const success = await login(usernameOrEmail, password);
    if (success) {
      router.push('/admin/dashboard');
    } else {
      setError('Invalid username/email or password');
    }
  };

  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h2" textAlign="center" mb={1}>
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
        <Stack>
          <Box>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="usernameOrEmail"
              mb="5px"
            >
              Username or Email
            </Typography>
            <CustomTextField 
              id="usernameOrEmail"
              variant="outlined" 
              fullWidth 
              value={usernameOrEmail}
              // onChange={(e) => setUsernameOrEmail(e.target.value)}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsernameOrEmail(e.target.value)}
              required
            />
          </Box>
          <Box mt="25px">
            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="password"
              mb="5px"
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
          </Box>
          <Stack
            justifyContent="space-between"
            direction="row"
            alignItems="center"
            my={2}
          >
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={rememberDevice} 
                    onChange={(e) => setRememberDevice(e.target.checked)} 
                  />
                }
                label="Remember this Device"
              />
            </FormGroup>
            <Typography
              component={Link}
              href="/admin/authentication/forgot-password"
              fontWeight="500"
              sx={{
                textDecoration: "none",
                color: "primary.main",
              }}
            >
              Forgot Password ?
            </Typography>
          </Stack>
        </Stack>
        <Box>
          <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            type="submit"
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>
        </Box>
      </form>
      {subtitle}
    </>
  );
}

export default AuthLogin;
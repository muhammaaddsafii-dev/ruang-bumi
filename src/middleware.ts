import { NextRequest, NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

// JWT secret should be in .env file
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Paths that require authentication
const PROTECTED_PATHS = ['/admin/dashboard'];

// Paths that are accessible only for non-authenticated users
const AUTH_PATHS = ['/admin/authentication/login', '/admin/authentication/register'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the path is protected
  const isProtectedPath = PROTECTED_PATHS.some(path => pathname.startsWith(path));
  const isAuthPath = AUTH_PATHS.some(path => pathname === path);
  
  // Get auth token from cookie
  const token = request.cookies.get('auth_token')?.value;
  
  // If path is protected and no token, redirect to login
  if (isProtectedPath && !token) {
    const url = new URL('/admin/authentication/login', request.url);
    url.searchParams.set('callbackUrl', encodeURI(pathname));
    return NextResponse.redirect(url);
  }
  
  // If auth path and has token, redirect to dashboard
  if (isAuthPath && token) {
    try {
      // Verify token
      verify(token, JWT_SECRET);
      
      // Redirect to dashboard if token is valid
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    } catch (error) {
      // If token verification fails, continue to auth pages
      return NextResponse.next();
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/dashboard/:path*',
    '/admin/authentication/login',
    '/admin/authentication/register'
  ],
};
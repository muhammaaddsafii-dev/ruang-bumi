//src/api/auth/me/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { query } from '@/lib/db';

// JWT secret should be in .env file
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    // Get auth token from cookie
    const token = cookies().get('auth_token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    // Verify token
    const decoded = verify(token, JWT_SECRET) as {
      id: string;
      email: string;
      username: string;
      role: string;
    };

    // Get user from database
    const result = await query('SELECT * FROM users WHERE id = $1', [decoded.id]);

    if (!result.rows || result.rows.length === 0) {
      cookies().delete('auth_token');
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Return user data (without password)
    const { password: _, ...userWithoutPassword } = result.rows[0];
    
    return NextResponse.json({ user: userWithoutPassword });
  } catch (error) {
    console.error('Authentication check error:', error);
    cookies().delete('auth_token');
    return NextResponse.json(
      { error: 'Not authenticated' },
      { status: 401 }
    );
  }
}
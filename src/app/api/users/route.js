// src/app/api/users/route.js
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

// GET all users
export async function GET() {
  try {
    const result = await query(
      'SELECT id, username, email, role, created_at FROM users ORDER BY created_at DESC'
    );
    return NextResponse.json(result.rows);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

// POST a new user
export async function POST(request) {
  try {
    const body = await request.json();
    const { 
      username, 
      email, 
      role
    } = body;

    const result = await query(
      `INSERT INTO users 
       (username, email, role) 
       VALUES ($1, $2, $3) 
       RETURNING id, username, email, role, created_at`,
      [username, email, role]
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
}

// PUT update a user
export async function PUT(request) {
  try {
    const body = await request.json();
    const { 
      id,
      username, 
      email, 
      role
    } = body;

    const result = await query(
      `UPDATE users 
       SET username = $1, email = $2, role = $3
       WHERE id = $4
       RETURNING id, username, email, role, created_at`,
      [username, email, role, id]
    );

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json(
      { error: 'Failed to update user' },
      { status: 500 }
    );
  }
}

// DELETE a user
export async function DELETE(request) {
  try {
    const { id } = await request.json();
    
    await query(
      'DELETE FROM users WHERE id = $1',
      [id]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.json(
      { error: 'Failed to delete user' },
      { status: 500 }
    );
  }
}
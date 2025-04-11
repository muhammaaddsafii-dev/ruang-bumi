// src/app/api/articles/route.js
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

// GET all articles
export async function GET() {
  try {
    const result = await query(
      'SELECT * FROM articles ORDER BY date_posted DESC'
    );
    return NextResponse.json(result.rows);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
}

// POST a new article
export async function POST(request) {
  try {
    const body = await request.json();
    const { title, short_description, category, author, content, images } = body;

    // Current date for date_posted if not provided
    const date_posted = body.date_posted || new Date().toISOString().split('T')[0];

    const result = await query(
      `INSERT INTO articles 
       (title, short_description, category, author, date_posted, content, images) 
       VALUES ($1, $2, $3, $4, $5, $6, $7) 
       RETURNING *`,
      [title, short_description, category, author, date_posted, content, images]
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json(
      { error: 'Failed to create article' },
      { status: 500 }
    );
  }
}
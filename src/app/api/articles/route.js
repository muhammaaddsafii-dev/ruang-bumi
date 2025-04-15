// src/app/api/articles/route.js
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

// GET all articles
export async function GET() {
  try {
    const result = await query(
      'SELECT * FROM articles ORDER BY date_published DESC'
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
    const { 
      title, 
      author, 
      description, 
      content,
      image_cover,
      thumbnail_image_1,
      thumbnail_image_2,
      thumbnail_image_3
    } = body;

    // Current date for date_published if not provided
    const date_published = body.date_published || new Date().toISOString().split('T')[0];

    const result = await query(
      `INSERT INTO articles 
       (title, author, description, content, image_cover, 
        thumbnail_image_1, thumbnail_image_2, thumbnail_image_3, date_published) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
       RETURNING *`,
      [
        title, 
        author, 
        description, 
        content, 
        image_cover, 
        thumbnail_image_1, 
        thumbnail_image_2, 
        thumbnail_image_3, 
        date_published
      ]
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
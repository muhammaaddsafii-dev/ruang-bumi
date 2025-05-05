// src/app/api/articles/route.js
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import slugify from 'slugify';

// GET all published articles
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
      category,
      status = 'draft'
    } = body;

    // Generate slug from title
    const slug = slugify(title, { lower: true, strict: true });
    
    // Current date for date_published if not provided
    const date_published = body.date_published || new Date().toISOString().split('T')[0];

    const result = await query(
      `INSERT INTO articles 
       (title, slug, author, description, content, image_cover, date_published, category, status) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
       RETURNING *`,
      [
        title, 
        slug,
        author, 
        description, 
        content, 
        image_cover, 
        date_published,
        category,
        status
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
// src/app/api/projects/route.js
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

// GET all projects
export async function GET() {
  try {
    const result = await query(
      'SELECT * FROM projects ORDER BY created_at DESC'
    );
    return NextResponse.json(result.rows);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

// POST a new project
export async function POST(request) {
  try {
    const body = await request.json();
    const { 
      title, 
      category, 
      content, 
      client, 
      image_cover,
      thumbnail_image,
      thumbnail_video
    } = body;

    // Current date for date_published if not provided
    const date_published = body.date_published || new Date().toISOString().split('T')[0];
    const created_at = new Date().toISOString();

    const result = await query(
      `INSERT INTO projects 
       (title, category, content, client, image_cover, thumbnail_image, 
        thumbnail_video, date_published, created_at) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
       RETURNING *`,
      [
        title, 
        category, 
        content, 
        client, 
        image_cover, 
        thumbnail_image, 
        thumbnail_video, 
        date_published, 
        created_at
      ]
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}
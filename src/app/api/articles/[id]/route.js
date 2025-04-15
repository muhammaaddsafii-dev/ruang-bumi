// src/app/api/articles/[id]/route.js
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

// GET a single article by ID
export async function GET(request, { params }) {
  try {
    const { id } = params;
    const result = await query('SELECT * FROM articles WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch article' },
      { status: 500 }
    );
  }
}

// UPDATE an article
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    const { 
      title, 
      author, 
      description, 
      content,
      image_cover,
      thumbnail_image_1,
      thumbnail_image_2,
      thumbnail_image_3,
      date_published
    } = body;
    
    const result = await query(
      `UPDATE articles 
       SET title = $1, author = $2, description = $3, content = $4,
           image_cover = $5, thumbnail_image_1 = $6, thumbnail_image_2 = $7, 
           thumbnail_image_3 = $8, date_published = $9
       WHERE id = $10
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
        date_published,
        id
      ]
    );
    
    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update article' },
      { status: 500 }
    );
  }
}

// DELETE an article
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const result = await query('DELETE FROM articles WHERE id = $1 RETURNING *', [id]);
    
    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: 'Article deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete article' },
      { status: 500 }
    );
  }
}
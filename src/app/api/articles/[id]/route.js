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
    const { title, short_description, category, author, date_posted, content, images } = body;
    
    const result = await query(
      `UPDATE articles 
       SET title = $1, short_description = $2, category = $3, 
           author = $4, date_posted = $5, content = $6, images = $7
       WHERE id = $8
       RETURNING *`,
      [title, short_description, category, author, date_posted, content, images, id]
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
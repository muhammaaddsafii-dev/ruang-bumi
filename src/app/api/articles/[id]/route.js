// src/app/api/articles/[id]/route.js
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import slugify from 'slugify';

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
      date_published,
      category,
      status
    } = body;
    
    // Generate slug from title
    const slug = slugify(title, { lower: true, strict: true });

    const result = await query(
      `UPDATE articles 
       SET title = $1, slug = $2, author = $3, description = $4, content = $5,
           image_cover = $6, date_published = $7, category = $8, status = $9
       WHERE id = $10
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
        status,
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
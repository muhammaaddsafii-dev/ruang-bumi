// src/app/api/articles/[id]/images/route.js
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

// GET all images for an article
export async function GET(request, { params }) {
  try {
    const { id } = params;
    const result = await query(
      'SELECT * FROM article_images WHERE article_id = $1 ORDER BY created_at DESC',
      [id]
    );
    
    return NextResponse.json({ data: result.rows });
  } catch (error) {
    console.error('Error fetching article images:', error);
    return NextResponse.json(
      { error: 'Failed to fetch article images' },
      { status: 500 }
    );
  }
}

// POST - Add new images to article
export async function POST(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    const { image_urls } = body; // Array of image URLs

    if (!Array.isArray(image_urls) || image_urls.length === 0) {
      return NextResponse.json(
        { error: 'image_urls must be a non-empty array' },
        { status: 400 }
      );
    }

    // Insert multiple images
    const insertPromises = image_urls.map(url =>
      query(
        'INSERT INTO article_images (article_id, image_url) VALUES ($1, $2) RETURNING *',
        [id, url]
      )
    );

    const results = await Promise.all(insertPromises);
    const insertedImages = results.map(result => result.rows[0]);

    return NextResponse.json({ 
      data: insertedImages,
      message: 'Images uploaded successfully' 
    }, { status: 201 });
  } catch (error) {
    console.error('Error adding article images:', error);
    return NextResponse.json(
      { error: 'Failed to add article images' },
      { status: 500 }
    );
  }
}

// DELETE - Remove an image
export async function DELETE(request, { params }) {
  try {
    const { searchParams } = new URL(request.url);
    const imageId = searchParams.get('image_id');

    if (!imageId) {
      return NextResponse.json(
        { error: 'image_id is required' },
        { status: 400 }
      );
    }

    const result = await query(
      'DELETE FROM article_images WHERE id = $1 RETURNING *',
      [imageId]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Image not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ 
      message: 'Image deleted successfully',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error deleting article image:', error);
    return NextResponse.json(
      { error: 'Failed to delete article image' },
      { status: 500 }
    );
  }
}

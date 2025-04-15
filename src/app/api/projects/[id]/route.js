// src/app/api/projects/[id]/route.js
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

// GET a single project by ID
export async function GET(request, { params }) {
  try {
    const { id } = params;
    const result = await query('SELECT * FROM projects WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch project' },
      { status: 500 }
    );
  }
}

// UPDATE a project
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    const { 
      title, 
      category, 
      content, 
      client,
      image_cover,
      thumbnail_image,
      thumbnail_video,
      date_published
    } = body;
    
    const result = await query(
      `UPDATE projects 
       SET title = $1, category = $2, content = $3, client = $4,
           image_cover = $5, thumbnail_image = $6, thumbnail_video = $7,
           date_published = $8
       WHERE id = $9
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
        id
      ]
    );
    
    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update project' },
      { status: 500 }
    );
  }
}

// DELETE a project
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const result = await query('DELETE FROM projects WHERE id = $1 RETURNING *', [id]);
    
    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: 'Project deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete project' },
      { status: 500 }
    );
  }
}
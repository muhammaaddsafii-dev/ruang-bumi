import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

// GET a single project by ID with all images
// export async function GET(request, { params }) {
//   try {
//     const { id } = params;
//     const projectResult = await query('SELECT * FROM projects WHERE id = $1', [id]);
    
//     if (projectResult.rows.length === 0) {
//       return NextResponse.json(
//         { error: 'Project not found' },
//         { status: 404 }
//       );
//     }
    
//     const imagesResult = await query('SELECT * FROM project_images WHERE project_id = $1', [id]);
    
//     const project = {
//       ...projectResult.rows[0],
//       thumbnail_images: imagesResult.rows.map(img => img.image_url)
//     };
    
//     return NextResponse.json(project);
//   } catch (error) {
//     return NextResponse.json(
//       { error: 'Failed to fetch project' },
//       { status: 500 }
//     );
//   }
// }

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const projectResult = await query('SELECT * FROM projects WHERE id = $1', [id]);
    
    if (projectResult.rows.length === 0) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }
    
    // Ambil semua image_url yang terkait dengan proyek ini
    const imagesResult = await query(
      'SELECT image_url FROM project_images WHERE project_id = $1', 
      [id]
    );
    
    const project = {
      ...projectResult.rows[0],
      thumbnail_images: imagesResult.rows.map(row => row.image_url) || []
    };
    
    return NextResponse.json(project);
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
      thumbnail_images,
      thumbnail_video,
      date_published,
      latitude,
      longitude
    } = body;
    
    const result = await query(
      `UPDATE projects 
       SET title = $1, category = $2, content = $3, client = $4,
           image_cover = $5, thumbnail_video = $6,
           date_published = $7, latitude = $8, longitude = $9
       WHERE id = $10
       RETURNING *`,
      [
        title, 
        category, 
        content, 
        client, 
        image_cover, 
        thumbnail_video, 
        date_published,
        latitude,
        longitude,
        id
      ]
    );
    
    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }
    
    // Update thumbnail images
    if (thumbnail_images) {
      // First delete existing images
      await query('DELETE FROM project_images WHERE project_id = $1', [id]);
      
      // Then insert new ones
      for (const imageUrl of thumbnail_images) {
        await query(
          'INSERT INTO project_images (project_id, image_url) VALUES ($1, $2)',
          [id, imageUrl]
        );
      }
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
    // Project images will be deleted automatically due to ON DELETE CASCADE
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
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

// GET all projects with image count
// export async function GET() {
//   try {
//     const result = await query(`
//       SELECT p.*, 
//         (SELECT COUNT(*) FROM project_images WHERE project_id = p.id) as image_count
//       FROM projects p
//       ORDER BY created_at DESC
//     `);
//     return NextResponse.json(result.rows);
//   } catch (error) {
//     return NextResponse.json(
//       { error: 'Failed to fetch projects' },
//       { status: 500 }
//     );
//   }
// }
export async function GET() {
  try {
    // Ambil semua proyek beserta jumlah gambar
    const result = await query(`
      SELECT p.*, 
        (SELECT array_agg(image_url) FROM project_images WHERE project_id = p.id) as thumbnail_images
      FROM projects p
      ORDER BY created_at DESC
    `);
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
      thumbnail_images,
      thumbnail_video,
      latitude,
      longitude
    } = body;

    const date_published = body.date_published || new Date().toISOString().split('T')[0];
    const created_at = new Date().toISOString();

    const result = await query(
      `INSERT INTO projects 
       (title, category, content, client, image_cover, thumbnail_video, 
        date_published, created_at, latitude, longitude) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) 
       RETURNING *`,
      [
        title, 
        category, 
        content, 
        client, 
        image_cover, 
        thumbnail_video, 
        date_published, 
        created_at,
        latitude,
        longitude
      ]
    );

    // Insert thumbnail images if provided
    if (thumbnail_images && thumbnail_images.length > 0) {
      for (const imageUrl of thumbnail_images) {
        await query(
          'INSERT INTO project_images (project_id, image_url) VALUES ($1, $2)',
          [result.rows[0].id, imageUrl]
        );
      }
    }

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}
// src/app/api/collections/[id]/route.js
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request, { params }) {
  try {
    const { id } = params;

    const result = await query(`
      SELECT 
        id,
        name,
        tahun,
        date,
        jenis,
        resolusi,
        project,
        ST_X(ST_Centroid(geom)) as longitude,
        ST_Y(ST_Centroid(geom)) as latitude,
        ST_AsGeoJSON(geom) as geometry
      FROM collections 
      WHERE id = $1
    `, [id]);

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Collection not found' },
        { status: 404 }
      );
    }

    const formattedResult = {
      ...result.rows[0],
      latitude: parseFloat(result.rows[0].latitude),
      longitude: parseFloat(result.rows[0].longitude),
      geometry: result.rows[0].geometry ? JSON.parse(result.rows[0].geometry) : null
    };

    return NextResponse.json(formattedResult);
  } catch (error) {
    console.error('Error fetching collection:', error);
    return NextResponse.json(
      { error: 'Failed to fetch collection' },
      { status: 500 }
    );
  }
}

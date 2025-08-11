// src/app/api/collections/geojson/route.js
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const result = await query(`
      SELECT 
        json_build_object(
          'type', 'FeatureCollection',
          'features', json_agg(
            json_build_object(
              'type', 'Feature',
              'id', id,
              'geometry', ST_AsGeoJSON(geom)::json,
              'properties', json_build_object(
                'id', id,
                'name', name,
                'tahun', tahun,
                'date', date,
                'jenis', jenis,
                'resolusi', resolusi,
                'project', project
              )
            )
          )
        ) as geojson
      FROM collections 
      WHERE geom IS NOT NULL
    `);

    return NextResponse.json(result.rows[0].geojson);
  } catch (error) {
    console.error('Error fetching GeoJSON:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GeoJSON' },
      { status: 500 }
    );
  }
}

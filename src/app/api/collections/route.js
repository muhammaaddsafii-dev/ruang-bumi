// src/app/api/collections/route.js
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

// GET all collections with geometry data
export async function GET() {
  try {
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
      WHERE geom IS NOT NULL
      ORDER BY date DESC
    `);

    // Format data untuk frontend
    const formattedResult = result.rows.map(row => ({
      ...row,
      latitude: parseFloat(row.latitude),
      longitude: parseFloat(row.longitude),
      geometry: row.geometry ? JSON.parse(row.geometry) : null
    }));

    return NextResponse.json(formattedResult);
  } catch (error) {
    console.error('Error fetching collections:', error);
    return NextResponse.json(
      { error: 'Failed to fetch collections' },
      { status: 500 }
    );
  }
}

// POST a new collection
export async function POST(request) {
  try {
    const body = await request.json();
    const { 
      name, 
      tahun, 
      date, 
      jenis, 
      resolusi, 
      project,
      latitude,
      longitude,
      geometry // GeoJSON geometry atau WKT string
    } = body;

    let geomValue;
    if (geometry) {
      // Jika geometry adalah GeoJSON object
      if (typeof geometry === 'object') {
        geomValue = `ST_GeomFromGeoJSON('${JSON.stringify(geometry)}')`;
      } 
      // Jika geometry adalah WKT string
      else if (typeof geometry === 'string') {
        geomValue = `ST_GeomFromText('${geometry}', 4326)`;
      }
    } 
    // Jika hanya ada latitude dan longitude, buat point
    else if (latitude && longitude) {
      geomValue = `ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)`;
    }

    const insertQuery = `
      INSERT INTO collections 
      (name, tahun, date, jenis, resolusi, project, geom) 
      VALUES ($1, $2, $3, $4, $5, $6, ${geomValue || 'NULL'}) 
      RETURNING id, name, tahun, date, jenis, resolusi, project,
                ST_X(ST_Centroid(geom)) as longitude,
                ST_Y(ST_Centroid(geom)) as latitude,
                ST_AsGeoJSON(geom) as geometry
    `;

    const values = [
      name, 
      tahun, 
      date || new Date().toISOString().split('T')[0], 
      jenis, 
      resolusi, 
      project
    ];

    const result = await query(insertQuery, values);

    // Format hasil
    const formattedResult = {
      ...result.rows[0],
      latitude: parseFloat(result.rows[0].latitude),
      longitude: parseFloat(result.rows[0].longitude),
      geometry: result.rows[0].geometry ? JSON.parse(result.rows[0].geometry) : null
    };

    return NextResponse.json(formattedResult, { status: 201 });
  } catch (error) {
    console.error('Error creating collection:', error);
    return NextResponse.json(
      { error: 'Failed to create collection' },
      { status: 500 }
    );
  }
}

// PUT update collection
export async function PUT(request) {
  try {
    const body = await request.json();
    const { 
      id,
      name, 
      tahun, 
      date, 
      jenis, 
      resolusi, 
      project,
      latitude,
      longitude,
      geometry
    } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'Collection ID is required' },
        { status: 400 }
      );
    }

    let geomValue;
    if (geometry) {
      if (typeof geometry === 'object') {
        geomValue = `ST_GeomFromGeoJSON('${JSON.stringify(geometry)}')`;
      } else if (typeof geometry === 'string') {
        geomValue = `ST_GeomFromText('${geometry}', 4326)`;
      }
    } else if (latitude && longitude) {
      geomValue = `ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)`;
    }

    const updateQuery = `
      UPDATE collections 
      SET name = $1, tahun = $2, date = $3, jenis = $4, 
          resolusi = $5, project = $6
          ${geomValue ? `, geom = ${geomValue}` : ''}
      WHERE id = $7
      RETURNING id, name, tahun, date, jenis, resolusi, project,
                ST_X(ST_Centroid(geom)) as longitude,
                ST_Y(ST_Centroid(geom)) as latitude,
                ST_AsGeoJSON(geom) as geometry
    `;

    const values = [name, tahun, date, jenis, resolusi, project, id];

    const result = await query(updateQuery, values);

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
    console.error('Error updating collection:', error);
    return NextResponse.json(
      { error: 'Failed to update collection' },
      { status: 500 }
    );
  }
}

// DELETE collection
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Collection ID is required' },
        { status: 400 }
      );
    }

    const result = await query(
      'DELETE FROM collections WHERE id = $1 RETURNING *',
      [id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Collection not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ 
      message: 'Collection deleted successfully',
      deleted: result.rows[0] 
    });
  } catch (error) {
    console.error('Error deleting collection:', error);
    return NextResponse.json(
      { error: 'Failed to delete collection' },
      { status: 500 }
    );
  }
}

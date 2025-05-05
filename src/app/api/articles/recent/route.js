// src/app/api/articles/recent/route.js

import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const result = await query(`
        SELECT id, title, image_cover, date_published, description
        FROM articles
        ORDER BY date_published DESC
        LIMIT 7
      `);      

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching recent articles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch recent articles' },
      { status: 500 }
    );
  }
}

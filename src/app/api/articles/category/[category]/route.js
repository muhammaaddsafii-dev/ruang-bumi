import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request, { params }) {
  try {
    const { category } = params;
    const result = await query(
      'SELECT * FROM articles WHERE category = $1 AND status = $2 ORDER BY date_published DESC',
      [category, 'published']
    );
    return NextResponse.json(result.rows);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch articles by category' },
      { status: 500 }
    );
  }
}
// src/app/api/articles/categories/route.js
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const result = await query(
      'SELECT DISTINCT category FROM articles WHERE category IS NOT NULL AND status = $1',
      ['published']
    );
    const categories = result.rows.map(row => row.category);
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}
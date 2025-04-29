// src/app/api/articles/count/route.js
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const result = await query('SELECT COUNT(*) FROM articles');
    return NextResponse.json({ count: Number(result.rows[0].count) });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to count articles' },
      { status: 500 }
    );
  }
}
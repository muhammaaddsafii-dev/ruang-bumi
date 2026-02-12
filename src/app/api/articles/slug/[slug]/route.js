import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request, context) {
    try {
        const params = await context.params;
        const slug = params.slug;

        console.log('API Slug Route - Received slug:', slug);

        if (!slug) {
            return NextResponse.json(
                { error: 'Slug parameter is required' },
                { status: 400 }
            );
        }

        const result = await query('SELECT * FROM articles WHERE slug = $1', [slug]);

        console.log('API Slug Route - Query executed, rows found:', result.rows.length);

        if (result.rows.length === 0) {
            console.log('API Slug Route - No article found with slug:', slug);
            return NextResponse.json(
                { error: 'Article not found' },
                { status: 404 }
            );
        }

        console.log('API Slug Route - Returning article:', result.rows[0].title);
        return NextResponse.json(result.rows[0]);

    } catch (error) {
        console.error('API Slug Route - Error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch article', details: error.message },
            { status: 500 }
        );
    }
}
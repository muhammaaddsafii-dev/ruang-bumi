// src/app/api/articles/route.js
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import slugify from 'slugify';

// GET all published articles
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const status = searchParams.get('status');
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 6; // Default 10 items per page

    let queryString = 'SELECT * FROM articles WHERE 1=1';
    const queryParams = [];

    if (status) {
      queryString += ` AND status = $${queryParams.length + 1}`;
      queryParams.push(status);
    }

    if (category) {
      queryString += ` AND category = $${queryParams.length + 1}`;
      queryParams.push(category);
    }

    // Hitung offset untuk pagination
    const offset = (page - 1) * limit;

    // Query untuk data
    queryString += ' ORDER BY id DESC';
    queryString += ` LIMIT $${queryParams.length + 1} OFFSET $${queryParams.length + 2}`;
    queryParams.push(limit, offset);

    // Query untuk total count
    let countQuery = 'SELECT COUNT(*) FROM articles WHERE 1=1';
    const countParams = [];

    if (status) {
      countQuery += ` AND status = $${countParams.length + 1}`;
      countParams.push(status);
    }

    if (category) {
      countQuery += ` AND category = $${countParams.length + 1}`;
      countParams.push(category);
    }

    const [result, countResult] = await Promise.all([
      query(queryString, queryParams),
      query(countQuery, countParams)
    ]);

    const total = parseInt(countResult.rows[0].count);
    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      data: result.rows,
      pagination: {
        currentPage: page,
        totalPages,
        totalItems: total,
        itemsPerPage: limit
      }
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
}

// POST a new article
export async function POST(request) {
  try {
    const body = await request.json();
    const {
      title,
      author,
      description,
      content,
      image_cover,
      category,
      status = 'draft'
    } = body;

    // Generate slug from title
    const slug = slugify(title, { lower: true, strict: true });

    // Current date for date_published if not provided
    const date_published = body.date_published || new Date().toISOString().split('T')[0];

    const result = await query(
      `INSERT INTO articles 
       (title, slug, author, description, content, image_cover, date_published, category, status) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
       RETURNING *`,
      [
        title,
        slug,
        author,
        description,
        content,
        image_cover,
        date_published,
        category,
        status
      ]
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json(
      { error: 'Failed to create article' },
      { status: 500 }
    );
  }
}

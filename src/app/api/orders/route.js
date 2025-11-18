// src/app/api/orders/route.js

import { NextResponse } from 'next/server';

// Tambahkan ini untuk memaksa route menjadi dynamic
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// GET all orders dari DynamoDB
export async function GET() {
  try {
    const response = await fetch(
      'https://gpj8t6ikq1.execute-api.ap-southeast-1.amazonaws.com/v1/all-orders',
      {
        cache: 'no-store', // Tambahkan ini
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch orders from DynamoDB');
    }

    const result = await response.json();
    
    // Response dari API berbentuk { "items": [...] }
    const orders = result.items || [];
    
    // Urutkan dari terbaru ke terlama berdasarkan createdAt
    orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return NextResponse.json({
      success: true,
      count: orders.length,
      data: orders
    }, {
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      }
    });

  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch orders',
        message: error.message
      },
      { status: 500 }
    );
  }
}

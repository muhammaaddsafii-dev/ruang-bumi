// src/app/api/orders/route.js

import { NextResponse } from 'next/server';

// GET all orders dari DynamoDB
export async function GET() {
  try {
    const response = await fetch(
      'https://wnpszo0122.execute-api.ap-southeast-1.amazonaws.com/default/getDynamoData'
    );

    if (!response.ok) {
      throw new Error('Failed to fetch orders from DynamoDB');
    }

    const result = await response.json();
    
    if (!result.success) {
      throw new Error('API returned unsuccessful response');
    }

    // Data sudah dalam format yang clean, tinggal sort saja
    const orders = result.data || [];

    // Urutkan dari terbaru ke terlama berdasarkan createdAt
    orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return NextResponse.json({
      success: true,
      count: orders.length,
      data: orders
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

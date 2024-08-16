// app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';

import Product from '@/lib/database/models/product.model';
import { connectToDatabase } from '@/lib/database';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, price, quantity, description, size, imageUrl } = body;

    // Validate that all required fields are provided
    if (!name || !price || !quantity || !description || !size || !imageUrl) {
      return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
    }

    // Connect to the database
    await connectToDatabase();

    // Create a new product document
    const newProduct = new Product({
      name,
      price,
      quantity,
      description,
      size,
      imageUrl,
    });

    // Save the product to the database
    await newProduct.save();

    return NextResponse.json({ success: true, data: newProduct }, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json({ success: false, message: 'Failed to create product' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const products = await Product.find({});
    return NextResponse.json({ success: true, data: products }, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch products' }, { status: 500 });
  }
}

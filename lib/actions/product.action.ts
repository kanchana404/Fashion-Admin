// lib/actions/product.action.ts
import axios from 'axios';

interface ProductData {
  name: string;
  price: number;
  quantity: number;
  description: string;
  size: string;
  imageUrl: string;
}

export async function createProduct(product: ProductData) {
  try {
    const response = await axios.post('/api/products', product);
    return response.data;
  } catch (error) {
    console.error('Failed to create product:', error);
    throw new Error('Product creation failed');
  }
}

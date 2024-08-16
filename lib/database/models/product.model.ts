// models/Product.ts
import mongoose, { Schema, model, models } from 'mongoose';

const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  description: { type: String, required: true },
  size: { type: String, required: true },
  imageUrl: { type: String, required: true },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

const Product = models.Product || model('Product', ProductSchema);

export default Product;

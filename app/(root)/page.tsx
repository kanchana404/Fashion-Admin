"use client";

import { useState } from "react";
import { UploadButton } from "@/utils/uploadthing"; // Adjust the import path to where UploadButton is defined
import { createProduct } from '@/lib/actions/product.action';
import Swal from 'sweetalert2';

export default function Home() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState<number | "">(""); 
  const [qty, setQty] = useState<number | "">(""); 
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("M");
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const handleUploadComplete = (res: { url: string }[]) => {
    if (res && res.length > 0) {
      const urls = res.map(file => file.url);
      setImageUrls(urls);
    }
  };

  const handleUploadError = (error: Error) => {
    Swal.fire({
      icon: 'error',
      title: 'Upload Failed',
      text: `ERROR! ${error.message}`,
    });
  };

  const handleSubmit = async () => {
    if (!productName || !price || !qty || !description || imageUrls.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Incomplete Form',
        text: 'Please fill in all fields and upload at least one image.',
      });
      return;
    }

    try {
      // After images are uploaded, proceed with creating the product
      const newProduct = {
        name: productName,
        price: Number(price),
        quantity: Number(qty),
        description,
        size,
        imageUrls,
      };

      await createProduct(newProduct);

      Swal.fire({
        icon: 'success',
        title: 'Product Created',
        text: 'Your product has been created successfully!',
      });

      // Reset the form after submission
      setProductName("");
      setPrice("");
      setQty("");
      setDescription("");
      setSize("M");
      setImageUrls([]);
    } catch (error) {
      console.error("Error creating product:", error);
      Swal.fire({
        icon: 'error',
        title: 'Product Creation Failed',
        text: 'There was an error creating the product.',
      });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6">Create a product</h1>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="productName">
            Product Name
          </label>
          <input
            id="productName"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter product name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value) || "")}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter price"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="qty">
            Quantity
          </label>
          <input
            id="qty"
            type="number"
            value={qty}
            onChange={(e) => setQty(parseInt(e.target.value) || "")}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter quantity"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter product description"
            rows={3}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="size">
            Size
          </label>
          <select
            id="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            aria-label="Select size"
          >
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">Extra Large</option>
            <option value="XXL">Double XL</option>
          </select>
        </div>

        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={handleUploadComplete}
          onUploadError={handleUploadError}
        />

        <button
          onClick={handleSubmit}
          className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit Product
        </button>
      </div>
    </main>
  );
}

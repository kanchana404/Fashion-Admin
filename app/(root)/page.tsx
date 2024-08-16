"use client";

import { UploadButton } from "@/utils/uploadthing";
import { useState } from "react";
import { createProduct } from '@/lib/actions/product.action';
import Swal from 'sweetalert2';

export default function Home() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState<number | "">(""); 
  const [qty, setQty] = useState<number | "">(""); 
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("M");
  const [imageUrls, setImageUrls] = useState<string[]>([]); // Changed to an array of strings

  const handleUploadComplete = (res: { url: string }[]) => {
    if (res && res.length > 0) {
      const urls = res.map(file => file.url);
      setImageUrls(prevUrls => [...prevUrls, ...urls]); // Append the new URLs to the array
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

    const newProduct = {
      name: productName,
      price: Number(price),
      quantity: Number(qty),
      description,
      size,
      imageUrls, // Use the array of image URLs
    };

    try {
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
        <h1 className="text-2xl font-bold mb-6">Upload Product</h1>

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
          </select>
        </div>

        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={handleUploadComplete}
          onUploadError={handleUploadError}
        />

        <div className="mt-4">
          <h3 className="text-gray-700 font-bold mb-2">Uploaded Images:</h3>
          <div className="flex flex-wrap gap-4">
            {imageUrls.map((url, index) => (
              <img key={index} src={url} alt={`Uploaded ${index + 1}`} className="w-24 h-24 object-cover rounded" />
            ))}
          </div>
        </div>

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

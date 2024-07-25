"use client";
import Navbar from "@/components/Navbar";
import Stock from "@/components/Stock";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React, { useRef, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AddProductPage: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [price, setPrice] = useState<string>("");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files).map((file) => {
        const reader = new FileReader();
        return new Promise<string>((resolve, reject) => {
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(file);
        });
      });

      Promise.all(fileArray).then((images) => {
        setSelectedImages((prevImages) => [...prevImages, ...images]);
      });
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const regex = /^\d*\.?\d*$/;
    if (regex.test(value)) {
      setPrice(value);
    }
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="md:w-full lg:w-4/6">
            <div className="flex flex-col lg:flex-row">
              <div className="p-6 w-full flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5">
                <Input className="w-full lg:w-2/3" placeholder="Product Name" />
                <div className="relative w-full lg:w-1/3">
                  <input
                    className="w-full pl-10 pr-2 py-2 border rounded"
                    type="text"
                    placeholder="Price"
                    value={price}
                    onChange={handlePriceChange}
                    pattern="^\d*\.?\d*$"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <Image
                      src="/dollar.png"
                      alt="logo"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <Textarea rows={8} placeholder="Description" />
            </div>
            <div className="w-full flex p-6 space-x-36">
              <div className=" w-1/2">
                <Stock />
              </div>

              <div className="w-1/2 ">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>{/* taginput */}</div>
          </div>
          <div className="p-6 w-full lg:w-2/6 flex justify-center items-center">
            <div className="border p-4 rounded-lg flex flex-col items-center h-auto">
              <Input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
                ref={fileInputRef}
              />
              <div className="flex flex-col items-center">
                <Image
                  className="mt-8"
                  src="/upload.svg"
                  alt="upload icon"
                  width={60}
                  height={60}
                />
                <Button
                  className="mt-4 bg-yellow-400 w-32"
                  onClick={triggerFileInput}
                >
                  Upload
                </Button>
              </div>
              {selectedImages.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-4">
                  {selectedImages.map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt={`Selected Image ${index + 1}`}
                      width={100}
                      height={100}
                      className="rounded"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProductPage;

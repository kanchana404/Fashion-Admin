import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <Navbar />

        <div className="md:w-4/6 w-full">
          <div className=" flex ">
            <div className="p-6 space-x-5 w-full  flex">
              <Input className="w-2/3" placeholder="Product Name" />
              <div className="relative w-1/3">
                <input
                  className="w-full pl-10 pr-2 py-2 border rounded"
                  type="text"
                  placeholder="Price"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <Image src="/dollar.png" alt="logo" width={20} height={20} />
                </div>
              </div>
            </div>
          </div>

          <div className=" p-6">
            <Textarea rows={8} />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

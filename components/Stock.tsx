import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { Input } from "./ui/input";
  import React, { useState } from "react";
  
  const Stock = () => {
    const [qty1, setQty1] = useState("");
    const [qty2, setQty2] = useState("");
    const [qty3, setQty3] = useState("");
    const [qty4, setQty4] = useState("");
  
    const handleQtyChange = (e: React.ChangeEvent<HTMLInputElement>, setQty: React.Dispatch<React.SetStateAction<string>>) => {
      const value = e.target.value;
      if (/^\d*$/.test(value)) {
        setQty(value);
      }
    };
  
    return (
      <div>
        <div className="flex space-x-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="large">Large</SelectItem>
              <SelectItem value="system">Extra Large</SelectItem>
            </SelectContent>
          </Select>
          <Input
            placeholder="QTY"
            type="number"
            value={qty1}
            onChange={(e) => handleQtyChange(e, setQty1)}
          />
        </div>
  
        <div className="flex space-x-2 mt-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="large">Large</SelectItem>
              <SelectItem value="system">Extra Large</SelectItem>
            </SelectContent>
          </Select>
          <Input
            placeholder="QTY"
            type="number"
            value={qty2}
            onChange={(e) => handleQtyChange(e, setQty2)}
          />
        </div>
  
        <div className="flex space-x-2 mt-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="large">Large</SelectItem>
              <SelectItem value="system">Extra Large</SelectItem>
            </SelectContent>
          </Select>
          <Input
            placeholder="QTY"
            type="number"
            value={qty3}
            onChange={(e) => handleQtyChange(e, setQty3)}
          />
        </div>
  
        <div className="flex space-x-2 mt-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="large">Large</SelectItem>
              <SelectItem value="system">Extra Large</SelectItem>
            </SelectContent>
          </Select>
          <Input
            placeholder="QTY"
            type="number"
            value={qty4}
            onChange={(e) => handleQtyChange(e, setQty4)}
          />
        </div>
      </div>
    );
  };
  
  export default Stock;
  
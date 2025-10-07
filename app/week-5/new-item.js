"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center space-y-4 w-72">
      <h2 className="text-xl font-bold text-gray-700">Select Quantity</h2>
      <div className="flex items-center space-x-4">
        {}
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 rounded-lg text-white ${
            quantity === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"
          }`}
        >
          -
        </button>

        
        <span className="text-2xl font-semibold text-gray-800">{quantity}</span>

        
        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 rounded-lg text-white ${
            quantity === 20 ? "bg-gray-300 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          +
        </button>
      </div>
      <p className="text-sm text-gray-500">Quantity must be between 1 and 20.</p>
    </div>
  );
}
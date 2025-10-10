"use client";

import { useState } from "react";

export default function NewItem() {
  // State variables
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const item = { name, quantity, category };
    console.log("New item added:", item);

    alert(`Item: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    // Reset fields
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 px-4">
      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-lg transition-transform hover:scale-[1.02]">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
           Add a New Item
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Item Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Item Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter item name"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Quantity
            </label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition"
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen foods">Frozen Foods</option>
              <option value="canned goods">Canned Goods</option>
              <option value="dry goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-2.5 rounded-xl shadow-md hover:opacity-90 active:scale-95 transition"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}

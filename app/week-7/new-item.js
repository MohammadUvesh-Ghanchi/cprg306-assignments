"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(event) {
    event.preventDefault();

    const newItem = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      quantity,
      category,
    };

    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  function handleQuantityChange(e) {
    const value = Number(e.target.value);
    if (value >= 1 && value <= 20) setQuantity(value);
    else if (value > 20) setQuantity(20);
    else setQuantity(1);
  }

  return (
    <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-lg hover:scale-[1.05] transition-transform">
      <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-6">
        Add a New Item
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-black mb-2">
            Item Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter item name"
            className="w-full px-4 py-2 border border-gray-300 text-black rounded-xl focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Quantity (1–20)
          </label>
          <input
            type="number"
            min="1"
            max="20"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400"
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

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold py-2.5 rounded-xl hover:opacity-90 active:scale-95 transition"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}

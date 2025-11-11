"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div className="p-4 bg-slate-900 rounded-lg w-full">
      <div className="mb-4 text-white space-x-3">
        <button onClick={() => setSortBy("name")} className="px-4 py-2 bg-indigo-500 rounded">
          Sort by Name
        </button>
        <button onClick={() => setSortBy("category")} className="px-4 py-2 bg-indigo-500 rounded">
          Sort by Category
        </button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    </div>
  );
}

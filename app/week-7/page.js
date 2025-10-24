"use client";

import { useState } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <main className="bg-slate-950 min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-indigo-400 mb-8">Shopping List</h1>

      {/* Add item form */}
      <div className="mb-10 w-full flex justify-center">
        <NewItem onAddItem={handleAddItem} />
      </div>

      {/* Item list */}
      <ItemList items={items} />
    </main>
  );
}

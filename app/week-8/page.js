"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";


function removeEmojis(str) {
  return str.replace(
    /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD00-\uDDFF])/g,
    ""
  );
}

export default function Page() {

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    const id = (crypto?.randomUUID && crypto.randomUUID()) || Date.now();
    setItems((prev) => [{ id, ...newItem }, ...prev]);
  }

  function handleItemSelect(item) {
    let cleanedName = item.name.split(",")[0];
    cleanedName = removeEmojis(cleanedName).trim().toLowerCase();
    setSelectedItemName(cleanedName);
  }

  return (
    <main className="p-6 bg-slate-950 min-h-screen text-black">
      <h1 className="text-4xl font-bold text-indigo-400 mb-6">
        Shopping List + Meal Ideas
      </h1>

      <div className="flex gap-6">
        <div className="w-1/2 space-y-4">
          <NewItem onAddItem={handleAddItem} />
          
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}

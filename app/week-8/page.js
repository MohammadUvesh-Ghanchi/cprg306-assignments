"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

// ✅ Function to remove emojis
function removeEmojis(str) {
  return str.replace(
    /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD00-\uDDFF])/g,
    ""
  );
}

export default function Page() {
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleItemSelect(item) {
    let cleanedName = item.name.split(",")[0]; 
    cleanedName = removeEmojis(cleanedName);
    cleanedName = cleanedName.trim().toLowerCase();

    setSelectedItemName(cleanedName);
  }

  return (
    <main className="p-6 bg-slate-950 min-h-screen text-white">
      <h1 className="text-4xl font-bold text-indigo-400 mb-6">
        Shopping List + Meal Ideas
      </h1>

      <div className="flex gap-6">
        <div className="w-1/2 space-y-4">
          <NewItem />
          <ItemList onItemSelect={handleItemSelect} />
        </div>

        <div className="w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}

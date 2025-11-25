"use client";

import { redirect } from "next/navigation";
import { useUserAuth } from "../../contexts/AuthContext";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import items from "./items.json";
import { useState } from "react";

export default function ShoppingListPage() {
  const { user, firebaseSignOut } = useUserAuth();
  const [selectedItem, setSelectedItem] = useState(null);

  if (!user) {
    return redirect("/week-9");
  }

  return (
    <main className="p-8 text-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Shopping List</h1>

        <button
          onClick={firebaseSignOut}
          className="bg-red-600 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ItemList
          items={items}
          onItemSelect={(item) => setSelectedItem(item.name)}
        />

        <MealIdeas ingredient={selectedItem} />
      </div>
    </main>
  );
}

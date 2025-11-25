"use client";

import { redirect } from "next/navigation";
import { useUserAuth } from "../../contexts/AuthContext";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { useState, useEffect } from "react";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function ShoppingListPage() {
  const { user, firebaseSignOut } = useUserAuth();

  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  if (!user) {
    return redirect("/week-10");
  }

  async function loadItems() {
    const data = await getItems(user.uid);
    setItems(data);
  }

  useEffect(() => {
    loadItems();
  }, [user]);

  async function handleAddItem(item) {
    const id = await addItem(user.uid, item);
    const newItem = { id, ...item };
    setItems([...items, newItem]);
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
          <div className="bg-gray-800 p-4 rounded mb-6">
            <h2 className="text-xl font-bold mb-4">Add New Item</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddItem({
                  name: e.target.name.value,
                  quantity: parseInt(e.target.quantity.value),
                  category: e.target.category.value
                });
                e.target.reset();
              }}
              className="space-y-4"
            >
              <input
                name="name"
                placeholder="Item name"
                required
                className="w-full p-2 text-black rounded"
              />

              <input
                name="quantity"
                type="number"
                min="1"
                max="100"
                placeholder="Quantity"
                required
                className="w-full p-2 text-black rounded"
              />

              <select
                name="category"
                required
                className="w-full p-2 text-black rounded"
              >
                <option value="">Select category</option>
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

              <button
                type="submit"
                className="bg-blue-600 px-4 py-2 rounded w-full"
              >
                Add Item
              </button>
            </form>
          </div>

        <ItemList
          items={items}
          onItemSelect={(item) => setSelectedItem(item.name)}
          onAddItem={handleAddItem}
        />

        <MealIdeas ingredient={selectedItem} />
      </div>
    </main>
  );
}

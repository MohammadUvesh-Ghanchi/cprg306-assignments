"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../../contexts/AuthContext";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";

const LogOutIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" x2="9" y1="12" y2="12" />
  </svg>
);

const PlusCircleIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

export default function ShoppingListPage() {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // ✅ Safe redirect + data loading
  useEffect(() => {
    if (!user) {
      router.push("/week-10");
      return;
    }

    async function load() {
      const data = await getItems(user.uid);
      setItems(data);
    }

    load();
  }, [user, router]);

  async function handleAddItem(item) {
    if (!user) return;
    const id = await addItem(user.uid, item);
    const newItem = { id, ...item };
    setItems((prev) => [...prev, newItem]);
  }

  // ✅ While redirecting or loading
  if (!user) {
    return <div className="text-white p-8">Redirecting...</div>;
  }

  return (
    <main className="min-h-screen bg-gray-900 p-4 sm:p-8 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-10 pb-4 border-b border-indigo-700">
          <h1 className="text-4xl font-extrabold text-indigo-400">
            Shopping List
          </h1>

          <button
            onClick={firebaseSignOut}
            className="flex items-center space-x-2 bg-red-600 hover:bg-red-500 text-white font-medium py-2 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <LogOutIcon size={20} />
            <span>Logout</span>
          </button>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Add Item */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-indigo-300 flex items-center">
              <PlusCircleIcon size={24} className="mr-2" />
              Add New Item
            </h2>

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
                className="w-full p-3 text-gray-900 bg-gray-200 rounded-lg"
              />

              <input
                name="quantity"
                type="number"
                min="1"
                max="100"
                placeholder="Quantity"
                required
                className="w-full p-3 text-gray-900 bg-gray-200 rounded-lg"
              />

              <select
                name="category"
                required
                className="w-full p-3 text-gray-900 bg-gray-200 rounded-lg"
              >
                <option value="" disabled>Select category</option>
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
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-lg"
              >
                Add to List
              </button>
            </form>
          </div>

          {/* Items */}
          <div>
            <ItemList
              items={items}
              onItemSelect={(item) => setSelectedItem(item.name)}
              onAddItem={handleAddItem}
            />
          </div>

          {/* Meal Ideas */}
          <div>
            <MealIdeas ingredient={selectedItem} />
          </div>
        </div>
      </div>
    </main>
  );
}

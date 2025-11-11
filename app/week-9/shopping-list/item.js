"use client";

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="cursor-pointer p-4 border rounded-lg mb-2 bg-slate-800 hover:bg-slate-700"
    >
      <div className="text-white font-bold">{name}</div>
      <div className="text-gray-300 text-sm">
        {quantity} — {category}
      </div>
    </li>
  );
}

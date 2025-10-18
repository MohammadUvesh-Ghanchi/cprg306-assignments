"use client";
import Item from "./item.js";
import { useState } from "react";
import item from "item.json";
export default function ItemList() {
  return (
    
    <ul className="w-full max-w-md">
      {items.map((item) => (
        <Item
          key={item.name}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
}
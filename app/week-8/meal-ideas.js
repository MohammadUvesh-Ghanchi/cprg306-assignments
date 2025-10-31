"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  
  async function loadMealIdeas() {
    const mealResults = await fetchMealIdeas(ingredient);
    setMeals(mealResults);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-full">
      <h2 className="text-2xl font-bold mb-4 text-indigo-600">
        Meal Ideas {ingredient ? `for "${ingredient}"` : ""}
      </h2>

      {!ingredient && (
        <p className="text-gray-500">Select an item from your shopping list.</p>
      )}

      <ul className="space-y-3">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="flex items-center gap-4">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-16 h-16 rounded-md"
            />
            <span className="font-medium">{meal.strMeal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

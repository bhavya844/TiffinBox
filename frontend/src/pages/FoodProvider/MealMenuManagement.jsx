/**
 * Author: Savan Patel
 */

import React, { useEffect, useState } from "react";
import MealCard from "../../components/FoodServiceProvider/MealCard.jsx";
import { useNavigate } from "react-router-dom";
import { useFoodProviderMealContext } from "../../context/FoodProviderMealContext/FoodProviderMealContext.jsx";

const MealMenuManagement = () => {
  const navigate = useNavigate();

  const { mealList, getAllMeals } = useFoodProviderMealContext();
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    async function fetchData() {
      await getAllMeals();
    }
    fetchData();
  }, []);

  const handleButtonClick = (event) => {
    event.preventDefault();
    navigate("/foodprovider/add-a-meal");
  };

  const handleCardClick = (mealId) => {
    navigate(`/foodprovider/meal-page/${mealId}`);
  };

  const handleReviewAnalyticsClick = () => {
    navigate("/foodprovider/review-analytics");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto w-full p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-gray-900">
            Meal Menu Management
          </h1>
          <div className="px-2 py-2">
          <button
            className="px-2 my-2 py-2 mx-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 transition duration-300"
            name="add-a-meal"
            onClick={handleButtonClick}
          >
            Add a New Meal
          </button>
          <button
              className= "mx-2 my-2 px-2 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
              onClick={handleReviewAnalyticsClick}
            >
              Review Analytics
            </button>
          </div>
          
        </div>

        <div className="flex flex-wrap items-center mb-6">
          <input
            type="text"
            name="searchQuery"
            placeholder="Enter your search query"
            className="flex-1 min-w-[200px] p-2 m-2 rounded-md border border-gray-300 bg-white"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {mealList.length != 0 ? mealList.filter((meal) => {
              return (
                meal.mealName
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase()) && meal
              );
            })
            .map((meal, index) => (
              <MealCard
                key={index}
                mealId={meal.mealId}
                image={meal.mealImage}
                name={meal.mealName}
                price={meal.mealPrice}
                handleCardClick={handleCardClick}
              />
            )) : (
              <div className="text-xl italic">
                You have not added any meal....
              </div>
            )}
        </div>
      </main>
    </div>
  );
};

export default MealMenuManagement;

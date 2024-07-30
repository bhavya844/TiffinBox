/**
 * Author: Savan Patel
 */

import React, { useEffect, useState } from "react";
import { useCustomerMealContext } from "../../context/CustomerMealContext/CustomerMealContext.jsx";
import { useNavigate, useParams } from "react-router-dom";
import MealCard from "../../components/FoodServiceProvider/MealCard.jsx";

const FoodProviderPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [searchData, setSearchData] = useState({
    mealName: "",
    mealType: "",
    cuisineType: "",
  });
  const { foodProviderId } = useParams();
  const {
    foodServiceProvider,
    mealsProvided,
    getAllMealsFromProvider,
    getFoodServiceProvider,
  } = useCustomerMealContext();

  useEffect(() => {
    async function fetchData() {
      await getFoodServiceProvider(foodProviderId);
      await getAllMealsFromProvider(foodProviderId, searchData);

      setLoading(false);
    }

    fetchData();
  }, []);

  const handleCardClick = (mealId) => {
    navigate(`/customer/meal-page/${mealId}`, {
      state: {
        foodServiceProviderId: foodServiceProvider.foodServiceProviderId,
      },
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container flex px-4 py-8 mx-auto">
      <div className="w-1/3 mx-3">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <img
            src={foodServiceProvider.profileImage}
            alt={foodServiceProvider.companyName}
            className="object-cover w-full h-48 mb-4"
          />
          <h2 className="mb-2 text-2xl font-bold">
            {foodServiceProvider.firstName} {foodServiceProvider.lastName}
          </h2>
          <p className="mb-2 text-gray-700">
            {foodServiceProvider.companyAddress}, {foodServiceProvider.city}
          </p>
          <p className="mb-2 text-gray-700">{foodServiceProvider.province}</p>
          <p className="text-gray-700">{foodServiceProvider.contact}</p>
        </div>
      </div>
      <div className="w-2/3 h-[50%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-3">
        {mealsProvided.map((meal, index) => (
          <MealCard
            key={index}
            mealId={meal.mealId}
            image={meal.mealImage}
            name={meal.mealName}
            price={meal.mealPrice}
            handleCardClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodProviderPage;

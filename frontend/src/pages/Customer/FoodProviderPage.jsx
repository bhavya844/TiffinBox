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
        "mealName":"",
        "mealType":"",
        "cuisineType":""
    })
    const {foodProviderId} = useParams();
    const {
        foodServiceProvider,
        mealsProvided,
        getAllMealsFromProvider,
        getFoodServiceProvider
    } = useCustomerMealContext();

    useEffect(() => {
        async function fetchData(){
            await getFoodServiceProvider(foodProviderId);
            await getAllMealsFromProvider(foodProviderId,searchData);

            setLoading(false);
        }

        fetchData();
    },[])

    const handleCardClick = (mealId) => {
        navigate(`/customer/meal-page/${mealId}`)
    }

    if(loading){
        return <div>Loading...</div>
    }
  return (
    <div className="container mx-auto px-4 py-8 flex">
      <div className="w-1/3 mx-3">
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src={foodServiceProvider.profileImage}
            alt={foodServiceProvider.companyName}
            className="w-full h-48 object-cover mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{foodServiceProvider.firstName} {foodServiceProvider.lastName}</h2>
          <p className="text-gray-700 mb-2">{foodServiceProvider.companyAddress}, {foodServiceProvider.city}</p>
          <p className="text-gray-700 mb-2">{foodServiceProvider.province}</p>
          <p className="text-gray-700">{foodServiceProvider.contact}</p>
        </div>
      </div>
      <div className="w-2/3 h-[50%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-3">
        {mealsProvided.map((meal, index) => (
            <MealCard key={index} mealId={meal.mealId} image={meal.mealImage} name={meal.mealName} price={meal.mealPrice} handleCardClick={handleCardClick}/>
        ))}
      </div>
    </div>
  );
};

export default FoodProviderPage;

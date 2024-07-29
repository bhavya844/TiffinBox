import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCustomerMealContext } from "../../context/CustomerMealContext/CustomerMealContext.jsx";
import toast from "react-hot-toast";

const MealPageCustomer = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const {
    meal,
    getMealFromId
  } = useCustomerMealContext();

  const { mealId } = useParams();
  useEffect(() => {
    async function getMeal(){
      await getMealFromId(mealId)
      setLoading(false)
      console.log(meal)
    }
    getMeal();
  },[mealId])

  const handleAddToCart = (e) => {
    e.preventDefault();
    toast.success("Add to Cart Clicked");
  }

  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success("Subscribe Clicked");
  }

  if(loading){
    return <div>Loading...</div>;
  }

  console.log(meal)
  return (
    <div className="container mx-auto px-6 py-6 min-h-screen">
      <h1 className="font-bold text-3xl text-gray-950 mb-6">Meal Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex justify-center items-center">
          <img
            src={meal.mealImage}
            alt={meal.mealName}
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col space-y-6">
          <div>
            <p className="font-bold text-xl text-gray-800">Meal Name</p>
            <p className="text-gray-700">{meal.mealName}</p>
          </div>
          <div>
            <p className="font-bold text-xl text-gray-800">Meal Description</p>
            <p className="text-gray-700">{meal.mealDescription}</p>
          </div>
          <div>
            <p className="font-bold text-xl text-gray-800">Meal Type</p>
            <p className="text-gray-700">{meal.mealType}</p>
          </div>
          <div>
            <p className="font-bold text-xl text-gray-800">Cuisine Type</p>
            <p className="text-gray-700">{meal.cuisineType}</p>
          </div>
          <div>
            <p className="font-bold text-xl text-gray-800">Meal Price</p>
            <p className="text-gray-700">$(CAD) {meal.mealPrice}</p>
          </div>
          <div className="flex space-x-4 mt-6">
            <button
              className="btn btn-secondary"
              onClick={(e) => handleAddToCart(e)}
            >
              Add to Cart
            </button>
            <button
              className="btn btn-success"
              onClick={(e) => handleSubscribe(e)}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPageCustomer;

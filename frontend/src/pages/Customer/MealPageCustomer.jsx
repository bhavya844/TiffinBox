/**
 * Author: Savan Patel
 */

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useCustomerMealContext } from "../../context/CustomerMealContext/CustomerMealContext.jsx";
import toast from "react-hot-toast";
import { SubscriptionType } from "../../utils/SubscriptionType.js";
import { useOrderContext } from "../../context/OrderContext/OrderContext.jsx";

const MealPageCustomer = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { state } = location;
  const { foodServiceProviderId } = state;
  const navigate = useNavigate();
  const { meal, getMealFromId } = useCustomerMealContext();
  const { mealId } = useParams();
  const [subscriptionType, setSubscriptionType] = useState(null);
  const { subscribe } = useOrderContext();

  useEffect(() => {
    async function getMeal() {
      await getMealFromId(mealId);
      setLoading(false);
      console.log(meal);
    }
    getMeal();
  }, [mealId]);

  const handleAddToCart = (e) => {
    e.preventDefault();
    const state = { foodServiceProviderId, mealId };
    navigate("/customer/cart", { state });
  };

  const handleSubscribe = () => {
    subscribe({ mealId, foodServiceProviderId, subscriptionType });
    navigate("/customer/home-page");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(meal);
  return (
    <div className="container min-h-screen px-6 py-6 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-gray-950">Meal Details</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex items-center justify-center">
          <img
            src={meal.mealImage}
            alt={meal.mealName}
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col space-y-6">
          <div>
            <p className="text-xl font-bold text-gray-800">Meal Name</p>
            <p className="text-gray-700">{meal.mealName}</p>
          </div>
          <div>
            <p className="text-xl font-bold text-gray-800">Meal Description</p>
            <p className="text-gray-700">{meal.mealDescription}</p>
          </div>
          <div>
            <p className="text-xl font-bold text-gray-800">Meal Type</p>
            <p className="text-gray-700">{meal.mealType}</p>
          </div>
          <div>
            <p className="text-xl font-bold text-gray-800">Cuisine Type</p>
            <p className="text-gray-700">{meal.cuisineType}</p>
          </div>
          <div>
            <p className="text-xl font-bold text-gray-800">Meal Price</p>
            <p className="text-gray-700">$(CAD) {meal.mealPrice}</p>
          </div>
          <div className="flex mt-6 space-x-4">
            <button
              className="btn btn-secondary"
              onClick={(e) => handleAddToCart(e)}
            >
              Add to Cart
            </button>
            <button
              className="btn btn-success"
              onClick={() =>
                document.getElementById("subscribe_modal").showModal()
              }
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <dialog id="subscribe_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">Choose your subscription plan.</p>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-4">
              <label
                htmlFor="weekly"
                role="button"
                className={`btn ${
                  subscriptionType === SubscriptionType.WEEKLY
                    ? "btn-primary"
                    : "btn-outline btn-primary"
                }`}
              >
                Weekly
                <input
                  type="radio"
                  id="weekly"
                  name="subscriptionType"
                  className="hidden radio radio-primary"
                  value={SubscriptionType.WEEKLY}
                  onChange={(e) => setSubscriptionType(e.target.value)}
                />
              </label>
              <label
                htmlFor="monthly"
                role="button"
                className={`btn ${
                  subscriptionType === SubscriptionType.MONTHLY
                    ? "btn-primary"
                    : "btn-outline btn-primary"
                }`}
              >
                Monthly
                <input
                  type="radio"
                  id="monthly"
                  name="subscriptionType"
                  className="hidden radio radio-primary"
                  value={SubscriptionType.MONTHLY}
                  onChange={(e) => setSubscriptionType(e.target.value)}
                />
              </label>
            </li>
            <li>
              <form method="dialog">
                <button
                  className="mt-6 btn btn-neutral"
                  onClick={() => {
                    handleSubscribe();
                  }}
                  disabled={!subscriptionType}
                >
                  Subscribe
                </button>
              </form>
            </li>
          </ul>
        </div>
      </dialog>
    </div>
  );
};

export default MealPageCustomer;

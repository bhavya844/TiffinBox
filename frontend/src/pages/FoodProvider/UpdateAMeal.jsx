import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFoodProviderMealContext } from "../../context/FoodProviderMealContext/FoodProviderMealContext.jsx";

const UpdateAMeal = () => {
  const { mealId } = useParams();
  const [mealData, setMealData] = useState({
    mealImage: "",
    mealName: "",
    mealDescription: "",
    mealType: "",
    cuisineType: "",
    mealPrice: ""
  });
  const [loading,setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const { meal, updateAMeal } = useFoodProviderMealContext();

  useEffect(() => {
    setMealData({
      mealImage: meal?.mealImage,
      mealName: meal?.mealName,
      mealDescription: meal?.mealDescription,
      mealType: meal?.mealType,
      cuisineType: meal?.cuisineType,
      mealPrice: meal?.mealPrice
    });
    setLoading(false)
    console.log(mealId)
    console.log(meal)
  }, [mealId]);

  const handleImageChange = (e) => {
    setMealData({ ...mealData, mealImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const regex = /^[+-]?([0-9]*[.])?[0-9]+$/;
    const price = mealData.mealPrice;
    if (!regex.test(price)) {
      setError(true);
    } else {
      await updateAMeal(mealId,mealData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMealData({ ...mealData, [name]: value });
  };

  if(loading){
    return <div>Loading...</div>
  }
  return (
    <div className="container mx-auto px-6 py-6 min-h-screen">
      <h1 className="font-bold text-3xl text-gray-950">Update this Meal</h1>
      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">
              Upload the Image of the Meal
            </span>
          </label>
          <input
            type="file"
            id="mealImage"
            onChange={handleImageChange}
            className="input input-bordered w-full py-2"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Meal Name</span>
            </label>
            <input
              type="text"
              name="mealName"
              id="mealName"
              placeholder="Enter Name of the Meal"
              value={mealData.mealName}
              required
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Meal Description</span>
            </label>
            <textarea
              id="mealDescription"
              name="mealDescription"
              placeholder="Enter Description for the meal"
              value={mealData.mealDescription}
              required
              onChange={handleChange}
              className="input input-bordered w-full"
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Meal Type</span>
            </label>
            <select
              id="mealType"
              name="mealType"
              value={mealData.mealType}
              required
              onChange={handleChange}
              className="input input-bordered w-full"
            >
              <option value="">Select Meal Type</option>
              <option value="veg">Vegetarian</option>
              <option value="non-veg">Non-Vegetarian</option>
              <option value="vegan">Vegan</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Cuisine Type</span>
            </label>
            <select
              id="cuisineType"
              name="cuisineType"
              value={mealData.cuisineType}
              required
              onChange={handleChange}
              className="input input-bordered w-full"
            >
              <option value="">Select Cuisine Type</option>
              <option value="indian">Indian</option>
              <option value="chinese">Chinese</option>
              <option value="italian">Italian</option>
            </select>
          </div>
          <div className="form-control col-span-full">
            <label className="label">
              <span className="label-text font-bold">Meal Price</span>
            </label>
            <div className="flex">
              <span className="flex items-center bg-gray-200 border border-r-0 rounded-l px-3 text-black">
                $(CAD)
              </span>
              <input
                type="text"
                id="mealPrice"
                name="mealPrice"
                placeholder="Enter Price of the Meal"
                value={mealData.mealPrice}
                required
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>
            <span className={`${error ? "block" : "hidden"} text-red-500`}>
              * This field should be numbers only
            </span>
          </div>
        </div>
        <div className="flex space-x-4 mt-4">
          <button type="submit" className="btn btn-success w-[15%] sm:w-[5%]">
            Update
          </button>
          <button
            type="button"
            onClick={() => navigate("/foodprovider/mealmenumanagement")}
            className="btn btn-neutral"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateAMeal;
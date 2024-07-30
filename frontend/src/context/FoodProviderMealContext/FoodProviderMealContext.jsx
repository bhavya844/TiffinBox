/**
 * Auhtor: Savan Patel
 */

import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import reducer from "./reducer";
import { toast } from "react-hot-toast";
import {
  ADD_A_MEAL,
  UPDATE_A_MEAL,
  DELETE_A_MEAL,
  GET_ALL_MEALS,
  GET_A_MEAL_FROM_ID,
} from "./action";
import { api } from "../../config/axiosConfig";

// const api = axios.create({
//   baseURL: "http://localhost:8080/api/foodserviceprovider/",
// });

const backendURLs = {
  ADD_A_MEAL_URL: "foodserviceprovider/addMeal",
  UPDATE_A_MEAL_URL: "foodserviceprovider/updateMeal",
  DELETE_A_MEAL_URL: "foodserviceprovider/deleteMeal",
  GET_ALL_MEALS_URL: "foodserviceprovider/getAllMeals",
  GET_A_MEAL_FROM_ID_URL: "foodserviceprovider/getMeal",
};

const initialState = {
  mealList: [],
  meal: null,
  isMealDeleted: null,
};

const AppContext = createContext();

const FoodProviderMealAppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const addAMeal = async (formData) => {
    await api
      .post(backendURLs.ADD_A_MEAL_URL, formData, {})
      .then((response) => {
        console.log(response);
        dispatch({ type: ADD_A_MEAL, payload: response.data });
        toast.success("Meal Added Successfully");
        navigate("/foodprovider/mealmenumanagement");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error adding Meal");
      });
  };

  const updateAMeal = async (mealId, formData) => {
    console.log(formData);
    await api
      .put(`${backendURLs.UPDATE_A_MEAL_URL}/${mealId}`, formData)
      .then((response) => {
        console.log(response);
        dispatch({ type: UPDATE_A_MEAL, payload: response.data });
        toast.success("Meal Updated successfully");
        navigate("/foodprovider/mealmenumanagement");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error Updating Meal");
      });
  };

  const deleteAMeal = async (mealId) => {
    await api
      .delete(`${backendURLs.DELETE_A_MEAL_URL}/${mealId}`)
      .then((response) => {
        console.log(response);
        dispatch({ type: DELETE_A_MEAL, payload: response.data });
        toast.success("Meal Deleted Successfully");
        navigate("/foodprovider/mealmenumanagement");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error deleting meal");
      });
  };

  const getAllMeals = async () => {
    await api
      .get(backendURLs.GET_ALL_MEALS_URL)
      .then((response) => {
        console.log(response);
        dispatch({ type: GET_ALL_MEALS, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error getting all the meals");
      });
  };

  const getMealFromId = async (mealId) => {
    console.log("Hello");
    await api
      .get(`${backendURLs.GET_A_MEAL_FROM_ID_URL}/${mealId}`)
      .then((response) => {
        console.log(response);
        dispatch({ type: GET_A_MEAL_FROM_ID, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error getting the meal");
      });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        addAMeal,
        updateAMeal,
        deleteAMeal,
        getAllMeals,
        getMealFromId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useFoodProviderMealContext = () => {
  return useContext(AppContext);
};

export { useFoodProviderMealContext, FoodProviderMealAppProvider };

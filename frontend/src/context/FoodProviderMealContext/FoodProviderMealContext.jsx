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
  GET_A_MEAL_FROM_ID
} from "./action";

const API = axios.create({
  baseURL: "http://localhost:8080/api/foodserviceprovider/"
});

const backendURLs = {
  ADD_A_MEAL_URL: "addMeal",
  UPDATE_A_MEAL_URL: "updateMeal",
  DELETE_A_MEAL_URL: "deleteMeal",
  GET_ALL_MEALS_URL: "getAllMeals",
  GET_A_MEAL_FROM_ID_URL: "getMeal"
};

const initialState = {
  mealList: [],
  meal: null,
  isMealDeleted: null
};

const AppContext = createContext();

const FoodProviderMealAppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqYW5lLnNtaXRoQGZtYWlsLmNvbSIsImlhdCI6MTcyMjIyMTYyOSwiZXhwIjoxNzIyMjI1MjI5fQ.q3z1mhVdUzeIjipCjJkpc6MCT2w9ZYvJ436r5gAd-Do"
  const addAMeal = async (formData) => {
    await API.post(backendURLs.ADD_A_MEAL_URL, formData,{
      headers:{
        'Content-Type': 'multipart/form-data',
        'Authorization':`Bearer ${token}`
        
      }
    })
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
    await API.put(`${backendURLs.UPDATE_A_MEAL_URL}/${mealId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization':`Bearer ${token}`
      }
    })
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
    await API.delete(`${backendURLs.DELETE_A_MEAL_URL}/${mealId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
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
    await API.get(backendURLs.GET_ALL_MEALS_URL, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        console.log(response);
        dispatch({ type: GET_ALL_MEALS, payload: response.data});
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error getting all the meals");
      });
  };

  const getMealFromId = async (mealId) => {

    console.log("Hello")
    await API.get(`${backendURLs.GET_A_MEAL_FROM_ID_URL}/${mealId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
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
        getMealFromId
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useFoodProviderMealContext = () => {
  return useContext(AppContext);
};

export { useFoodProviderMealContext,FoodProviderMealAppProvider };

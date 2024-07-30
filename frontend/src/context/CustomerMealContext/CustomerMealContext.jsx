/**
 * Author: Savan Patel
 */

import { useContext, useReducer, createContext } from "react";
import {
  GET_A_MEAL_FROM_ID,
  GET_ALL_FOOD_SERVICE_PROVIDER_IN_CITY,
  GET_ALL_MEALS_FROM_PROVIDER,
  GET_FOOD_SERVICE_PROVIDER,
} from "./action";
import reducer from "./reducer";
import toast from "react-hot-toast";
import { api } from "../../config/axiosConfig";

const backendURLs = {
  GET_ALL_FOOD_SERVICE_PROVIDER_URL: "customer/getfoodproviders",
  SEARCH_FOOD_SERVICE_PROVIDERS_URL: "customer/searchfoodproviders",
  GET_ALL_MEALS_FROM_PROVIDER_URL: "customer/getmeals",
  GET_A_MEAL_FROM_ID_URL: "customer/getMealFromId",
  GET_FOOD_SERVICE_PROVIDER_URL: "customer/getfoodprovider",
};

const initialState = {
  foodServiceProviderList: [],
  mealsProvided: [],
  meal: null,
  foodServiceProvider: null,
};

const AppContext = createContext();

const CustomerMealAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const token = localStorage.getItem('authToken')
  const getAllFoodServiceProvider = async () => {
    await api
      .get(`${backendURLs.GET_ALL_FOOD_SERVICE_PROVIDER_URL}`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: GET_ALL_FOOD_SERVICE_PROVIDER_IN_CITY,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error getting food service providers");
      });
  };

  const getAllFoodServiceProviderwithSearch = async (searchData) => {
    await api
      .post(`${backendURLs.SEARCH_FOOD_SERVICE_PROVIDERS_URL}`, searchData)
      .then((response) => {
        console.log(response);
        dispatch({
          type: GET_ALL_FOOD_SERVICE_PROVIDER_IN_CITY,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error getting food service providers");
      });
  };

  const getFoodServiceProvider = async (foodProviderId) => {
    await api
      .get(`${backendURLs.GET_FOOD_SERVICE_PROVIDER_URL}/${foodProviderId}`)
      .then((response) => {
        console.log(response);
        dispatch({ type: GET_FOOD_SERVICE_PROVIDER, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error getting food service provider info.");
      });
  };

  const getAllMealsFromProvider = async (foodProviderId) => {
    await api
      .get(`${backendURLs.GET_ALL_MEALS_FROM_PROVIDER_URL}/${foodProviderId}`)
      .then((response) => {
        console.log(response);
        dispatch({ type: GET_ALL_MEALS_FROM_PROVIDER, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          "Error getting meals provided by this service food provider"
        );
      });
  };

  const getMealFromId = async (mealId) => {
    await api
      .get(`${backendURLs.GET_A_MEAL_FROM_ID_URL}/${mealId}`)
      .then((response) => {
        console.log(response);
        dispatch({ type: GET_A_MEAL_FROM_ID, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error getting this meal");
      });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        getAllFoodServiceProvider,
        getAllMealsFromProvider,
        getMealFromId,
        getFoodServiceProvider,
        getAllFoodServiceProviderwithSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useCustomerMealContext = () => {
  return useContext(AppContext);
};

export { CustomerMealAppProvider, useCustomerMealContext };

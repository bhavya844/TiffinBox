import axios from "axios";
import {React, useContext, useNavigate, useReducer} from "react";
import { GET_A_MEAL_FROM_ID, GET_ALL_FOOD_SERVICE_PROVIDER_IN_CITY, GET_ALL_MEALS_FROM_PROVIDER } from "./action";
import { createContext } from "vm";
import reducer from "./reducer";
import toast from "react-hot-toast";

const API = axios.create({
    baseURL: "http://localhost:8080/api/customer/"
});

const backendURLs = {
    GET_ALL_FOOD_SERVICE_PROVIDER_IN_CITY_URL:"getAllProvidersFromCity",
    GET_ALL_MEALS_FROM_PROVIDER_URL:"getMealsForProvider",
    GET_A_MEAL_FROM_ID_URL:"getMeal"
}

const initialState = {
    foodServiceProviderList:[],
    mealsProvided:[],
    meal:null
}

const AppContext = createContext();

const CustomerMealAppProvider = ({children}) => {
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(reducer,initialState);
    const token = localStorage.getItem("token");

    const getAllFoodServiceProvider = async (city) => {
        await API.get(`${GET_ALL_FOOD_SERVICE_PROVIDER_IN_CITY_URL}/${city}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        .then(response => {
            console.log(response)
            dispatch({type:GET_ALL_FOOD_SERVICE_PROVIDER_IN_CITY,payload:response.data})
        })
        .catch(error => {
            console.log(error)
            toast.error("Error getting food service providers")
        })
    }

    const getAllMealsFromProvider = async (userId) => {
        await API.get(`${GET_ALL_MEALS_FROM_PROVIDER}/${userId}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        .then(response => {
            console.log(response)
            dispatch({type:GET_ALL_MEALS_FROM_PROVIDER,payload:response.data})
        })
        .catch(error => {
            console.log(error)
            toast.error("Error getting meals provided by this service food provider")
        })
    }

    const getMealFromId = async (mealId) => {
        await API.get(`${GET_A_MEAL_FROM_ID}/${mealId}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        .then(response => {
            console.log(response)
            dispatch({type:GET_A_MEAL_FROM_ID,payload:response.data})
        })
        .catch(error => {
            console.log(error)
            toast.error("Error getting this meal")
        })
    }

    return (
        <AppContext.Provider 
            value={{
                ...state,
                getAllFoodServiceProvider,
                getAllMealsFromProvider,
                getMealFromId
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

const CustomerMealContext = () => {
    return useContext(AppContext);
}

export {CustomerMealAppProvider,CustomerMealContext}


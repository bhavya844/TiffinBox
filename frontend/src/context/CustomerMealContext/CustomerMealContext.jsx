import axios from "axios";
import {React, useContext, useReducer, createContext} from "react";
import { GET_A_MEAL_FROM_ID, GET_ALL_FOOD_SERVICE_PROVIDER_IN_CITY, GET_ALL_MEALS_FROM_PROVIDER, GET_FOOD_SERVICE_PROVIDER } from "./action";
import reducer from "./reducer";
import toast from "react-hot-toast";

const API = axios.create({
    baseURL: "http://localhost:8080/api/customer/"
});

const backendURLs = {
    GET_ALL_FOOD_SERVICE_PROVIDER_URL:"getfoodproviders",
    SEARCH_FOOD_SERVICE_PROVIDERS_URL:"searchfoodproviders",
    GET_ALL_MEALS_FROM_PROVIDER_URL:"getmeals",
    GET_A_MEAL_FROM_ID_URL:"getMealFromId",
    GET_FOOD_SERVICE_PROVIDER_URL:"getfoodprovider"
}

const initialState = {
    foodServiceProviderList:[],
    mealsProvided:[],
    meal:null,
    foodServiceProvider:null
}

const AppContext = createContext();

const CustomerMealAppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer,initialState);
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MUBleGFtcGxlbWFpbC5jb20iLCJpYXQiOjE3MjIyNzM1ODQsImV4cCI6MTcyMjI3NzE4NH0.Q6JzihGoo0-Fj8b866Jn5cBsap2ZElJRB1A67BYUU94"
    const getAllFoodServiceProvider = async () => {
        await API.get(`${backendURLs.GET_ALL_FOOD_SERVICE_PROVIDER_URL}`,{
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

    const getAllFoodServiceProviderwithSearch = async (searchData) => {
        await API.post(`${backendURLs.SEARCH_FOOD_SERVICE_PROVIDERS_URL}`,searchData,{
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

    const getFoodServiceProvider = async (foodProviderId) => {
        await API.get(`${backendURLs.GET_FOOD_SERVICE_PROVIDER_URL}/${foodProviderId}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        }).then(response => {
            console.log(response);
            dispatch({type:GET_FOOD_SERVICE_PROVIDER, payload:response.data})
        }).catch(error=>{
            console.log(error)
            toast.error("Error getting food service provider info.")
        })
    }

    const getAllMealsFromProvider = async (foodProviderId) => {
        await API.get(`${backendURLs.GET_ALL_MEALS_FROM_PROVIDER_URL}/${foodProviderId}`,{
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
        await API.get(`${backendURLs.GET_A_MEAL_FROM_ID_URL}/${mealId}`,{
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
                getMealFromId,
                getFoodServiceProvider,
                getAllFoodServiceProviderwithSearch
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

const useCustomerMealContext = () => {
    return useContext(AppContext);
}

export {CustomerMealAppProvider,useCustomerMealContext}


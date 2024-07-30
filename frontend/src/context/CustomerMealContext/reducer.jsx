/**
 * Author: Savan Patel
 */

import { GET_ALL_FOOD_SERVICE_PROVIDER_IN_CITY, GET_ALL_MEALS_FROM_PROVIDER, GET_A_MEAL_FROM_ID, GET_FOOD_SERVICE_PROVIDER } from "./action";

const reducer = (state, action) => {
    if(action.type === GET_ALL_FOOD_SERVICE_PROVIDER_IN_CITY){
        return {
            ...state,
            foodServiceProviderList:action.payload.foodProviderResponseList
        }
    }
    if(action.type === GET_ALL_MEALS_FROM_PROVIDER){
        return {
            ...state,
            mealsProvided: action.payload.mealResponseList
        }
    }
    if(action.type === GET_A_MEAL_FROM_ID){
        return {
            ...state,
            meal: action.payload.mealResponse
        }
    }
    if(action.type === GET_FOOD_SERVICE_PROVIDER){
        return {
            ...state,
            foodServiceProvider: action.payload.foodProviderResponse
        }
    }
}

export default reducer;
import { GET_ALL_FOOD_SERVICE_PROVIDER_IN_CITY, GET_ALL_MEALS_FROM_PROVIDER, GET_A_MEAL_FROM_ID } from "./action";

const reducer = (state, action) => {
    if(action.type === GET_ALL_FOOD_SERVICE_PROVIDER_IN_CITY){
        return {
            ...state,
            foodServiceProviderList:action.payload
        }
    }
    if(action.type === GET_ALL_MEALS_FROM_PROVIDER){
        return {
            ...state,
            mealsProvided: action.payload
        }
    }
    if(action.type === GET_A_MEAL_FROM_ID){
        return {
            ...state,
            meal: action.payload
        }
    }
}

export default reducer;
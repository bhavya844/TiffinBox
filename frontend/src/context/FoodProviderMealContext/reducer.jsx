import { ADD_A_MEAL, UPDATE_A_MEAL, DELETE_A_MEAL, GET_ALL_MEALS, GET_A_MEAL_FROM_ID } from "./action";

const reducer = (state, action) => {
    if(action.type === ADD_A_MEAL){
        return {
            ...state,
            mealList:[...state.mealList, action.payload]
        };
    }
    if(action.type === UPDATE_A_MEAL){
        return {
            ...state,
            meal:action.payload
        }
    }
    if(action.type === DELETE_A_MEAL){
        return {
            ...state,
            isMealDeleted:action.payload
        };
    }
    if(action.type === GET_ALL_MEALS){
        return {
            ...state,
            mealList:action.payload
        }
    }
    if(action.type === GET_A_MEAL_FROM_ID){
        return {
            ...state,
            meal:action.payload
        }
    }
}

export default reducer
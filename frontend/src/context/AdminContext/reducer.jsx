import { GET_ALL_USER_PENDING_REQUESTS, GET_ALL_USERS, GET_SINGLE_PENDING_REQUEST, HIDE_ALERT, SHOW_ALERT } from "./action";

const reducer = (state, action) => {
    if(action.type === GET_ALL_USER_PENDING_REQUESTS) {
        return { ...state, userPendingRequests: action.payload.pendingRequestList };
    }
    if(action.type === GET_SINGLE_PENDING_REQUEST) {
        return { ...state, singleUserDetails: action.payload.foodServiceProviderDetails };
    }
    if(action.type === GET_ALL_USERS) {
        return { ...state, userList: action.payload.userList };
    }
    if(action.type === SHOW_ALERT) {
        return { ...state, alertMessage: action.payload.response.message, alertVisible: true, alertStatus: action.payload.status };
    }
    if(action.type === HIDE_ALERT) {
        return { ...state, alertMessage: "", alertVisible: false };
    }
};

export default reducer;
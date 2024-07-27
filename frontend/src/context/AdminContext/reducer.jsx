import { GET_ALL_USER_PENDING_REQUESTS, GET_ALL_USERS, GET_ANALYSIS, GET_SINGLE_PENDING_REQUEST } from "./action";

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
    if(action.type === GET_ANALYSIS) {
        return { ...state, analysisDetails: action.payload.analysisDetails };
    }
};

export default reducer;
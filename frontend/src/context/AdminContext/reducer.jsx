import { GET_ALL_USER_PENDING_REQUESTS, GET_SINGLE_PENDING_REQUEST } from "./action";

const reducer = (state, action) => {
    if(action.type === GET_ALL_USER_PENDING_REQUESTS) {
        return { ...state, userPendingRequests: action.payload.pendingRequestList };
    }
    if(action.type === GET_SINGLE_PENDING_REQUEST) {
        return { ...state, singleUserDetails: action.payload.foodServiceProviderDetails };
    }
};

export default reducer;
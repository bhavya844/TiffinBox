import { GET_ALL_USER_PENDING_REQUESTS } from "./action";

const reducer = (state, action) => {
    if(action.type === GET_ALL_USER_PENDING_REQUESTS) {
        return { ...state, userPendingRequests: action.payload.pendingRequestList };
    }
};

export default reducer;
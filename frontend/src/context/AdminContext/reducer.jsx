import { GET_ALL_USER_PENDING_REQUESTS } from "./action";


const reducer = (state, action) => {
    if(action.type === GET_ALL_USER_PENDING_REQUESTS) {
        console.log("reducer function");
    }

};

export default reducer;
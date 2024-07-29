import { GET_ALL_ACCEPTED_ORDERS} from "./action";

const reducer = (state, action) => {
    if(action.type === GET_ALL_ACCEPTED_ORDERS) {
        return { ...state, acceptedOrderList: action.payload.acceptedOrderList };
    }
};

export default reducer;
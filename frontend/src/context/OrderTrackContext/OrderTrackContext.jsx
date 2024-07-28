import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import { toast } from "react-hot-toast";
import { api } from "../../config/axiosConfig";
import {
  GET_ALL_ACCEPTED_ORDERS
} from "./action";

// const API = axios.create({
//   baseURL: "http://localhost:8080/api/",
// });

const backendURLs = {
    GET_ALL_ACCEPTED_ORDERS_URL: `/ordertrack/getAllAcceptedOrders`
};

const initialState = {
  acceptedOrderList: [],
};

const AppContext = createContext();

const OrderTrackAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAllAcceptedOrders = async () => {
    await api.get(backendURLs.GET_ALL_ACCEPTED_ORDERS_URL)
      .then((res) => {
        console.log(res.data)
        dispatch({ type: GET_ALL_ACCEPTED_ORDERS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        getAllAcceptedOrders,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useOrderTrackContext = () => {
  return useContext(AppContext);
};

export { OrderTrackAppProvider, useOrderTrackContext };

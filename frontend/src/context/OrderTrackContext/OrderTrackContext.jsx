import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import { toast } from "react-hot-toast";
import { api } from "../../config/axiosConfig";
import { GET_ALL_ACCEPTED_ORDERS } from "./action";

// const API = axios.create({
//   baseURL: "http://localhost:8080/api/",
// });

const backendURLs = {
  GET_ALL_ACCEPTED_ORDERS_URL: `/ordertrack/getAllAcceptedOrders`,
  UPDATE_ORDER_STATUS_URL: `/ordertrack/updateStatus`,
};

const initialState = {
  acceptedOrderList: [],
};

const AppContext = createContext();

const OrderTrackAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAllAcceptedOrders = async () => {
    await api
      .get(backendURLs.GET_ALL_ACCEPTED_ORDERS_URL)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: GET_ALL_ACCEPTED_ORDERS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  const updateOrderStatus = async (data) => {
    const { orderId, newStatus } = data;
    const requestBody = {
      orderStatus: newStatus,
    };
    await api
      .post(`${backendURLs.UPDATE_ORDER_STATUS_URL}/${orderId}`, requestBody)
      .then((res) => {
        toast.success(res.data.message);
        getAllAcceptedOrders();
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  const verifyOtp = async (data) => {

  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        getAllAcceptedOrders,
        updateOrderStatus,
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

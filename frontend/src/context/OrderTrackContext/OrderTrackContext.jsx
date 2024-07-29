import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import { toast } from "react-hot-toast";
import { api } from "../../config/axiosConfig";
import { GET_ALL_ACCEPTED_ORDERS, GET_ORDER_STATUS } from "./action";

// const API = axios.create({
//   baseURL: "http://localhost:8080/api/",
// });

const backendURLs = {
  GET_ALL_ACCEPTED_ORDERS_URL: `/ordertrack/getAllAcceptedOrders`,
  UPDATE_ORDER_STATUS_URL: `/ordertrack/updateStatus`,
  VERIFY_ORDER_STATUS_URL: `/ordertrack/verifyOTP`,
  GET_ORDER_STATUS_URL: `/ordertrack/getOrderStatus`,
};

const initialState = {
  acceptedOrderList: [],
  orderStatus: ""
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
    const { orderId, otp } = data;
    console.log(orderId + " " + otp);
    const requestBody = {
      otp,
    };
    const response = await api
      .post(`${backendURLs.VERIFY_ORDER_STATUS_URL}/${orderId}`, requestBody)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });

    return response;
  };

  const getOrderStatus = async (orderId) => {
    console.log(orderId);
    await api.get(`${backendURLs.GET_ORDER_STATUS_URL}/${orderId}`)
    .then((res) => {
      console.log(res.data);
      dispatch({type: GET_ORDER_STATUS, payload: res.data});
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        getAllAcceptedOrders,
        updateOrderStatus,
        verifyOtp,
        getOrderStatus,
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

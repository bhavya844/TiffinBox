import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import {
  GET_ALL_USER_PENDING_REQUESTS,
  GET_SINGLE_PENDING_REQUEST,
  HIDE_ALERT,
  SHOW_ALERT,
} from "./action";

const API = axios.create({
  baseURL: "http://localhost:8080/api/admin/",
});

const backendURLs = {
  GET_ALL_PENDING_REQUESTS_URL: `getAllPendingRequests`,
  GET_SINGLE_PENDING_REQUEST_URL: `getSinglePendingRequest`,
  APPROVE_PENDING_REQUEST_URL: `approve`,
  REJECT_PENDING_REQUEST_URL: `reject`,
};

const initialState = {
  userPendingRequests: [],
  singleUserDetails: null,
  alertMessage: "",
  alertVisible: false,
  alertStatus: true
};

const AppContext = createContext();

const AdminAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAllPendingRequests = async () => {
    await API.get(backendURLs.GET_ALL_PENDING_REQUESTS_URL)
      .then((res) => {
        dispatch({ type: GET_ALL_USER_PENDING_REQUESTS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  const getSinglePendingRequest = async (foodServiceProviderId) => {
    await API.get(
      `${backendURLs.GET_SINGLE_PENDING_REQUEST_URL}/${foodServiceProviderId}`
    )
      .then((res) => {
        dispatch({ type: GET_SINGLE_PENDING_REQUEST, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  const approvePendingRequest = async (email) => {
    await API.post(`${backendURLs.APPROVE_PENDING_REQUEST_URL}/${email}`, {})
    .then((res) => {
      const response = res.data;
      const status = true;
      dispatch({type: SHOW_ALERT, payload: {response, status}})
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  }

  const rejectPendingRequest = async (email) => {
    await API.post(`${backendURLs.REJECT_PENDING_REQUEST_URL}/${email}`, {})
    .then((res) => {
      const response = res.data;
      const status = false;
      dispatch({type: SHOW_ALERT, payload: {response, status}})
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  }


  const hideAlert = () => {
    dispatch({ type: HIDE_ALERT });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        getAllPendingRequests,
        getSinglePendingRequest,
        approvePendingRequest,
        rejectPendingRequest,
        hideAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAdminContext = () => {
  return useContext(AppContext);
};

export { AdminAppProvider, useAdminContext };

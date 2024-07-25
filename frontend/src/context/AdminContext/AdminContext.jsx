import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import {
  GET_ALL_USER_PENDING_REQUESTS,
  GET_SINGLE_PENDING_REQUEST,
} from "./action";

const API = axios.create({
  baseURL: "http://localhost:8080/api/admin/",
});

const backendURLs = {
  GET_ALL_PENDING_REQUESTS_URL: `getAllPendingRequests`,
  GET_SINGLE_PENDING_REQUEST_URL: `getSinglePendingRequest`,
};

const initialState = {
  userPendingRequests: [],
  singleUserDetails: null,
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

  return (
    <AppContext.Provider
      value={{
        ...state,
        getAllPendingRequests,
        getSinglePendingRequest,
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

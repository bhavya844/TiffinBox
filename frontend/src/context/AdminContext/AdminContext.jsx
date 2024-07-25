import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import { toast } from "react-hot-toast";
import {
  GET_ALL_USER_PENDING_REQUESTS,
  GET_ALL_USERS,
  GET_SINGLE_PENDING_REQUEST,
} from "./action";

const API = axios.create({
  baseURL: "http://localhost:8080/api/admin/",
});

const backendURLs = {
  GET_ALL_PENDING_REQUESTS_URL: `getAllPendingRequests`,
  GET_SINGLE_PENDING_REQUEST_URL: `getSinglePendingRequest`,
  APPROVE_PENDING_REQUEST_URL: `approve`,
  REJECT_PENDING_REQUEST_URL: `reject`,
  GET_ALL_USERS_URL: `getAllUsers`,
  REMOVE_USER_URL: `removeUser`,
};

const initialState = {
  userPendingRequests: [],
  singleUserDetails: null,
  userList: [],
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
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  const rejectPendingRequest = async (email) => {
    await API.post(`${backendURLs.REJECT_PENDING_REQUEST_URL}/${email}`, {})
      .then((res) => {
        toast.error(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  const getAllUsers = async () => {
    await API.get(backendURLs.GET_ALL_USERS_URL)
      .then((res) => {
        dispatch({ type: GET_ALL_USERS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  const removeUser = async (email) => {
    await API.post(`${backendURLs.REMOVE_USER_URL}/${email}`, {})
      .then((res) => {
        toast.success(res.data.message);
        getAllUsers();
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
        approvePendingRequest,
        rejectPendingRequest,
        getAllUsers,
        removeUser,
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

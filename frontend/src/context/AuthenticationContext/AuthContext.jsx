import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import reducer from "./reducer";
import { toast } from "react-hot-toast";
import { api } from "../../config/axiosConfig";

// const API = axios.create({
//   baseURL: "http://localhost:8080/api/",
// });

const backendURLs = {
    LOGIN_URL: `/auth/logIn`,
    //   UPDATE_ORDER_STATUS_URL: `/ordertrack/updateStatus`,
    //   VERIFY_ORDER_STATUS_URL: `/ordertrack/verifyOTP`,
    //   GET_ORDER_STATUS_URL: `/ordertrack/getOrderStatus`,
};

const initialState = {
    user: "",
    userRole: "",
    authToken: "",
    refreshToken: "",
};

const AppContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(initialState);

    const handleLoginSubmit = async (data) => {
        console.log(data);
        const requestBody = {
            email: data.email_id,
            password: data.password
        };
        await api.post(backendURLs.LOGIN_URL, requestBody)
            .then((res) => {
                const data = res.data;
                setTokens(data)
                toast.success("Login Successfull.")
            }).catch((error) => console.log(error))
    }

    const setTokens = (data) => {
        setUserData({ ...userData, user: data, userRole: data.userRole, authToken: data.token, refreshToken: data.refreshToken });

        localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("userRole", JSON.stringify(data.userRole));
        localStorage.setItem("authToken", JSON.stringify(data.token));
        localStorage.setItem("refreshToken", JSON.stringify(data.refreshToken));
    }

    const logout = () => {
        userData.setUserData(initialState);
        localStorage.removeItem("user");
        localStorage.removeItem("userRole");
        localStorage.removeItem("authToken");
        localStorage.removeItem("refreshToken");
    }


    useEffect(() => {
        if (localStorage.getItem("user") && localStorage.getItem("userRole") && localStorage.getItem("authToken") && localStorage.getItem("refreshToken")) {
            setUserData({
                ...userData,
                user: localStorage.getItem("user"),
                userRole: localStorage.getItem("userRole"),
                authToken: localStorage.getItem("authToken"),
                refreshToken: localStorage.getItem("refreshToken")
            })
        }
    }, [userData]);

    return (
        <AppContext.Provider
            value={{
                userData,
                handleLoginSubmit,
                logout
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

const useAuthContext = () => {
    return useContext(AppContext);
};

export { AuthProvider, useAuthContext };

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

api.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
    }

    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const response = await axios.post(
        "http://localhost:8080/api/auth/refreshToken",
        {
          refreshToken,
        }
      );
      const data = response.data;

      localStorage.setItem("authToken", data?.token);
      localStorage.setItem("refreshToken", data?.refreshToken);

      originalRequest.headers.Authorization = `Bearer ${data?.token}`;
      return axios(originalRequest);
    } catch (error) {
      console.log(error);
    }
  }
);

export { api };

import axios from "axios";
import React, { useContext, useState } from "react";
import { api } from "../../config/axiosConfig";

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

const BASE_URL = "http://localhost:8080/api";

const OrderContext = React.createContext();

const initialStates = {
  orderList: [],
  orderDetails: null,
};

const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(initialStates);
  const [loading, setLoading] = useState(true);

  const fetchAllOrders = async () => {
    setLoading(true);
    await api
      .get(`${BASE_URL}/orders`)
      .then((res) => {
        const { orderDetails } = res.data;
        console.log(orderDetails);
        setOrders({ ...orders, orderList: orderDetails });
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  const fetchOrderDetails = async (orderId) => {
    setLoading(true);
    await api
      .get(`${BASE_URL}/orders/${orderId}`)
      .then((res) => {
        const { orderDetails } = res.data;
        console.log(orderDetails);
        setOrders({ ...orders, orderDetails, orderList: [] });
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  const fetchReceivedOrders = async () => {
    setLoading(true);
    await api
      .get(`${BASE_URL}/orders/received`)
      .then((res) => {
        const { orderDetails } = res.data;
        setOrders({ ...orders, orderList: orderDetails, orderDetails: null });
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        fetchAllOrders,
        fetchOrderDetails,
        fetchReceivedOrders,
        loading,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

const useOrderContext = () => {
  return useContext(OrderContext);
};

export { OrderProvider, useOrderContext };

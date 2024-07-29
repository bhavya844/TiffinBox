import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { api } from "../../config/axiosConfig";

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

const data = {
  mealId: "1",
  mealName: "veg meal",
  companyName: "tiffin company",
  mealImage: null,
  mealPrice: 15.99,
};

const OrderCartContext = React.createContext();

const initialState = {
  cartItem: null,
  quantity: 0,
  amount: 0,
  taxAmount: 0,
  totalAmount: 0,
  taxRate: 0.15,
};

const OrderCartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialState);
  const [loading, setLoading] = useState(true);

  const addToCart = async (mealId) => {
    setLoading(true);
    await api
      .get(`getMeal/${mealId}`)
      .then((res) => {
        const data = res.data;
        console.log(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  const increaseQuantity = () => {
    const newQuantity = cart?.quantity + 1;
    const newAmount = Number(newQuantity * cart?.cartItem?.mealPrice).toFixed(
      2
    );
    const newTaxAmount = Number(newAmount * cart?.taxRate).toFixed(2);
    const newTotalAmount = Number(
      Number(newAmount) + Number(newTaxAmount)
    ).toFixed(2);
    setCart({
      ...cart,
      quantity: newQuantity,
      amount: newAmount,
      taxAmount: newTaxAmount,
      totalAmount: newTotalAmount,
    });
    toast.success("Quantity Increased.");
  };

  const decreaseQuantity = () => {
    if (cart.quantity > 1) {
      const newQuantity = cart?.quantity - 1;
      const newAmount = Number(newQuantity * cart?.cartItem?.mealPrice).toFixed(
        2
      );
      const newTaxAmount = Number(newAmount * cart?.taxRate).toFixed(2);
      const newTotalAmount = Number(
        Number(newAmount) + Number(newTaxAmount)
      ).toFixed(2);
      setCart({
        ...cart,
        quantity: newQuantity,
        amount: newAmount,
        taxAmount: newTaxAmount,
        totalAmount: newTotalAmount,
      });
      toast.success("Quantity Decreased.");
    } else {
      setCart({ ...cart, cartItem: null });
      toast.error("Meal Removed!");
    }
  };

  useEffect(() => {
    const taxAmount = Number(data.mealPrice * initialState.taxRate).toFixed(2);
    const totalAmount = Number(data.mealPrice + Number(taxAmount)).toFixed(2);
    setTimeout(() => {
      setLoading(true);
      setCart({
        ...cart,
        cartItem: data,
        amount: data.mealPrice,
        quantity: 1,
        taxAmount,
        totalAmount,
      });
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <OrderCartContext.Provider
      value={{ cart, addToCart, increaseQuantity, decreaseQuantity, loading }}
    >
      {children}
    </OrderCartContext.Provider>
  );
};

const useOrderCartContext = () => {
  return useContext(OrderCartContext);
};

export { OrderCartProvider, useOrderCartContext };

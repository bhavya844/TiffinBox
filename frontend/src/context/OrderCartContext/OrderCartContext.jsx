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
  const [loading, setLoading] = useState(false);

  const addToCart = async (mealId, foodServiceProviderId) => {
    setLoading(true);
    await api
      .get(`/customer/getMealFromId/${mealId}`)
      .then((res) => {
        const data = res.data;
        const { mealResponse } = data;
        const taxAmount = Number(
          mealResponse.mealPrice * initialState.taxRate
        ).toFixed(2);
        const totalAmount = Number(
          mealResponse.mealPrice + Number(taxAmount)
        ).toFixed(2);
        console.log(taxAmount, totalAmount);
        setCart({
          ...cart,
          cartItem: { ...mealResponse, foodServiceProviderId },
          quantity: 1,
          amount: mealResponse.mealPrice,
          taxAmount,
          totalAmount,
        });
        console.log(mealResponse);
        toast.success("Meal Added to Cart.");
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
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

  return (
    <OrderCartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        loading,
      }}
    >
      {children}
    </OrderCartContext.Provider>
  );
};

const useOrderCartContext = () => {
  return useContext(OrderCartContext);
};

export { OrderCartProvider, useOrderCartContext };

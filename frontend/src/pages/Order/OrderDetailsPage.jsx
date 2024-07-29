import React, { useEffect } from "react";
import { useOrderContext } from "../../context/OrderContext/OrderContext";
import { useParams } from "react-router-dom";

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

function OrderDetailsPage() {
  const { orderId } = useParams();
  const { orders, fetchOrderDetails, loading } = useOrderContext();
  const { orderDetails } = orders;

  useEffect(() => {
    fetchOrderDetails(orderId);
  }, []);

  if (orderDetails === null || loading) {
    return (
      <div className="grid max-w-5xl mx-auto min-h-dvh place-content-center">
        <span className="loading loading-dots loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-dvh">
      <div className="w-full max-w-5xl px-4 my-10">
        <p className="mb-10 text-4xl font-bold">
          <span className="text-5xl text-primary">/</span>
          <span>Order - #{orderDetails.orderId}</span>
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <section className="shadow card bg-base-100">
              <figure>
                <img
                  src={orderDetails.mealImage || "https://picsum.photos/200"}
                  alt="provider"
                  className="object-cover w-full h-52"
                />
              </figure>
              <div className="card-body">
                <h2 className="font-bold card-title">Provider Details:</h2>
                <p className="font-semibold">{orderDetails.companyName}</p>
                <p>
                  Email:{" "}
                  <a
                    href={`mailto:${orderDetails.providerEmail}`}
                    className="border-b-2 border-b-primary"
                  >
                    {orderDetails.providerEmail}
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href={`phoneto:${orderDetails.providerPhone}`}
                    className="border-b-2 border-b-primary"
                  >
                    {orderDetails.providerPhone}
                  </a>
                </p>
              </div>
            </section>
          </div>
          <div className="flex flex-col gap-8">
            <div className="shadow card bg-base-100">
              <div className="card-body">
                <h2 className="font-bold card-title">Order Details:</h2>
                <p>Order Id: {orderDetails.orderId}</p>
                {/* {order.meals.map((meal) => {
                  return ( */}
                <p>
                  {orderDetails.mealName} X {orderDetails.quantity}
                </p>
                {/* );
                })} */}
                <p>Order Date: {orderDetails.orderDate}</p>
              </div>
            </div>
            <div className="shadow card bg-base-100">
              <div className="card-body">
                <h2 className="font-bold card-title">Additional Requests:</h2>
                <p>
                  {orderDetails.additionalRequest
                    ? orderDetails.additionalRequest
                    : "None"}
                </p>
              </div>
            </div>
            <div className="shadow card bg-base-100">
              <div className="card-body">
                <h2 className="font-bold card-title">Payment Details:</h2>
                <p>Payment Id: {orderDetails.paymentId}</p>
                <p>
                  Amount Paid:{" "}
                  <span className="px-1 bg-primary">
                    ${orderDetails.amountPaid}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailsPage;

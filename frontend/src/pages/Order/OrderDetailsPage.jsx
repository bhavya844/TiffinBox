import React from "react";

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

const order = {
  providerImage:
    "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
  providerEmail: "provider@email.com",
  providerPhone: "1234567890",
  orderId: 1,
  tiffinServiceName: "tiffin service",
  meals: [
    {
      mealId: 1,
      mealName: "meal 1",
      mealCount: 2,
    },
  ],
  orderDate: "10 June 2024",
  additionalRequest: "Any additional requests",
  paymentId: 123,
  amountPaid: 36.78,
};

function OrderDetailsPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-5xl px-4 my-10">
        <p className="mb-10 text-4xl font-bold">
          <span className="text-5xl text-primary">/</span>
          <span>Order - #{order.orderId}</span>
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <section className="shadow card bg-base-100">
              <figure>
                <img
                  src={order.providerImage}
                  alt="provider"
                  className="object-cover w-full h-72"
                />
              </figure>
              <div className="card-body">
                <h2 className="font-bold card-title">Provider Details:</h2>
                <p className="font-semibold">{order.tiffinServiceName}</p>
                <p>
                  Email:{" "}
                  <a
                    href={`callto:${order.providerEmail}`}
                    className="border-b-2 border-b-primary"
                  >
                    {order.providerEmail}
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href={`mailto:${order.providerPhone}`}
                    className="border-b-2 border-b-primary"
                  >
                    {order.providerPhone}
                  </a>
                </p>
              </div>
            </section>
          </div>
          <div className="flex flex-col gap-8">
            <div className="shadow card bg-base-100">
              <div className="card-body">
                <h2 className="font-bold card-title">Order Details:</h2>
                <p>Order Id: {order.orderId}</p>
                {order.meals.map((meal) => {
                  return (
                    <p key={meal.mealId}>
                      {meal.mealName} X {meal.mealCount}
                    </p>
                  );
                })}
                <p>Order Date: {order.orderDate}</p>
              </div>
            </div>
            <div className="shadow card bg-base-100">
              <div className="card-body">
                <h2 className="font-bold card-title">Additional Requests:</h2>
                <p>
                  {order.additionalRequest ? order.additionalRequest : "None"}
                </p>
              </div>
            </div>
            <div className="shadow card bg-base-100">
              <div className="card-body">
                <h2 className="font-bold card-title">Payment Details:</h2>
                <p>Payment Id: {order.paymentId}</p>
                <p>
                  Amount Paid:{" "}
                  <span className="px-1 bg-primary">${order.amountPaid}</span>
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

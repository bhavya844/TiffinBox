import { useEffect } from "react";
import { useOrderContext } from "../../context/OrderContext/OrderContext";
import { useNavigate, useParams } from "react-router-dom";

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

function ViewOrderDetailsPage() {
  const { orders, fetchOrderDetails, loading } = useOrderContext();
  const { orderId } = useParams();
  const navigate = useNavigate();
  const { orderDetails } = orders;

  useEffect(() => {
    fetchOrderDetails(orderId);
  }, [orderId]);

  return (
    <div className="w-full max-w-5xl px-6 mx-auto my-10 min-h-dvh">
      {/* Order Id and back button starts */}
      <div className="flex flex-row justify-between">
        <p className="mb-10 text-4xl font-bold">
          <span className="text-5xl text-primary">/</span>
          <span>Order Details</span>
        </p>
        <div>
          <button className="btn btn-neutral" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>
      {orderDetails === null || loading ? (
        <div className="grid pt-20 place-content-center">
          <span className="text-center loading loading-dots loading-lg text-primary"></span>
        </div>
      ) : (
        <>
          <div className="flex flex-row items-center justify-between px-4 py-2 my-4 rounded-lg shadow-md">
            <div>
              <h1 className="text-xl font-bold">
                Order ID: #${orderDetails.orderId}
              </h1>
            </div>
            <div>
              {orderDetails.orderStatus !== "PLACED" && (
                <p>
                  <span className="font-semibold">Status: </span>
                  {orderDetails.currentStatus === "In-Preparation" ? (
                    <span className="badge badge-secondary text-[8px] md:text-sm md:font-light font-bold">
                      {orderDetails.currentStatus}
                    </span>
                  ) : (
                    <span className="badge badge-success text-[8px] font-bold md:text-sm md:font-light">
                      {orderDetails.currentStatus}
                    </span>
                  )}
                </p>
              )}
            </div>
          </div>
          {/* Order Id and status ends */}
          {/* Customer details, delivery address, payment information starts */}
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 md:grid-cols-2 justify-stretch">
            <div className="shadow-md card bg-base-100">
              <div className="card-body">
                <h2 className="card-title">Customer Details</h2>
                <div className="flex flex-row justify-between">
                  <div>
                    <p className="font-semibold">Name: </p>
                  </div>
                  <div>{orderDetails.customerName}</div>
                </div>
                <div className="flex flex-row justify-between">
                  <div>
                    <p className="font-semibold">Email: </p>
                  </div>
                  <div>{orderDetails.customerEmail}</div>
                </div>
                <div className="flex flex-row justify-between">
                  <div>
                    <p className="font-semibold">Phone: </p>
                  </div>
                  <div>{orderDetails.customerPhone}</div>
                </div>
              </div>
            </div>
            <div className="shadow-md card w-50 bg-base-100">
              <div className="card-body">
                <h2 className="card-title">Delivery Address</h2>
                <p>{orderDetails.deliveryAddress}</p>
              </div>
            </div>
            <div className="shadow-md card w-50 bg-base-100">
              <div className="card-body">
                <h2 className="card-title">Payment Information</h2>
                <div className="flex flex-row justify-between">
                  <div>
                    <p className="font-semibold">Payment ID: </p>
                  </div>
                  <div>{orderDetails.paymentId}</div>
                </div>
                <div className="flex flex-row justify-between">
                  <div>
                    <p className="font-semibold">Email: </p>
                  </div>
                  <div>{orderDetails.paymentId}</div>
                </div>
              </div>
            </div>
          </div>
          {/* Customer details, delivery address, payment information ends */}
          {/* Meal details starts */}
          <div className="grid grid-cols-1 gap-2 px-4 py-2 my-4 rounded-lg shadow-md">
            <h2 className="card-title">Meal Details</h2>
            <div>
              <div className="overflow-x-auto max-h-72">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Meal Name</th>
                      <th>Order Type</th>
                      <th>No of Meals</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{orderDetails.mealName}</td>
                      <td>
                        <span className="badge badge-secondary text-[8px] md:text-sm md:font-bold font-mono">
                          {orderDetails.orderType}
                        </span>
                      </td>
                      <td>{orderDetails.quantity}</td>
                      <td>{orderDetails.amount}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Meal details ends */}
          {/* Additional request starts */}
          <div>
            <div className="shadow-md card w-50 bg-base-100">
              <div>
                <div className="shadow-md card w-50 bg-base-100">
                  <div className="card-body">
                    <h2 className="card-title">Additional Request</h2>
                    <p>{orderDetails.additionalRequest}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {orderDetails.orderStatus === "PLACED" && (
            <div className="text-left">
              <button className="my-4 btn btn-success">Accept</button>
            </div>
          )}
        </>
      )}
      {/* Additional request ends */}
    </div>
  );
}

export default ViewOrderDetailsPage;

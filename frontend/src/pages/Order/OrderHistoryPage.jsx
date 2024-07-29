import { useEffect } from "react";
import OrderCard from "../../components/Order/OrderCard";
import { useOrderContext } from "../../context/OrderContext/OrderContext";

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

function OrderHistoryPage() {
  const { orders, fetchAllOrders, loading } = useOrderContext();

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-dvh">
      <div className="w-full max-w-5xl px-4 my-10">
        <p className="mb-10 text-4xl font-bold">
          <span className="text-5xl text-primary">/</span>
          <span>Order History</span>
        </p>
        {loading ? (
          <div className="grid pt-20 place-content-center">
            <span className="text-center loading loading-dots loading-lg text-primary"></span>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            {orders.orderList?.map((order) => {
              return <OrderCard key={order.orderId} order={order} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderHistoryPage;

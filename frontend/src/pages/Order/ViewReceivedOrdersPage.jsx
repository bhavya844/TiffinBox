import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useOrderContext } from "../../context/OrderContext/OrderContext";
import { FaMagnifyingGlass } from "react-icons/fa6";

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

function ViewReceivedOrdersPage() {
  const { fetchReceivedOrders, orders, loading } = useOrderContext();
  const [searchQuery, setSearchQuery] = useState("");

  const { orderList } = orders;

  const filteredRows = orderList.filter(
    (item) =>
      item.orderId.toString().includes(searchQuery) ||
      item.customerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    fetchReceivedOrders();
  }, []);

  return (
    <div className="w-full max-w-5xl px-6 mx-auto my-10 min-h-dvh">
      <p className="mb-10 text-4xl font-bold">
        <span className="text-5xl text-primary">/</span>
        <span>Received Orders</span>
      </p>
      <div className="grid grid-cols-1 gap-10">
        <div>
          <label className="flex items-center gap-2 input input-bordered">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaMagnifyingGlass />
          </label>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.length !== 0 &&
                  filteredRows.map((order) => (
                    <tr key={order.orderId}>
                      <td>{order.orderId}</td>
                      <td>{order.customerName}</td>
                      <td>
                        <Link
                          to={`/orders/fsp/received-orders/${order.orderId}`}
                          className="btn btn-neutral"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {filteredRows.length === 0 && !loading && (
              <div className="grid pt-20 place-content-center">
                <span className="font-medium text-center">No Order Found!</span>
              </div>
            )}
            {loading && (
              <div className="grid pt-20 place-content-center">
                <span className="text-center loading loading-dots loading-lg text-primary"></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewReceivedOrdersPage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AcceptedOrders() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const tableRows = [
    {
      no: 1,
      orderId: 123,
      customerName: "Jon",
      currentStatus: "In-Preparation",
      view: "View",
      updateStatus: "Update",
    },
    {
      no: 2,
      orderId: 234,
      customerName: "Sansa",
      currentStatus: "In-Preparation",
      view: "View",
      updateStatus: "Update",
    },
    {
      no: 3,
      orderId: 345,
      customerName: "Arya",
      currentStatus: "Delivered",
      view: "View",
      updateStatus: "Update",
    },
    {
      no: 4,
      orderId: 456,
      customerName: "Ned",
      currentStatus: "In-Preparation",
      view: "View",
      updateStatus: "Update",
    },
    {
      no: 5,
      orderId: 567,
      customerName: "Bran",
      currentStatus: "Delivered",
      view: "View",
      updateStatus: "Update",
    },
  ];

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRows = tableRows.filter(
    (item) =>
      item.orderId.toString().includes(searchQuery) ||
      item.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.currentStatus.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewClick = (item) => {
    navigate("/view-detailed-order", { state: item });
  };

  return (
    <div className="container mx-auto px-6 py-6">
      <div className="grid grid-cols-1 gap-10">
        <div>
          <h1 className="font-bold text-3xl">Accepted Orders</h1>
        </div>
        {/* Search box starts */}
        <div>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        {/* Search box ends */}
        {/* Order list starts */}
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer Name</th>
                  <th>Current Status</th>
                  <th>View</th>
                  <th>Update Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((item) => (
                  <tr key={item.no}>
                    <td>{item.orderId}</td>
                    <td>{item.customerName}</td>
                    <td>
                      <div className="flex">
                        {item.currentStatus === "In-Preparation" ? (
                          <span className="badge badge-secondary text-[8px] md:text-sm md:font-light font-bold">
                            {item.currentStatus}
                          </span>
                        ) : (
                          <span className="badge badge-success text-[8px] font-bold md:text-sm md:font-light">
                            {item.currentStatus}
                          </span>
                        )}
                      </div>
                    </td>
                    <td>
                      <button
                        className="btn btn-neutral"
                        onClick={() => handleViewClick(item)}
                      >
                        {item.view}
                      </button>
                    </td>
                    <td>
                      <div className="dropdown dropdown-end">
                        <div
                          tabIndex={0}
                          role="button"
                          className="btn btn-accent m-1"
                        >
                          {item.updateStatus}
                        </div>
                        <ul
                          tabIndex={0}
                          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                          <li>
                            <a
                              onClick={(item) =>
                                (item.currentStatus = "In-Preparation")
                              }
                            >
                              In-Preparation
                            </a>
                          </li>
                          <li>
                            <a
                              onClick={() =>
                                document
                                  .getElementById("update_order_status_modal")
                                  .showModal()
                              }
                            >
                              Delivered
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredRows.length === 0 ? (
              <h1 className="text-xl text-center font-bold my-2">
                No Accepted Orders!
              </h1>
            ) : (
              <></>
            )}
          </div>
        </div>
        {/* Order list ends */}
      </div>
      <dialog
        id="update_order_status_modal"
        className="modal modal-middle sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Order Verification</h3>
          <form className="mt-2">
            <div className="grid grid-cols-1 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">OTP</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="modal-action">
              <div className="mt-4 flex justify-start gap-2">
                <div>
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
                <div>
                  <button className="btn btn-info">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default AcceptedOrders;

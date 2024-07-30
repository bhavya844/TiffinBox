import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAdminContext } from "../../context/AdminContext/AdminContext";

const PendingRequests = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const { userPendingRequests, getAllPendingRequests } = useAdminContext();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRows = userPendingRequests.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.contact.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewClick = (item) => {
    navigate(`/admin/single-pending-request/${item.foodServiceProviderId}`);
  };

  useEffect(() => {
    getAllPendingRequests();
  }, [location]);

  return (
    <div className="container px-6 py-6 mx-auto">
      <div className="grid grid-cols-1 gap-10">
        <div>
          <h1 className="text-3xl font-bold">User Pending Requests</h1>
        </div>
        {/* Search box starts */}
        <div>
          <label className="flex items-center gap-2 input input-bordered">
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
                  <th>Name</th>
                  <th>Company</th>
                  <th>Email</th>
                  <th>Contact Number</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((item) => (
                  <tr key={item.userId}>
                    <td>{item.name}</td>
                    <td>{item.companyName}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleViewClick(item)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredRows.length === 0 ? (
              <h1 className="my-2 text-xl font-bold text-center">
                No Pending Requests!
              </h1>
            ) : (
              <></>
            )}
          </div>
        </div>
        {/* Order list ends */}
      </div>
    </div>
  );
};

export default PendingRequests;

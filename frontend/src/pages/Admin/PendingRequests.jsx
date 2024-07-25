import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PendingRequests = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const tableRows = [
    {
      no: 1,
      name: "Jon",
      companyName: "ABC Restaurant",
      email: "abc@abc.com",
      contactNumber: "+11234567890",
      view: "View",
    },
    {
      no: 2,
      name: "Alice",
      companyName: "XYZ Diner",
      email: "alice@xyz.com",
      contactNumber: "+19876543210",
      view: "View",
    },
    {
      no: 3,
      name: "Bob",
      companyName: "123 Cafe",
      email: "bob@123.com",
      contactNumber: "+12345678901",
      view: "View",
    },
    {
      no: 4,
      name: "Charlie",
      companyName: "Foo Bar",
      email: "charlie@foobar.com",
      contactNumber: "+10987654321",
      view: "View",
    },
    {
      no: 5,
      name: "Dave",
      companyName: "QRS Grill",
      email: "dave@qrs.com",
      contactNumber: "+11223344556",
      view: "View",
    },
  ];

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRows = tableRows.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.contactNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewClick = (item) => {
    navigate( `/admin-single-pending-request/${item.email}`)
  }

  return (
    <div className="container mx-auto px-6 py-6">
      <div className="grid grid-cols-1 gap-10">
        <div>
          <h1 className="font-bold text-3xl">User Pending Requests</h1>
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
                  <th>Name</th>
                  <th>Company</th>
                  <th>Email</th>
                  <th>Contact Number</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((item) => (
                  <tr key={item.no}>
                    <td>{item.name}</td>
                    <td>{item.companyName}</td>
                    <td>{item.email}</td>
                    <td>{item.contactNumber}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleViewClick(item)}
                      >
                        {item.view}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredRows.length === 0 ? (
              <h1 className="text-xl text-center font-bold my-2">
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

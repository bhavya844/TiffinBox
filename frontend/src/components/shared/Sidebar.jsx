import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthenticationContext/AuthContext";
import { UserRoles } from "../../utils/UserRoles";

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

function Sidebar({ children }) {
  const { userData, logout } = useAuthContext();
  const navigate = useNavigate();
  const { userRole } = userData;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="drawer lg:drawer-open">
      <input
        id="my-drawer-2"
        type="checkbox"
        className="drawer-toggle"
        checked={isDrawerOpen}
        onChange={toggleDrawer}
      />
      <div className="flex flex-col items-center justify-center drawer-content">
        <div className="sticky top-0 z-10 flex items-center justify-between w-full px-6 py-2 -mb-4 shadow-md bg-base-100 lg:hidden">
          <img
            src="https://res.cloudinary.com/dk1fim9hl/image/upload/v1719262725/Tiffin%20Box/nldinb3ipt9tegyc2hzs.png"
            alt="tiffin box"
            className="w-10"
          />
          <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button">
            <FaBarsStaggered />
          </label>
        </div>
        {children}
      </div>
      <div className="z-20 drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex flex-col justify-between p-4 min-h-dvh menu bg-base-200 text-base-content w-80">
          {/* Sidebar content here */}
          <div>
            <div className="flex items-center gap-4 px-2 my-8">
              <img
                src="https://res.cloudinary.com/dk1fim9hl/image/upload/v1719262725/Tiffin%20Box/nldinb3ipt9tegyc2hzs.png"
                alt="tiffin box"
                className="w-10"
              />
              <span className="text-xl font-bold text-secondary">
                Tiffin Box
              </span>
            </div>
            <ul className="grid gap-4">
              {userRole === UserRoles.FOOD_SERVICE_PROVIDER && (
                <>
                  <li onClick={closeDrawer}>
                    <NavLink to="/foodprovider/dashboard">Dashboard</NavLink>
                  </li>
                  <li onClick={closeDrawer}>
                    <NavLink to="/foodprovider/received-orders">
                      Orders Received
                    </NavLink>
                  </li>
                  <li onClick={closeDrawer}>
                    <NavLink to="/foodprovider/accepted-orders">
                      Orders Accpeted
                    </NavLink>
                  </li>
                  <li onClick={closeDrawer}>
                    <NavLink to="/foodprovider/mealmenumanagement">
                      Meals
                    </NavLink>
                  </li>
                </>
              )}
              {userRole === UserRoles.ADMIN && (
                <>
                  <li onClick={closeDrawer}>
                    <NavLink to="/admin/dashboard">Dashboard</NavLink>
                  </li>
                  <li onClick={closeDrawer}>
                    <NavLink to="/admin/pending-request">
                      Pending Requests
                    </NavLink>
                  </li>
                  <li onClick={closeDrawer}>
                    <NavLink to="/admin/user-list">Users</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div>
            <ul className="grid gap-4">
              {userRole === UserRoles.FOOD_SERVICE_PROVIDER && (
                <li onClick={closeDrawer}>
                  <NavLink to="/profile">Profile</NavLink>
                </li>
              )}
              <li onClick={closeDrawer}>
                <button
                  className="btn btn-sm btn-error"
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

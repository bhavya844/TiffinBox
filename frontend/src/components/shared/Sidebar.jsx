import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

function Sidebar({ children }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
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
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/orders/fsp/received-orders">
                  Orders Received
                </NavLink>
              </li>
              <li>
                <NavLink to="/orders/fsp/accepted-orders">
                  Orders Accpeted
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <ul className="grid gap-4">
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
              <li>
                <button className="btn btn-sm btn-error">Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

import React from "react";
import { AdminAppProvider } from "../context/AdminContext/AdminContext";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import PendingRequests from "../pages/Admin/PendingRequests";
import SinglePendingRequest from "../pages/Admin/SinglePendingRequest";
import UserList from "../pages/Admin/UserList";
import Sidebar from "../components/shared/Sidebar";
import Footer from "../components/shared/Footer";

function AdminRoutes() {
  return (
    <AdminAppProvider>
      <Sidebar>
        <Routes>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="pending-request" element={<PendingRequests />} />
          <Route
            path="single-pending-request/:foodServiceProviderId"
            element={<SinglePendingRequest />}
          />
          <Route path="user-list" element={<UserList />} />
        </Routes>
        <Footer />
      </Sidebar>
    </AdminAppProvider>
  );
}

export default AdminRoutes;

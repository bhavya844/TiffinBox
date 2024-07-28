import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUsPage from "./pages/ContactUsPage";
import FAQPage from "./pages/FAQPage";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import LandingPage from "./pages/LandingPage";
import PendingRequests from "./pages/Admin/PendingRequests";
import { AdminAppProvider } from "./context/AdminContext/AdminContext";
import SinglePendingRequest from "./pages/Admin/SinglePendingRequest";
import UserList from "./pages/Admin/UserList";
import OrderHistoryPage from "./pages/Order/OrderHistoryPage";
import OrderDetailsPage from "./pages/Order/OrderDetailsPage";
import ScrollToTop from "./components/shared/ScrollToTop";
import OrderCartPage from "./pages/Order/OrderCartPage";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ViewProfile from "./pages/Profile/ViewProfile";
import EditProfile from "./pages/Profile/EditProfile";
import AcceptedOrders from "./pages/Order/AcceptedOrders";
import { OrderTrackAppProvider } from "./context/OrderTrackContext/OrderTrackContext";

function App() {
  return (
    <main data-theme="bumblebee">
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/faqs" element={<FAQPage />} />
          {/* admin routes starts */}
          <Route
            path="/admin/*"
            element={
              <AdminAppProvider>
                <Routes>
                  <Route path="dashboard" element={<AdminDashboard />} />
                  <Route path="pending-request" element={<PendingRequests />} />
                  <Route
                    path="single-pending-request/:foodServiceProviderId"
                    element={<SinglePendingRequest />}
                  />
                  <Route path="user-list" element={<UserList />} />
                </Routes>
              </AdminAppProvider>
            }
          />
          {/* admin routes ends */}
          <Route path="/order-history" element={<OrderHistoryPage />} />
          <Route path="/order-details" element={<OrderDetailsPage />} />
          <Route path="/order-cart" element={<OrderCartPage />} />
          {/* order track routes starts */}
          <Route
            path="/order-track/*"
            element={
              <OrderTrackAppProvider>
                <Routes>
                  <Route path="/accepted-orders" element={<AcceptedOrders />} />
                </Routes>
              </OrderTrackAppProvider>
            }
          />
          {/* order track routes ends */}
          {/* profile routes starts */}
          <Route path="/view-profile" element={<ViewProfile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          {/* profile routes ends */}
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;

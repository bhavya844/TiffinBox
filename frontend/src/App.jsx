import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUsPage from "./pages/ContactUsPage";
import FAQPage from "./pages/FAQPage";
import AllReviewsPage from "./components/AllReviewsPage";
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
import SubmitReview from "./components/SubmitReview";
import ViewProfile from "./pages/Profile/ViewProfile";
import EditProfile from "./pages/Profile/EditProfile";

import { FoodProviderMealAppProvider } from "./context/FoodProviderMealContext/FoodProviderMealContext";
import MealMenuManagement from "./pages/FoodProvider/MealMenuManagement";
import AddAMeal from "./pages/FoodProvider/AddAMeal";
import MealPage from "./pages/FoodProvider/MealPage";
import UpdateAMeal from "./pages/FoodProvider/UpdateAMeal";
import {CustomerMealAppProvider} from "./context/CustomerMealContext/CustomerMealContext"
import CustomerHomePage from "./pages/Customer/CustomerHomePage";
import FoodProviderPage from "./pages/Customer/FoodProviderPage";
import MealPageCustomer from "./pages/Customer/MealPageCustomer";

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
          <Route path="/all-reviews" element={<AllReviewsPage />} />
          <Route path="//add-review" element={<SubmitReview />} />

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
          {/* profile routes ends */}
          <Route path="/view-profile" element={<ViewProfile />} />
          <Route path="/edit-profile" element={<EditProfile />} />



          {/*Food Service Provider routes starts */}
          <Route
            path="/foodprovider/*"
            element={
              <FoodProviderMealAppProvider>
                <Routes>
                  <Route
                    path="mealmenumanagement"
                    element={<MealMenuManagement />}
                  />
                  <Route path="meal-page/:mealId" element={<MealPage />} />
                  <Route path="add-a-meal" element={<AddAMeal />} />
                  <Route
                    path="update-a-meal/:mealId"
                    element={<UpdateAMeal />}
                  />
                </Routes>
              </FoodProviderMealAppProvider>
            }
          />
          {/* Food Service Provider routes ends */}

          {/* Routes for Customer */}
          <Route
            path="/customer/*"
            element={
              <CustomerMealAppProvider>
                <Routes>
                  <Route path="home-page" element={<CustomerHomePage />} />
                  <Route path="food-provider-page/:foodProviderId" element={<FoodProviderPage />}/>
                  <Route path="meal-page/:mealId" element={<MealPageCustomer />} />
                </Routes>
              </CustomerMealAppProvider>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;

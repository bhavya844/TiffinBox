import React from "react";
import { CustomerMealAppProvider } from "../context/CustomerMealContext/CustomerMealContext";
import { OrderProvider } from "../context/OrderContext/OrderContext";
import { OrderTrackAppProvider } from "../context/OrderTrackContext/OrderTrackContext";
import { OrderCartProvider } from "../context/OrderCartContext/OrderCartContext";
import Navbar from "../components/shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/shared/Footer";
import CustomerHomePage from "../pages/Customer/CustomerHomePage";
import FoodProviderPage from "../pages/Customer/FoodProviderPage";
import MealPageCustomer from "../pages/Customer/MealPageCustomer";
import OrderHistoryPage from "../pages/Order/OrderHistoryPage";
import OrderDetailsPage from "../pages/Order/OrderDetailsPage";
import OrderCartPage from "../pages/OrderCart/OrderCartPage";
import ViewProfile from "../pages/Profile/ViewProfile";
import EditProfile from "../pages/Profile/EditProfile";
import TrackOrderStatus from "../pages/Order/TrackOrderStatus";
import AllReviewsPage from "../pages/Customer/AllReviewsPage";
import SubmitReview from "../components/SubmitReview";

function CustomerRoutes() {
  return (
    <CustomerMealAppProvider>
      <OrderProvider>
        <OrderTrackAppProvider>
          <OrderCartProvider>
            <Navbar />
            <Routes>
              <Route path="home-page" element={<CustomerHomePage />} />
              <Route
                path="food-provider-page/:foodProviderId"
                element={<FoodProviderPage />}
              />
              <Route path="all-reviews/:foodProviderId" element={<AllReviewsPage />} />
              <Route path="add-review/:foodProviderId" element={<SubmitReview />} />
              <Route path="meal-page/:mealId" element={<MealPageCustomer />} />
              <Route path="order-history" element={<OrderHistoryPage />} />

              <Route
                path="order-details/:orderId"
                element={<OrderDetailsPage />}
              />
              <Route path="/cart" element={<OrderCartPage />} />
              <Route path="/view-profile" element={<ViewProfile />} />
              <Route path="/edit-profile" element={<EditProfile />} />
              <Route
                path="order-track/:orderId"
                element={<TrackOrderStatus />}
              />

            </Routes>
            <Footer />
          </OrderCartProvider>
        </OrderTrackAppProvider>
      </OrderProvider>
    </CustomerMealAppProvider>
  );
}

export default CustomerRoutes;

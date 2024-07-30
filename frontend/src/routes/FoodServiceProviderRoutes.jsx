import { FoodProviderMealAppProvider } from "../context/FoodProviderMealContext/FoodProviderMealContext";
import { OrderProvider } from "../context/OrderContext/OrderContext";
import { OrderTrackAppProvider } from "../context/OrderTrackContext/OrderTrackContext";
import Sidebar from "../components/shared/Sidebar";
import { Route, Routes } from "react-router-dom";
import MealMenuManagement from "../pages/FoodProvider/MealMenuManagement";
import MealPage from "../pages/FoodProvider/MealPage";
import AddAMeal from "../pages/FoodProvider/AddAMeal";
import UpdateAMeal from "../pages/FoodProvider/UpdateAMeal";
import ViewReceivedOrdersPage from "../pages/Order/ViewReceivedOrdersPage";
import ViewOrderDetailsPage from "../pages/Order/ViewOrderDetailsPage";
import AcceptedOrders from "../pages/Order/AcceptedOrders";
import Footer from "../components/shared/Footer";
import ViewProfile from "../pages/Profile/ViewProfile";
import EditProfile from "../pages/Profile/EditProfile";

function FoodServiceProviderRoutes() {
  return (
    <FoodProviderMealAppProvider>
      <OrderProvider>
        <OrderTrackAppProvider>
          <Sidebar>
            <Routes>
              <Route
                path="mealmenumanagement"
                element={<MealMenuManagement />}
              />
              <Route path="meal-page/:mealId" element={<MealPage />} />
              <Route path="add-a-meal" element={<AddAMeal />} />
              <Route path="update-a-meal/:mealId" element={<UpdateAMeal />} />
              <Route
                path="received-orders"
                element={<ViewReceivedOrdersPage />}
              />
              <Route
                path="received-orders/:orderId"
                element={<ViewOrderDetailsPage />}
              />
              <Route path="accepted-orders" element={<AcceptedOrders />} />
              <Route path="/view-profile" element={<ViewProfile />} />
              <Route path="/edit-profile" element={<EditProfile />} />
            </Routes>
            <Footer />
          </Sidebar>
        </OrderTrackAppProvider>
      </OrderProvider>
    </FoodProviderMealAppProvider>
  );
}

export default FoodServiceProviderRoutes;

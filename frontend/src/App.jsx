import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnonymousRoutes from "./routes/AnonymousRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import FoodServiceProviderRoutes from "./routes/FoodServiceProviderRoutes";
import CustomerRoutes from "./routes/CustomerRoutes";
import ScrollToTop from "./components/shared/ScrollToTop";

function App() {
  return (
    <main data-theme="bumblebee">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/*" element={<AnonymousRoutes />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route
            path="/foodprovider/*"
            element={<FoodServiceProviderRoutes />}
          />
          <Route path="/customer/*" element={<CustomerRoutes />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;

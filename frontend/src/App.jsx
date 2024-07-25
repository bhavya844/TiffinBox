import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUsPage from "./pages/ContactUsPage";
import FAQPage from "./pages/FAQPage";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import LandingPage from "./pages/LandingPage";
import PendingRequests from "./pages/Admin/PendingRequests";

function App() {
  return (
    <main data-theme="bumblebee">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/faqs" element={<FAQPage />} />

          {/* admin routes starts */}
          <Route path="/admin-pending-request" element={<PendingRequests />} />
          {/* admin routes ends */}
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;

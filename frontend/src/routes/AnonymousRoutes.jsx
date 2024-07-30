import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import ContactUsPage from "../pages/ContactUsPage";
import FAQPage from "../pages/FAQPage";
import LoginPage from "../pages/Authentication/LoginPage";
import CustomerRegisterPage from "../pages/Authentication/CustomerRegisterPage";
import SellerRegisterPage from "../pages/Authentication/SellerRegisterPage";

function AnonymousRoutes() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/customer-register" element={<CustomerRegisterPage />} />
        <Route path="/seller-register" element={<SellerRegisterPage />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default AnonymousRoutes;

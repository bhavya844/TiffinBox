import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import AboutUs from "../components/AboutUs";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
// import ReviewsManagement from "../components/ReviewsManagement";



function LandingPage() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <Services />
      <HowItWorks />
      <AboutUs />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}

export default LandingPage;

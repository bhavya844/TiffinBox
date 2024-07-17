import React from "react";
import { Link } from "react-router-dom";

function WhyChooseUs() {
  return (
    <section className="max-w-5xl py-10 md:py-16">
      <div className="px-4 mx-auto container2">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative flex items-center overflow-hidden text-white rounded-lg">
            <div
              className="absolute inset-0 bg-center bg-cover opacity-100"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dk1fim9hl/image/upload/v1719262324/Tiffin%20Box/jtmgqwb9cp9mzqxqkbx6.jpg')`,
              }}
            ></div>
            <div className="relative w-full h-full p-6 bg-black bg-opacity-60">
              <h3 className="mb-4 text-3xl font-bold text-center ">
                Why Choose Us?
              </h3>
              <p className="mb-4 text-lg text-center">
                TiffinBox is an online marketplace that connects you with the
                top tiffin sellers in your city. We offer a wide variety of
                tiffin services to choose from, so you can find the perfect
                tiffins to fit your needs and wallets.
              </p>
              <p className="mb-4 text-lg text-center">
                We always maintain the highest standards in food hygiene to
                produce the highest quality food at an affordable price.
              </p>
            </div>
          </div>
          <div className="relative flex items-center overflow-hidden text-black rounded-lg">
            <div
              className="absolute inset-0 bg-center bg-cover opacity-100"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dk1fim9hl/image/upload/v1719262388/Tiffin%20Box/jsxynofqsxdkeneebcgv.jpg')`,
              }}
            ></div>
            <div className="relative flex flex-col items-center w-full h-full p-6 bg-orange-400 bg-opacity-50">
              <h3 className="mb-4 text-3xl font-bold text-center ">REWARDS</h3>
              <p className="mb-4 text-lg text-center">
                TiffinBox's rewards program is a great way to save money on your
                favorite tiffins. Earn points on every dollar you spend and
                redeem your collected "Rewards" points for a free tiffin or use
                a discount on future orders.
              </p>
              <p className="mb-4 text-lg text-center">
                So what are you waiting for? Sign up today and start earning
                points!
              </p>
              <Link className="flex items-center justify-center px-8 py-2 text-xl transition duration-300 shadow-lg btn btn-warning bg-secondary rounded-xl">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

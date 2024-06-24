import React from "react";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";

function WhyChooseUs() {
  return (
    <section className="py-10 md:py-16 max-w-5xl">
      <div className="container2 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative rounded-lg overflow-hidden text-white flex items-center">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-100"
              style={{ backgroundImage: `url(${image9})` }}
            ></div>
            <div className="relative p-6 bg-black bg-opacity-60 w-full h-full">
              <h3 className="text-3xl text-center font-bold mb-4 ">
                Why Choose Us?
              </h3>
              <p className="text-lg text-center mb-4">
                TiffinBox is an online marketplace that connects you with the
                top tiffin sellers in your city. We offer a wide variety of
                tiffin services to choose from, so you can find the perfect
                tiffins to fit your needs and wallets.
              </p>
              <p className="text-lg mb-4 text-center">
                We always maintain the highest standards in food hygiene to
                produce the highest quality food at an affordable price.
              </p>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden text-black flex items-center">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-100"
              style={{ backgroundImage: `url(${image8})` }}
            ></div>
            <div className="relative p-6 bg-orange-400 bg-opacity-50 w-full h-full flex flex-col items-center">
              <h3 className="text-3xl text-center font-bold mb-4 ">REWARDS</h3>
              <p className="text-lg text-center mb-4">
                TiffinBox's rewards program is a great way to save money on your
                favorite tiffins. Earn points on every dollar you spend and
                redeem your collected "Rewards" points for a free tiffin or use
                a discount on future orders.
              </p>
              <p className="text-lg mb-4 text-center">
                So what are you waiting for? Sign up today and start earning
                points!
              </p>
              <button className="btn btn-warning bg-secondary text-xl py-2 px-8 rounded-xl shadow-lg transition duration-300 flex items-center justify-center">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

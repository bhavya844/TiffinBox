import React from "react";
import { GiClick } from "react-icons/gi";
import { BiSolidDish } from "react-icons/bi";
import { MdDeliveryDining } from "react-icons/md";

function HowItWorks() {
  return (
    <div className="max-w-5xl px-4 py-12">
      <h2 className="mb-8 text-4xl font-bold text-center ">How It Works</h2>
      <p className="mb-12 text-2xl text-center ">
        Choose your favorite dishes, place your order, and enjoy seamless
        delivery straight to your doorstep with TiffinBox.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="p-6 transition duration-300 ease-in-out origin-center transform border border-gray-300 rounded-lg hover:bg-orange-400 hover:border-orange-700 hover:scale-105 hover:shadow-2xl">
          <div className="flex justify-center mb-4">
            <GiClick className="w-12 h-12" />
          </div>
          <h3 className="mb-2 text-xl font-bold text-center">Choose Option</h3>
          <p className="text-center">
            Browse through our menu and select your desired dishes with ease.
          </p>
        </div>
        <div className="p-6 transition duration-300 ease-in-out border border-gray-300 rounded-lg hover:bg-orange-400 hover:border-orange-700 hover:scale-105 hover:shadow-2xl">
          <div className="flex justify-center mb-4">
            <BiSolidDish className="w-12 h-12" />
          </div>
          <h3 className="mb-2 text-xl font-bold text-center">
            Order In Process
          </h3>
          <p className="text-center">
            Once you place your order, our team prepares it with the utmost care
            and quality.
          </p>
        </div>
        <div className="p-6 transition duration-300 ease-in-out border border-gray-300 rounded-lg hover:bg-orange-400 hover:border-orange-700 hover:scale-105 hover:shadow-2xl">
          <div className="flex justify-center mb-4">
            <MdDeliveryDining className="w-12 h-12" />
          </div>
          <h3 className="mb-2 text-xl font-bold text-center">Delivery</h3>
          <p className="text-center ">
            Your freshly prepared meal is promptly delivered to your specified
            location.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;

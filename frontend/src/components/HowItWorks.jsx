import React from "react";
import { GiClick } from "react-icons/gi";
import { BiSolidDish } from "react-icons/bi";
import { MdDeliveryDining } from "react-icons/md";

function HowItWorks() {
  return (
    <div className="max-w-5xl py-12">
      <h2 className="text-center text-4xl font-bold mb-8 ">How It Works</h2>
      <p className="text-center text-2xl mb-12 ">
        Choose your favorite dishes, place your order, and enjoy seamless
        delivery straight to your doorstep with TiffinBox.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border border-gray-300 rounded-lg hover:bg-orange-400 hover:border-orange-700 hover:scale-105 hover:shadow-2xl transform origin-center transition duration-300 ease-in-out">
          <div className="flex justify-center mb-4">
            <GiClick className="w-12 h-12" />
          </div>
          <h3 className="text-center text-xl font-bold mb-2">Choose Option</h3>
          <p className="text-center">
            Browse through our menu and select your desired dishes with ease.
          </p>
        </div>
        <div className="p-6 border border-gray-300 rounded-lg hover:bg-orange-400 hover:border-orange-700 hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
          <div className="flex justify-center mb-4">
            <BiSolidDish className="w-12 h-12" />
          </div>
          <h3 className="text-center text-xl font-bold mb-2">
            Order In Process
          </h3>
          <p className="text-center">
            Once you place your order, our team prepares it with the utmost care
            and quality.
          </p>
        </div>
        <div className="p-6 border border-gray-300 rounded-lg hover:bg-orange-400 hover:border-orange-700 hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
          <div className="flex justify-center mb-4">
            <MdDeliveryDining className="w-12 h-12" />
          </div>
          <h3 className="text-center text-xl font-bold mb-2">Delivery</h3>
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

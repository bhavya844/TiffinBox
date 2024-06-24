import React from "react";
import { FaCoins, FaCar } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { IoCheckmarkCircle } from "react-icons/io5";
import { LuClipboardList } from "react-icons/lu";
import { MdFoodBank } from "react-icons/md";

const cardData = [
  {
    icon: <IoCheckmarkCircle className="text-6xl" />,
    title: "Payment Management",
    text: "Efficiently handle and track all your payments with our secure system.",
  },
  {
    icon: <LuClipboardList className="text-6xl" />,
    title: "Subcription Service",
    text: "Enjoy regular deliveries with our convenient and customizable subscription service.",
  },
  {
    icon: <MdFoodBank className="text-6xl" />,
    title: "Home Delivery",
    text: "Get your favorite meals delivered hot and fresh right to your doorstep.",
  },
  {
    icon: <FaCoins className="text-6xl" />,
    title: "Reward Points",
    text: "Earn points on every order and redeem them for exciting rewards and discounts.",
  },
  {
    icon: <CiCreditCard1 className="text-6xl" />,
    title: "Online Ordering",
    text: "Order your favorite dishes easily and quickly through our user-friendly online platform.",
  },
  {
    icon: <FaCar className="text-6xl" />,
    title: "Take Away",
    text: "Conveniently pick up your order from our location without any waiting time.",
  },
];

function Services() {
  return (
    <section className="max-w-5xl px-4 py-10 md:py-16">
      <div className="">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-5xl ">Our Services</h2>
          <p className="mb-6 text-lg sm:text-2xl md:mb-14">
            Experience our best services.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-6 xl:gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="w-full max-w-md mx-auto transition-all duration-300 card bg-base-200 transform-gpu hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="items-center gap-4 text-center card-body">
                {card.icon}
                <h2 className="card-title">{card.title}</h2>
                <p>
                  {card.text.split(" ").map((word, i) => (
                    <span key={i} className="break-words">
                      {word}{" "}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

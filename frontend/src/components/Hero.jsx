import React from "react";
import { BiSolidDish } from "react-icons/bi";

function Hero() {
  return (
    <div className="w-full flex flex-col items-center">
      <section className="max-w-5xl mt-20 overflow-hidden rounded-md shadow-md hero h-96 bg-bgContactUs">
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-4xl font-bold md:text-6xl">
              Delicious Home-Cooked Meals
            </h1>
            <h2 className="mb-5 sm:mb-7 sm:text-2xl text-2xl font-semibold">
              Find the best tiffins near you
            </h2>
            <button className="btn btn-secondary px-8 text-xl text-white">
              Explore <BiSolidDish className="ml-2 w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;

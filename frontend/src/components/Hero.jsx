import React from "react";
import { BiSolidDish } from "react-icons/bi";

function Hero() {
  return (
    <div className="flex flex-col items-center w-full">
      <section className="max-w-5xl overflow-hidden rounded-md shadow-md hero h-96 bg-bgHero">
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-4xl font-bold md:text-6xl">
              Delicious Home-Cooked Meals
            </h1>
            <h2 className="mb-5 text-2xl font-semibold sm:mb-7 sm:text-2xl">
              Find the best tiffins near you
            </h2>
            <button className="px-8 text-xl text-white btn btn-secondary">
              Explore <BiSolidDish className="w-6 h-6 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;

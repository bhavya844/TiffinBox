import React from "react";
import image7 from "../assets/image7.jpg";

function AboutUs() {
  return (
    <section className="py-10 md:py-16 max-w-5xl">
      <div className="md:px-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold ">About Us</h1>
        </div>
        <div className="grid place-content-center">
          <div className="w-full mb-8 flex justify-center">
            <img
              src={image7}
              alt="About Us"
              className="rounded-full w-72 h-72 md:w-3/4 md:h-auto object-cover shadow-animation circle-animation"
            />
          </div>
          <div className="w-full flex flex-col justify-center px-4">
            <p className="text-lg mb-4 text-justify indent-20">
              Welcome to TiffinBox, your go-to platform for seamless food
              ordering and delivery. At TiffinBox, our mission is to simplify
              the food ordering experience for both customers and food service
              providers. We aim to enhance your food journey by offering a
              user-friendly platform that includes real-time delivery tracking,
              reward points, and intuitive dashboards. Our comprehensive
              solution also features an administrator role to manage both
              customers and food service providers, ensuring a smooth and
              efficient process for everyone involved.
            </p>
            <p className="text-lg mb-4 text-justify indent-20">
              Our application caters to three primary user groups: customers,
              food service providers, and administrators. Customers can browse
              menus, place orders, make payments, and track deliveries
              effortlessly. Food service providers benefit from an interactive
              platform to manage offerings, handle orders, and analyze sales
              performance. Administrators use robust controls to manage user
              accounts, process registration requests, and monitor platform
              activities with detailed statistics and charts. TiffinBox is
              designed for anyone who loves writing and reading reviews, earning
              points, and staying updated on their orders.
            </p>
            <p className="text-lg text-justify indent-20">
              At TiffinBox, we are committed to making your food ordering
              experience smooth and enjoyable. Join us and discover the
              convenience of ordering your favorite meals with just a few
              clicks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

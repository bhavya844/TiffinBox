import React from "react";
import image10 from "../assets/image10.jpg";
import image11 from "../assets/image11.jpg";
import image12 from "../assets/image12.jpg";

const testimonials = [
  {
    name: "John Smith",
    role: "Restaurant Owner/ Seller",
    image: image10,
    text: "TiffinBox is incredibly user-friendly and efficient, transforming our operations with real-time updates and analytics. It's a game-changer for any food service provider. Happy and satified with the services",
    rating: 4.5,
  },
  {
    name: "Mateo Rodriguez",
    role: "Food Delivery Boy",
    image: image11,
    text: "TiffinBox has made my job much easier. The real-time tracking and updates help me deliver orders efficiently. The app's intuitive interface ensures I never miss a delivery. ",
    rating: 5,
  },
  {
    name: "Lisa Kudro",
    role: "Customer",
    image: image12,
    text: "The reward points system is a fantastic bonus, and the overall service has been consistently reliable. TiffinBox has become my go-to for all my meal needs. Happy and satified with the services",
    rating: 4,
  },
];

function Testimonials() {
  return (
    <div className="bg-white py-8 max-w-5xl">
      <h2 className="text-center text-3xl font-bold mb-8">Testimonials</h2>
      <div className="flex flex-wrap justify-around items-stretch">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="max-w-sm w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="rounded overflow-hidden shadow-lg text-center p-6 bg-gray-100">
              <img
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-gray-600">{testimonial.role}</p>
              <p className="mt-4 text-gray-700">{testimonial.text}</p>
              <div className="mt-4">
                {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-2xl">
                    ★
                  </span>
                ))}
                {testimonial.rating % 1 !== 0 && (
                  <span className="text-yellow-500 text-2xl">★</span>
                )}
                {[...Array(5 - Math.ceil(testimonial.rating))].map((_, i) => (
                  <span key={i} className="text-gray-400 text-2xl">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;

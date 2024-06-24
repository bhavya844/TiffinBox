import React from "react";

const testimonials = [
  {
    name: "John Smith",
    role: "Restaurant Owner/ Seller",
    image:
      "https://res.cloudinary.com/dk1fim9hl/image/upload/v1719262465/Tiffin%20Box/qjqjjqxcsofnbnaoub5o.jpg",
    text: "TiffinBox is incredibly user-friendly and efficient, transforming our operations with real-time updates and analytics. It's a game-changer for any food service provider. Happy and satified with the services",
    rating: 4.5,
  },
  {
    name: "Mateo Rodriguez",
    role: "Food Delivery Boy",
    image:
      "https://res.cloudinary.com/dk1fim9hl/image/upload/v1719262465/Tiffin%20Box/wnkgucon7ak5hbc73xfa.jpg",
    text: "TiffinBox has made my job much easier. The real-time tracking and updates help me deliver orders efficiently. The app's intuitive interface ensures I never miss a delivery. ",
    rating: 5,
  },
  {
    name: "Lisa Kudro",
    role: "Customer",
    image:
      "https://res.cloudinary.com/dk1fim9hl/image/upload/v1719262465/Tiffin%20Box/npxsqzo5u6kgmgafewm8.jpg",
    text: "The reward points system is a fantastic bonus, and the overall service has been consistently reliable. TiffinBox has become my go-to for all my meal needs. Happy and satified with the services",
    rating: 4,
  },
];

function Testimonials() {
  return (
    <div className="max-w-5xl py-8 bg-white">
      <h2 className="mb-8 text-3xl font-bold text-center">Testimonials</h2>
      <div className="flex flex-wrap items-stretch justify-around">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full max-w-sm p-4 sm:w-1/2 lg:w-1/3">
            <div className="p-6 overflow-hidden text-center bg-gray-100 rounded shadow-lg">
              <img
                className="object-cover w-24 h-24 mx-auto mb-4 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-gray-600">{testimonial.role}</p>
              <p className="mt-4 text-gray-700">{testimonial.text}</p>
              <div className="mt-4">
                {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                  <span key={i} className="text-2xl text-yellow-500">
                    ★
                  </span>
                ))}
                {testimonial.rating % 1 !== 0 && (
                  <span className="text-2xl text-yellow-500">★</span>
                )}
                {[...Array(5 - Math.ceil(testimonial.rating))].map((_, i) => (
                  <span key={i} className="text-2xl text-gray-400">
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

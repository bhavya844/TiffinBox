/**
 * Author: Savan Patel
 */

import React from 'react';

const MealCard = ({ mealId, image, name, price, handleCardClick }) => {
  return (
    <div
      className="border rounded-lg p-2 border-gray-300 text-center bg-white shadow-xl cursor-pointer overflow-hidden"
      onClick={() => handleCardClick(mealId)}
    >
      <div className="h-32 w-full mb-2 overflow-hidden">
        <img src={image} alt={name} className="object-cover h-full w-full" />
      </div>
      <div className="text-black font-mono overflow-hidden text-ellipsis whitespace-nowrap">
        {name}
      </div>
      <div className="text-black font-mono overflow-hidden text-ellipsis whitespace-nowrap">
        $ {price}
      </div>
    </div>
  );
};

export default MealCard;

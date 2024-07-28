import React from 'react';

const FoodProviderCard = ({ provider, handleClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden" onClick={() => handleClick(provider.foodServiceProviderId)}>
      <img src={provider.profileImage} alt={provider.name} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{provider.companyName}</h3>
        <p className='text-gray-600'>{provider.firstName} {provider.lastName}</p>
        <p className="text-gray-600">{provider.companyAddress}, {provider.city}</p>
        <p className='text-gray-600'>{provider.province}</p>
        <p className='text-gray-600'>{provider.contact}</p>
      </div>
    </div>
  );
};

export default FoodProviderCard;

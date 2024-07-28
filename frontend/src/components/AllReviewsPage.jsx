import React, { useState, useEffect } from 'react';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:8080';

function ReviewsManagement() {
  const foodServiceProviderId = '66a42535048a7362220864d6'; // Static ID for demonstration
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/reviews/foodServiceProvider/${foodServiceProviderId}`,{
            headers:{
                Authorization:`Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MUBleGFtcGxlbWFpbC5jb20iLCJpYXQiOjE3MjIxNjQ5NzksImV4cCI6MTcyMjE2ODU3OX0.N3YwLal-5gSFipMFc_q72ldD1O7RCC8V3dwIFJqQAKE`
            }
        });
        console.log('Response data:', response.data);

        const fetchedReviews = response.data.map(review => ({
          ...review,
          user: {
            name: `${review.firstName} ${review.lastName}`,
            image: 'https://via.placeholder.com/150' // Assuming default image for now
          },
          text: review.reviewDescription,
          rating: review.reviewStars
        }));
        setReviews(fetchedReviews);

        const totalStars = fetchedReviews.reduce((acc, curr) => acc + curr.rating, 0);
        const avgRating = (totalStars / fetchedReviews.length) || 0;
        setAverageRating(avgRating.toFixed(1));
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchReviews();
  }, []); // Only run once, since foodServiceProviderId is constant

  return (
    <div className="min-h-screen bg-white p-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-lg col-span-1 md:col-span-2" style={{ width: '600px' }}>
          <h2 className="text-2xl font-bold text-center mb-4">All Reviews for Provider {foodServiceProviderId}</h2>
          {reviews.length === 0 ? (
            <p className="text-center text-gray-600">No reviews available</p>
          ) : (
            reviews.map((review, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0 py-4" style={{ height: '150px', overflow: 'hidden' }}>
                <div className="flex items-center space-x-4">
                  <img src={review.user.image} alt={review.user.name} className="w-12 h-12 rounded-full object-cover" />
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold">{review.user.name}</h3>
                    <div className="text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < review.rating ? 'text-yellow-500' : 'text-gray-400'}>★</span>
                      ))}
                    </div>
                    <p className="mt-2 text-gray-600 truncate">{review.text}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ReviewsManagement;

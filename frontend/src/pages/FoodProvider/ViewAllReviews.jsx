/**
 * Author: Bhavya Dave
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function ReviewsManagement() {
  const { foodProviderId } = useParams();
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [ratingDistribution, setRatingDistribution] = useState(new Array(5).fill({ value: 0 }));
  const [averageRating, setAverageRating] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState({});

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/foodserviceprovider/view-all-reviews/${foodProviderId}`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MUBleGFtcGxlbWFpbC5jb20iLCJpYXQiOjE3MjIyNzM1ODQsImV4cCI6MTcyMjI3NzE4NH0.Q6JzihGoo0-Fj8b866Jn5cBsap2ZElJRB1A67BYUU94`
          }
        });
        const fetchedReviews = response.data.map(review => ({
          ...review,
          user: {
            name: `${review.firstName} ${review.lastName}`,
            image: review.image || "path_to_default_image.jpg"
          },
          text: review.reviewDescription,
          rating: review.reviewStars
        }));

        setReviews(fetchedReviews.sort((a, b) => b.rating - a.rating).slice(0, 3));
        const totalStars = fetchedReviews.reduce((acc, curr) => acc + curr.rating, 0);
        setAverageRating(fetchedReviews.length > 0 ? totalStars / fetchedReviews.length : 0);

        const distribution = new Array(5).fill(0).map((_, index) => ({
          value: (fetchedReviews.filter(review => review.rating === 5 - index).length / fetchedReviews.length * 100) || 0
        }));
        setRatingDistribution(distribution);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchReviews();
  }, [foodProviderId]);

  const toggleReview = index => {
    setExpandedReviews(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const reviewTextStyle = index => ({
    cursor: 'pointer',
    width: '100%'
  });

  return (
    <div className="min-h-screen bg-white p-5 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-3 flex justify-between items-center mb-4">
          <button onClick={() => navigate(`/add-review/${foodProviderId}`)} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow">
            Add a Review
          </button>
          <button onClick={() => navigate(`/all-reviews/${foodProviderId}`)} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow">
            View All Reviews
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg col-span-1">
          <h2 className="text-2xl font-bold text-center">Ratings Overview</h2>
          <div className="flex items-center justify-center mb-4">
            <span className="text-6xl font-bold text-gray-800">{averageRating.toFixed(1)}</span>
            <span className="text-yellow-500 ml-3 text-5xl">★</span>
          </div>
          <div className="space-y-3">
            {ratingDistribution.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-14 text-right text-lg font-semibold text-gray-600">
                  {5 - index} stars
                </div>
                <div className="flex-1 ml-4 h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="bg-yellow-500 h-full" style={{ width: `${item.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg col-span-1 md:col-span-2" style={{ width: '100%' }}>
          <h2 className="text-2xl font-bold text-center mb-4">Top Reviews</h2>
          {reviews.map((review, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0 py-4 overflow-hidden">
              <div className="flex items-center space-x-4 overflow-hidden">
                <img src={review.user.image} alt={review.user.name} className="w-12 h-12 rounded-full object-cover" />
                <div className="flex-grow overflow-hidden">
                  <h3 className="text-lg font-semibold">{review.user.name}</h3>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < review.rating ? 'text-yellow-500' : 'text-gray-400'}>★</span>
                    ))}
                  </div>
                  <p style={reviewTextStyle(index)} onClick={() => toggleReview(index)}>
                    {expandedReviews[index] ? review.text : `${review.text.split(' ').slice(0, 20).join(' ')}${review.text.split(' ').length > 20 ? '...' : ''}`}
                    {review.text.split(' ').length > 20 && <span className="text-blue-500">{expandedReviews[index] ? ' See less' : ' See more'}</span>}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewsManagement;

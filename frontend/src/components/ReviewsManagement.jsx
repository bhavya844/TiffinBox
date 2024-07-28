import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function ReviewsManagement() {
  const { foodProviderId } = useParams();
  console.log(foodProviderId)
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [ratingDistribution, setRatingDistribution] = useState(new Array(5).fill({ value: 0 }));
  const [averageRating, setAverageRating] = useState(0);  // Ensure default is a number
  const [expandedReviews, setExpandedReviews] = useState({});

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/reviews/foodServiceProvider/${foodProviderId}`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MUBleGFtcGxlbWFpbC5jb20iLCJpYXQiOjE3MjIxOTE1MzYsImV4cCI6MTcyMjE5NTEzNn0.cZntchwribeWj23_F4l16mdUbn_x08WnBhCxFO1JY8w`
          }
        });
        console.log('Response data:', response.data);

        const fetchedReviews = response.data.map(review => ({
          ...review,
          user: {
            name: `${review.firstName} ${review.lastName}`,
            image: review.image || "path_to_default_image.jpg"
          },
          text: review.reviewDescription,
          rating: review.reviewStars
        }));

        setReviews(fetchedReviews);

        const totalStars = fetchedReviews.reduce((acc, curr) => acc + (curr.rating || 0), 0);  // Handle undefined rating
        const avgRating = fetchedReviews.length > 0 ? (totalStars / fetchedReviews.length) : 0;
        setAverageRating(avgRating);  // Always a number

        // Calculate distribution for each star
        const distribution = new Array(5).fill(0).map((_, index) => ({
          value: (fetchedReviews.filter(review => review.rating === 5 - index).length / fetchedReviews.length * 100) || 0
        }));
        setRatingDistribution(distribution);

      } catch (error) {
        console.error('Error fetching data:', error);
        setAverageRating(0);  // Reset to default if error
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

  const handleViewAllReviewsClick = () => {
    navigate(`/all-reviews/${foodProviderId}`);
  };

  const handleAddReviewClick = () => {
    navigate('/add-review', { state: { foodProviderId } });
  };

  return (
    <div className="min-h-screen bg-white p-5 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-3 flex justify-between items-center mb-4">
          <button onClick={handleAddReviewClick} className="btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow">
            Add a Review
          </button>
          <button onClick={handleViewAllReviewsClick} className="btn bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow">
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
                  {5 - index} {5 - index === 1 ? 'star' : 'stars'}
                </div>
                <div className="flex-1 ml-4 h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="bg-yellow-500 h-full" style={{ width: `${item.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg col-span-1 md:col-span-2" style={{ width: '100%' }}>
          <h2 className="text-2xl font-bold text-center mb-4">All Reviews</h2>
          {reviews.map((review, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0 py-4">
              <div className="flex items-center space-x-4">
                <img src={review.user.image} alt={review.user.name} className="w-12 h-12 rounded-full object-cover" />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{review.user.name}</h3>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < review.rating ? 'text-yellow-500' : 'text-gray-400'}>★</span>
                    ))}
                  </div>
                  <p className={`mt-2 text-gray-600 ${expandedReviews[index] ? '' : 'truncate'}`}>
                    {review.text}
                  </p>
                  <button className="text-indigo-600 hover:text-indigo-800" onClick={() => toggleReview(index)}>
                    {expandedReviews[index] ? 'See less' : 'See more'}
                  </button>
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

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ReviewsManagement() {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([
    {
      user: 'User 1',
      rating: 4,
      text: 'Lorem ipsum dolor asdg auysdg ayus dasd ashd aosgdoausyg dauys gduya gsdoauy gsod a. asd asdg aiusd as..',
      image: 'https://example.com/user1.jpg',
    },
    {
      user: 'User 2',
      rating: 3,
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ...',
      image: 'https://example.com/user2.jpg',
    },
  ]);
  const [ratingDistribution, setRatingDistribution] = useState([
    { value: 70 }, { value: 20 }, { value: 5 }, { value: 3 }, { value: 2 }
  ]);
  const [averageRating, setAverageRating] = useState(4.2);
  const [expandedReviews, setExpandedReviews] = useState({});

  const toggleReview = (index) => {
    setExpandedReviews(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const handleViewAllReviewsClick = () => {
    navigate('/all-reviews');
  };

  const handleAddReviewClick = () => {
    navigate('/add-review');
  };

  return (
    <div className="min-h-screen bg-white p-5">
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
                  <div className="bg-yellow-500 h-full" style={{ width: `${(item.value / 100) * 100}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg col-span-1 md:col-span-2" style={{ width: '600px' }}>
          <h2 className="text-2xl font-bold text-center mb-4">All Reviews</h2>
          {reviews.map((review, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0 py-4" style={{ height: '150px', overflow: 'hidden' }}>
              <div className="flex items-center space-x-4">
                <img src={review.image} alt={review.user} className="w-12 h-12 rounded-full object-cover" />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{review.user}</h3>
                  <div className="text-yellow-500">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className={i < review.rating ? 'text-yellow-500' : 'text-gray-400'}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className={`mt-2 text-gray-600 ${expandedReviews[index] ? '' : 'truncate'}`}>
                {review.text}
              </p>
              <button className="text-indigo-600 hover:text-indigo-800" onClick={() => toggleReview(index)}>
                {expandedReviews[index] ? 'See less' : 'See more'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewsManagement;

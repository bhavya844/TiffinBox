/**
 * Author: Bhavya Dave
 */

import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const SubmitReview = () => {
  // const location = useLocation();
  // const { foodProviderId } = location.state;
  const { foodProviderId } = useParams();
  console.log(foodProviderId)
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const submitButtonClick = async (e) => {
    e.preventDefault();

    if (rating === 0 || review.trim() === '') {
      toast.error('Please provide a rating and a review before submitting.', {
        position: "top-center",
        duration: 2000
      });
      return;
    }

    if (review.trim().split(/\s+/).length < 2) {
      toast.error('Please write a more detailed review.', {
        position: "top-center",
        duration: 2000
      });
      return;
    }

    
    const reviewData = {
      reviewDescription: review,
      reviewStars: rating,
      foodServiceProviderId: foodProviderId
    };
    console.log(reviewData)
    try {
      const abc= await axios.post('http://localhost:8080/api/reviews/addReview', reviewData,{
        headers:{
          Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MUBleGFtcGxlbWFpbC5jb20iLCJpYXQiOjE3MjIyNzM1ODQsImV4cCI6MTcyMjI3NzE4NH0.Q6JzihGoo0-Fj8b866Jn5cBsap2ZElJRB1A67BYUU94'
        }
      });
      console.log(abc)
      toast.success('Your review has been successfully submitted.', {
        position: "top-center",
        duration: 2000
      });

      navigate(`/customer/food-provider-page/${foodProviderId}`)

    } catch (error) {
      console.error('Failed to submit review:', error);
      toast.error('Failed to submit the review. Please try again.', {
        position: "top-center",
        duration: 2000
      });
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-5">
      <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={submitButtonClick} className="space-y-6">
          <h1 className="text-2xl font-bold text-gray-800">Give your review for Provider</h1>
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Select a Rating:</label>
            <div className="flex">
              {[...Array(5)].map((_, index) => {
                return (
                  <button
                    key={index + 1}
                    className={`text-2xl ${index < rating ? 'text-yellow-500' : 'text-gray-400'} focus:outline-none`}
                    onClick={() => handleRating(index + 1)}
                    type="button"
                    aria-label={`Rate ${index + 1}`}
                  >
                    ★
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Your Review:</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={review}
              onChange={handleReviewChange}
              placeholder="Start writing a review..."
              aria-label="Review"
            />
          </div>
          <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">Submit</button>
            <button onClick={() => navigate(`/customer/food-provider-page/${foodProviderId}`)} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none">Go Back</button>
          </div>
        </form>
        <Toaster />
      </div>
    </div>
  );
};

export default SubmitReview;

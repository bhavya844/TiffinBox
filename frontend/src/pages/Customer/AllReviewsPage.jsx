/**
 * Author: Bhavya Dave
 */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function AllReviewsPage() {
  const { foodProviderId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [expandedReviews, setExpandedReviews] = useState({});
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/reviews/foodServiceProvider/${foodProviderId}`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MUBleGFtcGxlbWFpbC5jb20iLCJpYXQiOjE3MjIyNzM1ODQsImV4cCI6MTcyMjI3NzE4NH0.Q6JzihGoo0-Fj8b866Jn5cBsap2ZElJRB1A67BYUU94`,
            },
          }
        );
        console.log("Response data:", response.data);

        const fetchedReviews = response.data.map((review) => ({
          ...review,
          user: {
            name: `${review.firstName} ${review.lastName}`,
            image: "",
          },
          text: review.reviewDescription,
          rating: review.reviewStars,
        }));
        setReviews(fetchedReviews);

        const totalStars = fetchedReviews.reduce(
          (acc, curr) => acc + curr.rating,
          0
        );
        const avgRating = totalStars / fetchedReviews.length || 0;
        setAverageRating(avgRating.toFixed(1));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchReviews();
  }, [foodProviderId]); // Dependency on foodProviderId to re-fetch if it changes

  const toggleReview = (index) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5 flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-center mb-4">
            All Reviews 
          </h2>
          {reviews.length === 0 ? (
            <p className="text-center text-gray-600">No reviews available</p>
          ) : (
            reviews.map((review, index) => (
              <div
                key={index}
                className="border-b border-gray-300 last:border-b-0 py-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={review.user.image || "path_to_default_image.jpg"}
                    alt={review.user.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold">
                      {review.user.name}
                    </h3>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={
                            i < review.rating
                              ? "text-yellow-500"
                              : "text-gray-400"
                          }
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <p
                      className={`mt-2 text-gray-600 ${
                        expandedReviews[index] ? "" : "truncate"
                      }`}
                    >
                      {expandedReviews[index] ? review.text : `${review.text.split(' ').slice(0, 20).join(' ')}${review.text.split(' ').length > 20 ? '...' : ''}`}
                    </p>
                    {review.text.split(' ').length > 20 && (
                      <button
                        className="text-indigo-600 hover:text-indigo-800"
                        onClick={() => toggleReview(index)}
                      >
                        {expandedReviews[index] ? "See less" : "See more"}
                      </button>
                    )}
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

export default AllReviewsPage;

import React from 'react';


function ReviewCard({ review }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow mb-4">
            <div className="flex items-center">
                <img className="w-12 h-12 rounded-full mr-4" src={review.image} alt="User" />
                <div className="flex-grow">
                    <h4 className="text-lg font-semibold">{review.user}</h4>
                    <span className="text-sm text-gray-600">{review.date}</span>
                </div>
            </div>
            <div className="mt-2">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-xl ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}>★</span>
                ))}
            </div>
            <p className="mt-2 text-gray-700">{review.text}</p>
            <button className="text-indigo-600 hover:text-indigo-800 mt-2">See more</button>
        </div>
    );
}


function AllReviewsPage() {
    const reviews = [
        {
            id: 1,
            user: "User 1",
            date: "Two months ago",
            rating: 3,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nunc neque, sit amet cursus...",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 2,
            user: "User 2",
            date: "Four months ago",
            rating: 4,
            text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
            image: "https://via.placeholder.com/150"
        }
    ];

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Kathiyawadi Tiffin Reviews</h1>
            <div className="flex justify-center items-center mb-4">
                <span className="text-6xl font-bold text-gray-800">4.2</span>
                <span className="text-yellow-500 ml-2 text-5xl">★</span>
                <span className="ml-4 text-lg text-gray-600">(50 reviews)</span>
            </div>
            {reviews.map(review => (
                <ReviewCard key={review.id} review={review} />
            ))}
            <div className="flex justify-center mt-4">
                <button className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg shadow">Load More</button>
            </div>
        </div>
    );
}

export default AllReviewsPage;

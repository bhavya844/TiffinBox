package com.tiffinbox.backend.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.tiffinbox.backend.dto.request.ReviewRequest;
import com.tiffinbox.backend.models.FoodServiceProvider;
import com.tiffinbox.backend.models.Review;
import com.tiffinbox.backend.repositories.ReviewRepository;
import com.tiffinbox.backend.repositories.SellerRepository;
import com.tiffinbox.backend.repositories.UserRepository;
import com.tiffinbox.backend.services.ReviewService;
import com.tiffinbox.backend.models.User;

@Service
public class ReviewServiceImpl implements ReviewService{

    @Autowired
    ReviewRepository reviewRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    SellerRepository sellerRepository;

    @Override
    public Review addReview(ReviewRequest reviewRequest){
        UserDetails userDetails= ((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        String email=userDetails.getUsername();
        User currentUser=userRepository.findByEmail(email);
        Review review = new Review();
        review.setReviewDescription(reviewRequest.getReviewDescription());
        review.setReviewStars(reviewRequest.getReviewStars());
        review.setUser(currentUser);
        FoodServiceProvider foodServiceProvider = sellerRepository.findById(reviewRequest.getFoodServiceProviderId())
                .orElseThrow(() -> new RuntimeException("Food Service Provider not found"));
        review.setFoodServiceProvider(foodServiceProvider);
        return reviewRepository.save(review);
    }


    @Override
    public List<Review> getReviewsByFoodServiceProviderId(String foodServiceProviderId){
        return  reviewRepository.findByFoodServiceProviderFoodServiceProviderId(foodServiceProviderId);
    }

}

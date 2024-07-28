package com.tiffinbox.backend.services.impl;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.tiffinbox.backend.dto.request.ReviewRequest;
import com.tiffinbox.backend.dto.response.BasicResponse;
import com.tiffinbox.backend.dto.response.ReviewResponse;
import com.tiffinbox.backend.exceptions.ApiRequestException;
import com.tiffinbox.backend.models.FoodServiceProvider;
import com.tiffinbox.backend.models.Review;
import com.tiffinbox.backend.repositories.ReviewRepository;
import com.tiffinbox.backend.repositories.SellerRepository;
import com.tiffinbox.backend.repositories.UserRepository;
import com.tiffinbox.backend.services.ReviewService;
import com.tiffinbox.backend.utils.ResponseMessages;
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
    public BasicResponse addReview(ReviewRequest reviewRequest, Principal principal){
        User user = userRepository.findByEmail(principal.getName());
        BasicResponse basicResponse = new BasicResponse();
        FoodServiceProvider foodServiceProvider = sellerRepository.findById(reviewRequest.getFoodServiceProviderId())
                .orElseThrow(() -> new ApiRequestException("Food Service Provider not found"));
        Review review = new Review();
        review.setReviewDescription(reviewRequest.getReviewDescription());
        review.setReviewStars(reviewRequest.getReviewStars());
        review.setCustomer(user.getCustomer());
        review.setFoodServiceProvider(foodServiceProvider);
        reviewRepository.save(review);
        basicResponse.setMessage("Review added successfully!");
        basicResponse.setSuccess(true);
        basicResponse.setTimeStamp(LocalDateTime.now());
        return basicResponse;
    }

    @Override
    public List<ReviewResponse> getReviewsByFoodServiceProviderId(String foodServiceProviderId) {
        Optional<FoodServiceProvider> foodServiceProvider= sellerRepository.findById(foodServiceProviderId);

        if(foodServiceProvider.isEmpty()){
            throw new ApiRequestException(ResponseMessages.USER_NOT_FOUND);
        }

        List<Review> reviews = reviewRepository.findAllByFoodServiceProvider(foodServiceProvider.get());
        return reviews.stream().map(review -> {
            ReviewResponse response = new ReviewResponse();
            response.setReviewDescription(review.getReviewDescription());
            response.setReviewStars(review.getReviewStars());
            response.setFirstName(review.getCustomer().getFirstName());
            response.setLastName(review.getCustomer().getLastName());
            return response;
        }).collect(Collectors.toList());
    }

}

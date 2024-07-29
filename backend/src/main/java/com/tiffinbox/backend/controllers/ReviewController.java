/**
 * Author: Bhavya Dave
 */

package com.tiffinbox.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

import com.tiffinbox.backend.dto.request.ReviewRequest;
import com.tiffinbox.backend.dto.response.BasicResponse;
import com.tiffinbox.backend.dto.response.ReviewResponse;
import com.tiffinbox.backend.models.Review;
import com.tiffinbox.backend.services.ReviewService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {
    
    @Autowired
    private ReviewService reviewService;

    @PostMapping("/addReview")
    public ResponseEntity<BasicResponse> addReview(@Valid @RequestBody ReviewRequest reviewRequest, Principal principal) {
        BasicResponse savedReview = reviewService.addReview(reviewRequest,principal);
        return ResponseEntity.status(HttpStatus.OK).body(savedReview);
    }

    @GetMapping("/foodServiceProvider/{foodServiceProviderId}")
    public ResponseEntity<List<ReviewResponse>> getReviewsByFoodServiceProviderId(@PathVariable String foodServiceProviderId) {
        List<ReviewResponse> reviews = reviewService.getReviewsByFoodServiceProviderId(foodServiceProviderId);
        return ResponseEntity.ok(reviews);
    }
}

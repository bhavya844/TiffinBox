package com.tiffinbox.backend.services;
import com.tiffinbox.backend.dto.request.ReviewRequest;
import com.tiffinbox.backend.models.Review;

import java.util.List;

public interface ReviewService {
    Review addReview(ReviewRequest reviewRequest);
    List<Review> getReviewsByFoodServiceProviderId(String foodServiceProviderId);
}

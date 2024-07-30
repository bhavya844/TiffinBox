/**
 * Author: Bhavya Dave
 */

package com.tiffinbox.backend.services;
import com.tiffinbox.backend.dto.request.ReviewRequest;
import com.tiffinbox.backend.dto.response.BasicResponse;
import com.tiffinbox.backend.dto.response.ReviewResponse;

import java.security.Principal;
import java.util.List;

public interface ReviewService {
    BasicResponse addReview(ReviewRequest reviewRequest, Principal principal);
    List<ReviewResponse> getReviewsByFoodServiceProviderId(String foodServiceProviderId);
    List<ReviewResponse> getReviewByFoodProvider(Principal principal);
}

package com.tiffinbox.backend.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

@Data
public class CreateSubscriptionRequest {
    @NotBlank(message = "Food service provider id is required.")
    private String foodServiceProviderId;
    @NotBlank(message = "Meal id is required.")
    private String mealId;
    @Pattern(regexp = "WEEKLY|MONTHLY", message = "Invalid subscription type.")
    private String subscriptionType;
}

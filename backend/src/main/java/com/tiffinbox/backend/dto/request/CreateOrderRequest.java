package com.tiffinbox.backend.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

@Data
public class CreateOrderRequest {
    @NotBlank(message = "At least one meal should be selected.")
    private String mealId;
    @NotBlank(message = "Food service provider id is required.")
    private String foodServiceProviderId;
    @Min(value = 1L, message = "Total Amount should be greater than 0.")
    private Double totalAmount;
    @Min(value = 1L, message = "Quantity should be greater than 0.")
    private Integer quantity;
    private String additionalRequestDescription;
}

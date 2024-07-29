/**
 * Author: Bhavya Dave
 */

package com.tiffinbox.backend.dto.request;

import lombok.Data;

@Data   
public class ReviewRequest {

    private String reviewDescription;
    private Double reviewStars;
    private String foodServiceProviderId;
}

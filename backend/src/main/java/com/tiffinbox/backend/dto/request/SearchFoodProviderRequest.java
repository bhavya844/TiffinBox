package com.tiffinbox.backend.dto.request;

import lombok.Data;

@Data
public class SearchFoodProviderRequest {
    String city;
    String cuisineType;
}

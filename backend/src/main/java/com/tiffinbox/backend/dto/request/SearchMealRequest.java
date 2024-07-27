package com.tiffinbox.backend.dto.request;

import lombok.Data;

@Data
public class SearchMealRequest {
    String mealName;
    String mealType;
    String cuisineType;
}

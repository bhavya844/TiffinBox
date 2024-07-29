/**
 * Author : Savan Patel
 */

package com.tiffinbox.backend.dto;

import lombok.Data;

@Data
public class MealResponseDTO{
    private String mealId;
    private String mealName;
    private String mealImage;
    private String mealDescription;
    private String mealType;
    private String cuisineType;
    private Double mealPrice;
    private String foodProviderEmail;
}

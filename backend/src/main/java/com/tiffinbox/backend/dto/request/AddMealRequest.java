package com.tiffinbox.backend.dto.request;

import jakarta.mail.Multipart;
import lombok.Data;

@Data
public class AddMealRequest {
    private String mealName;
    private String mealDescription;
    private Multipart mealType;
    private String cuisineType;
    private String mealImage;
    private Double mealPrice;
}

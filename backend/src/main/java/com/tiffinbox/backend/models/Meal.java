package com.tiffinbox.backend.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"user"})
public class Meal {
    @MongoId
    private String mealId;
    private String mealName;
    private String mealDescription;
    private String mealImage;
    private String mealType;
    private String cuisineType;
    private Double mealPrice;

    @DBRef
    private User user; // Reference to User document
}

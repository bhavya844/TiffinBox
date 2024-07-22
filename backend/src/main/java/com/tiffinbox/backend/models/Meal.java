package com.tiffinbox.backend.models;

import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"order"})
public class Meal {
    @MongoId
    private String mealId;
    private String mealName;
    private String mealDescription;
    private String mealImage;
    private String cuisineType;
    private Double mealPrice;
    @DBRef
    private Order order;
}

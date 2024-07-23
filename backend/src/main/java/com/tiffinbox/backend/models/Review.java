package com.tiffinbox.backend.models;

import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
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
@ToString(exclude = {"user", "foodServiceProvider"})
public class Review {
    @MongoId
    private String reviewId;
    @DBRef
    private User user;
    @DBRef
    private FoodServiceProvider foodServiceProvider;
    private String reviewDescription;
    private Double reviewStars;
}

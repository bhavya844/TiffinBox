package com.tiffinbox.backend.models;

import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"user", "foodServiceProvider"})
public class Review {
    @Id
    public String reviewId;
    @ManyToOne
    @JoinColumn(name = "userId", referencedColumnName = "userId")
    public User user;
    @OneToOne
    @JoinColumn(name = "foodServiceProviderId", referencedColumnName = "foodServiceProviderId")
    public FoodServiceProvider foodServiceProvider;
    public String reviewDescription;
    public Double reviewStars;
}

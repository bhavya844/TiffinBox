package com.tiffinbox.backend.models;

import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"user", "review"})
public class FoodServiceProvider {
    @MongoId
    private String foodServiceProviderId;
    @DBRef
    private User user;
    private String firstName;
    private String lastName;
    private String companyName;
    @Indexed(unique = true)
    private String contact;
    private String companyAddress;
    private String companyPostalCode;
    private String city;
    private String province;
    private String cuisineType;
    private String licenseNumber;
    private String profileImage;
    @DBRef
    private Review review;
}

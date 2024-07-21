package com.tiffinbox.backend.models;

import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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
@ToString(exclude = {"user", "review"})
public class FoodServiceProvider {
    @Id
    public String foodServiceProviderId;
    @OneToOne
    @JoinColumn(name = "userId", referencedColumnName = "userId")
    public User user;
    public String firstName;
    public String lastName;
    public String companyName;
    public String companyAddress;
    public String companyPostalCode;
    public String city;
    public String province;
    public String cuisineType;
    public String licenseNumber;
    public String profileImage;
    @OneToOne
    public Review review;
}

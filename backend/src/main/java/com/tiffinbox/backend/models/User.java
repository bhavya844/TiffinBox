package com.tiffinbox.backend.models;

import com.tiffinbox.backend.utils.UserRole;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"customer", "foodServiceProvider", "order", "review"})
public class User {
    @Id
    public String userId;
    public String email;
    public String password;
    public Boolean isAdminVerified;
    @Enumerated(EnumType.STRING)
    public UserRole userRole;
    @OneToOne
    public Customer customer;
    @OneToOne
    public FoodServiceProvider foodServiceProvider;
    @OneToMany
    public Order order;
    @OneToMany
    public Review review;
}

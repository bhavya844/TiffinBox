package com.tiffinbox.backend.models;

import com.tiffinbox.backend.utils.UserRole;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"customer", "foodServiceProvider", "order", "review"})
public class User implements UserDetails{
    @MongoId
    public String userId;
    @Indexed(unique = true)
    public String email;
    public String password;
    public Boolean isAdminVerified;
    @Enumerated(EnumType.STRING)
    public UserRole userRole;
    @DBRef
    public Customer customer;
    @DBRef
    public FoodServiceProvider foodServiceProvider;
    @DBRef
    public Order order;
    @DBRef
    public Review review;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(userRole.name()));
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
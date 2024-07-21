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
    private String userId;
    @Indexed(unique = true)
    private String email;
    private String password;
    private Boolean isAdminVerified;
    @Enumerated(EnumType.STRING)
    private UserRole userRole;
    @DBRef
    private Customer customer;
    @DBRef
    private FoodServiceProvider foodServiceProvider;
    @DBRef
    private Order order;
    @DBRef
    private Review review;

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
package com.tiffinbox.backend.models;

import com.tiffinbox.backend.utils.OrderStatus;
import com.tiffinbox.backend.utils.OrderType;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.time.LocalDateTime;

@Document
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"customer","foodServiceProvider" , "meal", "payment"})
public class Order {
    @MongoId
    private String orderId;
    @DBRef
    private User customer;
    @DBRef
    private User foodServiceProvider;
    @DBRef
    private Meal meal;
    @DBRef
    private Payment payment;
    private Integer quantity;
    @Enumerated(EnumType.STRING)
    private OrderStatus orderStatus;
    private Double totalAmount;
    private String additionalRequestDescription;
    private LocalDateTime orderDate;
    @Enumerated(EnumType.STRING)
    private OrderType orderType;
    private String OTP;
}

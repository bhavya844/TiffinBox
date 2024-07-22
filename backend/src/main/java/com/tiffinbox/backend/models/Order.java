package com.tiffinbox.backend.models;

import com.tiffinbox.backend.utils.OrderStatus;
import jakarta.persistence.*;
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
@ToString(exclude = {"user", "meal", "payment"})
public class Order {
    @MongoId
    private String orderId;
    @DBRef
    private User user;
    @DBRef
    private Meal meal;
    @DBRef
    private Payment payment;
    @Enumerated(EnumType.STRING)
    private OrderStatus orderStatus;
    private Double totalAmount;
    private String additionalRequestDescription;
}

package com.tiffinbox.backend.models;

import com.tiffinbox.backend.utils.OrderStatus;
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
@ToString(exclude = {"user", "meal", "payment"})
public class Order {
    @Id
    public String orderId;
    @ManyToOne
    @JoinColumn(name = "userId", referencedColumnName = "userId")
    public User user;
    @ManyToOne
    @JoinColumn(name = "mealId", referencedColumnName = "mealId")
    public Meal meal;
    @OneToOne
    @JoinColumn(name = "paymentId", referencedColumnName = "paymentId")
    public Payment payment;
    @Enumerated(EnumType.STRING)
    public OrderStatus orderStatus;
    public Double totalAmount;
    public String additionalRequestDescription;
}

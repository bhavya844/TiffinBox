package com.tiffinbox.backend.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.tiffinbox.backend.utils.OrderStatus;
import com.tiffinbox.backend.utils.OrderType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDetailsDTO {
    private String orderId;
    private String customerName;
    private String customerEmail;
    private String customerPhone;
    private String deliveryAddress;
    private String companyName;
    private String providerEmail;
    private String providerPhone;
    private String mealId;
    private String mealImage;
    private String mealName;
    private String cuisineType;
    private Integer quantity;
    private Double amount;
    private String additionalRequest;
    private String paymentId;
    private Double amountPaid;
    private OrderType orderType;
    private OrderStatus orderStatus;
    @JsonFormat(pattern = "dd MMMM, yyyy")
    private LocalDateTime orderDate;
}

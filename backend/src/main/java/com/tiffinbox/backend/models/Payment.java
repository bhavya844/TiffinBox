package com.tiffinbox.backend.models;

import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.time.LocalDateTime;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"order"})
public class Payment {
    @MongoId
    private String paymentId;
    private LocalDateTime paymentDate;
    private Double amount;
    private String paymentMethod;
    @DBRef
    private Order order;
}

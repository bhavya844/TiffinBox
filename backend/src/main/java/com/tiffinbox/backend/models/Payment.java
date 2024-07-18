package com.tiffinbox.backend.models;

import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"order"})
public class Payment {
    @Id
    public String paymentId;
    public LocalDateTime paymentDate;
    public Double amount;
    public String paymentMethod;
    @OneToOne
    public Order order;
}

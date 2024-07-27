package com.tiffinbox.backend.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tiffinbox.backend.utils.SubscriptionType;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.time.LocalDateTime;

/**
 * Author: Raj Kamlesh Pate
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

@Document
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"customer", "foodServiceProvider", "meal"})
public class Subscription {
    @MongoId
    private String subscriptionId;
    @JsonIgnore
    @DBRef
    private User customer;
    @JsonIgnore
    @DBRef
    private User foodServiceProvider;
    @JsonIgnore
    @DBRef
    private Meal meal;
    @Enumerated(EnumType.STRING)
    private SubscriptionType subscriptionType;
    @JsonFormat(pattern = "MMMM dd, yyyy")
    private LocalDateTime startDate;
    @JsonFormat(pattern = "MMMM dd, yyyy")
    private LocalDateTime endDate;
}

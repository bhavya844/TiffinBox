package com.tiffinbox.backend.models;

import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"order"})
public class Meal {
    @Id
    public String mealId;
    public String mealName;
    public String mealDescription;
    public String mealImage;
    public String cuisineType;
    public Double mealPrice;
    @OneToMany
    public Order order;
}

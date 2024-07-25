
package com.tiffinbox.backend.models;

import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = {"user"})
public class Customer {
    @MongoId
    private String customerId;
   @DBRef
    private User user;
    private String firstName;
    private String lastName;
    private String contactNumber;
    private String streetAddress;
    private String city;
    private String postalCode;
    private String province;
    private String profileImage;
}


package com.tiffinbox.backend.models;

import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = {"user"})
public class Customer {
    @Id
    public String customerId;
    @OneToOne
    @JoinColumn(name = "userId", referencedColumnName = "userId")
    public User user;
    public String firstName;
    public String lastName;
    public String contactNumber;
    public String streetAddress;
    public String city;
    public String postalCode;
    public String province;
    public String profileImage;
}


package com.tiffinbox.backend.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class SignUpRequestCustomer {

    @NotBlank(message = "First Name is required")
    private String firstname;
    @NotBlank(message = "Last Name is required")
    private String lastname;
    @NotBlank(message = "Email needs to be Valid")
    @Email
    private String email;
    @NotBlank(message = "Password must be created to move forward")
    private String password;

    @NotBlank(message = "Please provide Street Name")
    private String streetAddress;

    @NotBlank(message = "Please provide ZipCode")
    private String zipCode;

    @NotBlank(message = "Please provide contact")
    private String contactNumber;

    private String cityName;
    private String provinceName;

}

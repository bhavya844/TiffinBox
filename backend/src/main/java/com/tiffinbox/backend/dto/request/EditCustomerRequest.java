package com.tiffinbox.backend.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class EditCustomerRequest {
    @NotBlank(message = "First Name is required")
    private String firstname;
    @NotBlank(message = "Last Name is required")
    private String lastname;

    @NotBlank(message = "Please provide Street Name")
    private String streetAddress;

    @NotBlank(message = "Please provide ZipCode")
    private String postalCode;

    @NotBlank(message = "Please provide contact")
    private String contactNumber;

    private String city;
    private String province;
}

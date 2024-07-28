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
    private String streetName;

    @NotBlank(message = "Please provide Street Number")
    private String streetNumber;

    @NotBlank(message = "Please provide Apartment Identity")
    private String apartmentNumber;

    @NotBlank(message = "Please provide ZipCode")
    private String zipCode;

    @NotBlank(message = "Please provide contact")
    private String contactNumber;

    private String cityName;
    private String provinceName;
}

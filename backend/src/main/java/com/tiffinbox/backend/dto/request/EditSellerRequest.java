package com.tiffinbox.backend.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class EditSellerRequest {

    @NotBlank(message = "First Name is required")
    private String firstname;
    @NotBlank(message = "Last Name is required")
    private String lastname;

    @NotBlank(message = "Please provide Street Name")
    private String companyAddress;

    @NotBlank(message = "Please provide ZipCode")
    private String companyPostalCode;

    @NotBlank(message = "Please provide Company Name")
    private String companyName;

    @NotBlank(message = "Provide the Food Security License Number")
    private String licenseNumber;

    @NotBlank(message = "Please provide cuisine that yo want to offer")
    private String cuisineType;

    @NotBlank(message = "Please provide company's contact")
    private String contact;

    @NotBlank(message = "Please provide the City Name")
    private String city;
    @NotBlank(message = "Please provide province Name")
    private String province;

}

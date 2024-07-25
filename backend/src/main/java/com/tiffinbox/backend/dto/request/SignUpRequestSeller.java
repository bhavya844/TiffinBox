package com.tiffinbox.backend.dto.request;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NonNull;

@Data
public class SignUpRequestSeller {

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
    private String companyAddress;

    @NotBlank(message = "Please provide ZipCode")
    private String companyZipCode;

    @NotBlank(message = "Please provide Company Name")
    private String companyName;

    @NotBlank(message = "Provide the Food Security License Number")
    private String cfcrNumber;

    @NotBlank(message = "Please provide cuisine that yo want to offer")
    private String cuisine;

    @NotBlank(message = "Please provide company's contact")
    private String contactNumber;

    @NotBlank(message = "Please provide the City Name")
    private String cityName;
    @NotBlank(message = "Please provide province Name")
    private String provinceName;


}

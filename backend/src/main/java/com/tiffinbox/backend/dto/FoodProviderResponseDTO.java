/**
 * Author : Savan Patel
 */

package com.tiffinbox.backend.dto;

import lombok.Data;

@Data
public class FoodProviderResponseDTO {
    private String foodServiceProviderId;
    private String firstName;
    private String lastName;
    private String companyName;
    private String contact;
    private String cuisineType;
    private String companyAddress;
    private String companyPostalCode;
    private String city;
    private String province;
    private String profileImage;
}

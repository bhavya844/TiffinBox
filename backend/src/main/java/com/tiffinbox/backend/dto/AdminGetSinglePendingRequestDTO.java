/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.dto;

import com.tiffinbox.backend.models.Review;
import com.tiffinbox.backend.models.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class AdminGetSinglePendingRequestDTO {
    private String foodServiceProviderId;
    private String firstName;
    private String lastName;
    private String email;
    private String companyName;
    private String contact;
    private String companyAddress;
    private String companyPostalCode;
    private String city;
    private String province;
    private String cuisineType;
    private String licenseNumber;
}

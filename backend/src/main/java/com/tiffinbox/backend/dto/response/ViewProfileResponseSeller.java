package com.tiffinbox.backend.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class ViewProfileResponseSeller extends BasicResponse {

    private String firstname;
    private String lastname;
    private String email;
    private String companyZipCode;
    private String profileImage;
    private String contactNumber;
    private String companyAddress;
    private String city;
    private String cuisine;
    private String province;
    private String country;

}

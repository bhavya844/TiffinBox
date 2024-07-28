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
public class ViewProfileResponseCustomer extends BasicResponse{
    private String firstname;
    private String lastname;
    private String email;
    private String profileImage;
    private String contact;
    private String streetAddress;
    private String city;
    private String province;
    private String postalCode;

}
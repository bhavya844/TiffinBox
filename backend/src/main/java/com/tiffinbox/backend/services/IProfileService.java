package com.tiffinbox.backend.services;

import com.tiffinbox.backend.dto.request.*;
import com.tiffinbox.backend.dto.response.BasicResponse;
import com.tiffinbox.backend.dto.response.ViewProfileResponseCustomer;
import com.tiffinbox.backend.dto.response.ViewProfileResponseSeller;

import java.security.Principal;

public interface IProfileService {
    ViewProfileResponseCustomer customerProfile(Principal principal, String userId);
    ViewProfileResponseSeller sellerProfile(Principal principal, String userId);
    BasicResponse editProfileSeller (Principal principal, EditSellerRequest signUpRequestSeller);
    BasicResponse editProfileCustomer (Principal principal, EditCustomerRequest signUpRequestCustomer);
    BasicResponse resetPassword(Principal principal, ResetPasswordRequest resetPasswordRequest);
}

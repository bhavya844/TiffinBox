package com.tiffinbox.backend.services;

import com.tiffinbox.backend.dto.request.SignUpRequestCustomer;
import com.tiffinbox.backend.dto.request.SignUpRequestSeller;
import com.tiffinbox.backend.dto.response.SignUpResponse;

public interface AuthService {
    SignUpResponse customerSignUp(SignUpRequestCustomer signUpRequestCustomer);
    SignUpResponse sellerSignUp(SignUpRequestSeller signUpRequestSeller);
}

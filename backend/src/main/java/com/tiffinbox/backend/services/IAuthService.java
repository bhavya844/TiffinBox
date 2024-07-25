package com.tiffinbox.backend.services;

import com.tiffinbox.backend.dto.request.LoginRequest;
import com.tiffinbox.backend.dto.request.RefreshTokenRequest;
import com.tiffinbox.backend.dto.request.SignUpRequestCustomer;
import com.tiffinbox.backend.dto.request.SignUpRequestSeller;
import com.tiffinbox.backend.dto.response.LoginResponse;
import com.tiffinbox.backend.dto.response.SignUpResponse;

public interface IAuthService {
    SignUpResponse customerSignUp(SignUpRequestCustomer signUpRequestCustomer);
    SignUpResponse sellerSignUp(SignUpRequestSeller signUpRequestSeller);
    LoginResponse logIn(LoginRequest loginRequest);
    LoginResponse jwtRefreshToken(RefreshTokenRequest refreshTokenRequest);
}

package com.tiffinbox.backend.services;

import com.tiffinbox.backend.dto.request.*;
import com.tiffinbox.backend.dto.response.BasicResponse;
import com.tiffinbox.backend.dto.response.LoginResponse;
import com.tiffinbox.backend.dto.response.SignUpResponse;

public interface IAuthService {
    SignUpResponse customerSignUp(SignUpRequestCustomer signUpRequestCustomer);
    SignUpResponse sellerSignUp(SignUpRequestSeller signUpRequestSeller);
    LoginResponse logIn(LoginRequest loginRequest);
    LoginResponse jwtRefreshToken(RefreshTokenRequest refreshTokenRequest);
    BasicResponse forgotPassword (ForgotPasswordRequest forgotPasswordRequest);
}

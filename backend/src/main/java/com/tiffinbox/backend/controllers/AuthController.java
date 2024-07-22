package com.tiffinbox.backend.controllers;


import com.tiffinbox.backend.dto.request.LoginRequest;
import com.tiffinbox.backend.dto.request.RefreshTokenRequest;
import com.tiffinbox.backend.dto.request.SignUpRequestCustomer;
import com.tiffinbox.backend.dto.request.SignUpRequestSeller;
import com.tiffinbox.backend.dto.response.LoginResponse;
import com.tiffinbox.backend.dto.response.SignUpResponse;
import com.tiffinbox.backend.services.AuthService;
import com.tiffinbox.backend.services.impl.AuthServiceImpl;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthService authService;

    @PostMapping("/customer/signUp")
    public ResponseEntity<SignUpResponse> customerRegisteration(@RequestBody @Valid  SignUpRequestCustomer signUpRequestCustomer){
        try {
            SignUpResponse response = authService.customerSignUp(signUpRequestCustomer);
            return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(response);
        }catch (Exception e){
            SignUpResponse response =new SignUpResponse();
            response.setTimeStamp(LocalDateTime.now());
            response.setMessage(e.getMessage());
            response.setSuccess(false);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
    }

    @PostMapping("/seller/signUp")
    public ResponseEntity<SignUpResponse> sellerRegisteration(@RequestBody @Valid SignUpRequestSeller signUpRequestSeller){
        try {
            SignUpResponse response = authService.sellerSignUp(signUpRequestSeller);
            return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(response);
        }catch (Exception e){
            SignUpResponse response =new SignUpResponse();
            response.setTimeStamp(LocalDateTime.now());
            response.setMessage(e.getMessage());
            response.setSuccess(false);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
    }

    @PostMapping("/logIn")
    public ResponseEntity<LoginResponse> userLogin(@RequestBody @Valid LoginRequest loginRequest){
        try {
            LoginResponse response = authService.logIn(loginRequest);
            return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(response);
        }catch (Exception e){
            LoginResponse response = new LoginResponse();
            response.setTimeStamp(LocalDateTime.now());
            response.setMessage(e.getMessage());
            response.setSuccess(false);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
    }

    @PostMapping("/refreshToken")
    public ResponseEntity<LoginResponse> refreshToken(@RequestBody RefreshTokenRequest refreshTokenRequest){
        try {
            LoginResponse response = authService.jwtRefreshToken(refreshTokenRequest);
            if(response==null){throw  new Exception("In-Valid Token");}
            return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(response);
        }catch (Exception e){
            LoginResponse response = new LoginResponse();
            response.setTimeStamp(LocalDateTime.now());
            response.setMessage(e.getMessage());
            response.setSuccess(false);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
    }

}

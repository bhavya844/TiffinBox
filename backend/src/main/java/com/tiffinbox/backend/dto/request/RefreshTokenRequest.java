package com.tiffinbox.backend.dto.request;


import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class RefreshTokenRequest {
    @NotBlank(message = "token is required")
    private String refreshToken;
}

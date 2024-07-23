package com.tiffinbox.backend.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class LoginRequest {
    @NotBlank(message = "Email is a required field.")
    private String email;
    @NotBlank(message = "Password is a required field.")
    private String password;
}

package com.tiffinbox.backend.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ResetPasswordRequest {
    @NotBlank(message = "New Password must not be blank")
    private  String oldPassword;
    @NotBlank(message = "New Password must not be blank")
    private String newPassword;
}

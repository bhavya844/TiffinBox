package com.tiffinbox.backend.dto.response;

import com.tiffinbox.backend.utils.UserRole;
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
public class LoginResponse extends BasicResponse{
    private String firstname;
    private String lastname;
    private UserRole userRole;
    private String token;
    private String refreshToken;

}
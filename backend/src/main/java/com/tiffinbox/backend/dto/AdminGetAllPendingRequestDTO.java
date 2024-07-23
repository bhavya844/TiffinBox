/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AdminGetAllPendingRequestDTO {
    private String userId;
    private String name;
    private String companyName;
    private String email;
    private String contact;
}

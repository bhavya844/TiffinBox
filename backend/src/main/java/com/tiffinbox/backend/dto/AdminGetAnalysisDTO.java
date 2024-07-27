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
public class AdminGetAnalysisDTO {
    private Long totalUsers;
    private Long totalOrders;
    private Double totalEarnings;
}

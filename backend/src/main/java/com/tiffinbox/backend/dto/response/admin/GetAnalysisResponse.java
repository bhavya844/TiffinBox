/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.dto.response.admin;

import com.tiffinbox.backend.dto.AdminGetAnalysisDTO;
import com.tiffinbox.backend.dto.response.BasicResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
public class GetAnalysisResponse extends BasicResponse {
    AdminGetAnalysisDTO analysisDetails;
}

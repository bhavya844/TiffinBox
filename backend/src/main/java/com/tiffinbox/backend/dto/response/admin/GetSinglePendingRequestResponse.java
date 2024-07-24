/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.dto.response.admin;

import com.tiffinbox.backend.dto.AdminGetSinglePendingRequestDTO;
import com.tiffinbox.backend.dto.response.BasicResponse;
import com.tiffinbox.backend.models.FoodServiceProvider;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
public class GetSinglePendingRequestResponse extends BasicResponse {
    AdminGetSinglePendingRequestDTO foodServiceProviderDetails;
}

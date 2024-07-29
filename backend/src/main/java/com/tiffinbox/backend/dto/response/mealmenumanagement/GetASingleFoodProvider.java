/**
 * Author : Savan Patel
 */

package com.tiffinbox.backend.dto.response.mealmenumanagement;

import com.tiffinbox.backend.dto.FoodProviderResponseDTO;
import com.tiffinbox.backend.dto.response.BasicResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
public class GetASingleFoodProvider extends BasicResponse {
    FoodProviderResponseDTO foodProviderResponse;
}

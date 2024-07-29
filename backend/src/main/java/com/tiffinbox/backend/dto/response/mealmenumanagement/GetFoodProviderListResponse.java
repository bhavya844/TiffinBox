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

import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
public class GetFoodProviderListResponse extends BasicResponse {
    List<FoodProviderResponseDTO> foodProviderResponseList;
}

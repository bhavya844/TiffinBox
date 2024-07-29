/**
 * Author : Savan Patel
 */

package com.tiffinbox.backend.dto.response.mealmenumanagement;

import com.tiffinbox.backend.dto.MealResponseDTO;
import com.tiffinbox.backend.dto.response.BasicResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
public class GetASingleMealResponse extends BasicResponse {
    MealResponseDTO mealResponse;
}

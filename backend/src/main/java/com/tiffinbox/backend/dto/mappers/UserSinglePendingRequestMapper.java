/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.dto.mappers;

import com.tiffinbox.backend.dto.AdminGetSinglePendingRequestDTO;
import com.tiffinbox.backend.models.FoodServiceProvider;

public class UserSinglePendingRequestMapper {
    public static AdminGetSinglePendingRequestDTO convertToSinglePendingRequestDTO(FoodServiceProvider foodServiceProvider) {
        if (foodServiceProvider == null) {
            return null;
        }
        return new AdminGetSinglePendingRequestDTO(
                foodServiceProvider.getFoodServiceProviderId(),
                foodServiceProvider.getFirstName(),
                foodServiceProvider.getLastName(),
                foodServiceProvider.getUser().getEmail(),
                foodServiceProvider.getCompanyName(),
                foodServiceProvider.getContact(),
                foodServiceProvider.getCompanyAddress(),
                foodServiceProvider.getCompanyPostalCode(),
                foodServiceProvider.getCity(),
                foodServiceProvider.getProvince(),
                foodServiceProvider.getCuisineType(),
                foodServiceProvider.getLicenseNumber()
        );
    }
}

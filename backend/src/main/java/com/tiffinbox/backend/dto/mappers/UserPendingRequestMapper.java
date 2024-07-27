/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.dto.mappers;

import com.tiffinbox.backend.dto.UserFoodServiceProviderDTO;
import com.tiffinbox.backend.models.FoodServiceProvider;
import com.tiffinbox.backend.models.User;
import java.util.ArrayList;
import java.util.List;

public class UserPendingRequestMapper {
    public static UserFoodServiceProviderDTO convertToPendingRequestDTO(User user, FoodServiceProvider foodServiceProvider) {
        if (foodServiceProvider == null) {
            return null;
        }
        return new UserFoodServiceProviderDTO(
                user.getUserId(),
                foodServiceProvider.getFirstName() + " " + foodServiceProvider.getLastName(),
                foodServiceProvider.getFoodServiceProviderId(),
                foodServiceProvider.getCompanyName(),
                user.getEmail(),
                foodServiceProvider.getContact()
        );
    }

    public static List<UserFoodServiceProviderDTO> convertToPendingRequestListDTO(List<User> userList, List<FoodServiceProvider> foodServiceProviderList) {
        List<UserFoodServiceProviderDTO> allPendingRequestDTOList = new ArrayList<>();

        for (User user : userList) {
            FoodServiceProvider foodServiceProvider = null;
            for (FoodServiceProvider fsp : foodServiceProviderList) {
                if (fsp.getUser().getUserId().equals(user.getUserId())) {
                    foodServiceProvider = fsp;
                    break;
                }
            }
            UserFoodServiceProviderDTO adminGetAllPendingRequestDTO = convertToPendingRequestDTO(user, foodServiceProvider);
            if (adminGetAllPendingRequestDTO != null) {
                allPendingRequestDTOList.add(adminGetAllPendingRequestDTO);
            }
        }
        return allPendingRequestDTOList;
    }
}

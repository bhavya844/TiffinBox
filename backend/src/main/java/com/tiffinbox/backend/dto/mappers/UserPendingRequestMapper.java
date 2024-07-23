/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.dto.mappers;

import com.tiffinbox.backend.dto.AdminGetAllPendingRequestDTO;
import com.tiffinbox.backend.models.FoodServiceProvider;
import com.tiffinbox.backend.models.User;
import java.util.ArrayList;
import java.util.List;

public class UserPendingRequestMapper {
    public static AdminGetAllPendingRequestDTO convertToPendingRequestDTO(User user, FoodServiceProvider foodServiceProvider) {
        if (foodServiceProvider == null) {
            return null;
        }
        return new AdminGetAllPendingRequestDTO(
                user.getUserId(),
                foodServiceProvider.getFirstName() + " " + foodServiceProvider.getLastName(),
                foodServiceProvider.getCompanyName(),
                user.getEmail(),
                foodServiceProvider.getContact()
        );
    }

    public static List<AdminGetAllPendingRequestDTO> convertToPendingRequestListDTO(List<User> userList, List<FoodServiceProvider> foodServiceProviderList) {
        List<AdminGetAllPendingRequestDTO> allPendingRequestDTOList = new ArrayList<>();

        for (User user : userList) {
            FoodServiceProvider foodServiceProvider = null;
            for (FoodServiceProvider fsp : foodServiceProviderList) {
                if (fsp.getUser().getUserId().equals(user.getUserId())) {
                    foodServiceProvider = fsp;
                    break;
                }
            }
            AdminGetAllPendingRequestDTO adminGetAllPendingRequestDTO = convertToPendingRequestDTO(user, foodServiceProvider);
            if (adminGetAllPendingRequestDTO != null) {
                allPendingRequestDTOList.add(adminGetAllPendingRequestDTO);
            }
        }
        return allPendingRequestDTOList;
    }
}

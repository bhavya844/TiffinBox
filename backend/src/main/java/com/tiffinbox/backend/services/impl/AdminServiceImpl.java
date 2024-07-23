/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.services.impl;

import com.tiffinbox.backend.dto.AdminGetAllPendingRequestDTO;
import com.tiffinbox.backend.dto.mappers.UserPendingRequestMapper;
import com.tiffinbox.backend.dto.response.admin.GetAllPendingRequestsResponse;
import com.tiffinbox.backend.models.FoodServiceProvider;
import com.tiffinbox.backend.models.User;
import com.tiffinbox.backend.repositories.SellerRepository;
import com.tiffinbox.backend.repositories.UserRepository;
import com.tiffinbox.backend.services.IAdminService;
import com.tiffinbox.backend.utils.ResponseMessages;
import com.tiffinbox.backend.utils.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class AdminServiceImpl implements IAdminService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SellerRepository sellerRepository;

    @Override
    public GetAllPendingRequestsResponse getAllPendingRequests() {

        // get all users from user model
        List<User> userList = userRepository.findAllByIsAdminVerifiedAndUserRole(false, UserRole.FOOD_SERVICE_PROVIDER);

        // get food service provider having same userId from userList
        List<FoodServiceProvider> foodServiceProviderList = userList.stream()
                .map(sellerRepository::findByUser)
                .toList();

        // create response list
        List<AdminGetAllPendingRequestDTO> allPendingRequests = UserPendingRequestMapper.convertToPendingRequestListDTO(userList, foodServiceProviderList);

        return GetAllPendingRequestsResponse.builder()
                .success(true)
                .message(ResponseMessages.USER_PENDING_REQUEST_RETRIVED)
                .pendingRequestList(allPendingRequests)
                .timeStamp(LocalDateTime.now())
                .build();
    }
}

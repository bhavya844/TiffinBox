/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.services.impl;

import com.tiffinbox.backend.dto.AcceptedOrderListDTO;
import com.tiffinbox.backend.dto.response.ordertrack.GetAllAcceptedOrdersResponse;
import com.tiffinbox.backend.models.FoodServiceProvider;
import com.tiffinbox.backend.models.Order;
import com.tiffinbox.backend.repositories.OrderTrackRepository;
import com.tiffinbox.backend.services.IOrderTrackService;
import com.tiffinbox.backend.utils.OrderStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OrderTrackService implements IOrderTrackService {

    @Autowired
    private final OrderTrackRepository orderTrackRepository;

    @Override
    public GetAllAcceptedOrdersResponse getAllAcceptedOrders(String userId) {

        // find the food service provider
        Optional<FoodServiceProvider> foodServiceProvider = userRepo.findById(userId);

        if(!foodServiceProvider.isPresent()) {
            // throw exception
            System.out.println("No food service provider exist");
        }

        List<Order> orderList = orderTrackRepository.findByAcceptedOrderStatus(userId, OrderStatus.ACCEPTED);

        System.out.println("Printing Order list: " + orderList);

        List<AcceptedOrderListDTO> acceptedOrderListDTOList = new ArrayList<>();

        return GetAllAcceptedOrdersResponse.builder().success(true).timeStamp(LocalDateTime.now()).acceptedOrderListDTOList(acceptedOrderListDTOList).build();
    }
}

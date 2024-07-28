/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.services.impl;

import com.tiffinbox.backend.dto.AcceptedOrderListDTO;
import com.tiffinbox.backend.dto.mappers.AcceptedOrderMapper;
import com.tiffinbox.backend.dto.response.ordertrack.GetAllAcceptedOrdersResponse;
import com.tiffinbox.backend.models.Order;
import com.tiffinbox.backend.models.User;
import com.tiffinbox.backend.repositories.OrderRepository;
import com.tiffinbox.backend.repositories.UserRepository;
import com.tiffinbox.backend.services.IOrderTrackService;
import com.tiffinbox.backend.utils.OrderStatus;
import com.tiffinbox.backend.utils.ResponseMessages;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class OrderTrackServiceImpl implements IOrderTrackService {

    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private UserRepository userRepository;
    @Override
    public GetAllAcceptedOrdersResponse getAllAcceptedOrders(Principal principal) {
        User user = userRepository.findByEmail(principal.getName());
        System.out.println("Printing user: " + user.getEmail());
        List<Order> orderList = orderRepository.findAllByFoodServiceProviderAndOrderStatus(user, OrderStatus.ACCEPTED);
        System.out.println("Printing order list: " + orderList);
        List<AcceptedOrderListDTO> acceptedOrderList = AcceptedOrderMapper.convertToAcceptedOrderListDTO(orderList);

        return GetAllAcceptedOrdersResponse.builder()
                .success(true)
                .timeStamp(LocalDateTime.now())
                .message(ResponseMessages.GET_ALL_ACCEPTED_ORDERS)
                .acceptedOrderList(acceptedOrderList)
                .build();
    }
}

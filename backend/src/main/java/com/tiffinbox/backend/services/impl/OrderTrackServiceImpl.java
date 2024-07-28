/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.services.impl;

import com.tiffinbox.backend.dto.AcceptedOrderListDTO;
import com.tiffinbox.backend.dto.mappers.AcceptedOrderMapper;
import com.tiffinbox.backend.dto.request.UpdateOrderRequest;
import com.tiffinbox.backend.dto.response.BasicResponse;
import com.tiffinbox.backend.dto.response.ordertrack.GetAllAcceptedOrdersResponse;
import com.tiffinbox.backend.exceptions.NotFoundException;
import com.tiffinbox.backend.models.Order;
import com.tiffinbox.backend.models.User;
import com.tiffinbox.backend.repositories.OrderRepository;
import com.tiffinbox.backend.repositories.UserRepository;
import com.tiffinbox.backend.services.EmailService;
import com.tiffinbox.backend.services.IOrderTrackService;
import com.tiffinbox.backend.utils.EmailType;
import com.tiffinbox.backend.utils.OTPService;
import com.tiffinbox.backend.utils.OrderStatus;
import com.tiffinbox.backend.utils.ResponseMessages;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class OrderTrackServiceImpl implements IOrderTrackService {

    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private EmailService emailService;

    @Override
    public GetAllAcceptedOrdersResponse getAllAcceptedOrders(Principal principal) {
        User user = userRepository.findByEmail(principal.getName());
        List<OrderStatus> orderStatuses = Arrays.asList(OrderStatus.ACCEPTED, OrderStatus.IN_PREPARATION, OrderStatus.DELIVERED);
        List<Order> orderList = orderRepository.findAllByFoodServiceProviderAndOrderStatusIn(user, orderStatuses);
        List<AcceptedOrderListDTO> acceptedOrderList = AcceptedOrderMapper.convertToAcceptedOrderListDTO(orderList);

        return GetAllAcceptedOrdersResponse.builder()
                .success(true)
                .timeStamp(LocalDateTime.now())
                .message(ResponseMessages.GET_ALL_ACCEPTED_ORDERS)
                .acceptedOrderList(acceptedOrderList)
                .build();
    }

    @Override
    public BasicResponse updateStatus(UpdateOrderRequest updateOrderRequest, String orderId, Principal principal) throws MessagingException {
        User user = userRepository.findByEmail(principal.getName());
        Optional<Order> orderOptional = orderRepository.findByOrderIdAndFoodServiceProvider(orderId, user);
        if (!orderOptional.isPresent()) {
            throw new NotFoundException(ResponseMessages.ORDER_NOT_FOUND);
        }
        Order order = orderOptional.get();
        if (updateOrderRequest.getOrderStatus().equals(OrderStatus.IN_PREPARATION.name())) {
            order.setOrderStatus(OrderStatus.IN_PREPARATION);
            orderRepository.save(order);

            return BasicResponse.builder()
                    .success(true)
                    .message(ResponseMessages.UPDATE_ORDER_STATUS)
                    .timeStamp(LocalDateTime.now())
                    .build();
        } else if (updateOrderRequest.getOrderStatus().equals(OrderStatus.DELIVERED.name())) {

            String otp = OTPService.generateOTP();
            order.setOTP(otp);
            orderRepository.save(order);
            String customerEmail = order.getCustomer().getEmail();
            emailService.sendEmail(EmailType.DELIVERY_OTP, customerEmail, "Order Delivery - OTP Confirmation", "Your OTP is: " ,otp);
            return BasicResponse.builder()
                    .success(true)
                    .timeStamp(LocalDateTime.now())
                    .message(ResponseMessages.OTP_SENT_VIA_EMAIL_SUCCESS)
                    .build();
        } else {
            return BasicResponse.builder()
                    .success(false)
                    .timeStamp(LocalDateTime.now())
                    .message(ResponseMessages.UPDATE_ORDER_STATUS_ERROR)
                    .build();
        }
    }
}

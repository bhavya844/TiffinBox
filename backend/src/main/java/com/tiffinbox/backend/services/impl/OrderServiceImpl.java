package com.tiffinbox.backend.services.impl;

import com.tiffinbox.backend.dto.OrderDetailsDTO;
import com.tiffinbox.backend.dto.mappers.OrderDetailsMapper;
import com.tiffinbox.backend.dto.request.CreateOrderRequest;
import com.tiffinbox.backend.dto.response.orders.GetAllOrderDetailsResponse;
import com.tiffinbox.backend.dto.response.orders.GetOrderDetailsResponse;
import com.tiffinbox.backend.exceptions.ApiRequestException;
import com.tiffinbox.backend.exceptions.NotFoundException;
import com.tiffinbox.backend.models.*;
import com.tiffinbox.backend.repositories.*;
import com.tiffinbox.backend.services.OrderService;
import com.tiffinbox.backend.utils.OrderStatus;
import com.tiffinbox.backend.utils.OrderType;
import com.tiffinbox.backend.utils.ResponseMessages;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private SellerRepository sellerRepository;
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private MealRepository mealRepository;
    @Autowired
    private PaymentRepository paymentRepository;

    /**
     * Function to create new order
     * @param request
     * @param principal
     * @return - created order details
     */
    @Override
    public Order createOrder(CreateOrderRequest request, Principal principal) {
        User customer = userRepository.findByEmail(principal.getName());
        Optional<FoodServiceProvider> foodServiceProvider = sellerRepository.findById(request.getFoodServiceProviderId());
        Optional<Meal> meal = mealRepository.findById(request.getMealId());

        if(meal.isEmpty()){
            throw new ApiRequestException(ResponseMessages.MEAL_NOT_FOUND);
        }

        Payment payment = Payment.builder()
                .amount(request.getTotalAmount())
                .paymentDate(LocalDateTime.now())
                .paymentMethod("Card")
                .build();

        paymentRepository.save(payment);

        Order order = Order.builder()
                .customer(customer)
                .foodServiceProvider(foodServiceProvider.get().getUser())
                .meal(meal.get())
                .totalAmount(request.getTotalAmount())
                .quantity(request.getQuantity())
                .additionalRequestDescription(request.getAdditionalRequestDescription())
                .orderStatus(OrderStatus.PLACED)
                .orderDate(LocalDateTime.now())
                .orderType(OrderType.TRIAL)
                .payment(payment)
                .build();

        orderRepository.save(order);

        payment.setOrder(order);
        paymentRepository.save(payment);

        return order;
    }

    /**
     * Function to get customer's own orders
     * @param principal
     * @return - list of order details
     */
    @Override
    public GetAllOrderDetailsResponse getOwnOrders(Principal principal) {
        User user = userRepository.findByEmail(principal.getName());
        Sort sort = Sort.by(Sort.Direction.DESC, "orderDate");
        List<Order> orders = orderRepository.findAllByCustomer(user, sort);

        List<OrderDetailsDTO> orderDetailsDTOList = OrderDetailsMapper.convertToOrderDetailsDTOList(orders);

        return GetAllOrderDetailsResponse.builder()
                .success(true)
                .message(ResponseMessages.ORDER_DETAILS_FETCH)
                .orderDetails(orderDetailsDTOList)
                .timeStamp(LocalDateTime.now())
                .build();
    }

    /**
     * Function to get particular order details
     * @param orderId
     * @param principal
     * @return - order details
     */
    @Override
    public GetOrderDetailsResponse getOrderDetails(String orderId, Principal principal) {
        User user = userRepository.findByEmail(principal.getName());
        Optional<Order> order = orderRepository.findById(orderId);

        if(order.isEmpty()){
            throw new NotFoundException(ResponseMessages.ORDER_NOT_FOUND);
        }

        OrderDetailsDTO orderDetailsDTO = OrderDetailsMapper.convertToOrderDetailsDTO(order.get());

        return GetOrderDetailsResponse.builder()
                .success(true)
                .message(ResponseMessages.ORDER_DETAILS_FETCH)
                .orderDetails(orderDetailsDTO)
                .timeStamp(LocalDateTime.now())
                .build();
    }

    /**
     * Function to get orders received by food service provider
     * @param principal
     * @return - list of received order details
     */
    @Override
    public GetAllOrderDetailsResponse getFoodServiceProviderOrders(Principal principal) {
        User user = userRepository.findByEmail(principal.getName());
        Sort sort = Sort.by(Sort.Direction.DESC, "orderDate");
        List<Order> orders = orderRepository.findAllByFoodServiceProviderAndOrderStatus(user, OrderStatus.PLACED, sort);

        List<OrderDetailsDTO> orderDetailsDTOList = OrderDetailsMapper.convertToOrderDetailsDTOList(orders);

        return GetAllOrderDetailsResponse.builder()
                .success(true)
                .message(ResponseMessages.ORDER_DETAILS_FETCH)
                .orderDetails(orderDetailsDTOList)
                .timeStamp(LocalDateTime.now())
                .build();
    }
}

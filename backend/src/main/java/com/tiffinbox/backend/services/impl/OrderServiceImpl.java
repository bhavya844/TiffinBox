package com.tiffinbox.backend.services.impl;

import com.tiffinbox.backend.dto.request.CreateOrderRequest;
import com.tiffinbox.backend.dto.response.BasicResponse;
import com.tiffinbox.backend.exceptions.ApiRequestException;
import com.tiffinbox.backend.exceptions.NotFoundException;
import com.tiffinbox.backend.models.Meal;
import com.tiffinbox.backend.models.Order;
import com.tiffinbox.backend.models.User;
import com.tiffinbox.backend.repositories.MealRepository;
import com.tiffinbox.backend.repositories.OrderRepository;
import com.tiffinbox.backend.repositories.UserRepository;
import com.tiffinbox.backend.services.OrderService;
import com.tiffinbox.backend.utils.OrderStatus;
import com.tiffinbox.backend.utils.OrderType;
import com.tiffinbox.backend.utils.ResponseMessages;
import org.springframework.beans.factory.annotation.Autowired;
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
    private OrderRepository orderRepository;
    @Autowired
    private MealRepository mealRepository;

    /**
     * Function to create new order
     * @param request
     * @param principal
     * @return - created order details
     */
    @Override
    public Order createOrder(CreateOrderRequest request, Principal principal) {
        User customer = userRepository.findByEmail(principal.getName());
        Optional<User> foodServiceProvider = userRepository.findById(request.getFoodServiceProviderId());
        Optional<Meal> meal = mealRepository.findById(request.getMealId());

        if(meal.isEmpty()){
            throw new ApiRequestException("No such meal exists!");
        }

        Order order = Order.builder()
                .customer(customer)
                .foodServiceProvider(foodServiceProvider.get())
                .meal(meal.get())
                .totalAmount(request.getTotalAmount())
                .quantity(request.getQuantity())
                .additionalRequestDescription(request.getAdditionalRequestDescription())
                .orderStatus(OrderStatus.PLACED)
                .orderDate(LocalDateTime.now())
                .orderType(OrderType.TRIAL)
                .build();

        orderRepository.save(order);
        return order;
    }

    /**
     * Function to get customer's own orders
     * @param principal
     * @return - list of order details
     */
    @Override
    public List<Order> getOwnOrders(Principal principal) {
        User user = userRepository.findByEmail(principal.getName());
        List<Order> orders = orderRepository.findAllByCustomer(user);

        return orders;
    }

    /**
     * Function to get particular order details
     * @param orderId
     * @param principal
     * @return - order details
     */
    @Override
    public Order getOrderDetails(String orderId, Principal principal) {
        User user = userRepository.findByEmail(principal.getName());
        Optional<Order> order = orderRepository.findByOrderIdAndCustomer(orderId, user);

        if(order.isEmpty()){
            throw new NotFoundException(ResponseMessages.ORDER_NOT_FOUND);
        }

        return order.get();
    }

    /**
     * Function to get orders received by food service provider
     * @param principal
     * @return - list of received order details
     */
    @Override
    public List<Order> getFoodServiceProviderOrders(Principal principal) {
        User user = userRepository.findByEmail(principal.getName());
        List<Order> orders = orderRepository.findAllByFoodServiceProvider(user);

        return orders;
    }
}

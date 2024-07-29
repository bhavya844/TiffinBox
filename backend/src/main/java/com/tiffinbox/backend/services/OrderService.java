package com.tiffinbox.backend.services;

import com.tiffinbox.backend.dto.request.CreateOrderRequest;
import com.tiffinbox.backend.models.Order;

import java.security.Principal;
import java.util.List;

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

public interface OrderService {
    Order createOrder(CreateOrderRequest request, Principal principal);
    List<Order> getOwnOrders(Principal principal);
    Order getOrderDetails(String orderId, Principal principal);
    List<Order> getFoodServiceProviderOrders(Principal principal);
}

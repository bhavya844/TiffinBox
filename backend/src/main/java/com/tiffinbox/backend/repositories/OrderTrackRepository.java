/**
 * Author: Keval Gandevia
 */
package com.tiffinbox.backend.repositories;

import com.tiffinbox.backend.dto.AcceptedOrderListDTO;
import com.tiffinbox.backend.models.Order;
import com.tiffinbox.backend.utils.OrderStatus;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface OrderTrackRepository extends MongoRepository<Order, String> {

    public List<Order> findByAcceptedOrderStatus(String userId, OrderStatus orderStatus);
}

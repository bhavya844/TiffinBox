package com.tiffinbox.backend.repositories;

import com.tiffinbox.backend.models.Order;
import com.tiffinbox.backend.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

@Repository
public interface OrderRepository extends MongoRepository<Order, String> {
    List<Order> findAllByCustomer(User customer);
    Optional<Order> findByOrderIdAndCustomer(String orderId, User customer);
    List<Order> findAllByFoodServiceProvider(User foodServiceProvider);
}

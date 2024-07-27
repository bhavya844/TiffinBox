/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.repositories;

import com.tiffinbox.backend.models.Order;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrderRepository extends MongoRepository<Order, String> {
}

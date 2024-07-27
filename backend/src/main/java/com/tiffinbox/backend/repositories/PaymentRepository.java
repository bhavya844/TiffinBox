/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.repositories;

import com.tiffinbox.backend.models.Payment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PaymentRepository extends MongoRepository<Payment, String> {
}

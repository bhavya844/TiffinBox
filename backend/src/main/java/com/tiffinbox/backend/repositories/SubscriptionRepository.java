package com.tiffinbox.backend.repositories;

import com.tiffinbox.backend.models.Subscription;
import com.tiffinbox.backend.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

@Repository
public interface SubscriptionRepository extends MongoRepository<Subscription, String> {
    Optional<Subscription> findByCustomer(User customer);
}

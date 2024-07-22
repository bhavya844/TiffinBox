package com.tiffinbox.backend.repositories;

import com.tiffinbox.backend.models.Customer;
import com.tiffinbox.backend.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends MongoRepository<Customer, String> {

    Customer findByUser(User userId);
    Customer findCustomerByCustomerId(String customerId);
}

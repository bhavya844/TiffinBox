package com.tiffinbox.backend.repositories;

import com.tiffinbox.backend.models.FoodServiceProvider;
import com.tiffinbox.backend.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SellerRepository extends MongoRepository <FoodServiceProvider,String>{
    FoodServiceProvider findByUser(User userId);
    FoodServiceProvider findSellerByFoodServiceProviderId(String foodServiceProviderId);
}

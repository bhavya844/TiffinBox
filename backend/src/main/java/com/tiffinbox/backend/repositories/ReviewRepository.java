package com.tiffinbox.backend.repositories;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.tiffinbox.backend.models.FoodServiceProvider;
import com.tiffinbox.backend.models.Review;
import java.util.List;


@Repository
public interface ReviewRepository extends MongoRepository<Review, String>{
    List<Review> findAllByFoodServiceProvider(FoodServiceProvider foodServiceProvider);    
}

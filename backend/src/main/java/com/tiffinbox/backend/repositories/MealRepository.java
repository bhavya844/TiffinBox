/**
 * Author : Savan Patel
 */

package com.tiffinbox.backend.repositories;

import com.tiffinbox.backend.models.Meal;
import com.tiffinbox.backend.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MealRepository extends MongoRepository<Meal, String> {
    List<Meal> findByUser(User user);

}

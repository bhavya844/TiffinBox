package com.tiffinbox.backend.services;

import com.tiffinbox.backend.dto.request.AddMealRequest;
import com.tiffinbox.backend.dto.response.BasicResponse;
import com.tiffinbox.backend.dto.response.foodServiceProvider.GetASingleMealResponse;
import com.tiffinbox.backend.dto.response.foodServiceProvider.GetMealListResponse;

import java.security.Principal;
import java.util.List;

public interface IFoodProviderService {
    GetASingleMealResponse addMeal(Principal principal, AddMealRequest addMealRequest);
    GetMealListResponse getAllMeals(Principal principal);
    GetASingleMealResponse getMeal(String mealId);
    GetASingleMealResponse updateMeal(String mealId, AddMealRequest addMealRequest);
    BasicResponse deleteMeal(String mealId);
}

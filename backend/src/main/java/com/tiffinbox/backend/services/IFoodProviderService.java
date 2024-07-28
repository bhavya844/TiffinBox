package com.tiffinbox.backend.services;

import com.tiffinbox.backend.dto.request.AddMealRequest;
import com.tiffinbox.backend.dto.response.BasicResponse;
import com.tiffinbox.backend.dto.response.mealmenumanagement.GetASingleMealResponse;
import com.tiffinbox.backend.dto.response.mealmenumanagement.GetMealListResponse;

import java.security.Principal;

public interface IFoodProviderService {
    GetASingleMealResponse addMeal(Principal principal, AddMealRequest addMealRequest);
    GetMealListResponse getAllMeals(Principal principal);
    GetASingleMealResponse getMeal(String mealId);
    GetASingleMealResponse updateMeal(String mealId, AddMealRequest addMealRequest);
    BasicResponse deleteMeal(String mealId);
}

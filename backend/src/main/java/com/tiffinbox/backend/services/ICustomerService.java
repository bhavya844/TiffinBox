package com.tiffinbox.backend.services;

import com.tiffinbox.backend.dto.request.SearchMealRequest;
import com.tiffinbox.backend.dto.response.mealmenumanagement.GetASingleFoodProvider;
import com.tiffinbox.backend.dto.response.mealmenumanagement.GetASingleMealResponse;
import com.tiffinbox.backend.dto.response.mealmenumanagement.GetFoodProviderListResponse;
import com.tiffinbox.backend.dto.response.mealmenumanagement.GetMealListResponse;

public interface ICustomerService {
    GetFoodProviderListResponse getFoodProviders(String city);
    GetASingleFoodProvider getFoodProvider(String foodProviderId);
    GetMealListResponse getMeals(String userEmail, SearchMealRequest searchMealRequest);
    GetASingleMealResponse getMeal(String mealId);
}

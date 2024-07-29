/**
 * Author Savan Patel
 */

package com.tiffinbox.backend.services;

import com.tiffinbox.backend.dto.request.SearchFoodProviderRequest;
import com.tiffinbox.backend.dto.response.mealmenumanagement.GetASingleFoodProvider;
import com.tiffinbox.backend.dto.response.mealmenumanagement.GetASingleMealResponse;
import com.tiffinbox.backend.dto.response.mealmenumanagement.GetFoodProviderListResponse;
import com.tiffinbox.backend.dto.response.mealmenumanagement.GetMealListResponse;

public interface ICustomerService {
    GetFoodProviderListResponse getFoodProviders(SearchFoodProviderRequest searchFoodProviderRequest);
    GetASingleFoodProvider getFoodProvider(String foodProviderId);
    GetMealListResponse getMeals(String foodServiceProviderId);
    GetASingleMealResponse getMeal(String mealId);
}

package com.tiffinbox.backend.services.impl;

import com.tiffinbox.backend.dto.FoodProviderResponseDTO;
import com.tiffinbox.backend.dto.MealResponseDTO;
import com.tiffinbox.backend.dto.request.SearchMealRequest;
import com.tiffinbox.backend.dto.response.mealmenumanagement.GetASingleFoodProvider;
import com.tiffinbox.backend.dto.response.mealmenumanagement.GetASingleMealResponse;
import com.tiffinbox.backend.dto.response.mealmenumanagement.GetFoodProviderListResponse;
import com.tiffinbox.backend.dto.response.mealmenumanagement.GetMealListResponse;
import com.tiffinbox.backend.models.FoodServiceProvider;
import com.tiffinbox.backend.models.Meal;
import com.tiffinbox.backend.models.User;
import com.tiffinbox.backend.repositories.MealRepository;
import com.tiffinbox.backend.repositories.SellerRepository;
import com.tiffinbox.backend.repositories.UserRepository;
import com.tiffinbox.backend.services.ICustomerService;
import com.tiffinbox.backend.utils.ResponseMessages;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor

public class CustomerServiceImpl implements ICustomerService {
    private final SellerRepository sellerRepository;
    private final MealRepository mealRepository;
    private final UserRepository userRepository;
    @Override
    public GetFoodProviderListResponse getFoodProviders(String city) {
        List<FoodProviderResponseDTO> foodProviderResponseDTOList = sellerRepository.findByCity(city).stream().map(this::convertToFoodProviderDTO).toList();
        return GetFoodProviderListResponse.builder()
                .success(true)
                .message(ResponseMessages.PROVIDERS_LIST_SUCCESSFUL)
                .timeStamp(LocalDateTime.now())
                .foodProviderResponseList(foodProviderResponseDTOList)
                .build();
    }

    @Override
    public GetASingleFoodProvider getFoodProvider(String foodProviderId) {
        FoodServiceProvider foodServiceProvider = sellerRepository.findSellerByFoodServiceProviderId(foodProviderId);
        FoodProviderResponseDTO foodProviderResponseDTO = convertToFoodProviderDTO(foodServiceProvider);

        return GetASingleFoodProvider.builder()
                .success(true)
                .message(ResponseMessages.PROVIDER_RETRIEVED_SUCCESSFUL)
                .timeStamp(LocalDateTime.now())
                .foodProviderResponse(foodProviderResponseDTO)
                .build();
    }


    @Override
    public GetMealListResponse getMeals(String userEmail, SearchMealRequest searchMealRequest) {
        User user = userRepository.findByEmail(userEmail);
        System.out.println(user);
        List<Meal> listOfMeals = mealRepository.findByUser(user);
        System.out.println(listOfMeals);

        String requiredMealName = searchMealRequest.getMealName();
        String requiredMealType = searchMealRequest.getMealType();
        String requiredCuisineType = searchMealRequest.getCuisineType();
        List<MealResponseDTO> mealResponseList = listOfMeals
                .stream()
                .map(this::convertToMealResponse)
                .filter(meal -> (requiredMealName == "" || meal.getMealName().contains(requiredMealName))
                        && (requiredMealType == "" || meal.getMealType().equalsIgnoreCase(requiredMealName))
                        && (requiredCuisineType == "" || meal.getCuisineType().equalsIgnoreCase(requiredCuisineType)))
                .toList();

        return GetMealListResponse.builder()
                .success(true)
                .message(ResponseMessages.MEALS_RETRIEVED_SUCCESSFUL)
                .timeStamp(LocalDateTime.now())
                .mealResponseList(mealResponseList)
                .build();
    }

    @Override
    public GetASingleMealResponse getMeal(String mealId) {
        MealResponseDTO mealResponseDTO = mealRepository.findById(mealId)
                .map(this::convertToMealResponse)
                .orElse(null);

        return GetASingleMealResponse.builder()
                .success(true)
                .message(ResponseMessages.MEAL_RETRIEVED_SUCCESSFUL)
                .timeStamp(LocalDateTime.now())
                .mealResponse(mealResponseDTO)
                .build();
    }

    private FoodProviderResponseDTO convertToFoodProviderDTO(FoodServiceProvider foodServiceProvider){
        FoodProviderResponseDTO foodProviderResponseDTO = new FoodProviderResponseDTO();
        foodProviderResponseDTO.setFoodServiceProviderId(foodServiceProvider.getFoodServiceProviderId());
        foodProviderResponseDTO.setFirstName(foodServiceProvider.getFirstName());
        foodProviderResponseDTO.setLastName(foodServiceProvider.getLastName());
        foodProviderResponseDTO.setCompanyName(foodServiceProvider.getCompanyName());
        foodProviderResponseDTO.setCity(foodServiceProvider.getCity());
        foodProviderResponseDTO.setContact(foodServiceProvider.getContact());
        foodProviderResponseDTO.setProvince(foodServiceProvider.getProvince());
        foodProviderResponseDTO.setCompanyAddress(foodServiceProvider.getCompanyAddress());
        foodProviderResponseDTO.setProfileImage(foodServiceProvider.getProfileImage());

        return foodProviderResponseDTO;
    }

    private MealResponseDTO convertToMealResponse(Meal meal) {
        MealResponseDTO response = new MealResponseDTO();
        response.setMealId(meal.getMealId());
        response.setMealName(meal.getMealName());
        response.setMealDescription(meal.getMealDescription());
        response.setMealType(meal.getMealType());
        response.setCuisineType(meal.getCuisineType());
        response.setMealPrice(meal.getMealPrice());
        if (meal.getUser() != null) {
            response.setFoodProviderEmail(meal.getUser().getEmail());
        }
        return response;
    }
}

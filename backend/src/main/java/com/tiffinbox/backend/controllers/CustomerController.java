package com.tiffinbox.backend.controllers;

import com.tiffinbox.backend.dto.request.SearchMealRequest;
import com.tiffinbox.backend.dto.response.mealmenumanagement.GetASingleFoodProvider;
import com.tiffinbox.backend.dto.response.mealmenumanagement.GetASingleMealResponse;
import com.tiffinbox.backend.dto.response.mealmenumanagement.GetFoodProviderListResponse;
import com.tiffinbox.backend.dto.response.mealmenumanagement.GetMealListResponse;
import com.tiffinbox.backend.services.ICustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/customer")
public class CustomerController {

    @Autowired
    private ICustomerService customerService;
    @GetMapping("/getfoodproviders/{city}")
    public ResponseEntity<GetFoodProviderListResponse> getFoodProviders(@PathVariable String city){
        return new ResponseEntity<>(customerService.getFoodProviders(city), HttpStatus.OK);
    }
    @GetMapping("/getfoodprovider/{foodProviderId}")
    public ResponseEntity<GetASingleFoodProvider> getFoodProvider(@PathVariable String foodProviderId){
        return new ResponseEntity<>(customerService.getFoodProvider(foodProviderId), HttpStatus.OK);
    }
    @GetMapping("/getmeals/{userEmail}")
    public ResponseEntity<GetMealListResponse> getMealsFromProvider(@PathVariable String userEmail,@RequestBody SearchMealRequest searchMealRequest){
        return new ResponseEntity<>(customerService.getMeals(userEmail, searchMealRequest),HttpStatus.OK);
    }
    @GetMapping("/getMealFromId/{mealId}")
    public ResponseEntity<GetASingleMealResponse> getMeal(@PathVariable String mealId){
        return new ResponseEntity<>(customerService.getMeal(mealId),HttpStatus.OK);
    }
}

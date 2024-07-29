/**
 * Author : Savan Patel
 */

package com.tiffinbox.backend.controllers;

import com.tiffinbox.backend.dto.request.SearchFoodProviderRequest;
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

    @GetMapping("/getfoodproviders")
    public ResponseEntity<GetFoodProviderListResponse> getAllFoodProviders(){
        return new ResponseEntity<>(customerService.getFoodProviders(new SearchFoodProviderRequest()),HttpStatus.OK);
    }
    @PostMapping("/searchfoodproviders")
    public ResponseEntity<GetFoodProviderListResponse> getFoodProviders(@RequestBody SearchFoodProviderRequest searchFoodProviderRequest){
        return new ResponseEntity<>(customerService.getFoodProviders(searchFoodProviderRequest), HttpStatus.OK);
    }
    @GetMapping("/getfoodprovider/{foodProviderId}")
    public ResponseEntity<GetASingleFoodProvider> getFoodProvider(@PathVariable String foodProviderId){
        return new ResponseEntity<>(customerService.getFoodProvider(foodProviderId), HttpStatus.OK);
    }
    @GetMapping("/getmeals/{foodServiceProviderId}")
    public ResponseEntity<GetMealListResponse> getMealsFromProvider(@PathVariable String foodServiceProviderId){
        return new ResponseEntity<>(customerService.getMeals(foodServiceProviderId),HttpStatus.OK);
    }
    @GetMapping("/getMealFromId/{mealId}")
    public ResponseEntity<GetASingleMealResponse> getMeal(@PathVariable String mealId){
        return new ResponseEntity<>(customerService.getMeal(mealId),HttpStatus.OK);
    }
}

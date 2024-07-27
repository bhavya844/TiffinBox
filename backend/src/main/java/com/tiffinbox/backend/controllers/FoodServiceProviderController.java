package com.tiffinbox.backend.controllers;

import com.tiffinbox.backend.services.IFoodProviderService;
import com.tiffinbox.backend.dto.request.AddMealRequest;
import com.tiffinbox.backend.dto.response.BasicResponse;
import com.tiffinbox.backend.dto.response.foodServiceProvider.GetASingleMealResponse;
import com.tiffinbox.backend.dto.response.foodServiceProvider.GetMealListResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/foodserviceprovider")
public class FoodServiceProviderController {
    @Autowired
    private IFoodProviderService foodProviderService;

    @PostMapping("/addMeal")
    public ResponseEntity<GetASingleMealResponse> addMeal(
            @RequestBody AddMealRequest addMealRequest,
            Principal principal){
        return new ResponseEntity<>(foodProviderService.addMeal(principal,addMealRequest), HttpStatus.OK);
    }

    @GetMapping("/getAllMeals")
    public ResponseEntity<GetMealListResponse> getAllMeals(Principal principal){
        return new ResponseEntity<>(foodProviderService.getAllMeals(principal), HttpStatus.OK);
    }

    @GetMapping("/getMeal/{mealId}")
    public ResponseEntity<GetASingleMealResponse> getMeal(@PathVariable String mealId){
        return new ResponseEntity<>(foodProviderService.getMeal(mealId), HttpStatus.OK);
    }

    @PutMapping("/updateMeal/{mealId}")
    public ResponseEntity<GetASingleMealResponse> updateMeal(
            @PathVariable String mealId,
            @RequestBody AddMealRequest addMealRequest){
        return new ResponseEntity<>(foodProviderService.updateMeal(mealId,addMealRequest), HttpStatus.OK);
    }

    @DeleteMapping("/deleteMeal/{mealId}")
    public ResponseEntity<BasicResponse> deleteMeal(@PathVariable String mealId){
        return new ResponseEntity<>(foodProviderService.deleteMeal(mealId), HttpStatus.OK);
    }
}

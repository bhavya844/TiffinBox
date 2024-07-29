package com.tiffinbox.backend.controllers;

import com.tiffinbox.backend.services.CloudinaryService;
import com.tiffinbox.backend.services.IFoodProviderService;
import com.tiffinbox.backend.dto.request.AddMealRequest;
import com.tiffinbox.backend.dto.response.BasicResponse;
import com.tiffinbox.backend.dto.response.mealmenumanagement.GetASingleMealResponse;
import com.tiffinbox.backend.dto.response.mealmenumanagement.GetMealListResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.Principal;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/foodserviceprovider")
public class FoodServiceProviderController {
    @Autowired
    private IFoodProviderService foodProviderService;
    private CloudinaryService cloudinaryService;

    @PostMapping("/addMeal")
    public ResponseEntity<GetASingleMealResponse> addMeal(
            @RequestPart("mealImage") MultipartFile mealImage,
            @RequestPart("mealName") String mealName,
            @RequestPart("mealDescription") String mealDescription,
            @RequestPart("mealPrice") String mealPrice,
            @RequestPart("mealType") String mealType,
            @RequestPart("cuisineType") String cuisineType,
            Principal principal) throws IOException {

        AddMealRequest addMealRequest = new AddMealRequest();
        addMealRequest.setMealName(mealName);
        addMealRequest.setMealDescription(mealDescription);
        addMealRequest.setMealPrice(Double.valueOf(mealPrice));
        addMealRequest.setMealType(mealType);
        addMealRequest.setCuisineType(cuisineType);

        return new ResponseEntity<>(foodProviderService.addMeal(principal,addMealRequest,mealImage), HttpStatus.OK);
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
            @RequestPart("mealImage") MultipartFile mealImage,
            @RequestPart("mealName") String mealName,
            @RequestPart("mealDescription") String mealDescription,
            @RequestPart("mealPrice") String mealPrice,
            @RequestPart("mealType") String mealType,
            @RequestPart("cuisineType") String cuisineType) throws IOException {

        AddMealRequest addMealRequest = new AddMealRequest();
        addMealRequest.setMealName(mealName);
        addMealRequest.setMealDescription(mealDescription);
        addMealRequest.setMealPrice(Double.valueOf(mealPrice));
        addMealRequest.setMealType(mealType);
        addMealRequest.setCuisineType(cuisineType);

        return new ResponseEntity<>(foodProviderService.updateMeal(mealId,addMealRequest,mealImage), HttpStatus.OK);
    }

    @DeleteMapping("/deleteMeal/{mealId}")
    public ResponseEntity<BasicResponse> deleteMeal(@PathVariable String mealId){
        return new ResponseEntity<>(foodProviderService.deleteMeal(mealId), HttpStatus.OK);
    }
}

package com.tiffinbox.backend.controllers;

import com.tiffinbox.backend.dto.request.CreateSubscriptionRequest;
import com.tiffinbox.backend.services.SubscriptionService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

@RestController
@RequestMapping(path = "/api/subscription")
public class SubscriptionController {
    @Autowired
    private SubscriptionService subscriptionService;

    @PostMapping
    private ResponseEntity<?> createSubscription(@Valid @RequestBody CreateSubscriptionRequest request, Principal principal){
        return new ResponseEntity<>(subscriptionService.createSubscription(request, principal), HttpStatus.OK);
    }
}

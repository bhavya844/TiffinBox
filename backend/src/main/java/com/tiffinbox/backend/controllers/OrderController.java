package com.tiffinbox.backend.controllers;

import com.tiffinbox.backend.dto.request.CreateOrderRequest;
import com.tiffinbox.backend.services.OrderService;
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
@RequestMapping(path = "/api/orders")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @PostMapping
    private ResponseEntity<?> createOrder(@Valid @RequestBody CreateOrderRequest request, Principal principal){
        return new ResponseEntity<>(orderService.createOrder(request, principal), HttpStatus.CREATED);
    }

    @GetMapping
    private ResponseEntity<?> getOwnOrders(Principal principal){
        return new ResponseEntity<>(orderService.getOwnOrders(principal), HttpStatus.OK);
    }

    @GetMapping(path = "/{orderId}")
    private ResponseEntity<?> getOrderDetails(@PathVariable String orderId, Principal principal){
        return new ResponseEntity<>(orderService.getOrderDetails(orderId, principal), HttpStatus.OK);
    }

    @GetMapping(path = "/received")
    private ResponseEntity<?> getFoodServiceProviderOrders(Principal principal){
        return new ResponseEntity<>(orderService.getFoodServiceProviderOrders(principal), HttpStatus.OK);
    }
}

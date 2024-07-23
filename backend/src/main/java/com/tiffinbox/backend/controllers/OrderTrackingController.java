/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.controllers;

import com.tiffinbox.backend.dto.response.ordertrack.GetAllAcceptedOrdersResponse;
import com.tiffinbox.backend.services.impl.OrderTrackService;
import com.tiffinbox.backend.utils.OrderStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api/ordertrack")
@RequiredArgsConstructor
public class OrderTrackingController {

    @Autowired
    private final OrderTrackService orderTrackService;
    @GetMapping(path = "/getAllAcceptedOrders/{userId}")
    public ResponseEntity<GetAllAcceptedOrdersResponse> getAllAcceptedOrders(@PathVariable String userId) {
        return new ResponseEntity<>(orderTrackService.getAllAcceptedOrders(userId), HttpStatus.OK);
    }
}

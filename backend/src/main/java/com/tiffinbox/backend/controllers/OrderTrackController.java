/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.controllers;

import com.tiffinbox.backend.dto.response.ordertrack.GetAllAcceptedOrdersResponse;
import com.tiffinbox.backend.services.IOrderTrackService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping(path = "/api/ordertrack")
@RequiredArgsConstructor
public class OrderTrackController {

    @Autowired
    private final IOrderTrackService orderTrackService;

    @GetMapping(path = "/getAllAcceptedOrders")
    public ResponseEntity<GetAllAcceptedOrdersResponse> getAllAcceptedOrders(Principal principal) {
        return new ResponseEntity<>(orderTrackService.getAllAcceptedOrders(principal), HttpStatus.OK);
    }
}

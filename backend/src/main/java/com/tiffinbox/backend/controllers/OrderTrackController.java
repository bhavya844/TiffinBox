/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.controllers;

import com.tiffinbox.backend.dto.request.UpdateOrderRequest;
import com.tiffinbox.backend.dto.request.VerifyOTPRequest;
import com.tiffinbox.backend.dto.response.BasicResponse;
import com.tiffinbox.backend.dto.response.ordertrack.GetAllAcceptedOrdersResponse;
import com.tiffinbox.backend.dto.response.ordertrack.GetOrderStatusResponse;
import com.tiffinbox.backend.services.IOrderTrackService;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping(path = "/updateStatus/{orderId}")
    public ResponseEntity<BasicResponse> updateOrderStatus(@RequestBody UpdateOrderRequest updateOrderRequest, @PathVariable String orderId, Principal principal) throws MessagingException {
        return new ResponseEntity<>(orderTrackService.updateStatus(updateOrderRequest, orderId, principal), HttpStatus.OK);
    }

    @PostMapping(path = "/verifyOTP/{orderId}")
    public ResponseEntity<BasicResponse> verifyOTP(@RequestBody VerifyOTPRequest verifyOTPRequest, @PathVariable String orderId) {
        return new ResponseEntity<>(orderTrackService.verifyOTP(verifyOTPRequest, orderId), HttpStatus.OK);
    }

    @GetMapping(path = "/getOrderStatus/{orderId}")
    public ResponseEntity<GetOrderStatusResponse> getOrderStatus(@PathVariable String orderId) {
        return new ResponseEntity<>(orderTrackService.getOrderStatus(orderId), HttpStatus.OK);
    }
}

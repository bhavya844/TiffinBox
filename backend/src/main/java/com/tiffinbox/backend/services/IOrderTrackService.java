/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.services;

import com.tiffinbox.backend.dto.request.UpdateOrderRequest;
import com.tiffinbox.backend.dto.request.VerifyOTPRequest;
import com.tiffinbox.backend.dto.response.BasicResponse;
import com.tiffinbox.backend.dto.response.ordertrack.GetAllAcceptedOrdersResponse;
import jakarta.mail.MessagingException;

import java.security.Principal;

public interface IOrderTrackService {
    public GetAllAcceptedOrdersResponse getAllAcceptedOrders(Principal principal);
    public BasicResponse updateStatus(UpdateOrderRequest updateOrderRequest, String orderId, Principal principal) throws MessagingException;
    public BasicResponse verifyOTP(VerifyOTPRequest verifyOTPRequest, String orderId);
}

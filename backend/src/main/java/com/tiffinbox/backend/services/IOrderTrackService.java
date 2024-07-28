/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.services;

import com.tiffinbox.backend.dto.response.ordertrack.GetAllAcceptedOrdersResponse;

import java.security.Principal;

public interface IOrderTrackService {
    public GetAllAcceptedOrdersResponse getAllAcceptedOrders(Principal principal);
}

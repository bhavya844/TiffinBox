package com.tiffinbox.backend.services;

import com.tiffinbox.backend.dto.response.ordertrack.GetAllAcceptedOrdersResponse;
import com.tiffinbox.backend.models.Order;

import java.util.List;

public interface IOrderTrackService {
    public GetAllAcceptedOrdersResponse getAllAcceptedOrders(String foodServiceProviderId);
}

package com.tiffinbox.backend.services;

import com.tiffinbox.backend.dto.request.CreateSubscriptionRequest;
import com.tiffinbox.backend.models.Subscription;

import java.security.Principal;

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

public interface SubscriptionService {
    Subscription createSubscription(CreateSubscriptionRequest request, Principal principal);
    void placeOrderCron();
}

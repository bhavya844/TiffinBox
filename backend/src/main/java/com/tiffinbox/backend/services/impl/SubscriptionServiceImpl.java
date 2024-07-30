package com.tiffinbox.backend.services.impl;

import com.tiffinbox.backend.dto.request.CreateSubscriptionRequest;
import com.tiffinbox.backend.exceptions.AlreadySubscribedException;
import com.tiffinbox.backend.exceptions.ApiRequestException;
import com.tiffinbox.backend.exceptions.NotFoundException;
import com.tiffinbox.backend.models.*;
import com.tiffinbox.backend.repositories.*;
import com.tiffinbox.backend.services.SubscriptionService;
import com.tiffinbox.backend.utils.OrderStatus;
import com.tiffinbox.backend.utils.OrderType;
import com.tiffinbox.backend.utils.ResponseMessages;
import com.tiffinbox.backend.utils.SubscriptionType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

@Service
public class SubscriptionServiceImpl implements SubscriptionService {
    @Autowired
    private SubscriptionRepository subscriptionRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private SellerRepository sellerRepository;
    @Autowired
    private MealRepository mealRepository;
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private PaymentRepository paymentRepository;

    /**
     * Function to create new subscription
     * @param request
     * @param principal
     * @return - new subscription details
     */
    @Override
    public Subscription createSubscription(CreateSubscriptionRequest request, Principal principal) {
        User customer = userRepository.findByEmail(principal.getName());

        if(customer == null){
            throw new NotFoundException(ResponseMessages.USER_NOT_FOUND);
        }

        Optional<Subscription> existingSubscription = subscriptionRepository.findByCustomer(customer);

        LocalDateTime now = LocalDateTime.now();

        if(existingSubscription.isPresent() && existingSubscription.get().getEndDate().isBefore(now)){
            throw new AlreadySubscribedException(ResponseMessages.ALREADY_SUBSCRIBED);
        }

        Optional<FoodServiceProvider> foodServiceProvider = sellerRepository.findById(request.getFoodServiceProviderId());

        if(foodServiceProvider.isEmpty()){
            throw new ApiRequestException(ResponseMessages.USER_NOT_FOUND);
        }

        Optional<Meal> meal = mealRepository.findById(request.getMealId());

        if(meal.isEmpty()){
            throw new ApiRequestException(ResponseMessages.MEAL_NOT_FOUND);
        }

        LocalDateTime startDate = now.plusDays(1);
        LocalDateTime endDate = now;

        if(request.getSubscriptionType().equals(SubscriptionType.WEEKLY.name())){
            endDate = now.plusDays(7);
        }else if(request.getSubscriptionType().equals(SubscriptionType.MONTHLY.name())){
            endDate = now.plusDays(30);
        }else{
            throw new ApiRequestException(ResponseMessages.INVALID_SUBSCRIPTION);
        }

        Subscription subscription = Subscription.builder()
                .customer(customer)
                .foodServiceProvider(foodServiceProvider.get().getUser())
                .meal(meal.get())
                .subscriptionType(SubscriptionType.valueOf(request.getSubscriptionType()))
                .startDate(startDate)
                .endDate(endDate)
                .build();
        subscriptionRepository.save(subscription);

        return subscription;
    }

    /**
     * Cron Job to place order for subscribers
     */
//    @Scheduled(cron = "0 */1 * * * *")
    @Scheduled(cron = "*/10 * * * * *")
//    @Scheduled(cron = "55 23 * * * *")
    @Override
    public void placeOrderCron() {
        List<Subscription> subscriptionList = subscriptionRepository.findAll();

        for(Subscription subscription: subscriptionList){
            LocalDateTime now = LocalDateTime.now();
            LocalDateTime nextDay = now.plusDays(1);

            if(subscription.getEndDate().isBefore(nextDay)){
                continue;
            }

            Payment payment = Payment.builder()
                    .paymentMethod("Card")
                    .amount(subscription.getMeal().getMealPrice())
                    .paymentDate(subscription.getStartDate().minusDays(1))
                    .build();

            Order order = Order.builder()
                    .customer(subscription.getCustomer())
                    .foodServiceProvider(subscription.getFoodServiceProvider())
                    .meal(subscription.getMeal())
                    .orderStatus(OrderStatus.PLACED)
                    .orderDate(nextDay)
                    .totalAmount(subscription.getMeal().getMealPrice())
                    .additionalRequestDescription("")
                    .quantity(1)
                    .orderType(OrderType.SUBSCRIPTION)
                    .payment(payment)
                    .build();

            paymentRepository.save(payment);
            orderRepository.save(order);
        }
    }
}

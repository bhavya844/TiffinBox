package com.tiffinbox.backend.dto.mappers;

import com.tiffinbox.backend.dto.OrderDetailsDTO;
import com.tiffinbox.backend.models.*;

import java.util.ArrayList;
import java.util.List;

public class OrderDetailsMapper {
    public static OrderDetailsDTO convertToOrderDetailsDTO(Order order){
        User userCustomer = order.getCustomer();
        User userFSP = order.getFoodServiceProvider();
        Customer customer = userCustomer.getCustomer();
        FoodServiceProvider provider = userFSP.getFoodServiceProvider();
        Meal meal = order.getMeal();
        Payment payment = order.getPayment();

        return new OrderDetailsDTO(
                order.getOrderId(),
                customer.getFirstName() + " " + customer.getLastName(),
                userCustomer.getEmail(),
                customer.getContactNumber(),
                customer.getStreetAddress() + ", " + customer.getCity(),
                provider.getCompanyName(),
                userFSP.getEmail(),
                provider.getContact(),
                meal.getMealId(),
                meal.getMealImage(),
                meal.getMealName(),
                meal.getCuisineType(),
                order.getQuantity(),
                order.getTotalAmount(),
                order.getAdditionalRequestDescription(),
                payment.getPaymentId(),
                payment.getAmount(),
                order.getOrderType(),
                order.getOrderStatus(),
                order.getOrderDate()
        );
    }

    public static List<OrderDetailsDTO> convertToOrderDetailsDTOList(List<Order> orderList){
        List<OrderDetailsDTO> orderDetailsDTOList = new ArrayList<>();
        for(Order order: orderList){
            orderDetailsDTOList.add(convertToOrderDetailsDTO(order));
        }

        return orderDetailsDTOList;
    }
}

/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.dto.mappers;

import com.tiffinbox.backend.dto.AcceptedOrderListDTO;
import com.tiffinbox.backend.models.Order;
import com.tiffinbox.backend.models.User;

import java.util.ArrayList;
import java.util.List;

public class AcceptedOrderMapper {
    public static AcceptedOrderListDTO convertToAcceptedOrderDTO(Order order) {
        if (order == null) {
            return null;
        }
        User customer = order.getCustomer();
        String customerName = customer.getCustomer().getFirstName() + " " + customer.getCustomer().getLastName();
        return new AcceptedOrderListDTO(
                order.getOrderId(),
                customerName,
                order.getOrderStatus()
        );
    }

    public static List<AcceptedOrderListDTO> convertToAcceptedOrderListDTO(List<Order> orderList) {
        List<AcceptedOrderListDTO> acceptedOrderDTOList = new ArrayList<>();

        for (Order order : orderList) {
            AcceptedOrderListDTO acceptedOrderDTO = convertToAcceptedOrderDTO(order);
            if (acceptedOrderDTO != null) {
                acceptedOrderDTOList.add(acceptedOrderDTO);
            }
        }
        return acceptedOrderDTOList;
    }
}

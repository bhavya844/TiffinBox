/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.dto;

import com.tiffinbox.backend.utils.OrderStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AcceptedOrderListDTO {
    private String orderId;
    private String customerName;
    private OrderStatus currentOrderStatus;
}

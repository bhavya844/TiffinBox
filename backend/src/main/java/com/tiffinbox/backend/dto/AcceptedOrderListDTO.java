/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.dto;

import com.tiffinbox.backend.utils.OrderStatus;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AcceptedOrderListDTO {
    private String orderId;
    private String customerName;
    private OrderStatus orderStatus;
}

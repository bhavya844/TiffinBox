/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.dto.response.ordertrack;

import com.tiffinbox.backend.dto.response.BasicResponse;
import com.tiffinbox.backend.utils.OrderStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
public class GetOrderStatusResponse extends BasicResponse {
    OrderStatus orderStatus;
}

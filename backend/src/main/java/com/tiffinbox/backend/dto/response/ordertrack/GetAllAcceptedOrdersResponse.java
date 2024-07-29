/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.dto.response.ordertrack;

import com.tiffinbox.backend.dto.AcceptedOrderListDTO;
import com.tiffinbox.backend.dto.response.BasicResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
public class GetAllAcceptedOrdersResponse extends BasicResponse {
    List<AcceptedOrderListDTO> acceptedOrderList;
}

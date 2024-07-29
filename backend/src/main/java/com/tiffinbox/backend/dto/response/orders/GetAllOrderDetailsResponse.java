package com.tiffinbox.backend.dto.response.orders;

import com.tiffinbox.backend.dto.OrderDetailsDTO;
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
public class GetAllOrderDetailsResponse extends BasicResponse {
    private List<OrderDetailsDTO> orderDetails;
}

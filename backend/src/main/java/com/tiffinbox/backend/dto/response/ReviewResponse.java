/**
 * Author: Bhavya Dave
 */

package com.tiffinbox.backend.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class ReviewResponse extends BasicResponse{
    private String reviewDescription;
    private Double reviewStars;
    private String FirstName;
    private String LastName;
}

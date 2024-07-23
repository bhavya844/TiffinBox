/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.services;


import com.tiffinbox.backend.dto.response.admin.GetAllPendingRequestsResponse;

public interface IAdminService {
    public GetAllPendingRequestsResponse getAllPendingRequests();
}

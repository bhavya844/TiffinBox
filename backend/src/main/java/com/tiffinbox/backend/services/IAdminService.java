/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.services;


import com.tiffinbox.backend.dto.response.BasicResponse;
import com.tiffinbox.backend.dto.response.admin.GetAllPendingRequestsResponse;
import com.tiffinbox.backend.dto.response.admin.GetAllUsersResponse;
import com.tiffinbox.backend.dto.response.admin.GetAnalysisResponse;
import com.tiffinbox.backend.dto.response.admin.GetSinglePendingRequestResponse;

public interface IAdminService {
    public GetAllPendingRequestsResponse getAllPendingRequests();

    public GetSinglePendingRequestResponse getSinglePendingRequest(String foodServiceProviderId);

    public BasicResponse approvePendingRequest(String email);

    public BasicResponse rejectPendingRequest(String email);

    public GetAllUsersResponse getAllUsers();

    public BasicResponse removeUser(String email);
    public GetAnalysisResponse getAnalysis();
}

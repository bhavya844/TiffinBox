/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.controllers;

import com.tiffinbox.backend.dto.response.BasicResponse;
import com.tiffinbox.backend.dto.response.admin.GetAllPendingRequestsResponse;
import com.tiffinbox.backend.dto.response.admin.GetAllUsersResponse;
import com.tiffinbox.backend.dto.response.admin.GetAnalysisResponse;
import com.tiffinbox.backend.dto.response.admin.GetSinglePendingRequestResponse;
import com.tiffinbox.backend.services.IAdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private final IAdminService adminService;

    @GetMapping(path = "/getAllPendingRequests")
    public ResponseEntity<GetAllPendingRequestsResponse> getAllPendingRequests() {
        return new ResponseEntity<>(adminService.getAllPendingRequests(), HttpStatus.OK);
    }

    @GetMapping(path = "/getSinglePendingRequest/{foodServiceProviderId}")
    public ResponseEntity<GetSinglePendingRequestResponse> getSinglePendingRequest(@PathVariable String foodServiceProviderId) {
        return new ResponseEntity<>(adminService.getSinglePendingRequest(foodServiceProviderId), HttpStatus.OK);
    }

    @PostMapping(path = "/approve/{email}")
    public ResponseEntity<BasicResponse> approvePendingRequest(@PathVariable String email) {
        return new ResponseEntity<>(adminService.approvePendingRequest(email), HttpStatus.OK);
    }

    @PostMapping(path = "/reject/{email}")
    public ResponseEntity<BasicResponse> rejectPendingRequest(@PathVariable String email) {
        return new ResponseEntity<>(adminService.rejectPendingRequest(email), HttpStatus.OK);
    }

    @GetMapping(path = "/getAllUsers")
    public ResponseEntity<GetAllUsersResponse> getUserList() {
        return new ResponseEntity<>(adminService.getAllUsers(), HttpStatus.OK);
    }

    @PostMapping(path = "/removeUser/{email}")
    public ResponseEntity<BasicResponse> removeUser(@PathVariable String email) {
        return new ResponseEntity<>(adminService.removeUser(email), HttpStatus.OK);
    }

    @GetMapping(path = "/getAnalysis")
    public ResponseEntity<GetAnalysisResponse> getAnalysisDashboard() {
        return new ResponseEntity<>(adminService.getAnalysis(), HttpStatus.OK);
    }
}

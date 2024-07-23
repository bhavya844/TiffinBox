/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.controllers;

import com.tiffinbox.backend.dto.response.admin.GetAllPendingRequestsResponse;
import com.tiffinbox.backend.services.IAdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}

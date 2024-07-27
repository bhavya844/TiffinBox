package com.tiffinbox.backend.repositories;

import com.tiffinbox.backend.models.User;
import com.tiffinbox.backend.utils.UserRole;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

    User findByEmail(String email);

    List<User> findAllByIsAdminVerifiedAndUserRole(Boolean isAdminVerified, UserRole userRole);

    User findByEmailAndIsAdminVerifiedAndUserRole(String email, Boolean isAdminVerified, UserRole userRole);

    User findByUserId(String id);
}
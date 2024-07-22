package com.tiffinbox.backend.services.impl;

import com.tiffinbox.backend.dto.request.SignUpRequestCustomer;
import com.tiffinbox.backend.dto.request.SignUpRequestSeller;
import com.tiffinbox.backend.dto.response.SignUpResponse;
import com.tiffinbox.backend.exceptions.ApiRequestException;
import com.tiffinbox.backend.models.Customer;
import com.tiffinbox.backend.models.FoodServiceProvider;
import com.tiffinbox.backend.models.User;
import com.tiffinbox.backend.repositories.CustomerRepository;
import com.tiffinbox.backend.repositories.SellerRepository;
import com.tiffinbox.backend.repositories.UserRepository;
import com.tiffinbox.backend.services.AuthService;
import com.tiffinbox.backend.utils.UserRole;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class AuthServiceImpl implements AuthService {
    @Autowired
    private  UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private SellerRepository sellerRepository;

    public SignUpResponse customerSignUp(SignUpRequestCustomer signUpRequestCustomer){

        User checkUser = userRepository.findByEmail(signUpRequestCustomer.getEmail());
        if(checkUser!=null){
            throw new ApiRequestException("User already registered");
        }
        User user = new User();
        user.setEmail(signUpRequestCustomer.getEmail());
        user.setUserRole(UserRole.CUSTOMER);
        user.setPassword(passwordEncoder.encode(signUpRequestCustomer.getPassword()));
        user.setIsAdminVerified(true);

        Customer customer =new Customer();
        customer.setUser(user);
        customer.setFirstName(signUpRequestCustomer.getFirstname());
        customer.setLastName(signUpRequestCustomer.getLastname());
        customer.setContactNumber(signUpRequestCustomer.getContactNumber());
        customer.setStreetAddress(signUpRequestCustomer.getStreetNumber()+","
                +signUpRequestCustomer.getStreetName()+","
                +signUpRequestCustomer.getApartmentNumber());
        customer.setCity(signUpRequestCustomer.getCityName());
        customer.setProvince(signUpRequestCustomer.getProvinceName());
        customer.setPostalCode(signUpRequestCustomer.getZipCode());

        userRepository.save(user);
        customerRepository.save(customer);
        SignUpResponse signUpResponse =new SignUpResponse();

        signUpResponse.setMessage("User registration successful!");
        signUpResponse.setSuccess(true);
        signUpResponse.setTimeStamp(LocalDateTime.now());

        return signUpResponse;
    }

    public SignUpResponse sellerSignUp(SignUpRequestSeller signUpRequestSeller){

        User checkUser = userRepository.findByEmail(signUpRequestSeller.getEmail());
        if(checkUser!=null){
            throw new ApiRequestException("Seller is already registered");
        }
        User user = new User();
        user.setEmail(signUpRequestSeller.getEmail());
        user.setUserRole(UserRole.CUSTOMER);
        user.setPassword(passwordEncoder.encode(signUpRequestSeller.getPassword()));
        user.setIsAdminVerified(true);

        FoodServiceProvider seller = new FoodServiceProvider();
        seller.setUser(user);
        seller.setFirstName(signUpRequestSeller.getFirstname());
        seller.setLastName(signUpRequestSeller.getLastname());
        seller.setContact(signUpRequestSeller.getContactNumber());
        seller.setCompanyAddress(signUpRequestSeller.getCompanyAddress());
        seller.setCity(signUpRequestSeller.getCityName());
        seller.setProvince(signUpRequestSeller.getProvinceName());
        seller.setCompanyPostalCode(signUpRequestSeller.getCompanyZipCode());

        userRepository.save(user);
        sellerRepository.save(seller);

        SignUpResponse signUpResponse =new SignUpResponse();

        signUpResponse.setMessage("User registration successful as a Seller!");
        signUpResponse.setSuccess(true);
        signUpResponse.setTimeStamp(LocalDateTime.now());

        return signUpResponse;
    }
    
    
}

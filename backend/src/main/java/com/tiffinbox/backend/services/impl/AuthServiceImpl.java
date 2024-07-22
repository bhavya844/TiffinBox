package com.tiffinbox.backend.services.impl;

import com.tiffinbox.backend.dto.request.LoginRequest;
import com.tiffinbox.backend.dto.request.RefreshTokenRequest;
import com.tiffinbox.backend.dto.request.SignUpRequestCustomer;
import com.tiffinbox.backend.dto.request.SignUpRequestSeller;
import com.tiffinbox.backend.dto.response.LoginResponse;
import com.tiffinbox.backend.dto.response.SignUpResponse;
import com.tiffinbox.backend.exceptions.ApiRequestException;
import com.tiffinbox.backend.models.Customer;
import com.tiffinbox.backend.models.FoodServiceProvider;
import com.tiffinbox.backend.models.User;
import com.tiffinbox.backend.repositories.CustomerRepository;
import com.tiffinbox.backend.repositories.SellerRepository;
import com.tiffinbox.backend.repositories.UserRepository;
import com.tiffinbox.backend.services.AuthService;
import com.tiffinbox.backend.services.JwtService;
import com.tiffinbox.backend.utils.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
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
    @Autowired
    private JwtService jwtService;

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
        userRepository.save(user);

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
        customerRepository.save(customer);
        user.setCustomer(customer);
        userRepository.save(user);

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
        user.setUserRole(UserRole.FOOD_SERVICE_PROVIDER);
        user.setPassword(passwordEncoder.encode(signUpRequestSeller.getPassword()));
        user.setIsAdminVerified(true);
        userRepository.save(user);

        FoodServiceProvider seller = new FoodServiceProvider();
        seller.setUser(user);
        seller.setFirstName(signUpRequestSeller.getFirstname());
        seller.setLastName(signUpRequestSeller.getLastname());
        seller.setContact(signUpRequestSeller.getContactNumber());
        seller.setCompanyAddress(signUpRequestSeller.getCompanyAddress());
        seller.setCompanyName(signUpRequestSeller.getCompanyName());
        seller.setCity(signUpRequestSeller.getCityName());
        seller.setProvince(signUpRequestSeller.getProvinceName());
        seller.setCompanyPostalCode(signUpRequestSeller.getCompanyZipCode());
        seller.setCuisineType(signUpRequestSeller.getCuisine());
        seller.setLicenseNumber(signUpRequestSeller.getCfcrNumber());
        sellerRepository.save(seller);
        user.setFoodServiceProvider(seller);
        userRepository.save(user);

        SignUpResponse signUpResponse =new SignUpResponse();
        signUpResponse.setMessage("User registration successful as a Seller!");
        signUpResponse.setSuccess(true);
        signUpResponse.setTimeStamp(LocalDateTime.now());

        return signUpResponse;
    }

    public LoginResponse logIn(LoginRequest loginRequest){

        LoginResponse loginResponse =new LoginResponse();
        User user = userRepository.findByEmail(loginRequest.getEmail());
        if(user == null){
            throw new ApiRequestException("User not found for the provided email: "+loginRequest.getEmail());
        }
        if(loginRequest.getPassword()==null){
            throw new ApiRequestException("Password can't be Null!");
        }
        if(!BCrypt.checkpw(loginRequest.getPassword(),user.getPassword())){
            throw new ApiRequestException("Password miss-match for the registered email: "+user.getEmail());
        }
        if(!user.getIsAdminVerified()){
            throw new RuntimeException("Account is not Verified from Admin Side. Please Contact Admin for Verification");
        }
        String jwtToken = jwtService.generateToken(user);
        String jwtRefreshToken = jwtService.generateRefreshToken(user);
        loginResponse.setUserRole(user.getUserRole());

        if ((user.getUserRole() == UserRole.CUSTOMER)) {
            Customer customer = user.getCustomer();
            loginResponse.setFirstname(customer.getFirstName());
            loginResponse.setLastname(customer.getLastName());
        } else {
            FoodServiceProvider foodServiceProvider = user.getFoodServiceProvider();
            loginResponse.setFirstname(foodServiceProvider.getFirstName());
            loginResponse.setLastname(foodServiceProvider.getLastName());
        }
        loginResponse.setToken(jwtToken);
        loginResponse.setRefreshToken(jwtRefreshToken);
        loginResponse.setSuccess(true);
        loginResponse.setTimeStamp(LocalDateTime.now());
        loginResponse.setMessage("Logged In Successfully!");
        return loginResponse;
    }

    public LoginResponse jwtRefreshToken(RefreshTokenRequest refreshTokenRequest){
        LoginResponse loginResponse =new LoginResponse();
        String email = jwtService.extractUsername(refreshTokenRequest.getToken());
        User user = userRepository.findByEmail(email);
        if(user == null){throw new ApiRequestException("User not Found for the corresponding token");}
        if(jwtService.isTokenValid(refreshTokenRequest.getToken(), user)){
            String jwtToken = jwtService.generateToken(user);

            loginResponse.setUserRole(user.getUserRole());

            if ((user.getUserRole() == UserRole.CUSTOMER)) {
                Customer customer = user.getCustomer();
                loginResponse.setFirstname(customer.getFirstName());
                loginResponse.setLastname(customer.getLastName());
            } else {
                FoodServiceProvider foodServiceProvider = user.getFoodServiceProvider();
                loginResponse.setFirstname(foodServiceProvider.getFirstName());
                loginResponse.setLastname(foodServiceProvider.getLastName());
            }
            loginResponse.setToken(jwtToken);
            loginResponse.setRefreshToken(refreshTokenRequest.getToken());
            loginResponse.setSuccess(true);
            loginResponse.setTimeStamp(LocalDateTime.now());
            loginResponse.setMessage("Token has been Replenished through the Refresh Token!");
            return loginResponse;
        }
        return null;
    }
}

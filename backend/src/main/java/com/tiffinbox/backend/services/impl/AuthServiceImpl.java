package com.tiffinbox.backend.services.impl;

import com.tiffinbox.backend.dto.request.*;
import com.tiffinbox.backend.dto.response.BasicResponse;
import com.tiffinbox.backend.dto.response.LoginResponse;
import com.tiffinbox.backend.dto.response.SignUpResponse;
import com.tiffinbox.backend.exceptions.ApiRequestException;
import com.tiffinbox.backend.exceptions.NotFoundException;
import com.tiffinbox.backend.exceptions.NotVerifiedException;
import com.tiffinbox.backend.models.Customer;
import com.tiffinbox.backend.models.FoodServiceProvider;
import com.tiffinbox.backend.models.TempPasswordRegistry;
import com.tiffinbox.backend.models.User;
import com.tiffinbox.backend.repositories.CustomerRepository;
import com.tiffinbox.backend.repositories.SellerRepository;
import com.tiffinbox.backend.repositories.TempPasswordRepository;
import com.tiffinbox.backend.repositories.UserRepository;
import com.tiffinbox.backend.services.EmailService;
import com.tiffinbox.backend.services.IAuthService;
import com.tiffinbox.backend.services.JwtService;
import com.tiffinbox.backend.utils.EmailType;
import com.tiffinbox.backend.utils.ResponseMessages;
import com.tiffinbox.backend.utils.UserRole;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.UUID;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

@Service
public class AuthServiceImpl implements IAuthService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private SellerRepository sellerRepository;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private EmailService emailService;
    @Autowired
    private TempPasswordRepository tempPasswordRepository;

    public SignUpResponse customerSignUp(SignUpRequestCustomer signUpRequestCustomer) {

        User checkUser = userRepository.findByEmail(signUpRequestCustomer.getEmail());
        if (checkUser != null) {
            throw new ApiRequestException(ResponseMessages.USER_ALREADY_PRESENT);
        }
        User user = new User();
        user.setEmail(signUpRequestCustomer.getEmail());
        user.setUserRole(UserRole.CUSTOMER);
        user.setPassword(passwordEncoder.encode(signUpRequestCustomer.getPassword()));
        user.setIsAdminVerified(true);
        userRepository.save(user);

        Customer customer = new Customer();
        customer.setUser(user);
        customer.setFirstName(signUpRequestCustomer.getFirstname());
        customer.setLastName(signUpRequestCustomer.getLastname());
        customer.setContactNumber(signUpRequestCustomer.getContactNumber());
        customer.setStreetAddress(signUpRequestCustomer.getStreetAddress());
        customer.setCity(signUpRequestCustomer.getCityName());
        customer.setProvince(signUpRequestCustomer.getProvinceName());
        customer.setPostalCode(signUpRequestCustomer.getZipCode());
        customerRepository.save(customer);
        user.setCustomer(customer);
        userRepository.save(user);

        SignUpResponse signUpResponse = new SignUpResponse();
        signUpResponse.setMessage(ResponseMessages.REGISTRATION_SUCCESS);
        signUpResponse.setSuccess(true);
        signUpResponse.setTimeStamp(LocalDateTime.now());

        return signUpResponse;
    }

    public SignUpResponse sellerSignUp(SignUpRequestSeller signUpRequestSeller) {

        User checkUser = userRepository.findByEmail(signUpRequestSeller.getEmail());
        if (checkUser != null) {
            throw new ApiRequestException(ResponseMessages.SELLER_ALREADY_PRESENT);
        }
        User user = new User();
        user.setEmail(signUpRequestSeller.getEmail());
        user.setUserRole(UserRole.FOOD_SERVICE_PROVIDER);
        user.setPassword(passwordEncoder.encode(signUpRequestSeller.getPassword()));
        user.setIsAdminVerified(false);
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

        SignUpResponse signUpResponse = new SignUpResponse();
        signUpResponse.setMessage(ResponseMessages.SELLER_REGISTRATION_SUCCESS);
        signUpResponse.setSuccess(true);
        signUpResponse.setTimeStamp(LocalDateTime.now());

        return signUpResponse;
    }

    public LoginResponse logIn(LoginRequest loginRequest) {

        LoginResponse loginResponse = new LoginResponse();
        User user = userRepository.findByEmail(loginRequest.getEmail());
        if (user == null) {
            throw new NotFoundException(ResponseMessages.USER_NOT_FOUND);
        }
        if (loginRequest.getPassword() == null) {
            throw new ApiRequestException(ResponseMessages.PSWD_NULL);
        }
        if (!BCrypt.checkpw(loginRequest.getPassword(), user.getPassword())) {
            throw new ApiRequestException(ResponseMessages.PSWD_MISS_MATCH);
        }
        if (!user.getIsAdminVerified()) {
            throw new NotVerifiedException(ResponseMessages.ACCOUNT_NOT_VERIFIED);
        }
        String jwtToken = jwtService.generateToken(user);
        String jwtRefreshToken = jwtService.generateRefreshToken(user);
        loginResponse.setUserRole(user.getUserRole());
        loginResponse.setUserId(user.getUserId());

        if (user.getUserRole() == UserRole.CUSTOMER) {
            Customer customer = user.getCustomer();
            loginResponse.setFirstname(customer.getFirstName());
            loginResponse.setLastname(customer.getLastName());
        } else if(user.getUserRole() == UserRole.FOOD_SERVICE_PROVIDER) {
            FoodServiceProvider foodServiceProvider = user.getFoodServiceProvider();
            loginResponse.setFirstname(foodServiceProvider.getFirstName());
            loginResponse.setLastname(foodServiceProvider.getLastName());
        }else if(user.getUserRole() == UserRole.ADMIN) {
            loginResponse.setFirstname("Tiffin Box Admin");
            loginResponse.setLastname("Admin");
        }
        else {
            loginResponse.setFirstname("Tiffin Box User");
            loginResponse.setLastname("Tiffin Box User");
        }
        loginResponse.setToken(jwtToken);
        loginResponse.setRefreshToken(jwtRefreshToken);
        loginResponse.setSuccess(true);
        loginResponse.setTimeStamp(LocalDateTime.now());
        return loginResponse;
    }

    public LoginResponse jwtRefreshToken(RefreshTokenRequest refreshTokenRequest) {
        LoginResponse loginResponse = new LoginResponse();
        String email = jwtService.extractUsername(refreshTokenRequest.getRefreshToken());
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new NotFoundException(ResponseMessages.USER_NOT_FOUND_TOKEN);
        }
        if (jwtService.isTokenValid(refreshTokenRequest.getRefreshToken(), user)) {
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
            loginResponse.setRefreshToken(refreshTokenRequest.getRefreshToken());
            loginResponse.setSuccess(true);
            loginResponse.setTimeStamp(LocalDateTime.now());
            return loginResponse;
        }
        return null;
    }

    @SneakyThrows
    public BasicResponse forgotPassword (ForgotPasswordRequest forgotPasswordRequest){
        BasicResponse basicResponse = new BasicResponse();
        TempPasswordRegistry tempPasswordRegistry = new TempPasswordRegistry();
        User user = userRepository.findByEmail(forgotPasswordRequest.getEmail());
        if(user == null){
            throw new NotFoundException("No User Found for the provided email!");
        }
        String tempPswd = UUID.randomUUID().toString().replace("-", "");
        String encodedPswd = passwordEncoder.encode(tempPswd);
        emailService.sendEmail(EmailType.DELIVERY_OTP, forgotPasswordRequest.getEmail(), ResponseMessages.TEMP_PSWD,ResponseMessages.TEMP_PSWD_BODY,tempPswd);
        tempPasswordRegistry.setUser(user);
        tempPasswordRegistry.setPermanantPassword(user.getPassword());
        tempPasswordRegistry.setTempPassword(encodedPswd);
        tempPasswordRepository.save(tempPasswordRegistry);
        user.setPassword(encodedPswd);
        userRepository.save(user);
        ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);
        scheduler.schedule(() -> {

            User latestUser = userRepository.findByUserId(user.getUserId());
            TempPasswordRegistry latestTempPasswordRegistry = tempPasswordRepository.findByTempPswdId(tempPasswordRegistry.getTempPswdId());

            if (latestTempPasswordRegistry == null){
                throw new NotFoundException("Temporary Password Expired!");
            }

            if (latestUser == null){
                throw new NotFoundException("Error Fetching User!");
            }

            if (latestUser.getPassword().equals(latestTempPasswordRegistry.getTempPassword())) {
                latestUser.setPassword(latestTempPasswordRegistry.getPermanantPassword());
                userRepository.save(latestUser);
                tempPasswordRepository.delete(latestTempPasswordRegistry);
            }

            scheduler.shutdown();
        }, 3, TimeUnit.MINUTES);
        basicResponse.setTimeStamp(LocalDateTime.now());
        basicResponse.setSuccess(true);
        basicResponse.setMessage("Email has been sent Successfully!");
        return basicResponse;
    }
}

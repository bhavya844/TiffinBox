package com.tiffinbox.backend.utils;

public class ResponseMessages {
    public static final String USER_ALREADY_PRESENT = "User already registered.";
    public static final String SELLER_ALREADY_PRESENT = "Seller already registered.";
    public static final String REGISTRATION_SUCCESS = "User registration successful!";
    public static final String SELLER_REGISTRATION_SUCCESS = "User registration successful as a Seller!";
    public static final String USER_NOT_FOUND = "User not found for the provided email!";
    public static final String PSWD_NULL = "Password can't be Null!";
    public static final String PSWD_MISS_MATCH = "Password miss-match for the registered user!";
    public static final String ACCOUNT_NOT_VERIFIED = "Account is Not Verified from the Admin side, Please Contact Admin for Verification.";
    public static final String USER_NOT_FOUND_TOKEN = "User not Found for the corresponding token!";

    // Admin Service Response
    public static final String FOOD_SERVICE_PROVIDER_NOT_FOUND = "Food service provider does not exist";
    public static final String USER_PENDING_REQUEST_RETRIVED = "User pending requests retrieved.";
    public static final String USER_SINGLE_PENDING_REQUEST_RETRIEVED = "Food service provider retrieved.";
    public static final String APPROVE_PENDING_REQUEST = "Pending request approved.";
    public static final String REJECT_PENDING_REQUEST = "Pending request rejected.";
    public static final String REMOVE_USER_SUCCESSFUL = "User removed successfully.";
}

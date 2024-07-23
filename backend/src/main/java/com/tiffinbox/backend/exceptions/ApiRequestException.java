package com.tiffinbox.backend.exceptions;

public class ApiRequestException extends RuntimeException {

    public ApiRequestException(String message){
        super(message);
    };

}

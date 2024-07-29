package com.tiffinbox.backend.exceptions;

public class ExpiredJwtTokenException extends RuntimeException{

    public ExpiredJwtTokenException(String message){
        super(message);
    }
}

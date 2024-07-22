package com.tiffinbox.backend.exceptions;

public class NotVerifiedException extends RuntimeException{
    public NotVerifiedException(String message){
        super(message);
    }
}

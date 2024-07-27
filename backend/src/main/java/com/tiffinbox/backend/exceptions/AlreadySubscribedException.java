package com.tiffinbox.backend.exceptions;

/**
 * Author: Raj Kamlesh Pate
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

public class AlreadySubscribedException extends RuntimeException{
    public AlreadySubscribedException(String message){
        super(message);
    }
}

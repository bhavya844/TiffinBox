package com.tiffinbox.backend.services;

import jakarta.mail.MessagingException;

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

public interface EmailService {
    void sendEmail(String to, String subject, String body, String token) throws MessagingException;
}

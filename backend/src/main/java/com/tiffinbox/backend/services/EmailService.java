package com.tiffinbox.backend.services;

import com.tiffinbox.backend.utils.EmailType;
import jakarta.mail.MessagingException;

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

public interface EmailService {
    void sendEmail(EmailType emailType, String to, String subject, String message, String token) throws MessagingException;
}

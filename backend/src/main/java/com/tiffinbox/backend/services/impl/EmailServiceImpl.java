package com.tiffinbox.backend.services.impl;

import com.tiffinbox.backend.services.EmailService;
import com.tiffinbox.backend.utils.EmailType;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring6.SpringTemplateEngine;

import java.nio.charset.StandardCharsets;

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

@Service
@RequiredArgsConstructor
public class EmailServiceImpl implements EmailService {
    @Autowired
    private JavaMailSender javaMailSender;
    @Autowired
    private SpringTemplateEngine springTemplateEngine;

    private final String URL = "http://localhost:5173";

    @Override
    public void sendEmail(EmailType emailType, String to, String subject, String message, String token) throws MessagingException {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();

        // setting up variables in mail template
        Context context = new Context();
        context.setVariable("message", message);

        String process = null;
        if(emailType.equals(EmailType.DELIVERY_OTP)) {
            context.setVariable("otp", token);
            process = springTemplateEngine.process("DeliveryOTP.html", context);
        } else if (emailType.equals(EmailType.PASSWORD_RESET)) {
            context.setVariable("url",URL + "/reset-password/" + token);
            process = springTemplateEngine.process("PasswordReset.html", context);
        }

        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED, StandardCharsets.UTF_8.name());

        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(process, true);

        javaMailSender.send(mimeMessage);
    }
}

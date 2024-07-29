/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.utils;

import java.security.SecureRandom;
import java.util.Random;
import java.util.function.Supplier;

public class OTPService {

    private static final String DIGITS = "0123456789";
    private static final int LENGTH = 6;
    private static final SecureRandom RANDOM = new SecureRandom();

    public static String generateOTP() {
        StringBuilder otp = new StringBuilder(LENGTH);
        for (int i = 0; i < LENGTH; i++) {
            otp.append(DIGITS.charAt(RANDOM.nextInt(DIGITS.length())));
        }
        return otp.toString();
    }
}

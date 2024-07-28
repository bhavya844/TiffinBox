package com.tiffinbox.backend.services;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

public interface CloudinaryService {
    Map upload(MultipartFile file) throws IOException;
}

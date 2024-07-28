package com.tiffinbox.backend.services.impl;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.tiffinbox.backend.services.CloudinaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;
import java.util.UUID;

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

@Service
public class CloudinaryServiceImpl implements CloudinaryService {
    @Autowired
    private Cloudinary cloudinary;

    @Override
    public Map upload(MultipartFile file) throws IOException {
        Map options = ObjectUtils.asMap("public_id", "TiffinBox/" + file.getOriginalFilename() + "-" + UUID.randomUUID());
        return cloudinary.uploader().upload(file.getBytes(), options);
    }
}

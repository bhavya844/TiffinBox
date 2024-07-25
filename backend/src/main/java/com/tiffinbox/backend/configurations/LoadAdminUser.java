/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.configurations;

import com.tiffinbox.backend.models.User;
import com.tiffinbox.backend.repositories.UserRepository;
import com.tiffinbox.backend.utils.UserRole;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class LoadAdminUser {
    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository, PasswordEncoder passwordEncoder){
        return args -> {
            User admin = new User();
            admin.setEmail("admin@admin.com");
            admin.setPassword(passwordEncoder.encode("Admin@12345"));
            admin.setIsAdminVerified(true);
            admin.setUserRole(UserRole.ADMIN);

            User adminUser = userRepository.findByEmail(admin.getEmail());
            if(adminUser != null) {
                return;
            }
            userRepository.save(admin);
        };
    }
}

package com.tiffinbox.backend.models;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Document
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"user"})
public class TempPasswordRegistry {
    @MongoId
    private String tempPswdId;
    @DBRef
    private User user;
    private String permanantPassword;
    private String tempPassword;

}

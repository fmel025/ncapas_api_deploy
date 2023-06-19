package com.group6.server.models.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SignInGoogleDTO {
    @NotEmpty(message = "Email is required")
    @Email(message = "The email sent was invalid")
    private String email ; //  email

    @NotEmpty(message = "Fullname is required")
    private String fullname;
}

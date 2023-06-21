package com.group6.server.models.dtos;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChangePasswordDTO {
    @NotEmpty(message = "The current password must be sent")
    @Size(min = 8, message = "The password length must be at least 8 characters")
    private String currentPassword;

    @NotEmpty(message = "The new password is required")
    @Size(min = 8, message = "The password length must be at least 8 characters")
    @Pattern(regexp = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@#$%^&+=!¡¿?])[A-Za-z\\d@#$%^&+=!¡¿?]{8,}$",
            message = "Password must have at least 8 characters and the required and the required characters to fulfill")
    private String newPassword;
}

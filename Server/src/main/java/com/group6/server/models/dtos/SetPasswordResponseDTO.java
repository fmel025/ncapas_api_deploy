package com.group6.server.models.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SetPasswordResponseDTO {
    private String message;
    private Boolean isPasswordSet;
}

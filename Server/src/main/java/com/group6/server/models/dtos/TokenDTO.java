package com.group6.server.models.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
public class TokenDTO {
    private String token;
    private List<String> authorities;
    private Boolean isPasswordSet;

    public TokenDTO(String token, Boolean isPasswordSet) {
        this.token = token;
        this.isPasswordSet = isPasswordSet;
        this.authorities = new ArrayList<>();
    }
}

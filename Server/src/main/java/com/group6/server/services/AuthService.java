package com.group6.server.services;

import com.group6.server.models.dtos.SignInGoogleDTO;
import com.group6.server.models.entites.User;

public interface AuthService {
    User findByUsernameOrEmail(String identifier); // identifier is username or email
    User register(SignInGoogleDTO registerDTO) throws Exception;

    User findUserAuthenticated();
}

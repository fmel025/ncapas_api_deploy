package com.group6.server.services;

import com.group6.server.models.dtos.SignInGoogleDTO;
import com.group6.server.models.dtos.TokenDTO;
import com.group6.server.models.entites.Authorization;
import com.group6.server.models.entites.User;

import java.util.List;

public interface AuthService {
    User findByUsernameOrEmail(String identifier); // identifier is username or email
    User register(SignInGoogleDTO registerDTO, Authorization authorization) throws Exception;
    String generateToken(User user);
    User findUserAuthenticated();
    List<String> getUserAuthorities(User user);
    Boolean comparePasswords(String toCompare, String current);
}

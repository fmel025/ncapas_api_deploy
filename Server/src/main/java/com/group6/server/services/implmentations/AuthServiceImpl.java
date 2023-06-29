package com.group6.server.services.implmentations;

import com.group6.server.config.JWTTools;
import com.group6.server.models.dtos.SignInGoogleDTO;
import com.group6.server.models.dtos.TokenDTO;
import com.group6.server.models.entites.Authorization;
import com.group6.server.models.entites.User;
import com.group6.server.repositories.UserRepository;
import com.group6.server.services.AuthService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    UserRepository repository;

    @Autowired
    JWTTools jwtTools;

    @Autowired
    public PasswordEncoder passwordEncoder;

    @Override
    public User findByUsernameOrEmail(String identifier) {
        return repository.findByEmail(identifier);
    }

    // Here you should add the authority/permission
    @Override
    @Transactional(rollbackOn = Exception.class)
    public User register(SignInGoogleDTO registerDTO, Authorization authorization) throws Exception {
        User user = new User(
                registerDTO.getFullname(),
                registerDTO.getEmail()
        );

        user.getAuthorizations().add(authorization);

        repository.save(user);

        return user;
    }

    @Override
    public String generateToken(User user) {
        return jwtTools.generateToken(user);
    }

    @Override
    public User findUserAuthenticated() {
        String email = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        return repository.findByEmail(email);
    }

    @Override
    public List<String> getUserAuthorities(User user) {
        return user.getAuthorizations().stream().map(
                Authorization::getPermission
        ).collect(Collectors.toList());
    }

    @Override
    public boolean comparePassword(String password, String hashedPassword) {
        return passwordEncoder.matches(password, hashedPassword);
    }
}

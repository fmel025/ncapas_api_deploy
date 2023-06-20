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
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    UserRepository repository;

    @Autowired
    JWTTools jwtTools;

    @Override
    public User findByUsernameOrEmail(String identifier) {
        return repository.findByEmail(identifier);
    }

    @Override
    @Transactional(rollbackOn = Exception.class)
    public User register(SignInGoogleDTO registerDTO) throws Exception {
        User user = new User(
                registerDTO.getFullname(),
                registerDTO.getEmail()
        );

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
                Authorization::getName
        ).collect(Collectors.toList());
    }
}

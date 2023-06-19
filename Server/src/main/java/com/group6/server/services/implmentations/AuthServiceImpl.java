package com.group6.server.services.implmentations;

import com.group6.server.models.dtos.SignInGoogleDTO;
import com.group6.server.models.entites.User;
import com.group6.server.repositories.UserRepository;
import com.group6.server.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    UserRepository repository;

    @Override
    public User findByUsernameOrEmail(String identifier) {
        return repository.findByEmail(identifier);
    }

    @Override
    public User register(SignInGoogleDTO registerDTO) {
        User user = new User(
                registerDTO.getFullname(),
                registerDTO.getEmail()
        );

        repository.save(user);

        return user;
    }
}

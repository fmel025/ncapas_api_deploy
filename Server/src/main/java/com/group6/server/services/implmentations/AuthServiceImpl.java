package com.group6.server.services.implmentations;

import com.group6.server.models.dtos.SignInGoogleDTO;
import com.group6.server.models.entites.User;
import com.group6.server.repositories.UserRepository;
import com.group6.server.services.AuthService;
import jakarta.transaction.Transactional;
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
    @Transactional(rollbackOn = Exception.class)
    public User register(SignInGoogleDTO registerDTO) throws Exception {
        User user = new User(
                registerDTO.getFullname(),
                registerDTO.getEmail()
        );

        repository.save(user);

        return user;
    }
}

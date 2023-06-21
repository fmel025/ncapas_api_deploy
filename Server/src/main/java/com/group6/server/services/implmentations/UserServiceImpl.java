package com.group6.server.services.implmentations;

import com.group6.server.models.entites.User;
import com.group6.server.repositories.UserRepository;
import com.group6.server.services.UserService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository repository;

    @Override
    public boolean comparePassword(String password, String hashedPassword) {
        return passwordEncoder.matches(password, hashedPassword);
    }

    @Override
    public User findById(String id) {
        UUID code = UUID.fromString(id);
        return repository.findById(code).orElse(null);
    }

    @Override
    @Transactional(rollbackOn = Exception.class)
    public void updateUser(User user) throws Exception {

    }

    @Override
    public User findByUsernameOrEmail(String identifier) {
        return repository.findByEmail(identifier);
    }

    @Override
    public List<User> getAllUsers() {
        return null;
    }

    @Override
    @Transactional(rollbackOn = Exception.class)
    public User setPassword(String password, User user) throws Exception {
        String encodedPassword = passwordEncoder.encode(password);
        user.setPassword(encodedPassword);
        repository.save(user);
        return user;
    }
}

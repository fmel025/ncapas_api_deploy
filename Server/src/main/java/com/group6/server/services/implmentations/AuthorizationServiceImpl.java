package com.group6.server.services.implmentations;

import com.group6.server.models.entites.Authorization;
import com.group6.server.repositories.AuthorizationRepository;
import com.group6.server.services.AuthorizationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthorizationServiceImpl implements AuthorizationService {

    @Autowired
    AuthorizationRepository authorizationRepository;

    @Override
    public Authorization findById(Integer id) {
        return authorizationRepository.findById(id).orElse(null);
    }

    @Override
    public Authorization findByName(String name) {
        return authorizationRepository.findByName(name);
    }

    // Idk why we created this
    @Override
    public Authorization findByIdOrName(String identifier) {
        return null;
    }
}

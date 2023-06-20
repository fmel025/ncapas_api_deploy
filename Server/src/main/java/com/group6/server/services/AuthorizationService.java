package com.group6.server.services;

import com.group6.server.models.entites.Authorization;

public interface AuthorizationService {
    Authorization findById(Integer id);

    Authorization findByName(String name);

    Authorization findByIdOrName(String identifier);
}

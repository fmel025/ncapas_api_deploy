package com.group6.server.services;

import com.group6.server.models.entites.Authorization;

public interface AuthorizationService {
    Authorization findById(Integer id);

    Authorization findByPermission(String permission);

    Authorization findByIdOrName(String identifier);
}

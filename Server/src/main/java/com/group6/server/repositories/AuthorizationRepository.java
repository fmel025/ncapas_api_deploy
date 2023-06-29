package com.group6.server.repositories;

import com.group6.server.models.entites.Authorization;
import com.group6.server.models.entites.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AuthorizationRepository extends JpaRepository<Authorization, Integer> {
    Authorization findByPermission(String permission);
}

package com.group6.server.repositories;

import com.group6.server.models.entites.Event;
import com.group6.server.models.entites.Tier;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface TierRepository extends JpaRepository<Tier, UUID> {
    List<Tier> findAllByEvent(Event event);
}

package com.group6.server.services;

import com.group6.server.models.dtos.Tier.CreateTiersDTO;
import com.group6.server.models.entites.Event;
import com.group6.server.models.entites.Tier;

import java.util.List;

public interface TierService {
    void save(Tier tier) throws Exception;

    void saveAll(CreateTiersDTO dto, Event event) throws Exception;

    List<Tier> findAllByEvent(Event event);

    Tier findOneById(String id);
}

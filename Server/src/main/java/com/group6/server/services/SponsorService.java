package com.group6.server.services;

import com.group6.server.models.entites.Event;
import com.group6.server.models.entites.Sponsor;

import java.util.List;

public interface SponsorService {
    void save(Sponsor sponsor, Event event);

    void saveAll(List<String> sponsors, Event event) throws Exception;
}

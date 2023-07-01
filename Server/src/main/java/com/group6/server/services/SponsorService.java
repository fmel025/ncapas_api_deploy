package com.group6.server.services;

import com.group6.server.models.entites.Event;
import com.group6.server.models.entites.Sponsor;

import java.util.List;

public interface SponsorService {
    void save(Sponsor sponsor) throws Exception;

    void saveAll(List<String> sponsors, Event event) throws Exception;

    Sponsor findByCode(Integer code);

    void deleteById(Integer code) throws Exception;
}

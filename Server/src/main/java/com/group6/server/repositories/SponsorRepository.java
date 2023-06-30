package com.group6.server.repositories;

import com.group6.server.models.entites.Event;
import com.group6.server.models.entites.Sponsor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SponsorRepository extends JpaRepository<Sponsor, Integer> {
    List<Sponsor> findAllByEvent(Event event);
}

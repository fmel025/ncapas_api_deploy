package com.group6.server.repositories;

import com.group6.server.models.entites.Event;
import com.group6.server.models.entites.Organizer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrganizerRepository extends JpaRepository<Organizer, Integer> {
    List<Organizer> findAllByEvent(Event event);
}

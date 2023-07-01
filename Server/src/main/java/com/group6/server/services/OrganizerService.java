package com.group6.server.services;

import com.group6.server.models.entites.Event;
import com.group6.server.models.entites.Organizer;
import org.aspectj.weaver.ast.Or;

import java.util.List;

public interface OrganizerService {
    void save(Organizer organizer) throws Exception;

    void saveAll(List<String> organizers, Event event) throws Exception;

    Organizer findOneById(Integer id);

    List<Organizer> findAllByEvent(Event event);
}

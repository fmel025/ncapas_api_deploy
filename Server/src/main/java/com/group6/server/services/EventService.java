package com.group6.server.services;

import com.group6.server.models.dtos.Event.EventDTO;
import com.group6.server.models.dtos.admin.UpdateEventDTO;
import com.group6.server.models.entites.Event;
import com.group6.server.models.entites.User;
import org.springframework.data.domain.Page;

import java.util.List;

public interface EventService {
    //create event
    Event createEvent(EventDTO eventDTO) throws Exception;

    //update event
    Event updateEvent(Event event) throws Exception; // should be the same method as createEvent

    //find all events
    List<Event> findAllEvents();

    Page<Event> findAll(int page, int size);
    Page<Event> findAllActive(int page, int size);

    Page<Event> findAllByTitle(int page, int size, String title);

    Page<Event> findAllByTitleAndActive(int page, int size, String title);

    //find event by id
    Event findEventById(Integer id);

    //find  event by title
    List<Event> findEventByTitle(String title);

    //toggle visibility of event
    Event toggleVisibility(String id);

    List<Event> findEventsByValidator(User user);
}

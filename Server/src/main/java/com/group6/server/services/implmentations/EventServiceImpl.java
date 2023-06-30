package com.group6.server.services.implmentations;

import com.group6.server.models.dtos.Event.EventDTO;
import com.group6.server.models.dtos.admin.UpdateEventDTO;
import com.group6.server.models.entites.Event;
import com.group6.server.models.entites.User;
import com.group6.server.repositories.EventRepository;
import com.group6.server.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepository repository;

    @Override
    public Event createEvent(EventDTO eventDTO) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        LocalDateTime dateTime = LocalDateTime.parse(eventDTO.getDateAndTime(), formatter);
        Event event = new Event(
                eventDTO.getTitle(),
                eventDTO.getDuration(),
                eventDTO.getLocation(),
                dateTime,
                eventDTO.getImageUrl()
        );

        repository.save(event);

        return event;
    }

    @Override
    public Event updateEvent(UpdateEventDTO eventDTO) {
        return null;
    }

    @Override
    public List<Event> findAllEvents() {
        return null;
    }

    @Override
    public Event findEventById(String id) {
        return null;
    }

    @Override
    public List<Event> findEventByTitle(String title) {
        return null;
    }

    @Override
    public Event toggleVisibility(String id) {
        return null;
    }

    @Override
    public List<Event> findEventsByValidator(User user) {
        return null;
    }
}

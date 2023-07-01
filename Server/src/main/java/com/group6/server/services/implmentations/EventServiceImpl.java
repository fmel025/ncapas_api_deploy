package com.group6.server.services.implmentations;

import com.group6.server.models.dtos.Event.EventDTO;
import com.group6.server.models.dtos.admin.UpdateEventDTO;
import com.group6.server.models.entites.Event;
import com.group6.server.models.entites.User;
import com.group6.server.repositories.EventRepository;
import com.group6.server.services.EventService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepository repository;

    @Override
    @Transactional(rollbackOn = Exception.class)
    public Event createEvent(EventDTO eventDTO) throws Exception {
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
    @Transactional(rollbackOn = Exception.class)
    public Event updateEvent(Event event) throws Exception {
        return repository.save(event);
    }

    @Override
    public List<Event> findAllEvents() {
        return null;
    }

    @Override
    public Page<Event> findAll(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("title"));
        return repository.findAll(pageable);
    }

    @Override
    public Page<Event> findAllActive(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return repository.findAllByActiveOrderByDateTimeDesc(true, pageable);
    }

    @Override
    public Page<Event> findAllByTitle(int page, int size, String title) {
        Pageable pageable = PageRequest.of(page, size);
        return repository.findAllByTitleContainingIgnoreCaseOrderByDateTimeDesc(title, pageable);
    }

    @Override
    public Page<Event> findAllByTitleAndActive(int page, int size, String title) {
        Pageable pageable = PageRequest.of(page, size);
        return repository.findAllByActiveAndTitleContainingIgnoreCaseOrderByDateTimeDesc(true, title, pageable);
    }

    @Override
    public Event findEventById(Integer id) {
        return repository.findById(id).orElse(null);
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

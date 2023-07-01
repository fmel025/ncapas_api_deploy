package com.group6.server.controllers;


import com.group6.server.models.dtos.ErrorDTO;
import com.group6.server.models.dtos.PageDTO;
import com.group6.server.models.entites.Event;
import com.group6.server.services.EventService;
import com.group6.server.utils.Constants;
import com.group6.server.utils.ErrorHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

// This is the public controller, the one for the admin and event mod will be another one
@RestController
@CrossOrigin("*")
@RequestMapping(Constants.API_PUBLIC_URL + "/event")
public class EventController {

    @Autowired
    private ErrorHandler errorHandler;

    @Autowired
    private EventService eventService;

    // This will have pagination on the future
    @GetMapping("/")
    public ResponseEntity<?> getAllEvents(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "20") int size,
            @RequestParam(name = "title", required = false, defaultValue = "") String title) {
        if (title.isEmpty()) {
            Page<Event> events = eventService.findAll(page, size);
            PageDTO<Event> response = new PageDTO<>(
                    events.getContent(),
                    events.getTotalPages(),
                    events.hasNext(),
                    events.hasPrevious()
            );
            return ResponseEntity.ok(response);
        }

        Page<Event> events = eventService.findAllByTitle(page, size, title);
        PageDTO<Event> response = new PageDTO<>(
                events.getContent(),
                events.getTotalPages(),
                events.hasNext(),
                events.hasPrevious()
        );
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{code}")
    public ResponseEntity<?> findEventByCode(
            @PathVariable(name = "code") Integer code
    ) {
        Event event = eventService.findEventById(code);

        if (event == null) {
            return new ResponseEntity<>(
                    new ErrorDTO("The event sent does not exist", false),
                    HttpStatus.NOT_FOUND
            );
        }

        Map<String, Object> response = new HashMap<>();

        Map<String, Object> eventData = new HashMap<>();

        eventData.put("event", event);
        eventData.put("categories", event.getCategories());
        eventData.put("sponsors", event.getSponsors());
        eventData.put("organizers", event.getOrganizers());
        eventData.put("tiers", event.getTiers());

        response.put("data", eventData);
        response.put("success", true);

        return new ResponseEntity<>(
                response, HttpStatus.OK
        );
    }
}

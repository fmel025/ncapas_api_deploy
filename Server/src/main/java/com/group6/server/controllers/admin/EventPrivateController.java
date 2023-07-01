package com.group6.server.controllers.admin;

import com.group6.server.models.dtos.Category.CategoryDTO;
import com.group6.server.models.dtos.ErrorDTO;
import com.group6.server.models.dtos.ErrorsDTO;
import com.group6.server.models.dtos.Event.EventDTO;
import com.group6.server.models.dtos.Event.EventDTOResponse;
import com.group6.server.models.dtos.PageDTO;
import com.group6.server.models.dtos.Response.ErrorResponse;
import com.group6.server.models.dtos.Response.Response;
import com.group6.server.models.dtos.admin.UpdateEventDTO;
import com.group6.server.models.entites.*;
import com.group6.server.services.EventService;
import com.group6.server.services.SponsorService;
import com.group6.server.utils.Constants;
import com.group6.server.utils.ErrorHandler;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.springframework.http.HttpStatus.CREATED;

@RestController
@CrossOrigin("*")
@RequestMapping(Constants.API_ADMIN_URL + "/event")
public class EventPrivateController {

    @Autowired
    private ErrorHandler errorHandler;

    @Autowired
    private EventService eventService;

    @Autowired
    private SponsorService sponsorService;

    @PostMapping(path = "/", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createEvent(@Valid @RequestBody EventDTO dto, BindingResult validations) {
        if (validations.hasErrors()) {
            return new ResponseEntity<>(ErrorResponse.builder()
                    .reason("Invalid body was sent")
                    .errors(errorHandler.mapErrors(validations.getFieldErrors()))
                    .success(false).build(), HttpStatus.BAD_REQUEST);
        }

        try {
            Event event = eventService.createEvent(dto);

            EventDTOResponse response = new EventDTOResponse(event.getCode());

            return new ResponseEntity<>(Response.builder()
                    .message("La creacion del evento fue exitosa!")
                    .success(true)
                    .data(response).build(), CREATED);
        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseEntity.internalServerError().body(
                    ErrorResponse.builder()
                            .reason("Oops, the server is having issues, try later")
                            .success(false).build());
        }
    }

    @GetMapping("/")
    public ResponseEntity<?> getAllEvents(@RequestParam(name = "page", defaultValue = "0") int page, @RequestParam(name = "size", defaultValue = "20") int size, @RequestParam(name = "title", required = false, defaultValue = "") String title) {
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

    // To update the event data
    @PutMapping("/")
    public ResponseEntity<?> updateEventData(@Valid @RequestBody UpdateEventDTO dto, BindingResult validations) {
        if (validations.hasErrors()) {
            return new ResponseEntity<>(new ErrorsDTO(errorHandler.mapErrors(validations.getFieldErrors())), HttpStatus.BAD_REQUEST);
        }
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/toggle-visibility/{id}")
    public ResponseEntity<?> toggleEventVisibility(@PathVariable(name = "id") String event) {
        return ResponseEntity.ok().build();
    }
}

package com.group6.server.controllers.admin;

import com.group6.server.models.dtos.Organizer.OrganizersCreateDTO;
import com.group6.server.models.dtos.Response.ErrorResponse;
import com.group6.server.models.dtos.Response.Response;
import com.group6.server.models.entites.Category;
import com.group6.server.models.entites.Event;
import com.group6.server.models.entites.Organizer;
import com.group6.server.services.EventService;
import com.group6.server.services.OrganizerService;
import com.group6.server.utils.Constants;
import com.group6.server.utils.ErrorHandler;
import jakarta.validation.Valid;
import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(Constants.API_BASE_URL + "/organizer")
public class OrganizerController {

    @Autowired
    private ErrorHandler errorHandler;

    @Autowired
    private EventService eventService;

    @Autowired
    private OrganizerService organizerService;

    @PostMapping("/")
    public ResponseEntity<?> createOrganizer(@Valid @RequestBody OrganizersCreateDTO data, BindingResult validations) {
        if (validations.hasErrors()) {
            return new ResponseEntity<>(
                    ErrorResponse.builder()
                            .reason("Invalid body was sent")
                            .errors(errorHandler.mapErrors(validations.getFieldErrors()))
                            .success(false)
                            .build(),
                    HttpStatus.BAD_REQUEST
            );
        }

        Event event = eventService.findEventById(data.getEventCode());

        if (event == null) {
            return new ResponseEntity<>(
                    ErrorResponse.builder()
                            .reason("The event sent was not found")
                            .success(false)
                            .build(),
                    HttpStatus.BAD_REQUEST
            );
        }

        try {
            organizerService.saveAll(data.getOrganizers(), event);
            return new ResponseEntity<>(
                    Response.builder()
                            .message("Los organizadores se han añadido exitosamente")
                            .success(true)
                            .build(),
                    HttpStatus.CREATED
            );

        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseEntity.internalServerError().body(
                    ErrorResponse.builder()
                            .reason("Oops, the server is having issues, try later")
                            .build()
            );
        }
    }

    @GetMapping("/event/{code}")
    public ResponseEntity<?> findOrganizersByEvent(
            @PathVariable(name = "code") Integer code
    ) {
        Event event = eventService.findEventById(code);

        if (event == null) {
            return new ResponseEntity<>(
                    ErrorResponse.builder().success(false)
                            .reason("The event sent does not exist")
                            .build(),
                    HttpStatus.NOT_FOUND
            );
        }

        List<Organizer> organizers = event
                .getOrganizers();

        return ResponseEntity.ok(
                Response.builder()
                        .data(organizers)
                        .success(true)
                        .build()
        );

    }
}

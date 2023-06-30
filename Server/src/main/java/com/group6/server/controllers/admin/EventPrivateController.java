package com.group6.server.controllers.admin;

import com.group6.server.models.dtos.ErrorsDTO;
import com.group6.server.models.dtos.Event.EventDTO;
import com.group6.server.models.dtos.Event.EventDTOResponse;
import com.group6.server.models.dtos.Response.ErrorResponse;
import com.group6.server.models.dtos.Response.Response;
import com.group6.server.models.dtos.admin.UpdateEventDTO;
import com.group6.server.models.entites.Event;
import com.group6.server.services.EventService;
import com.group6.server.services.SponsorService;
import com.group6.server.utils.Constants;
import com.group6.server.utils.ErrorHandler;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<?> createEvent(
            @Valid @RequestBody EventDTO dto,
            BindingResult validations
    )  {
        if (validations.hasErrors()) {
            return new ResponseEntity<>(
                    ErrorResponse.builder()
                            .status(HttpStatus.BAD_REQUEST.name())
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .reason("Invalid body was sent")
                            .errors(errorHandler.mapErrors(validations.getFieldErrors()))
                            .success(false)
                            .build(),
                    HttpStatus.BAD_REQUEST
            );
        }

        try {
            Event event = eventService.createEvent(dto);

            EventDTOResponse response = new EventDTOResponse(event.getCode());

            return new ResponseEntity<>(
                    Response.builder()
                            .status(CREATED.name())
                            .statusCode(CREATED.value())
                            .message("La creacion del evento fue exitosa!")
                            .success(true)
                            .data(response)
                            .build(),
                    CREATED
            );
        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseEntity.internalServerError().body(
                    ErrorResponse.builder()
                            .status(HttpStatus.INTERNAL_SERVER_ERROR.name())
                            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                            .reason("Oops, the server is having issues, try later")
                            .success(false)
                            .build()
            );
        }
    }

    // To update the event data
    @PutMapping("/")
    public ResponseEntity<?> updateEventData(
            @Valid @RequestBody UpdateEventDTO dto,
            BindingResult validations
    ) {
        if (validations.hasErrors()) {
            return new ResponseEntity<>(
                    new ErrorsDTO(errorHandler.mapErrors(validations.getFieldErrors())),
                    HttpStatus.BAD_REQUEST
            );
        }
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/toggle-visibility/{id}")
    public ResponseEntity<?> toggleEventVisibility(
            @PathVariable(name = "id") String event
    ) {
        return ResponseEntity.ok().build();
    }
}

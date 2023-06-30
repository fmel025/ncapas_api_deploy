package com.group6.server.controllers.admin;

import com.group6.server.models.dtos.Response.ErrorResponse;
import com.group6.server.models.dtos.Response.Response;
import com.group6.server.models.dtos.Sponsor.SponsorsCreateDTO;
import com.group6.server.models.entites.Event;
import com.group6.server.services.EventService;
import com.group6.server.services.SponsorService;
import com.group6.server.utils.Constants;
import com.group6.server.utils.ErrorHandler;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping(Constants.API_ADMIN_URL + "/sponsor")
public class SponsorController {

    @Autowired
    private ErrorHandler errorHandler;

    @Autowired
    private SponsorService sponsorService;

    @Autowired
    private EventService eventService;

    @PostMapping("/")
    public ResponseEntity<?> createSponsors(
            @Valid @RequestBody SponsorsCreateDTO data,
            BindingResult validations
    ) {
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

        Event event = eventService.findEventById(data.getEventCode());

        try {
            sponsorService.saveAll(data.getSponsors(), event);
            return new ResponseEntity<>(
                    Response.builder()
                            .status(HttpStatus.CREATED.name())
                            .statusCode(HttpStatus.CREATED.value())
                            .message("Los sponsors se han creado exitosamente")
                            .success(true)
                            .build(),
                    HttpStatus.CREATED
            );
        } catch (Exception exception) {
            return ResponseEntity.internalServerError().body(
                    ErrorResponse.builder()
                            .status(HttpStatus.INTERNAL_SERVER_ERROR.name())
                            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                            .reason("Oops, the server is having issues, try later")
                            .build()
            );
        }
    }

}

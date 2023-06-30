package com.group6.server.controllers.admin;

import com.group6.server.models.dtos.Response.ErrorResponse;
import com.group6.server.models.dtos.Response.Response;
import com.group6.server.models.dtos.Tier.CreateTiersDTO;
import com.group6.server.models.entites.Event;
import com.group6.server.services.EventService;
import com.group6.server.services.TierService;
import com.group6.server.utils.Constants;
import com.group6.server.utils.ErrorHandler;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping(Constants.API_ADMIN_URL + "/tier")
public class TierController {

    @Autowired
    private ErrorHandler errorHandler;

    @Autowired
    private EventService eventService;

    @Autowired
    private TierService tierService;

    @PostMapping("/")
    public ResponseEntity<?> createTiers(
            @Valid @RequestBody CreateTiersDTO dto,
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

        Event event = eventService.findEventById(dto.getEventCode());

        if(event == null){
            return new ResponseEntity<>(
                    ErrorResponse.builder()
                            .status(HttpStatus.NOT_FOUND.name())
                            .statusCode(HttpStatus.NOT_FOUND.value())
                            .reason("The event sent was not found")
                            .success(false)
                            .build(),
                    HttpStatus.NOT_FOUND
            );
        }

        try {
            tierService.saveAll(dto, event);
            return new ResponseEntity<>(
                    Response.builder()
                            .status(HttpStatus.CREATED.name())
                            .statusCode(HttpStatus.CREATED.value())
                            .message("Las tiers se han creado exitosamente")
                            .success(true)
                            .build(),
                    HttpStatus.CREATED
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
}

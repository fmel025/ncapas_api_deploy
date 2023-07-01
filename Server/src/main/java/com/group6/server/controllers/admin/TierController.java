package com.group6.server.controllers.admin;

import com.group6.server.models.dtos.Response.ErrorResponse;
import com.group6.server.models.dtos.Response.Response;
import com.group6.server.models.dtos.Tier.CreateTiersDTO;
import com.group6.server.models.dtos.Tier.UpdateTierDTO;
import com.group6.server.models.entites.Event;
import com.group6.server.models.entites.Tier;
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

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(Constants.API_BASE_URL + "/tier")
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
                            .reason("Invalid body was sent")
                            .errors(errorHandler.mapErrors(validations.getFieldErrors()))
                            .success(false)
                            .build(),
                    HttpStatus.BAD_REQUEST
            );
        }

        Event event = eventService.findEventById(dto.getEventCode());

        if (event == null) {
            return new ResponseEntity<>(
                    ErrorResponse.builder()
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
                            .message("Las tiers se han creado exitosamente")
                            .success(true)
                            .build(),
                    HttpStatus.CREATED
            );
        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseEntity.internalServerError().body(
                    ErrorResponse.builder()
                            .reason("Oops, the server is having issues, try later")
                            .success(false)
                            .build()
            );
        }
    }

    @GetMapping("/event/{code}")
    public ResponseEntity<?> findAllTiersByEvent(
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

        List<Tier> tiers = event.getTiers();

        return ResponseEntity.ok(
                Response.builder()
                        .success(true)
                        .data(tiers)
                        .build()
        );
    }

    @GetMapping("/{code}")
    public ResponseEntity<?> getTierById(
            @PathVariable(name = "code") String code
    ) {
        return ResponseEntity.ok(
                tierService.findOneById(code)
        );
    }

    @PatchMapping("/{code}")
    public ResponseEntity<?> updateTierName(
            @Valid @RequestBody UpdateTierDTO dto,
            @PathVariable(name = "code") String code,
            BindingResult validations
    ) {
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

        Tier tier = tierService.findOneById(code);

        if (tier == null) {
            return new ResponseEntity<>(
                    ErrorResponse.builder()
                            .reason("The tier sent was not found")
                            .success(false)
                            .build(),
                    HttpStatus.NOT_FOUND
            );
        }

        try {
            tier.setName(dto.getName());
            tier.setPrice(dto.getPrice());
            tierService.save(tier);
            return ResponseEntity.ok(
                    Response.builder()
                            .success(true)
                            .message("The tier was updated successfully")
                            .build()
            );

        } catch (Exception exception) {
            exception.printStackTrace();
            return new ResponseEntity<>(
                    ErrorResponse.builder()
                            .reason("Internal server error")
                            .success(false)
                            .build(),
                    HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }
}

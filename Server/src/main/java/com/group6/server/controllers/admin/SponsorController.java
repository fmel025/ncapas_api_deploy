package com.group6.server.controllers.admin;

import com.group6.server.models.dtos.Response.ErrorResponse;
import com.group6.server.models.dtos.Response.Response;
import com.group6.server.models.dtos.Sponsor.SponsorUpdateDTO;
import com.group6.server.models.dtos.Sponsor.SponsorsCreateDTO;
import com.group6.server.models.entites.Event;
import com.group6.server.models.entites.Sponsor;
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

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(Constants.API_BASE_URL + "/sponsor")
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
                            .message("Los sponsors se han creado exitosamente")
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
    public ResponseEntity<?> findSponsorsByEvent(
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

        List<Sponsor> sponsors = event.getSponsors();

        return ResponseEntity.ok(
                Response.builder()
                        .success(true)
                        .data(sponsors)
                        .build()
        );
    }

    @PatchMapping("/{code}")
    public ResponseEntity<?> updateSponsor(
            @Valid @RequestBody SponsorUpdateDTO dto,
            @PathVariable(name = "code") Integer code,
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

        Sponsor sponsor = sponsorService.findByCode(code);

        if (sponsor == null) {
            return new ResponseEntity<>(
                    ErrorResponse.builder().success(false)
                            .reason("The sponsor sent does not exist")
                            .build(),
                    HttpStatus.NOT_FOUND
            );
        }

        try {
            sponsor.setName(dto.getName());
            sponsorService.save(sponsor);

            return ResponseEntity.ok(
                    Response.builder()
                            .message("The sponsor was updated successfully")
                            .success(true)
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

    @DeleteMapping("/{code}")
    public ResponseEntity<?> deleteSponsorById(
            @PathVariable(name = "code") Integer code
    ) {
        Sponsor sponsor = sponsorService.findByCode(code);

        if (sponsor == null) {
            return new ResponseEntity<>(
                    ErrorResponse.builder()
                            .success(false)
                            .reason("The sponsor sent was not found")
                            .build(),
                    HttpStatus.NOT_FOUND
            );
        }

        try {
            sponsorService.deleteById(code);
            return ResponseEntity.ok(
                    Response.builder()
                            .success(true)
                            .message("The sponsor was deleted successfully")
                            .build()
            );

        } catch (Exception exception) {

            exception.printStackTrace();

            return ResponseEntity.internalServerError().body(
                    ErrorResponse.builder()
                            .success(false)
                            .reason("Internal server error")
                            .build()
            );
        }
    }
}

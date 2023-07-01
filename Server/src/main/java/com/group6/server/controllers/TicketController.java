package com.group6.server.controllers;

import com.group6.server.models.dtos.ErrorsDTO;
import com.group6.server.models.dtos.Tickets.TicketDTO;
import com.group6.server.services.TicketService;
import com.group6.server.utils.Constants;
import com.group6.server.utils.ErrorHandler;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(Constants.API_BASE_URL + "/ticket")
public class TicketController {
    @Autowired
    private TicketService ticketService;

    @Autowired
    private ErrorHandler errorHandler;

    // Here would go the QRService
    @GetMapping("/qr/{id}")
    public ResponseEntity<?> getQRCode(@PathVariable(name = "id") String ticketId){
        return ResponseEntity.ok().build();
    }

    //Tickets validos
    @GetMapping("/valid/")
    public  ResponseEntity<?> getValidTickets(
            @Valid
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size,
            @RequestBody TicketDTO ticketDTO ,
            BindingResult validations

    ){

        if (validations.hasErrors()) {
            return ResponseEntity.badRequest().body(
                    new ErrorsDTO(
                            errorHandler.mapErrors(validations.getFieldErrors())
                    )
            );
        }

        if (ticketDTO.getIsValid()!=true){
            return ResponseEntity.badRequest().body(
                    new ErrorsDTO(
                            errorHandler.mapErrors(validations.getFieldErrors())
                    )
            );
        }

        return ResponseEntity.ok(ticketService.findAllValid(page, size, ticketDTO.getIsValid()));


    }
}

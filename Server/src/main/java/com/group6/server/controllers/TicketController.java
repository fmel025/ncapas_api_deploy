package com.group6.server.controllers;

import com.group6.server.models.dtos.ErrorDTO;
import com.group6.server.models.dtos.ErrorsDTO;
import com.group6.server.models.dtos.Tickets.TicketDTO;
import com.group6.server.models.entites.Ticket;
import com.group6.server.models.entites.Tier;
import com.group6.server.repositories.TicketsRepository;
import com.group6.server.services.TicketService;
import com.group6.server.utils.Constants;
import com.group6.server.utils.ErrorHandler;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping(Constants.API_BASE_URL + "/ticket")
public class TicketController {
    @Autowired
    private TicketService ticketService;

    @Autowired
    private TicketsRepository ticketsRepository;

    @Autowired
    private ErrorHandler errorHandler;

    // Here would go the QRService
    @GetMapping("/qr/{id}")
    public ResponseEntity<?> getQRCode(@PathVariable(name = "id") String ticketId){
        return ResponseEntity.ok().build();
    }

    @PostMapping("/")
    public ResponseEntity<?> createTickets(
            @Valid
            @RequestBody TicketDTO dto,
            BindingResult validations

    ){

        if (validations.hasErrors()) {
            return ResponseEntity.badRequest().body(
                    new ErrorsDTO(
                            errorHandler.mapErrors(validations.getFieldErrors())
                    )
            );
        }

        //verifico que el id de la compra exista
        if(dto.getPurchase().getCode() == null){
            return ResponseEntity.badRequest().body(
                    new ErrorDTO("The purchase is required for this request", false)

            );
        }

        //verifico que el código de la tier exista
        if(dto.getTier().getCode() == null){
            return ResponseEntity.badRequest().body(
                    new ErrorDTO("The tier is required for this request", false)

            );
        }

        //verifico que la cantidad sea mayor a 0
        if(dto.getQuantity() <= 0){
            return ResponseEntity.badRequest().body(
                    new ErrorDTO("The quantity is required for this request", false)

            );
        }

        //verifico que la cantidad sea menor a la cantidad de tickets disponibles
        if(dto.getQuantity() > dto.getTier().getCapacity()){
            return ResponseEntity.badRequest().body(
                    new ErrorDTO("The quantity is greater than the available tickets", false)

            );
        }

        // recorro la cantidad de tickets que se quieren crear y los creo
        //cada ticket debe guardar el id de la compra y el id de la tier
        //alamacenarlos en una lista y usar el método saveAll del repositorio de tickets

       //crear lista que por cada iteración guarde un ticket

       List<Ticket> tickets = new ArrayList<>();

        for (int i = 0; i < dto.getQuantity(); i++) {

            tickets = Collections.singletonList(ticketService.create(dto));
        }

        ticketsRepository.saveAll(tickets);
        return  ResponseEntity.ok(tickets);
    }








    @GetMapping("/valid/{isValid}")
    public  ResponseEntity<?> getValidTickets(
            @Valid
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size,
            @PathVariable(name = "isValid") boolean isValid,
            BindingResult validations

    ){

        if (validations.hasErrors()) {
            return ResponseEntity.badRequest().body(
                    new ErrorsDTO(
                            errorHandler.mapErrors(validations.getFieldErrors())
                    )
            );
        }

    if(isValid){
        return ResponseEntity.ok(ticketService.findAllValid(page, size, isValid));
    }else{
        return ResponseEntity.ok(ticketService.findAllInvalid(page, size, isValid));
    }
    }
}

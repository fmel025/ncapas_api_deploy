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
    public ResponseEntity<?> getQRCode(@PathVariable(name = "id") String ticketId) {
        return ResponseEntity.ok().build();
    }
}
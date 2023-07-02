package com.group6.server.controllers;

import com.group6.server.models.dtos.*;
import com.group6.server.models.entites.Purchase;
import com.group6.server.models.entites.User;
import com.group6.server.services.AuthService;
import com.group6.server.services.PurchaseService;
import com.group6.server.services.TicketService;
import com.group6.server.utils.Constants;
import com.group6.server.utils.ErrorHandler;
import jakarta.validation.Valid;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(Constants.API_BASE_URL + "/purchase")
public class PurchaseController {

    @Autowired
    ErrorHandler errorHandler;

    @Autowired
    private AuthService authService;

    @Autowired
    private PurchaseService purchaseService;

    @Autowired
    private TicketService ticketService;

    @PostMapping("/")
    public ResponseEntity<?> createPurchase(@Valid @RequestBody PurchaseDTO dto,Integer quantity , BindingResult validations){
        if(validations.hasErrors()){
            return ResponseEntity.badRequest()
                    .body(
                    new ErrorsDTO(
                            errorHandler.mapErrors(validations.getFieldErrors())
                    )
            );
        }
        //verifico que el id del evento exista

        if(dto.getEvent().getCode() == null){
            return ResponseEntity.badRequest().body(
                    new ErrorDTO("The event is required for this request", false)

            );
        }

        //verifico que el usuario exista
        User user = authService.findUserAuthenticated();
        if(user == null){
            return ResponseEntity.badRequest().body(
                    new ErrorDTO("The user authenticated is  required ", false)
            );
        }

        //crear la compra que contiene al usuario y al evento
        Purchase purchase = purchaseService.save(user,dto);




        return ResponseEntity.ok().build();
    }

    @GetMapping("/{code}")
    public ResponseEntity<?> findById(@PathVariable(name = "code") String code){
        return ResponseEntity.ok().build();
    }

    @GetMapping("/user/{code}")
    public ResponseEntity<?> findByUser(@PathVariable(name = "code") String identifier){
        if(identifier.isEmpty()){
            return ResponseEntity.badRequest().body(
                    new ErrorDTO("The user is required for this request", false)
            );
        }

        return ResponseEntity.ok().build();
    }
}

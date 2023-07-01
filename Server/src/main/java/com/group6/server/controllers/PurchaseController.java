package com.group6.server.controllers;

import com.group6.server.models.dtos.CreatePurchaseDTO;
import com.group6.server.models.dtos.ErrorDTO;
import com.group6.server.models.dtos.ErrorsDTO;
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

    @PostMapping("/")
    public ResponseEntity<?> createPurchase(@Valid @RequestBody CreatePurchaseDTO dto, BindingResult validations){
        if(validations.hasErrors()){
            return ResponseEntity.badRequest()
                    .body(
                    new ErrorsDTO(
                            errorHandler.mapErrors(validations.getFieldErrors())
                    )
            );
        }

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

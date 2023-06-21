package com.group6.server.controllers;

import com.group6.server.models.dtos.ChangePasswordDTO;
import com.group6.server.models.dtos.ChangeUsernameDTO;
import com.group6.server.models.dtos.ErrorsDTO;
import com.group6.server.models.dtos.MessageDTO;
import com.group6.server.utils.Constants;
import com.group6.server.utils.ErrorHandler;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(Constants.API_BASE_URL + "/user")
public class UserController {

    @Autowired
    private ErrorHandler errorHandler;

    @PatchMapping("/change-password")
    public ResponseEntity<?> changePassword(@Valid @RequestBody ChangePasswordDTO data, BindingResult validations) {

        if (validations.hasErrors()) {
            return ResponseEntity.badRequest()
                    .body(
                            new ErrorsDTO(
                                    errorHandler.mapErrors(validations.getFieldErrors())
                            )
                    );
        }

        return ResponseEntity.ok().body(
                new MessageDTO("The password was updated successfully")
        );
    }

    // This route may be needed in the future
    @PatchMapping("/set-password")
    public ResponseEntity<?> changeUsername(@Valid @RequestBody ChangeUsernameDTO data, BindingResult validations) {

        if (validations.hasErrors()) {
            return ResponseEntity.badRequest()
                    .body(
                            new ErrorsDTO(
                                    errorHandler.mapErrors(validations.getFieldErrors())
                            )
                    );
        }

        return ResponseEntity.ok().body(
                new MessageDTO("The username was changed successfully")
        );
    }

    // This route is to get a user code to transfer a ticket
    @GetMapping("/code/{id}")
    public ResponseEntity<?> getUserCode(@PathVariable(name = "id") String id) {
        return ResponseEntity.ok().build();
    }

    // This could be a /me route too
    @GetMapping("/{id}")
    public ResponseEntity<?> getUserData(@PathVariable(name = "id") String id) {
        return ResponseEntity.ok().build();
    }
}
package com.group6.server.controllers;

import com.group6.server.models.dtos.*;
import com.group6.server.models.entites.User;
import com.group6.server.services.AuthService;
import com.group6.server.services.UserService;
import com.group6.server.utils.Constants;
import com.group6.server.utils.ErrorHandler;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping(Constants.API_BASE_URL + "/user")
public class UserController {

    @Autowired
    private ErrorHandler errorHandler;

    @Autowired
    private AuthService authService;

    @Autowired
    private UserService userService;

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
    public ResponseEntity<?> changeUsername(@Valid @RequestBody SetPasswordDTO data, BindingResult validations) {

        if (validations.hasErrors()) {
            return ResponseEntity.badRequest()
                    .body(
                            new ErrorsDTO(
                                    errorHandler.mapErrors(validations.getFieldErrors())
                            )
                    );
        }

        User user = authService.findUserAuthenticated();

        if (user.getPasswordSet()) {
            return new ResponseEntity<>(
                    new ErrorDTO("The user has already a current password"),
                    HttpStatus.FORBIDDEN
            );
        }

        try {
            userService.setPassword(data.getPassword(), user);

            HashMap<String, Object> response = new HashMap<>();

            response.put("message", "The password has been set successfully");
            response.put("isPasswordSet", true);

            return ResponseEntity.ok(response);

        } catch (Exception e) {

            e.printStackTrace();

            return new ResponseEntity<>(
                    new ErrorDTO("Internal Server Error"),
                    HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
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
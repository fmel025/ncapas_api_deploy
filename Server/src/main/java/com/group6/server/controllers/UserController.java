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
import org.springframework.security.core.GrantedAuthority;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
@CrossOrigin("*")
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

        User user = authService.findUserAuthenticated();

        boolean doesPasswordsMatch = userService.comparePassword(data.getCurrentPassword(), user.getPassword());

        if (!doesPasswordsMatch) {
            return new ResponseEntity<>(
                    new ErrorDTO("The password sent does not match your previous one", false),
                    HttpStatus.BAD_REQUEST
            );
        }

        if (data.getCurrentPassword().equals(data.getNewPassword())) {
            return new ResponseEntity<>(
                    new ErrorDTO("The new password cannot be the current one", false),
                    HttpStatus.CONFLICT
            );
        }

        try {
            userService.setPassword(data.getNewPassword(), user);
            return ResponseEntity.ok(
                    new MessageDTO("The password has changed successfully")
            );

        } catch (Exception exception) {
            exception.printStackTrace();
            return new ResponseEntity<>(
                    new ErrorDTO("Internal Server Error", false),
                    HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    @GetMapping("/me")
    public ResponseEntity<?> getAllPermissions() {

        User user = authService.findUserAuthenticated();
        List<String> permissions = user.getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority)
                .toList();

        Boolean isPasswordSet = user.getPasswordSet();

        Map<String, Object> response = new HashMap<>();
        response.put("permissions", permissions);
        response.put("isPasswordSet", isPasswordSet);

        return ResponseEntity.ok(
                response
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
                    new ErrorDTO("The user has already a current password", false),
                    HttpStatus.FORBIDDEN
            );
        }

        try {
            userService.setPassword(data.getPassword(), user);

            SetPasswordResponseDTO response = new SetPasswordResponseDTO(
                    "The password has been set successfully",
                    true
            );

            return ResponseEntity.ok(response);

        } catch (Exception e) {

            e.printStackTrace();

            return new ResponseEntity<>(
                    new ErrorDTO("Internal Server Error", false),
                    HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    // This route is to get a user code to transfer a ticket
    // TODO: Make this route to generate a transfer code
    @GetMapping("/code")
    public ResponseEntity<?> getUserCode(@PathVariable(name = "id") String id) {
        return ResponseEntity.ok().build();
    }

    @GetMapping("/profile")
    public ResponseEntity<?> getUserProfile() {
        User user = authService.findUserAuthenticated();
        ProfileResponseDTO profile = userService.getUserProfile(user);
        return new ResponseEntity<>(
                profile,
                HttpStatus.OK
        );
    }

}
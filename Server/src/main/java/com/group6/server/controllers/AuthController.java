package com.group6.server.controllers;

import com.group6.server.models.dtos.*;
import com.group6.server.models.entites.User;
import com.group6.server.services.AuthService;
import com.group6.server.utils.ErrorHandler;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import com.group6.server.utils.Constants;

import java.util.HashMap;

@RestController
@RequestMapping(Constants.API_BASE_URL + "/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private ErrorHandler errorHandler;

    @PostMapping("/login")
    public ResponseEntity<?> getLogin(@Valid @RequestBody SignInDTO data, BindingResult validations) {

        if (validations.hasErrors()) {
            return ResponseEntity.badRequest().body(
                    new ErrorsDTO(
                            errorHandler.mapErrors(validations.getFieldErrors())
                    )
            );
        }
        return new ResponseEntity<Object>(new MessageDTO("Controller working successfully"),
                HttpStatus.OK);
    }

    @PostMapping("/google")
    public ResponseEntity<?> getGoogleLogin(@Valid @RequestBody SignInGoogleDTO data, BindingResult validations) {

        if (validations.hasErrors()) {
            return ResponseEntity.badRequest().body(
                    new ErrorsDTO(
                            errorHandler.mapErrors(validations.getFieldErrors())
                    )
            );
        }

        User user = authService.findByUsernameOrEmail(data.getEmail());

        if (user == null) {
            user = authService.register(data);
            return new ResponseEntity<>(user,
                    HttpStatus.CREATED);
        }

        if (!user.getActive()){
            return new ResponseEntity<>(
                    new ErrorDTO("Your account has been blocked due to suspicious activity"),
                    HttpStatus.FORBIDDEN
            );
        }

        HashMap<String, Object> response = new HashMap<>();

        response.put("Message", "User is on");
        response.put("data", user);
        response.put("roles", user.getAuthorizations());

        return new ResponseEntity<>(
                response,
                HttpStatus.OK
        );
    }
}

package com.group6.server.controllers;

import com.group6.server.models.dtos.*;
import com.group6.server.models.entites.Authorization;
import com.group6.server.models.entites.User;
import com.group6.server.services.AuthService;
import com.group6.server.services.AuthorizationService;
import com.group6.server.utils.ErrorHandler;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import com.group6.server.utils.Constants;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(Constants.API_BASE_URL + "/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private ErrorHandler errorHandler;

    @Autowired
    private AuthorizationService authorizationService;

    @PostMapping("/login")
    public ResponseEntity<?> getLogin(@Valid @RequestBody SignInDTO data, BindingResult validations) {

        if (validations.hasErrors()) {
            return ResponseEntity.badRequest().body(
                    new ErrorsDTO(
                            errorHandler.mapErrors(validations.getFieldErrors())
                    )
            );
        }

        User user = authService.findByUsernameOrEmail(data.getIdentifier());

        if (user == null) {
            return new ResponseEntity<>(
                    new ErrorDTO("Invalid email or password", false),
                    HttpStatus.NOT_FOUND
            );
        }

        if (!user.getPasswordSet()) {
            return new ResponseEntity<>(
                    new ErrorDTO("The user has not a password set yet", false),
                    HttpStatus.FORBIDDEN
            );
        }

        boolean isPasswordValid = authService.comparePassword(data.getPassword(), user.getPassword());

        if (!isPasswordValid) {
            return new ResponseEntity<>(
                    new ErrorDTO("Invalid email or password", false),
                    HttpStatus.UNAUTHORIZED
            );
        }

        if (!user.getActive()) {
            return new ResponseEntity<>(
                    new ErrorDTO("Your account has been blocked due to suspicious activity", false),
                    HttpStatus.UNAUTHORIZED
            );
        }

        // TODO: Validate the roles, if is a client and the system is shutdown return a Forbidden

        String token = authService.generateToken(user);

        TokenDTO tokenDTO = new TokenDTO(token, user.getPasswordSet());
        List<String> authorities = authService.getUserAuthorities(user);
        tokenDTO.setAuthorities(authorities);

        return new ResponseEntity<>(
                tokenDTO,
                HttpStatus.OK
        );
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
            try {
                Authorization authorization = authorizationService.findByPermission("CLIENT");
                if (authorization == null) {
                    return new ResponseEntity<>(
                            new ErrorDTO("The client authorization does not exists", false),
                            HttpStatus.NOT_FOUND
                    );
                }
                user = authService.register(data, authorization);

            } catch (Exception e) {
                e.printStackTrace();
                return new ResponseEntity<>(
                        new ErrorDTO("Internal server error", false),
                        HttpStatus.INTERNAL_SERVER_ERROR
                );
            }
        }

        // TODO: Validate the roles, if is a client and the system is shutdown return a Forbidden

        if (!user.getActive()) {
            return new ResponseEntity<>(
                    new ErrorDTO("Your account has been blocked due to suspicious activity", false),
                    HttpStatus.UNAUTHORIZED
            );
        }

        String token = authService.generateToken(user);

        TokenDTO tokenDTO = new TokenDTO(token, user.getPasswordSet());
        List<String> authorities = authService.getUserAuthorities(user);

        tokenDTO.setAuthorities(authorities);

        return new ResponseEntity<>(
                tokenDTO,
                HttpStatus.OK
        );
    }
}

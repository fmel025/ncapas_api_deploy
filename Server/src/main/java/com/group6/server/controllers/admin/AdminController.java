package com.group6.server.controllers.admin;

import com.group6.server.models.dtos.ErrorsDTO;
import com.group6.server.models.dtos.Response.ErrorResponse;
import com.group6.server.models.dtos.Response.Response;
import com.group6.server.models.dtos.ToggleUserAuthDTO;
import com.group6.server.models.dtos.admin.CreateUserDTO;
import com.group6.server.models.entites.Authorization;
import com.group6.server.models.entites.User;
import com.group6.server.services.AuthService;
import com.group6.server.services.AuthorizationService;
import com.group6.server.services.UserService;
import com.group6.server.utils.Constants;
import com.group6.server.utils.ErrorHandler;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(Constants.API_ADMIN_URL + "/admin")
public class AdminController {

    @Autowired
    private ErrorHandler errorHandler;

    @Autowired
    private AuthorizationService authorizationService;

    @Autowired
    private AuthService authService;


    @PatchMapping("/toggle-authorization")
    public ResponseEntity<?> addOrRemoveAuthorization(
            @Valid @RequestBody ToggleUserAuthDTO dto,
            BindingResult validations
    ) {
        if (validations.hasErrors()) {
            return new ResponseEntity<>(
                    new ErrorsDTO(errorHandler.mapErrors(validations.getFieldErrors())),
                    HttpStatus.BAD_REQUEST
            );
        }

        return ResponseEntity.ok().build();
    }

    // This route will set the app for the normal users as blocked
    @PutMapping("/toggle-access")
    public ResponseEntity<?> toggleBlockAccess() {
        return ResponseEntity.ok().build();
    }

    @PostMapping("/user")
    public ResponseEntity<?> createWorkerUser(
            @Valid @RequestBody CreateUserDTO data,
            BindingResult validations
    ) {
        if (validations.hasErrors()) {
            return new ResponseEntity<>(
                    ErrorResponse.builder()
                            .status(HttpStatus.BAD_REQUEST.name())
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .reason("Invalid body was sent")
                            .errors(errorHandler.mapErrors(validations.getFieldErrors()))
                            .success(false)
                            .build(),
                    HttpStatus.BAD_REQUEST
            );
        }

        Authorization authorization = authorizationService.findByPermission("WORKER");

        if (authorization == null) {
            return new ResponseEntity<>(
                    ErrorResponse.builder()
                            .status(HttpStatus.NOT_FOUND.name())
                            .statusCode(HttpStatus.NOT_FOUND.value())
                            .reason("The authorization was not found")
                            .success(false)
                            .build(),
                    HttpStatus.NOT_FOUND
            );
        }

        User user = authService.findByUsernameOrEmail(data.getEmail());

        if (user != null) {
            return new ResponseEntity<>(
                    ErrorResponse.builder()
                            .status(HttpStatus.CONFLICT.name())
                            .statusCode(HttpStatus.CONFLICT.value())
                            .reason("The user already exists")
                            .success(false)
                            .build(),
                    HttpStatus.CONFLICT
            );
        }

        try {
            authService.register(data, authorization);
            return new ResponseEntity<>(
                    Response.builder()
                            .success(true)
                            .status(HttpStatus.CREATED.name())
                            .statusCode(HttpStatus.CREATED.value())
                            .message("El trabajador ha sido registrado con exito!")
                            .build(),
                    HttpStatus.CREATED
            );

        } catch (Exception exception) {
            exception.printStackTrace();
            return new ResponseEntity<>(
                    ErrorResponse.builder()
                            .status(HttpStatus.INTERNAL_SERVER_ERROR.name())
                            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                            .reason("Oops, the server is not working")
                            .success(false)
                            .build(),
                    HttpStatus.CONFLICT
            );
        }
    }
}

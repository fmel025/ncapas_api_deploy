package com.group6.server.controllers.admin;

import com.group6.server.utils.Constants;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(Constants.API_ADMIN_URL + "/user")
public class UserPrivateController {
    @GetMapping("/all")
    public ResponseEntity<?> findAllUsers(){
        return ResponseEntity.ok().build();
    }

    @GetMapping("/")
    public ResponseEntity<?> fingUserByIdOrEmail(
            @RequestParam(name = "id", defaultValue = "") String id,
            @RequestParam(name = "email", defaultValue = "") String email
    ){
        return ResponseEntity.ok().build();
    }
}

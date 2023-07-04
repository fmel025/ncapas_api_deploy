package com.group6.server.controllers;

import com.group6.server.models.dtos.*;
import com.group6.server.models.dtos.Response.Response;
import com.group6.server.models.entites.*;
import com.group6.server.services.AuthService;
import com.group6.server.services.PurchaseService;
import com.group6.server.services.TicketService;
import com.group6.server.services.TierService;
import com.group6.server.utils.Constants;
import com.group6.server.utils.ErrorHandler;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

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

    @Autowired
    private TierService tierService;

    @PostMapping("/")
    public ResponseEntity<?> createPurchase(@Valid @RequestBody PurchaseDTO dto, BindingResult validations) {
        if (validations.hasErrors()) {
            return ResponseEntity.badRequest()
                    .body(
                            new ErrorsDTO(
                                    errorHandler.mapErrors(validations.getFieldErrors())
                            )
                    );
        }

        Tier tier = tierService.findOneById(dto.getTierId());

        if (tier == null) {
            return new ResponseEntity<>(
                    new ErrorDTO("The tier sent does not exist", false),
                    HttpStatus.NOT_FOUND
            );
        }

        User user = authService.findUserAuthenticated();

        Purchase purchase = new Purchase(user, tier.getEvent());

        try {
            purchaseService.save(purchase);

            List<Ticket> tickets = new ArrayList<>();

            for (int i = 0; i < dto.getQuantity(); i++) {
                tickets.add(new Ticket(tier, purchase));
            }

            ticketService.saveAll(tickets);

            return new ResponseEntity<>(
                    Response.builder()
                            .success(true)
                            .message("Your purchase has been made")
                            .data(purchase.getCode())
                            .build(),
                    HttpStatus.CREATED
            );

        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseEntity.internalServerError().body(
                    new ErrorDTO("Internal server error", false)
            );
        }
    }

    @GetMapping("/{code}")
    public ResponseEntity<?> findById(@PathVariable(name = "code") String code) {
        return ResponseEntity.ok().build();
    }

    @GetMapping("/")
    public ResponseEntity<?> findAllByUser(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "20") int size
    ) {
        User user = authService.findUserAuthenticated();

        Page<Purchase> purchases = purchaseService.findAllByUser(user, page, size);

        List<PurchaseResponseDTO> purchaseDTOS = purchases.stream().map(
                purchase -> new PurchaseResponseDTO(purchase.getPurchaseDate(), purchase.getEvent(), purchase.getCode())
        ).toList();

        PageDTO<PurchaseResponseDTO> pageDTO = new PageDTO<>(
                purchaseDTOS,
                purchases.getTotalPages(),
                purchases.hasNext(),
                purchases.hasPrevious()
        );

        return ResponseEntity.ok(pageDTO);
    }
}

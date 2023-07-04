package com.group6.server.models.dtos;

import com.group6.server.models.entites.Event;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PurchaseDTO {

    @NotEmpty(message = "The tier id must be sent")
    private String tierId;

    @NotNull(message = "The ticket quantity must be sent")
    private Integer quantity;
}

package com.group6.server.models.dtos;

import com.group6.server.models.entites.Event;
import com.group6.server.models.entites.Ticket;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PurchaseResponseDTO {
    LocalDateTime purchaseDate;
    Event event;
    UUID purchaseId;
}

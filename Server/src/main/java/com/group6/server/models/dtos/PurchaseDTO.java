package com.group6.server.models.dtos;

import com.group6.server.models.entites.Event;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PurchaseDTO {

    private Event event;
}

package com.group6.server.models.dtos;



import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TicketDTO {
  @NotEmpty(message = "Identifier is required")
  private  UUID id;
  @NotEmpty(message = "Identifier is required")
  private String identifier;
  @NotEmpty(message = "Quantity is required")
  private Integer quantity;
}

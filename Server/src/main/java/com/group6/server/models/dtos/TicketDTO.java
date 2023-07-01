package com.group6.server.models.dtos;



import com.group6.server.models.entites.Purchase;
import com.group6.server.models.entites.Tier;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TicketDTO {

  private Tier tier;
  private Purchase purchase;
}

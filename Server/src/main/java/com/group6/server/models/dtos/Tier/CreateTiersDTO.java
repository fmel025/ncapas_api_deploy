package com.group6.server.models.dtos.Tier;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateTiersDTO {
    @NotEmpty(message = "It has to be at least one tier")
    private List<TierCreateDTO> tiers;
}

package com.group6.server.models.dtos.Tier;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateTiersDTO {
    @NotNull(message = "You have to send the tiers list")
    @NotEmpty(message = "It has to be at least one tier")
    @Valid
    private List<TierCreateDTO> tiers;

    @NotNull(message = "The event code must be sent")
    private Integer eventCode;
}

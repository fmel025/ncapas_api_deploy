package com.group6.server.models.dtos.Tier;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateTierDTO {
    @NotEmpty(message = "The new tier name must be sent")
    private String name;
}

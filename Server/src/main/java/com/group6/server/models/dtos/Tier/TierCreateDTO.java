package com.group6.server.models.dtos.Tier;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TierCreateDTO {
    @NotEmpty(message = "You must sent the tier name")
    private String name;

    @NotEmpty(message = "You must sent the capacity from this tier")
    private Integer capacity;

    @NotEmpty(message = "You have to send the capacity from this tier")
    private BigDecimal price;
}

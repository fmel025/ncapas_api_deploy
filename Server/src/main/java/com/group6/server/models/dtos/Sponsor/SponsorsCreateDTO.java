package com.group6.server.models.dtos.Sponsor;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SponsorsCreateDTO {
    @NotEmpty(message = "The sponsors are required")
    private List<String> sponsors;
}

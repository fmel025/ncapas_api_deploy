package com.group6.server.models.dtos.Organizer;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrganizersCreateDTO {
    @NotEmpty(message = "The organizers are required")
    private List<String> organizers;
}

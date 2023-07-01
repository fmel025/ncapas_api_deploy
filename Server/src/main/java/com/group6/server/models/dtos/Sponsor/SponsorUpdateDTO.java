package com.group6.server.models.dtos.Sponsor;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SponsorUpdateDTO {
    @NotEmpty(message = "The new sponsor name has to be sent")
    private String name;
}

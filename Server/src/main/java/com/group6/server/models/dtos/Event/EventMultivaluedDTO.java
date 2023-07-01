package com.group6.server.models.dtos.Event;

import com.group6.server.models.dtos.Tier.TierCreateDTO;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class EventMultivaluedDTO extends EventDTO {

    @NotNull(message = "You must sent the sponsors array")
    @NotEmpty(message = "You should send at least one sponsor")
    private List<String> sponsors;

    @NotNull(message = "You must sent the organizers array")
    @NotEmpty(message = "You must send at least one organizer")
    private List<String> organizers;

    @NotNull(message = "You must sent the tiers array")
    @NotEmpty(message = "You must sent at least one tier")
    @Valid
    private List<TierCreateDTO> tiers;
}

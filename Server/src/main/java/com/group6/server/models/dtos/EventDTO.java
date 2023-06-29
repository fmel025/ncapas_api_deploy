package com.group6.server.models.dtos;

import com.group6.server.models.dtos.Tier.TierCreateDTO;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.URL;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EventDTO {
    @NotEmpty(message = "The event must have a title")
    private String title;

    @NotEmpty(message = "The event location is required")
    private String location;

    @NotEmpty(message = "The date and time must be sent")
    private LocalDateTime dateAndTime;

    @NotEmpty(message = "The duration must be sent")
    private String duration;

    @NotEmpty(message = "The url image is required")
    @URL(message = "The url sent is invalid")
    private String imageUrl;

    @NotEmpty(message = "The event categories must be sent")
    private List<String> categories;

    @NotEmpty(message = "The organizers are required")
    private List<String> organizers;

    @NotEmpty(message = "The sponsors are required")
    private List<String> sponsors;

    @NotEmpty(message = "It has to be at least one tier")
    private List<TierCreateDTO> tiers;
}

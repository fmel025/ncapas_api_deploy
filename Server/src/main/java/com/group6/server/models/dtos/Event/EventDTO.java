package com.group6.server.models.dtos.Event;

import com.group6.server.models.dtos.Tier.TierCreateDTO;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
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

    @NotNull(message = "The date and hour of the event must be sent")
    private String dateAndTime;

    @NotEmpty(message = "The duration must be sent")
    private String duration;

    @NotEmpty(message = "The url image is required")
    @URL(message = "The url sent is invalid")
    private String imageUrl;
}

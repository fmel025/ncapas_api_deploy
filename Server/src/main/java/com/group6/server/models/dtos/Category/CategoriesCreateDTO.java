package com.group6.server.models.dtos.Category;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoriesCreateDTO {
    @NotEmpty(message = "The event categories must be sent")
    private List<String> categories;

    @NotNull(message = "The event code must be sent")
    private Integer eventCode;
}

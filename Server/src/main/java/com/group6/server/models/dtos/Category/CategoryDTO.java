package com.group6.server.models.dtos.Category;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryDTO {

    @NotEmpty(message = "The category must be sent")
    private String category;

    @NotNull(message = "The event code must be sent")
    private Integer eventCode;
}

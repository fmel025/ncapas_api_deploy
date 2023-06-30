package com.group6.server.models.dtos.Response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ErrorResponse {
    private String status;
    private Integer statusCode;
    private String reason;
    private Map<String, List<String>> errors;
    private Boolean success;
}

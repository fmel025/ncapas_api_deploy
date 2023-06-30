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
public class Response {
    private String status;
    private Integer statusCode;
    private String message;
    private Boolean success;
    private Object data;
}

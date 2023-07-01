package com.group6.server.models.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PageDTO <T> {
    private List<T> content;
    private int totalPages;
    private boolean hasNextPage;
    private boolean hasPreviousPage;
}

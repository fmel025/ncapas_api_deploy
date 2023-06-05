package com.group6.server.models.entites;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
public class Category {

    private UUID id;

    private String name;

    public Category(String name) {
        this.name = name;
    }
}

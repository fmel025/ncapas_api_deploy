package com.group6.server.repositories;

import com.group6.server.models.entites.Category;
import com.group6.server.models.entites.Event;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
    List<Category> findAllByEvent(Event event);
}

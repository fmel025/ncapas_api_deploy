package com.group6.server.repositories;

import com.group6.server.models.entites.Event;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EventRepository extends JpaRepository<Event, Integer> {
    Page<Event> findAllByActiveAndTitleContainingIgnoreCase(Boolean active, String title, Pageable pageable);

    Page<Event> findAllByTitleContainingIgnoreCase(String title, Pageable pageable);

    Page<Event> findAllByActive(Boolean active, Pageable pageable);
}

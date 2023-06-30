package com.group6.server.repositories;

import com.group6.server.models.entites.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Integer> {

}

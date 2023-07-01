package com.group6.server.repositories;

import com.group6.server.models.entites.Ticket;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketsRepository  extends JpaRepository<Ticket, Integer> {

    //Encontrar todos los tickets que estén activos
    Page<Ticket> findAllByActive(Boolean active, Pageable pageable);

    //Encontrar todos los tickets que estén validados
    Page<Ticket> findAllByValidated(Boolean validated, Pageable pageable);

}

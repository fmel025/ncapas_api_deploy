package com.group6.server.repositories;

import com.group6.server.models.entites.Ticket;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketsRepository  extends JpaRepository<Ticket, Integer> {

    //Encontrar todos los tickets que estén activos
    Page<Ticket> findAllTicketByValidated(Boolean valid, Pageable pageable);

    //Encontrar todos los tickets que estén validados
    Page<Ticket> findAllTicketByInValidated(Boolean valid, Pageable pageable);

}

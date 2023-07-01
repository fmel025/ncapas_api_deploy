package com.group6.server.services;

import com.group6.server.models.dtos.TicketDTO;
import com.group6.server.models.entites.Purchase;
import com.group6.server.models.entites.Ticket;
import com.group6.server.models.entites.Tier;
import org.springframework.data.domain.Page;

import java.util.List;

public interface TicketService {
   Ticket create(TicketDTO ticketDTO);

   Ticket getById(String id);

   List<Ticket> getAllByTier(Tier tier);

   // This method may be redundant
   List<Ticket> getAllByPurchase(Purchase purchase);

   void updateTicketValidity(Ticket ticket);

   Page<Ticket> findAllValid(int page, int size, boolean isValid);

    Page<Ticket> findAllInvalid(int page, int size, boolean isValid);
}

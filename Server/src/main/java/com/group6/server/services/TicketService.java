package com.group6.server.services;

import com.group6.server.models.dtos.Tickets.TicketDTO;
import com.group6.server.models.entites.Purchase;
import com.group6.server.models.entites.Ticket;
import com.group6.server.models.entites.Tier;
import org.springframework.data.domain.Page;

import java.util.List;

public interface TicketService {
   Ticket create(Ticket ticket) throws Exception;

   void saveAll(List<Ticket> tickets) throws Exception;

   Ticket getById(String id);

   List<Ticket> getAllByTier(Tier tier);

   // This method may be redundant
   List<Ticket> getAllByPurchase(Purchase purchase);

   void updateTicketValidity(Ticket ticket);

   Page<Ticket> findAllValid(int page, int size);

    Page<Ticket> findAllInvalid(int page, int size);
}

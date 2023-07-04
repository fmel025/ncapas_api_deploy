package com.group6.server.services.implmentations;

import com.group6.server.models.dtos.Tickets.TicketDTO;
import com.group6.server.models.entites.Purchase;
import com.group6.server.models.entites.Ticket;
import com.group6.server.models.entites.Tier;
import com.group6.server.repositories.TicketsRepository;
import com.group6.server.services.TicketService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketServiceImpl implements TicketService{

    @Autowired
    private TicketsRepository ticketRepository;

    @Override
    @Transactional(rollbackOn = Exception.class)
    public Ticket create(Ticket ticket) throws Exception {
        return ticketRepository.save(ticket);
    }

    @Override
    @Transactional(rollbackOn = Exception.class)
    public void saveAll(List<Ticket> tickets) throws Exception {
        ticketRepository.saveAll(tickets);
    }

    @Override
    public Ticket getById(String id) {
        return null;
    }

    @Override
    public List<Ticket> getAllByTier(Tier tier) {
        return null;
    }

    @Override
    public List<Ticket> getAllByPurchase(Purchase purchase) {
        return null;
    }

    @Override
    public void updateTicketValidity(Ticket ticket) {

    }

    @Override
    public Page<Ticket> findAllValid(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return ticketRepository.findAllTicketByValidated(true, pageable);
    }

    @Override
    public Page<Ticket> findAllInvalid(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return ticketRepository.findAllTicketByValidated(false, pageable);
    }


}

package com.group6.server.services.implmentations;

import com.group6.server.models.entites.Purchase;
import com.group6.server.models.entites.Ticket;
import com.group6.server.models.entites.Tier;
import com.group6.server.repositories.TicketsRepository;
import com.group6.server.services.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;

import java.util.List;

public class TicketServiceImpl implements TicketService{

    @Autowired
    private TicketsRepository ticketRepository;
    @Override
    public void create(Ticket ticket, Tier tier) {

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
    public Page<Ticket> findAllActive(int page, int size) {
        return null;
    }

    @Override
    public Page<Ticket> findAllValid(int page, int size) {
        return null;
    }
}

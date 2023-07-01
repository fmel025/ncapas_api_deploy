package com.group6.server.services.implmentations;

import com.group6.server.models.entites.Purchase;
import com.group6.server.models.entites.Ticket;
import com.group6.server.models.entites.Tier;
import com.group6.server.services.TicketService;

import java.util.List;

public class TicketServiceImpl implements TicketService{
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
}

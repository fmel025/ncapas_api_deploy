package com.group6.server.services.implmentations;

import com.group6.server.models.entites.Event;
import com.group6.server.models.entites.Purchase;
import com.group6.server.models.entites.User;
import com.group6.server.services.PurchaseService;
import org.springframework.data.domain.Page;

import java.util.List;

public class PurchaseServiceImpl implements PurchaseService {
    @Override
    public Purchase save(Purchase purchase) {
        return null;
    }

    @Override
    public List<Purchase> findByUser(User user) {
        return null;
    }

    @Override
    public Purchase findOneById(String id) {
        return null;
    }

    @Override
    public List<Purchase> findOneByEvent(Event event) {
        return null;
    }

    @Override
    public Page<Purchase> findAllByUser(User user, int page, int size) {
        return null;
    }

    @Override
    public List<Purchase> findAllById(String id) {
        return null;
    }
}

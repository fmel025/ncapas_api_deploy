package com.group6.server.services.implmentations;

import com.group6.server.models.dtos.PurchaseDTO;
import com.group6.server.models.entites.Event;
import com.group6.server.models.entites.Purchase;
import com.group6.server.models.entites.User;
import com.group6.server.repositories.PurchaseRepository;
import com.group6.server.services.PurchaseService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class PurchaseServiceImpl implements PurchaseService {


    @Autowired
    private PurchaseRepository repository;

    @Override
    public void save(Purchase purchase) throws Exception {
        repository.save(purchase);
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
        Pageable pageable = PageRequest.of(page, size);
        return repository.findAllByUser(user, pageable );
    }

    @Override
    public List<Purchase> findAllById(String id) {
        UUID code = UUID.fromString(id);
        return  repository.findAllByCode(code);
    }
}

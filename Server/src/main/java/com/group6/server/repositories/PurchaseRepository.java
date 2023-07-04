package com.group6.server.repositories;

import com.group6.server.models.entites.Purchase;
import com.group6.server.models.entites.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface PurchaseRepository extends JpaRepository<Purchase, UUID> {

    //Encontrar todas las compras de un usuario
    Page<Purchase> findAllByUser(User user, Pageable pageable);

    List<Purchase> findAllByCode(UUID id);
}

package com.group6.server.models.entites;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.UUID;

@Data
@NoArgsConstructor
@Entity
@Table(name = "ticket", schema = "public")
public class Ticket {

    @Id
    @Column(name = "code")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID code;

    @Column(name = "validated")
    private Boolean validated;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "tier_code")
    private Tier tier;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "purchase_code")
    private Purchase purchase;

    public Ticket(Tier tier, Purchase purchase) {
        this.validated = false;
        this.tier = tier;
        this.purchase = purchase;
    }
}

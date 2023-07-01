package com.group6.server.models.entites;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.UUID;

@Data
@NoArgsConstructor
@Entity
@Table(name = "tier", schema = "public")
public class Tier {
    @Id
    @Column(name = "code")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID code;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private BigDecimal price;

    @Column(name = "capacity")
    private Integer capacity;

    @Column(name = "current_capacity")
    private Integer currentCapacity;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "event_id")
    private Event event;

    public Tier(String name, BigDecimal price, Integer capacity, Event event) {
        this.name = name;
        this.price = price;
        this.event = event;
        this.capacity = capacity;
        this.currentCapacity = capacity;
    }
}

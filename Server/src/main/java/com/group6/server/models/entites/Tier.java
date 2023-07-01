package com.group6.server.models.entites;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

@Data
@NoArgsConstructor
@Entity
@Table(name = "tier", schema = "public")
@ToString(exclude = {"tickets"})
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

    @OneToMany(mappedBy = "tier", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Ticket> tickets;

    public Tier(String name, BigDecimal price, Integer capacity, Event event) {
        this.name = name;
        this.price = price;
        this.event = event;
        this.capacity = capacity;
        this.currentCapacity = capacity;
    }
}

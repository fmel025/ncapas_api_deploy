package com.group6.server.models.entites;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
@Entity
@Table(name = "sponsor", schema = "public")
public class Sponsor {

    @Id
    @Column(name = "code", unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer code;

    @Column(name = "name")
    private String name;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "event_id")
    private Event event;

    public Sponsor(String name, Event event) {
        this.name = name;
        this.event = event;
    }
}

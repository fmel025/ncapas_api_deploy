package com.group6.server.models.entites;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Data
@NoArgsConstructor
@Entity
@Table(name = "purchase", schema = "public")
public class Purchase {

    @Id
    @Column(name = "code")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID code;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_code")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "event_code")
    private Event event;

    @Column(name = "purchase_date")
    private LocalDateTime purchaseDate;

    @OneToMany(mappedBy = "purchase", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Ticket> tickets;

    public Purchase(User user, Event event) {
        this.user = user;
        this.event = event;
        this.purchaseDate = LocalDateTime.now();
    }
}

package com.group6.server.models.entites;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Formula;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name = "event", schema = "public")
public class Event {

    @Id
    @Column(name = "code", unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer code;

    @Column(name = "title")
    private String title;

    @Column(name = "duration")
    private String duration;

    @Column(name = "location")
    private String location;

    @Column(name = "datetime")
    private LocalDateTime dateTime;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "active")
    private Boolean active;

    @Formula("(SELECT COALESCE(SUM(t.current_capacity), 0) FROM tier t WHERE t.event_id = code)")
    private Integer availableSpaces;

    @OneToMany(mappedBy = "event", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Sponsor> sponsors;

    @OneToMany(mappedBy = "event", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Organizer> organizers;

    @OneToMany(mappedBy = "event", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Category> categories;

    @OneToMany(mappedBy = "event", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Tier> tiers;

    public Event(String title, String duration, String location, LocalDateTime dateTime, String imageUrl) {
        this.title = title;
        this.duration = duration;
        this.location = location;
        this.dateTime = dateTime;
        this.imageUrl = imageUrl;
        this.active = true;
    }
}

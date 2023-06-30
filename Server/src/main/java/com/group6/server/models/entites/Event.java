package com.group6.server.models.entites;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

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

    @OneToMany(mappedBy = "event", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Sponsor> sponsors;

    public Event(String title, String duration, String location, LocalDateTime dateTime, String imageUrl) {
        this.title = title;
        this.duration = duration;
        this.location = location;
        this.dateTime = dateTime;
        this.imageUrl = imageUrl;
    }
}

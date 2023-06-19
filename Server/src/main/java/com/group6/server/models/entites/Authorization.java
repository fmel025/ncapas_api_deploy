package com.group6.server.models.entites;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;
import java.util.UUID;

@Data
@NoArgsConstructor
@ToString(exclude = {"users"})
@Entity
@Table(name = "authorization", schema = "public")
public class Authorization {

    @Id
    @Column(name = "code")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID code;

    @Column(name = "name")
    private String name;

    @ManyToMany(mappedBy = "authorizations")
    @JsonIgnore
    private List<User> users;
}

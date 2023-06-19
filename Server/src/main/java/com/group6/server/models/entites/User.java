package com.group6.server.models.entites;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;
import java.util.UUID;

@Data
@NoArgsConstructor
@ToString(exclude = {"authorizations"})
@Entity
@Table(name = "user", schema = "public")
public class User {

    private static final long serialVersionUID = 1460435087476558985L;

    @Id
    @Column(name = "code")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID code;

    @Column(name = "fullname", nullable = false)
    private String fullName;

    @Column(name = "email", nullable = false)
    private String email;

    @JsonIgnore
    @Column(name = "password")
    private String password;

    @Column(name = "active")
    private Boolean active;

    @Column(name = "is_password_set")
    private Boolean passwordSet;

    @JsonIgnore
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "user_authorizations",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "authorization_id")
    )
    private List<Authorization> authorizations;

    public User(String fullName, String email) {
        this.fullName = fullName;
        this.email = email;
        this.active = true;
        this.passwordSet = false;
    }
    //foreign key : private String authorizationCode;
}

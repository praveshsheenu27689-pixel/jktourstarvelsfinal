package com.jktours.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "destinations")
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class Destination {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String image;

    @Column(nullable = false)
    private String type; // DOMESTIC or INTERNATIONAL
}

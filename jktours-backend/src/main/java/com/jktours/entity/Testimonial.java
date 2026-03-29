package com.jktours.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "testimonials")
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class Testimonial {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String location;

    @Column(length = 1000, nullable = false)
    private String text;

    private Integer rating;
}

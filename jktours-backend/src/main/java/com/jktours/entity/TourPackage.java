package com.jktours.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "packages")
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class TourPackage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    private String image;

    @Column(length = 1000)
    private String itinerary;

    private Double price;

    private String category;

    private String badge;

    private Integer nights;

    private String duration;

    private String groupSize;

    private String transport;

    private String accommodation;
}

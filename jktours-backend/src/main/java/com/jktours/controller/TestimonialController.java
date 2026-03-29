package com.jktours.controller;

import com.jktours.entity.Testimonial;
import com.jktours.service.TestimonialService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/testimonials")
@RequiredArgsConstructor
public class TestimonialController {

    private final TestimonialService service;

    @GetMapping
    public List<Testimonial> getAll() { return service.getAll(); }

    @PostMapping
    public Testimonial create(@RequestBody Testimonial t) { return service.save(t); }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}

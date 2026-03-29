package com.jktours.controller;

import com.jktours.entity.Destination;
import com.jktours.service.DestinationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/destinations")
@RequiredArgsConstructor
public class DestinationController {

    private final DestinationService service;

    @GetMapping
    public List<Destination> getAll(@RequestParam(required = false) String type) {
        return type != null ? service.getByType(type) : service.getAll();
    }

    @GetMapping("/{id}")
    public Destination getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PostMapping
    public Destination create(@RequestBody Destination d) {
        return service.save(d);
    }

    @PutMapping("/{id}")
    public Destination update(@PathVariable Long id, @RequestBody Destination d) {
        d.setId(id);
        return service.save(d);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}

package com.jktours.controller;

import com.jktours.entity.TourPackage;
import com.jktours.service.TourPackageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/packages")
@RequiredArgsConstructor
public class TourPackageController {

    private final TourPackageService service;

    @GetMapping
    public List<TourPackage> getAll(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String search) {
        if (search != null) return service.search(search);
        if (category != null) return service.getByCategory(category);
        return service.getAll();
    }

    @GetMapping("/{id}")
    public TourPackage getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PostMapping
    public TourPackage create(@RequestBody TourPackage p) {
        return service.save(p);
    }

    @PutMapping("/{id}")
    public TourPackage update(@PathVariable Long id, @RequestBody TourPackage p) {
        p.setId(id);
        return service.save(p);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}

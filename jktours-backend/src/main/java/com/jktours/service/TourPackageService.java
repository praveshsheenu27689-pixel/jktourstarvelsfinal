package com.jktours.service;

import com.jktours.entity.TourPackage;
import com.jktours.repository.TourPackageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TourPackageService {

    private final TourPackageRepository repo;

    public List<TourPackage> getAll() { return repo.findAll(); }
    public List<TourPackage> getByCategory(String category) { return repo.findByCategory(category); }
    public List<TourPackage> search(String keyword) { return repo.findByTitleContainingIgnoreCase(keyword); }
    public TourPackage getById(Long id) { return repo.findById(id).orElseThrow(); }
    public TourPackage save(TourPackage p) { return repo.save(p); }
    public void delete(Long id) { repo.deleteById(id); }
}

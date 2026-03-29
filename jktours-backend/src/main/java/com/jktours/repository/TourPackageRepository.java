package com.jktours.repository;

import com.jktours.entity.TourPackage;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TourPackageRepository extends JpaRepository<TourPackage, Long> {
    List<TourPackage> findByCategory(String category);
    List<TourPackage> findByTitleContainingIgnoreCase(String keyword);
}

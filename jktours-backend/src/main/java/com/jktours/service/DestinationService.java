package com.jktours.service;

import com.jktours.entity.Destination;
import com.jktours.repository.DestinationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DestinationService {

    private final DestinationRepository repo;

    public List<Destination> getAll() { return repo.findAll(); }
    public List<Destination> getByType(String type) { return repo.findByType(type.toUpperCase()); }
    public Destination getById(Long id) { return repo.findById(id).orElseThrow(); }
    public Destination save(Destination d) { return repo.save(d); }
    public void delete(Long id) { repo.deleteById(id); }
}

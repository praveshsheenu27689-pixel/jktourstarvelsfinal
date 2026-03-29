package com.jktours.service;

import com.jktours.entity.Testimonial;
import com.jktours.repository.TestimonialRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TestimonialService {

    private final TestimonialRepository repo;

    public List<Testimonial> getAll() { return repo.findAll(); }
    public Testimonial save(Testimonial t) { return repo.save(t); }
    public void delete(Long id) { repo.deleteById(id); }
}

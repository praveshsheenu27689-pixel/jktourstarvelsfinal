package com.jktours.service;

import com.jktours.entity.Booking;
import com.jktours.repository.BookingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BookingService {

    private final BookingRepository repo;
    private final EmailService emailService;

    public List<Booking> getAll() { return repo.findAll(); }
    public List<Booking> getByStatus(String status) { return repo.findByStatus(status.toUpperCase()); }
    public List<Booking> getByEmail(String email) { return repo.findByEmailIgnoreCase(email); }
    public Booking getById(Long id) { return repo.findById(id).orElseThrow(); }
    public Booking create(Booking b) {
        Booking saved = repo.save(b);
        emailService.sendBookingEmail(saved);
        return saved;
    }

    public Booking updateStatus(Long id, String status) {
        Booking b = getById(id);
        b.setStatus(status.toUpperCase());
        return repo.save(b);
    }

    public void delete(Long id) { repo.deleteById(id); }
}

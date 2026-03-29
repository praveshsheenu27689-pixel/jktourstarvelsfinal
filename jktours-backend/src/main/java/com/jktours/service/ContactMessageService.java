package com.jktours.service;

import com.jktours.entity.ContactMessage;
import com.jktours.repository.ContactMessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ContactMessageService {

    private final ContactMessageRepository repo;
    private final EmailService emailService;

    public List<ContactMessage> getAll() { return repo.findAll(); }
    public List<ContactMessage> getUnread() { return repo.findByReadFalse(); }
    public ContactMessage getById(Long id) { return repo.findById(id).orElseThrow(); }
    public ContactMessage save(ContactMessage m) {
        ContactMessage saved = repo.save(m);
        emailService.sendContactEmail(saved);
        return saved;
    }

    public ContactMessage markRead(Long id) {
        ContactMessage m = getById(id);
        m.setRead(true);
        return repo.save(m);
    }

    public void delete(Long id) { repo.deleteById(id); }
}

package com.jktours.controller;

import com.jktours.entity.ContactMessage;
import com.jktours.service.ContactMessageService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactMessageService service;

    @GetMapping
    public List<ContactMessage> getAll(@RequestParam(required = false) Boolean unread) {
        return Boolean.TRUE.equals(unread) ? service.getUnread() : service.getAll();
    }

    @GetMapping("/{id}")
    public ContactMessage getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ContactMessage send(@Valid @RequestBody ContactMessage m) {
        return service.save(m);
    }

    @PatchMapping("/{id}/read")
    public ContactMessage markRead(@PathVariable Long id) {
        return service.markRead(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}

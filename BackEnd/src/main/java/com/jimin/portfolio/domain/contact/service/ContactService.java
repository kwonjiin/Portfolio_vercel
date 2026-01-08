package com.jimin.portfolio.domain.contact.service;

import com.jimin.portfolio.domain.contact.dto.ContactRequest;
import com.jimin.portfolio.domain.contact.entity.ContactMessage;
import com.jimin.portfolio.domain.contact.repository.ContactRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContactService {

    private final ContactRepository contactRepository;

    public void save(ContactRequest request) {
        contactRepository.save(new ContactMessage(request));
    }

}

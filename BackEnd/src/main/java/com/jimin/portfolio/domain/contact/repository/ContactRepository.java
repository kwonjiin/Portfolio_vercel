package com.jimin.portfolio.domain.contact.repository;

import com.jimin.portfolio.domain.contact.entity.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<ContactMessage, Long> {
}

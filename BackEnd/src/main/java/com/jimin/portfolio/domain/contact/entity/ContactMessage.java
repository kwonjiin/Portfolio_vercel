package com.jimin.portfolio.domain.contact.entity;

import com.jimin.portfolio.domain.contact.dto.ContactRequest;
import com.jimin.portfolio.global.common.BaseTimeEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class ContactMessage extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String message;

    public ContactMessage(ContactRequest request) {
        this.name = request.getName();
        this.email = request.getEmail();
        this.message = request.getMessage();
    }


}

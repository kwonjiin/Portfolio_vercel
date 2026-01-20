package com.jimin.portfolio.contact.controller;

import com.jimin.portfolio.contact.dto.ContactRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @PostMapping
    public void send(@RequestBody ContactRequest request) {
        System.out.println("Contact: " + request.getEmail());
    }
}

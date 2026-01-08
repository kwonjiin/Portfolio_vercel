package com.jimin.portfolio.domain.contact.controller;

import com.jimin.portfolio.domain.contact.dto.ContactRequest;
import com.jimin.portfolio.domain.contact.service.ContactService;
import com.jimin.portfolio.global.common.ApiResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;

    @PostMapping
    public ApiResponse<Void> contact(@Valid @RequestBody ContactRequest request){
        contactService.save(request);
        return ApiResponse.ok(null);
    }

}

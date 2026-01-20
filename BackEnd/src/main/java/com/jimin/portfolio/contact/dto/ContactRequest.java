package com.jimin.portfolio.contact.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;

@Getter
public class ContactRequest {
    @NotBlank
    private String name;

    @Email
    private String email;

    @NotBlank
    private String message;
}

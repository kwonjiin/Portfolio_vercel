package com.jimin.portfolio.domain.profile.service;

import com.jimin.portfolio.domain.profile.dto.ProfileResponse;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfileService {

    public ProfileResponse getProfile() {
        return new ProfileResponse(
                "권지민",
                "주니어 개발자 포트폴리오 입니다. ",
                List.of("Java", "SpringBoot", "JPA", "MySQL")
        );
    }
}

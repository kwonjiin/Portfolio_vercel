package com.jimin.portfolio.domain.profile.controller;

import com.jimin.portfolio.domain.profile.dto.ProfileResponse;
import com.jimin.portfolio.domain.profile.service.ProfileService;
import com.jimin.portfolio.global.common.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/profile")
@RequiredArgsConstructor
public class ProfileController {
    private final ProfileService profileService;

    @GetMapping
    public ApiResponse<ProfileResponse> getProfile() {
        return ApiResponse.ok(profileService.getProfile());
    }
}

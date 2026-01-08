package com.jimin.portfolio.domain.profile.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class ProfileResponse {

    private String name;
    private String introduction;
    private List<String> skills;
}

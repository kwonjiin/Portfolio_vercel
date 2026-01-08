package com.jimin.portfolio.domain.project.controller;

import com.jimin.portfolio.domain.project.dto.ProjectResponse;
import com.jimin.portfolio.domain.project.service.ProjectService;
import com.jimin.portfolio.global.common.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectService projectService;

    @GetMapping
    public ApiResponse<List<ProjectResponse>> getProjects() {
        return ApiResponse.ok(projectService.findAll());
    }


}

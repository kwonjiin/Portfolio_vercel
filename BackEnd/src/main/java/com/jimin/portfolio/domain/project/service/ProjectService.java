package com.jimin.portfolio.domain.project.service;

import com.jimin.portfolio.domain.project.dto.ProjectResponse;
import com.jimin.portfolio.domain.project.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;

    public List<ProjectResponse> findAll() {
        return projectRepository.findAll()
                .stream()
                .map(ProjectResponse::from)
                .toList();
    }
}

package com.jimin.portfolio.project.service;

import com.jimin.portfolio.project.dto.ProjectResponse;
import com.jimin.portfolio.project.repository.ProjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<ProjectResponse> getProjects() {
        return projectRepository.findAll();
    }
}

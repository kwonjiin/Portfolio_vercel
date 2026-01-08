package com.jimin.portfolio.domain.project.dto;

import com.jimin.portfolio.domain.project.entity.Project;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ProjectResponse {

    private Long id;
    private String title;
    private String description;
    private String githubUrl;
    private String demoUrl;

    public static ProjectResponse from(final Project project) {
        return new ProjectResponse(
                project.getId(),
                project.getTitle(),
                project.getDescription(),
                project.getGithubUrl(),
                project.getDemoUrl()
        );
    }
}

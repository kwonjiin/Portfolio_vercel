package com.jimin.portfolio.project.dto;

import java.util.List;

public class ProjectResponse {

    private Long id;
    private String title;
    private String description;
    private String image;
    private String role;
    private List<String> stack;
    private List<String> features;
    private List<String> contributions;
    private List<String> experience;

    public ProjectResponse(
            Long id,
            String title,
            String description,
            String image,
            String role,
            List<String> stack,
            List<String> features,
            List<String> contributions,
            List<String> experience
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.role = role;
        this.stack = stack;
        this.features = features;
        this.contributions = contributions;
        this.experience = experience;
    }

    // ✅ Getter만 사용 (프론트 전달용)
    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getDescription() { return description; }
    public String getImage() { return image; }
    public String getRole() { return role; }
    public List<String> getStack() { return stack; }
    public List<String> getFeatures() { return features; }
    public List<String> getContributions() { return contributions; }
    public List<String> getExperience() { return experience; }
}

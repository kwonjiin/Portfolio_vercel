package com.jimin.portfolio.domain.project.repository;

import com.jimin.portfolio.domain.project.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}

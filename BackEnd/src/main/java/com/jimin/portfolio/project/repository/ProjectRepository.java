package com.jimin.portfolio.project.repository;

import com.jimin.portfolio.project.dto.ProjectResponse;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProjectRepository {

    public List<ProjectResponse> findAll() {
        return List.of(

                new ProjectResponse(
                        1L,
                        "다구독다구독",
                        "OTT 구독 데이터 분석·관리 SaaS 플랫폼",
                        "/images/dagudok.png",
                        "풀스택 개발 / CI·CD 담당",
                        List.of("Spring Boot", "React", "AWS", "CodeDeploy"),
                        List.of("이탈 예측", "세그먼트 분석 시각화"),
                        List.of("블루·그린 배포 구축", "로그인·알림 기능 구현"),
                        List.of("실서비스 무중단 배포 경험")
                ),

                new ProjectResponse(
                        2L,
                        "이솝의 메아리",
                        "익명 기반 고민 공유 게시판 서비스",
                        "/images/aesop.png",
                        "풀스택 개발",
                        List.of("Spring Boot", "Vue.js", "Docker", "Kubernetes"),
                        List.of("익명 게시글/댓글 CRUD", "CI/CD 자동 배포"),
                        List.of("배포 파이프라인 설계"),
                        List.of("운영 환경 자동화 경험")
                ),

                new ProjectResponse(
                        3L,
                        "Mappride",
                        "지도 기반 장소 기록 블로그",
                        "/images/mappride.png",
                        "풀스택 개발",
                        List.of("Spring Boot", "Vue.js"),
                        List.of("지도 기반 장소 기록", "게시글 관리"),
                        List.of("UX 중심 화면 설계"),
                        List.of("프론트-백엔드 데이터 흐름 이해")
                ),

                new ProjectResponse(
                        4L,
                        "Don't Sleep Driver",
                        "실시간 얼굴 인식 기반 졸음운전 방지 시스템",
                        "/images/driver.png",
                        "알고리즘 설계 / 코드 리뷰",
                        List.of("Python", "OpenCV"),
                        List.of("눈 깜빡임 감지", "졸음 판독 로직"),
                        List.of("트리 구조 알고리즘 설계"),
                        List.of("영상 처리 정확도 개선 경험")
                )
        );
    }
}

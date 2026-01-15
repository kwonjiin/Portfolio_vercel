"use client";
import Head from "@/components/Header";
import Foot from "@/components/Footer";

import { useState } from "react";
import ProjectCard from "./projectCard";
import ProjectModal from "./projectMadal";

export default function ProjectPage() {
  const [project, setProject] = useState<{
    title: string;
    content: string;
  } | null>(null);

  return (
    <div>
    <Head />
    
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="mb-12 text-center text-4xl font-bold">
        Projects
      </h1>
      <br /><br /><br />

      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <ProjectCard
          title="다구독다구독"
          description="Saas 기반 OTT 구독 고객관리 시스템"
          onClick={() =>
            setProject({
              title: "다구독다구독",
              content: `
                • 기술 스택: Next.js(App Router), Tailwind
                • 목적: 개인 브랜딩
                • 특징:
                  - 카드 클릭 모달
                  - 반응형 레이아웃
                  - 컴포넌트 구조화
              `,
            })
          }
        />

        <ProjectCard
          title="이솝의 메아리"
          description="익명 고민 게시판 CI/CD 프로젝트"
          onClick={() =>
            setProject({
              title: "Team Platform",
              content: `
                • 역할: 풀스택 개발
                • 주요 기여:
                  - API 설계
                  - 프론트/백 연동
                  - 배포 환경 구성
              `,
            })
          }
        />

        <ProjectCard
          title="Mappride"
          description="나만의 지도 블로그"
          onClick={() =>
            setProject({
              title: "Side Project",
              content: "상세 설명 작성 예정",
            })
          }
        />

        <ProjectCard
          title="Don't sleep driver"
          description="졸음운전 방지 시스템"
          onClick={() =>
            setProject({
              title: "Data Service",
              content: "상세 설명 작성 예정",
            })
          }
        />
      </div>

      <ProjectModal
        isOpen={!!project}
        onClose={() => setProject(null)}
        title={project?.title ?? ""}
        content={project?.content ?? ""}
      />
    </section>
    <br /><br /><br /><br /><br />
    <Foot />
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Head from "@/components/Header";
import Foot from "@/components/Footer";
import ProjectCard from "./projectCard";
import ProjectModal from "./projectMadal";
import { fetchProjects, Project } from "@/lib/api/project";

export default function ProjectPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .catch(console.error);
  }, []);

  return (
    <>
      <Head />

      <section className="mx-auto max-w-5xl px-6 py-20 text-[#211378]">
        <h1 className="mb-12 text-center text-4xl font-bold">
          Projects
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>

        <ProjectModal
          isOpen={!!selected}
          onClose={() => setSelected(null)}
          project={selected}
        />
      </section>

      <Foot />
    </>
  );
}

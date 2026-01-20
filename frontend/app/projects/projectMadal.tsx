"use client";

import { Project } from "@/lib/api/project";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function ProjectModal({ isOpen, onClose, project }: Props) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal Wrapper (relative 기준점) */}
      <div className="relative z-10 w-full max-w-3xl rounded-2xl bg-white shadow-xl">

        {/* Scroll Area (내용만 스크롤) */}
        <div className="max-h-[80vh] overflow-y-auto p-8 rounded-2xl">
          <h2 className="mb-6 text-2xl font-bold">{project.title}</h2>

          {/* 이미지 */}
          <img
            src={project.image}
            alt={project.title}
            className="mb-6 w-full rounded-lg object-cover"
          />

          {/* 프로젝트 정보 */}
          <section className="mb-6">
            <h3 className="mb-2 font-semibold">프로젝트 정보</h3>
            <table className="w-full border text-sm">
              <tbody>
                <tr>
                  <td className="border p-2 font-medium">역할</td>
                  <td className="border p-2">{project.role}</td>
                </tr>
                <tr>
                  <td className="border p-2 font-medium">기술 스택</td>
                  <td className="border p-2">{project.stack.join(", ")}</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 공통 리스트 섹션 */}
          {[
            ["주요 기능", project.features],
            ["주요 기여", project.contributions],
            ["핵심 경험", project.experience],
          ].map(([title, items]) => (
            <section key={title as string} className="mb-6">
              <h3 className="mb-2 font-semibold">{title}</h3>
              <ul className="list-disc pl-5 text-sm text-neutral-700">
                {(items as string[]).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Close Button (모달 기준 오른쪽 아래) */}
        <button
          onClick={onClose}
          className="absolute bottom-6 right-6 rounded-md bg-slate-800 px-4 py-2 text-sm text-white transition hover:bg-slate-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}

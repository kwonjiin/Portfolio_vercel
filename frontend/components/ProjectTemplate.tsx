"use client";

interface ProjectTemplateProps {
  summary: string;
  role: string;
  stack: string;
  type: string;
  features: string[];
  contributions: string[];
  experience: string[];
  imageSrc?: string;
}

export default function ProjectTemplate({
  summary,
  role,
  stack,
  type,
  features,
  contributions,
  experience,
  imageSrc,
}: ProjectTemplateProps) {
  return (
    <div className="space-y-8">
      {/* 요약 */}
      <p className="leading-relaxed text-neutral-700">
        {summary}
      </p>

      {/* 이미지 (선택) */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt="project screenshot"
          className="w-full rounded-lg border"
        />
      )}

      {/* 프로젝트 정보 */}
      <section>
        <h3 className="mb-2 text-lg font-semibold">프로젝트 정보</h3>
        <table className="w-full border border-neutral-200 text-sm">
          <tbody>
            <tr className="border-b">
              <th className="w-1/3 bg-neutral-50 p-2 text-left font-medium">
                역할
              </th>
              <td className="p-2">{role}</td>
            </tr>
            <tr className="border-b">
              <th className="bg-neutral-50 p-2 text-left font-medium">
                기술 스택
              </th>
              <td className="p-2">{stack}</td>
            </tr>
            <tr>
              <th className="bg-neutral-50 p-2 text-left font-medium">
                프로젝트 형태
              </th>
              <td className="p-2">{type}</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 주요 구현 기능 */}
      <section>
        <h3 className="mb-2 text-lg font-semibold">주요 구현 기능</h3>
        <ul className="list-disc space-y-1 pl-5 text-neutral-700">
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </section>

      {/* 주요 기여 */}
      <section>
        <h3 className="mb-2 text-lg font-semibold">주요 기여</h3>
        <ul className="list-disc space-y-1 pl-5 text-neutral-700">
          {contributions.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </section>

      {/* 핵심 경험 */}
      <section>
        <h3 className="mb-2 text-lg font-semibold">핵심 경험</h3>
        <ul className="list-disc space-y-1 pl-5 text-neutral-700">
          {experience.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

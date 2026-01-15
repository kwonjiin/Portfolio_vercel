"use client";

interface ProjectCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

export default function ProjectCard({
  title,
  description,
  onClick,
}: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="
        cursor-pointer
        rounded-2xl
        border border-neutral-300
        p-8
        transition
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-sm text-neutral-600">{description}</p>
    </div>
  );
}

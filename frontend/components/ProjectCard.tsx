"use client";

import React, { useRef, useState } from "react";

interface Position {
  x: number;
  y: number;
}

interface ProjectCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)",
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(0.6)}
      onMouseLeave={() => setOpacity(0)}
      onFocus={() => {
        setIsFocused(true);
        setOpacity(0.6);
      }}
      onBlur={() => {
        setIsFocused(false);
        setOpacity(0);
      }}
      className={`relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 p-8 transition ${className}`}
      tabIndex={0}
    >
      {/* spotlight effect */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />

      {/* content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ProjectCard;

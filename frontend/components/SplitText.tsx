"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface SplitTextProps {
  text: string;
  className?: string;
}

export default function SplitText({ text, className }: SplitTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const chars = ref.current.querySelectorAll("span");

    gsap.fromTo(
      chars,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center select-none ${className}`}
    >
      {text.split("\n").map((line, lineIndex) => {
        const isEmpty = line.trim() === "";

        return (
          <div
            key={lineIndex}
            className={isEmpty ? "mb-12" : "mb-6"}
          >
            {!isEmpty &&
              line.split("").map((char, charIndex) => (
                <span
                  key={`${lineIndex}-${charIndex}`}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
          </div>
        );
      })}
    </div>
  );
}

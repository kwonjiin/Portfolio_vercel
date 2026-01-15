"use client";
import { useEffect, useState } from "react";

export default function ScrollHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY < 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-500
        ${visible ? "opacity-100" : "opacity-0"}
      `}
    >
      <div className="flex flex-col items-center text-neutral-400 text-sm animate-bounce">
        <span>Scroll</span>
        <span className="text-xl">↓</span>
      </div>
    </div>
  );
}

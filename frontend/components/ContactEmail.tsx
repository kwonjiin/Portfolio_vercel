"use client";

import { useState } from "react";

export default function ContactEmail() {
  const email = "jimin001006@naver.com";
  const [copied, setCopied] = useState(false);
  const [hover, setHover] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* 이메일 클릭 영역 */}
      <span
        onClick={handleCopy}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="
          ml-2 inline-flex items-center gap-1
          cursor-pointer
          underline underline-offset-4
          text-[#211378]
          transition
          hover:text-[#1a0f5e]
        "
      >
        {email}

        {/* 복사 아이콘 */}
        <span
          className={`text-xs transition ${
            hover ? "opacity-100" : "opacity-0"
          }`}
        >
          📋
        </span>
      </span>

      {/* 오른쪽 상단 토스트 */}
      {copied && (
        <div className="fixed right-6 top-6 z-50 rounded-xl bg-[#211378] px-5 py-3 text-sm text-white shadow-lg">
          이메일이 복사되었습니다 📋
        </div>
      )}
    </>
  );
}

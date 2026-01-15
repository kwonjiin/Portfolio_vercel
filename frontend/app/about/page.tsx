"use client";

import { useState } from "react";
import Head from "@/components/Header";
import Foot from "@/components/Footer";
import TechStackCard from "@/components/TechStack";


export default function AboutTabs() {
  const tabs = ["소개", "기술 스택"];
  const [active, setActive] = useState("소개");

  return (
    <section >
      <Head />
      <div className="w-full flex justify-end mb-6">
      <a
        href="/resume_kwonjimin.pdf"
        download
        className="inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm hover:bg-neutral-100 transition"
      >
        📄 이력서 다운로드
      </a>
    </div>

      <br /><br />
      {/* Tabs */}
      <div className="flex justify-center">
      <ul className="flex rounded-md h-10 w-40 bg-slate-100 p-1">
        {tabs.map((tab) => (
          <li key={tab} className="flex-1 text-center">
            <button
              onClick={() => setActive(tab)}
              className={`w-full rounded-md h-8 py-2 text-sm transition-all
                ${
                  active === tab
                    ? "bg-white shadow text-slate-900"
                    : "text-slate-500 hover:text-slate-700"
                }
              `}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
      </div>
<br />
      {/* Content */}
            <div className="flex justify-center">
      <div className="mt-10 text-neutral-700 leading-relaxed text-center">
        {active === "소개" && (
          <div>
          
            <h2 className="mb-4 text-4xl font-semibold text-neutral-900">
              About Me
            </h2>

            <p className="leading-relaxed text-neutral-700">
<br />
<br /><section className="rounded-2xl border border-neutral-200 bg-white p-8">
              <br />대학교 학술제에서 아두이노와 알고리즘을 활용한 자동 제어 시스템을 구현하며,
              <br /><br />문제를 코드로 해결하는 과정에 흥미를 느껴 개발자의 길을 선택하게 되었습니다.
              </section>
              <br /><br /><br />
              <section className="rounded-2xl border border-neutral-200 bg-white p-8">
              <br /><br />이후 백엔드 중심의 풀스택 부트캠프인
              <br /><br /><strong className="font-medium"> 한화 Beyond SW Camp</strong>를 수료하며,
              <br /><br />서버 개발, 데이터베이스 설계, DevOps까지
              <br /><br />서비스 전반을 이해하는 개발 역량을 쌓았습니다.</section>
              <br /><br /><br />
              <section className="rounded-2xl border border-neutral-200 bg-white p-8">
              <br /><br />저는 문제를 바로 구현하기보다,
              <br /><br />먼저 구조를 정리하고 기록하며 접근하는 개발자입니다.
              <br /><br />정리된 기록은 다시 사용 가능한 자산이 되고,
              <br /><br />협업 과정에서는 공통의 언어가 된다고 믿습니다.</section>
            </p>
          
</div>
        )}

        {active === "기술 스택" && (
          <TechStackCard
            icon="devicon-java-plain"
            name="Java"
          />

        )}

      </div>
      </div>
      <br /><br /><br /><br /><br /><Foot />
    </section>
  );
}

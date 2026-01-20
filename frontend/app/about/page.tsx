"use client";

import { useState } from "react";
import Head from "@/components/Header";
import Foot from "@/components/Footer";
import TechStackCard from "@/components/TechStack";
import Image from "next/image";
import about1 from "@/public/about1.jpg";
import about2 from "@/public/about2.jpg";
import about3 from "@/public/about3.jpg";


export default function AboutTabs() {
  const tabs = ["소개", "기술 스택", "다운로드"];
  const [active, setActive] = useState("소개");

  return (
    <div >
      <Head /><br />
      {/* Tabs */}
      <div className="flex justify-center">
      <ul className="flex rounded-md h-10 w-3xs bg-[#a8abdd81] p-1">
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
      
      {/* 소개탭 */}
      <div className="flex justify-center">
      <div className="mt-10 text-neutral-700 leading-relaxed text-center">
        {active === "소개" && (
          <div>
            <h2 className="mb-4 text-4xl font-semibold text-[#211378]">
              About Me
            </h2>

            <p className="leading-relaxed max-w-5xl text-neutral-700"><br /><br />
              <section className="w-full  rounded-2xl border border-[#211378]/50 bg-white p-8">
                <div className="w-full flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2">
                  <Image
                    src={about1}
                    alt="about1"
                    className="rounded-lg object-cover"
                    priority
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <p className="text-lg text-[#211378] leading-relaxed">
                    대학교 학술제에서 아두이노와 알고리즘을 활용한<br />
                    자동 제어 시스템을 구현하며,<br /><br />
                    문제를 코드로 해결하는 과정에 흥미를 느껴 <br />
                    개발자의 길을 선택하게 되었습니다.
                  </p>
                </div>
              </div>
              </section>

              <br /><br /><br />

              <section className="rounded-2xl border border-[#211378]/50 bg-white p-8">
                <div className="flex flex-col md:flex-row items-center gap-10">
                  <div className="w-full md:w-1/2">
                    <p className="text-lg text-[#211378] leading-relaxed">
                      이후 백엔드 중심의 풀스택 부트캠프인<br /><br />
                      <strong className="font-medium">한화 Beyond SW Camp</strong>를 수료하며,<br /><br />
                      서버 개발, 데이터베이스 설계, DevOps까지<br /><br />
                      서비스 전반을 이해하는 개발 역량을 쌓았습니다.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2">
                    <Image
                      src={about2}
                      alt="about2"
                      className="rounded-lg object-cover"
                      priority
                    />
                  </div>
                </div>
              </section>

              <br /><br /><br />

              <section className="rounded-2xl border border-[#211378]/50 bg-white p-8">
                <div className="w-full flex flex-col md:flex-row items-center gap-10">
                  <div className="w-full md:w-1/2">
                    <Image
                      src={about3}
                      alt="about3"
                      className="rounded-lg object-cover"
                      priority
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <p className="text-lg text-[#211378] leading-relaxed">
                      저는 문제를 바로 구현하기보다,<br /><br />
                      먼저 구조를 정리하고 기록하며 접근하는 개발자입니다.<br /><br />
                      정리된 기록은 다시 사용 가능한 자산이 되고,<br /><br />
                      협업 과정에서는 공통의 언어가 된다고 믿습니다.
                    </p>
                  </div>
                </div>
              </section>
            </p>
          </div>
        )}


        {/* 기술스택 탭 */}
        {active === "기술 스택" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
            <TechStackCard
            icon="devicon-java-plain"
            name="Java"
            experience="비즈니스 로직 구현"
            />
            <TechStackCard
              icon="devicon-spring-original"
              name="Spring"
              experience="REST API 설계 및 개발"
            />
            <TechStackCard
              icon="devicon-python-plain"
              name="Python"
              experience="개인 프로젝트에서 사용"
            />
            <TechStackCard
              icon="devicon-react-original"
              name="React"
              experience="컴포넌트 기반 UI 구현"
            />
            <TechStackCard
              icon="devicon-typescript-plain"
              name="Typescript"
              experience="타입 안정성 기반 개발"
            />
            <TechStackCard
              icon="devicon-javascript-plain"
              name="javascript"
              experience="팀 프로젝트에서 사용"
            />
            <TechStackCard
              icon="devicon-vuejs-plain"
              name="vuejs"
              experience="팀 프로젝트에서 사용"
            />
            <TechStackCard
              icon="devicon-githubactions-plain"
              name="githubactions"
              experience="CI 파이프라인 구축"
            />
            <TechStackCard
              icon="devicon-docker-plain"
              name="docker"
              experience="컨테이너 기반 환경 구성"
            />
            <TechStackCard
              icon="devicon-jenkins-plain"
              name="jenkins"
              experience="CI 파이프라인 구축"
            />
            <TechStackCard
              icon="devicon-argocd-plain"
              name="argocd"
              experience="CD 파이프라인 구축"
            />
            <TechStackCard
              icon="devicon-kubernetes-plain"
              name="kubernetes"
              experience="기본 운영 및 배포 경험"
            />
            <TechStackCard
              icon="devicon-amazonwebservices-plain-wordmark"
              name="aws"
              experience="EC2 · CodeDeploy · CloudFront 서비스 배포"
            />
            <TechStackCard
              icon="devicon-mysql-original"
              name="mysql"
              experience="관계형 데이터 모델링"
            />
            <TechStackCard
              icon="devicon-redis-plain-wordmark"
              name="redis"
              experience="캐싱 전략 적용"
            />
          </div>
        )}

        {active === "다운로드" && (
          <div>
            <div className="w-full flex justify-end mb-6">
              <a
                href="/resume-kwonjimin.pdf"
                download
                className="inline-flex items-center gap-2 border-[#6E72A6] rounded-full border-2 px-5 py-2 text-sm hover:bg-neutral-100 transition"
              >
                📄 이력서 다운로드
              </a>
            </div>
          </div>
        )}<br />
      </div>
    </div><br /><br /><br /><br /><br />
  <Foot />
    </div>
  );
}

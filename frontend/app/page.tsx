import Head from "@/components/Header";
import Foot from "@/components/Footer";
import SplitText from "@/components/SplitText";
import ScrollHint from "@/components/ScrollHint";


export default function Home() {
  return (
    <div>
      <Head/><br /><br />
    <main className="mx-auto max-w-5xl px-6 py-32 text-[#2E2A4A]">
      {/* Hero Text */}
      <SplitText
        text={`기록과 정리를 통해

        문제를 구조화하는

                    풀스택 개발자`}
        className="text-5xl font-bold leading-tight"
      />
      <ScrollHint />
<br /><br /><br /><br />
      {/* Divider (어색함 해결 핵심) */}
      <div className="mx-auto my-16 h-px w-24 bg-neutral-300" />
<br /><br /><br /><br />
      {/* Supporting Description */}
      <div className="mx-auto max-w-2xl text-center">
        <p className="select-none text-lg animate-fadeIn leading-relaxed text-neutral-600 ">
          복잡한 문제를 작은 단위로 나누고,<br />
          다시 사용 가능한 구조로 정리하는 것을 좋아합니다.
          <br /><br />
          협업 속에서 더 단단해지는 개발자를 지향합니다.
        </p><br /><br /><br /><br />
      </div>
    </main>
      <Foot/>
    </div>
    
  );
}

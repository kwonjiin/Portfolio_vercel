import Head from "@/components/Header";
import Foot from "@/components/Footer";
import ContactEmail from "@/components/ContactEmail";

export default function ContactPage() {
  return (
    <div>
      <Head />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="mb-20 text-center text-4xl font-bold text-[#211378]">
          Contact
        </h1>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 items-start">
          {/* LEFT */}
          <div className="max-w-xl text-[16px] leading-relaxed">
            <div className="rounded-2xl border-[#211378]/50 border p-8">
              <h2 className="mb-6 text-xl font-semibold text-[#211378]">
                How I Work
              </h2>

              <p className="text-[#211378]">
                풀스택 개발자로서 기능 구현보다{" "}
                <strong>왜 이렇게 설계했는지</strong>를 설명할 수 있는
                코드를 지향합니다.
                <br /><br />
                기록과 정리를 통해 배운 내용을 내 것으로 만들고,
                팀과의 협업 속에서 더 나은 방향을 함께 찾아가는 것을 좋아합니다.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-2xl border border-[#211378]/50 p-8">
            <h2 className="mb-6 text-xl font-semibold text-[#211378]">
              Get in Touch
            </h2>

            <ul className="space-y-4 text-sm text-[#211378]">
              <li>
                📧 Email :
                <ContactEmail />
              </li>

              <li>
                📱 Phone :
                <span className="ml-2">010-6437-3191</span>
              </li>

              <li>
                💻 GitHub :
                <a
                  href="https://github.com/kwonjiin"
                  target="_blank"
                  className="ml-2 underline underline-offset-4"
                >
                  github.com/kwonjiin
                </a>
              </li>

              <li>
                ✍ Blog :
                <a
                  href="https://secretdiary-by-princessjimin.tistory.com/"
                  target="_blank"
                  className="ml-2 underline underline-offset-4"
                >
                  jimin-blog.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Foot />
    </div>
  );
}

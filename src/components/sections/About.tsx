"use client";
import { useEffect, useRef } from "react";

const coreSkills = [
  { icon: "⚡", name: "JavaScript" },
  { icon: "🐘", name: "PHP" },
  { icon: "🔴", name: "Laravel" },
  { icon: "▲", name: "Next.js" },
  { icon: "🟢", name: "Node.js" },
  { icon: "⚛️", name: "React" },
];

function useReveal(direction: "up" | "left" | "right" = "up") {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translate(0,0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const initial =
    direction === "left"
      ? "translateX(-32px)"
      : direction === "right"
        ? "translateX(32px)"
        : "translateY(32px)";
  return {
    ref,
    style: {
      opacity: 0,
      transform: initial,
      transition: "opacity 0.7s ease, transform 0.7s ease",
    } as React.CSSProperties,
  };
}

export default function About() {
  const title = useReveal("up");
  const left = useReveal("left");
  const right = useReveal("right");

  return (
    <section id="about" className="section-padding bg-white dark:bg-[#080f1e]">
      <div className="section-inner">
        <div ref={title.ref} style={title.style}>
          <div className="section-label">
            <i className="fas fa-user mr-1" /> About Me
          </div>
          <h2 className="section-title text-slate-900 dark:text-blue-50">
            Passionate About
            <br />
            Crafting Digital Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mt-12">
          <div ref={left.ref} style={left.style}>
            <div className="space-y-4 text-[16px] text-slate-600 dark:text-[#7fa0c8] leading-[1.85]">
              <p>
                I&apos;m a dedicated Full Stack Developer with a deep passion
                for building modern, performant web applications. My journey in
                software development started at Universitas Amikom Yogyakarta,
                where I cultivated a strong foundation in Information Systems
                and software engineering principles.
              </p>
              <p>
                With expertise spanning both frontend and backend technologies,
                I thrive on architecting complete solutions — from designing
                intuitive user interfaces with React and Next.js to building
                robust server-side applications with Laravel and Node.js.
              </p>
              <p>
                Currently serving as a CPNS at Dinas Komunikasi dan Informatika,
                I bring both technical depth and a commitment to public service,
                developing digital infrastructure that impacts communities in
                Penajam Paser Utara.
              </p>
            </div>
            <div className="flex items-start gap-3.5 mt-6 bg-slate-50 dark:bg-[#0d1a2e] border border-slate-200 dark:border-[#1a2f4a] rounded-2xl p-5">
              <div className="w-11 h-11 flex-shrink-0 gradient-bg rounded-xl flex items-center justify-center text-white text-xl">
                <i className="fas fa-graduation-cap" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800 dark:text-[#d0e4f8] mb-0.5">
                  Universitas Amikom Yogyakarta
                </div>
                <div className="text-[13px] text-slate-500 dark:text-[#6a8aad]">
                  Bachelor of Information Systems · Class of 2022
                </div>
              </div>
            </div>
          </div>

          <div ref={right.ref} style={right.style}>
            <div className="section-label mb-4">
              <i className="fas fa-tools mr-1" /> Core Technologies
            </div>
            <div className="grid grid-cols-2 gap-3">
              {coreSkills.map((skill, i) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2.5 bg-slate-50 dark:bg-white/4 border border-slate-200 dark:border-[#1a2f4a] rounded-xl px-4 py-3.5 transition-all duration-300 hover:border-primary hover:bg-[rgba(17,92,212,0.07)] hover:-translate-y-0.5 cursor-default"
                  style={{ transitionDelay: `${i * 0.06}s` }}
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-sm font-semibold text-slate-700 dark:text-[#b8d0ec]">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

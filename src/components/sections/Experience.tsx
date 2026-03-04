"use client";
import { useEffect, useRef } from "react";

const experiences = [
  {
    period: "2025 – Present",
    role: "CPNS Pranata Komputer Ahli Pertama",
    company: "Dinas Komunikasi dan Informatika — Kab. Penajam Paser Utara",
    icon: "fa-laptop-code",
    desc: "Developing and maintaining government digital services and IT infrastructure. Responsible for building web-based applications that improve public service delivery and internal operational efficiency at the regional government level.",
    tags: ["Laravel", "Next.js", "Government IT", "PHP"],
  },
  {
    period: "2024 – 2025",
    role: "Fullstack Developer",
    company: "PT. EBConnection Indonesia",
    icon: "fa-plug",
    desc: "Developed and maintained scalable web applications for enterprise clients. Built REST APIs, integrated third-party services, and collaborated with cross-functional teams to deliver full-stack solutions using modern JavaScript frameworks and PHP.",
    tags: ["Node.js", "React", "Laravel", "REST API", "MySQL"],
  },
  {
    period: "2022 – 2024",
    role: "IT Technical Support",
    company: "PT. Solusi Pembayaran Elektronik",
    icon: "fa-headset",
    desc: "Provided technical support for electronic payment systems, diagnosing and resolving hardware and software issues. Contributed to internal tooling development and system monitoring to ensure high availability of payment infrastructure.",
    tags: [
      "Technical Support",
      "System Admin",
      "Networking",
      "Payment Systems",
    ],
  },
];

function RevealItem({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding bg-slate-50 dark:bg-[#080f1e]"
    >
      <div className="section-inner">
        <RevealItem>
          <div className="section-label">
            <i className="fas fa-briefcase mr-1" /> Work Experience
          </div>
          <h2 className="section-title text-slate-900 dark:text-blue-50">
            Professional Journey
          </h2>
          <p className="text-[17px] text-slate-500 dark:text-[#7fa0c8] max-w-[520px]">
            A track record of delivering value across different organizations
            and roles in the tech industry.
          </p>
        </RevealItem>

        <div className="mt-14 relative">
          {/* Timeline line */}
          <div
            className="absolute left-[22px] top-0 bottom-0 w-0.5"
            style={{
              background: "linear-gradient(to bottom, #115cd4, transparent)",
            }}
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <RevealItem key={exp.role} delay={i * 0.15}>
                <div className="flex gap-8">
                  {/* Dot */}
                  <div
                    className="flex-shrink-0 w-[46px] h-[46px] bg-white dark:bg-[#0d1a2e] border-[3px] border-primary rounded-full flex items-center justify-center text-primary text-lg z-10"
                    style={{ boxShadow: "0 0 0 6px rgba(17,92,212,0.1)" }}
                  >
                    <i className={`fas ${exp.icon}`} />
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white dark:bg-[#0d1a2e] border border-slate-200 dark:border-[#1a2f4a] rounded-2xl p-7 shadow-sm timeline-card-hover">
                    <span className="inline-block text-[11px] font-semibold tracking-wider text-primary bg-[rgba(17,92,212,0.07)] rounded-full px-3 py-0.5 mb-2.5">
                      {exp.period}
                    </span>
                    <div className="font-display font-bold text-[18px] text-slate-900 dark:text-[#d0e4f8] mb-1">
                      {exp.role}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-[#6a8aad] font-medium mb-3">
                      {exp.company}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-[#7fa0c8] leading-[1.75]">
                      {exp.desc}
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-3.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-2.5 py-0.5 bg-slate-100 dark:bg-white/6 text-slate-600 dark:text-[#8bafd4] rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

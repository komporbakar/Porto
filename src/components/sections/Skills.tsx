'use client'
import { useEffect, useRef } from 'react'

const categories = [
  {
    icon: 'fa-paint-brush',
    title: 'Frontend Development',
    skills: [
      { name: 'React.js', pct: 88 },
      { name: 'Next.js', pct: 85 },
      { name: 'JavaScript (ES6+)', pct: 92 },
      { name: 'Tailwind CSS', pct: 82 },
    ],
  },
  {
    icon: 'fa-server',
    title: 'Backend Development',
    skills: [
      { name: 'PHP', pct: 90 },
      { name: 'Laravel', pct: 88 },
      { name: 'Node.js', pct: 82 },
      { name: 'REST API Design', pct: 85 },
    ],
  },
  {
    icon: 'fa-database',
    title: 'Tools & Databases',
    skills: [
      { name: 'MySQL / PostgreSQL', pct: 83 },
      { name: 'Git & GitHub', pct: 87 },
      { name: 'Docker', pct: 70 },
      { name: 'Linux / Ubuntu', pct: 78 },
    ],
  },
]

function SkillCategory({ cat, delay }: { cat: typeof categories[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          // Animate bars
          el.querySelectorAll<HTMLElement>('.skill-bar-fill').forEach((bar) => {
            bar.classList.add('animated')
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: 'translateY(28px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
      className="bg-slate-50 dark:bg-[#0d1a2e] border border-slate-200 dark:border-[#1a2f4a] rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-12 h-12 gradient-bg rounded-[14px] flex items-center justify-center text-white text-xl mb-4">
        <i className={`fas ${cat.icon}`} />
      </div>
      <div className="font-display font-bold text-base text-slate-900 dark:text-[#d0e4f8] mb-5">{cat.title}</div>
      <div className="space-y-3.5">
        {cat.skills.map((s) => (
          <div key={s.name}>
            <div className="flex justify-between mb-1.5">
              <span className="text-[13px] font-medium text-slate-700 dark:text-[#b8d0ec]">{s.name}</span>
              <span className="text-xs font-semibold text-primary">{s.pct}%</span>
            </div>
            <div className="h-1.5 bg-slate-200 dark:bg-white/8 rounded-full overflow-hidden">
              <div
                className="skill-bar-fill"
                style={{ '--target-width': `${s.pct}%` } as React.CSSProperties}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const titleRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="section-padding bg-white dark:bg-[#080f1e]">
      <div className="section-inner">
        <div ref={titleRef} style={{ opacity: 0, transform: 'translateY(32px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <div className="section-label"><i className="fas fa-layer-group mr-1" /> Technical Skills</div>
          <h2 className="section-title text-slate-900 dark:text-blue-50">Skills &amp; Expertise</h2>
          <p className="text-[17px] text-slate-500 dark:text-[#7fa0c8] max-w-[520px]">
            A comprehensive toolkit built through years of hands-on professional experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {categories.map((cat, i) => (
            <SkillCategory key={cat.title} cat={cat} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  )
}

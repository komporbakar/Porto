'use client'
import { useEffect, useRef } from 'react'

const projects = [
  {
    emoji: '🏛️',
    name: 'Gov-Portal PPU',
    desc: 'A comprehensive government service portal for Penajam Paser Utara — enabling citizens to submit requests, track applications, and access public information online with role-based access control.',
    gradient: 'linear-gradient(135deg, #0f2c5e 0%, #115cd4 100%)',
    tags: [{ label: 'Laravel', color: '#f56565' }, { label: 'Alpine.js', color: '#68d391' }, { label: 'MySQL', color: '#63b3ed' }, { label: 'Tailwind', color: '#fbd38d' }],
    github: '#',
    demo: '#',
  },
  {
    emoji: '🛒',
    name: 'NextShop E-Commerce',
    desc: 'A modern, full-featured e-commerce platform with Next.js 14 App Router. Includes product catalog, cart, secure checkout via Midtrans, order tracking, and admin dashboard.',
    gradient: 'linear-gradient(135deg, #0f3d2e 0%, #10b981 100%)',
    tags: [{ label: 'Next.js 14', color: '#e8e8e8' }, { label: 'Prisma', color: '#a78bfa' }, { label: 'PostgreSQL', color: '#60a5fa' }, { label: 'Stripe', color: '#fbbf24' }],
    github: '#',
    demo: '#',
  },
  {
    emoji: '📊',
    name: 'Inventory Manager Pro',
    desc: 'Enterprise-grade inventory system with barcode scanning, automated low-stock alerts, purchase order management, supplier tracking, and comprehensive reporting.',
    gradient: 'linear-gradient(135deg, #3d0f3d 0%, #9c27b0 100%)',
    tags: [{ label: 'Laravel', color: '#f56565' }, { label: 'Vue.js', color: '#63b3ed' }, { label: 'MySQL', color: '#68d391' }, { label: 'Chart.js', color: '#fbd38d' }],
    github: '#',
    demo: '#',
  },
  {
    emoji: '💬',
    name: 'RealTime Chat API',
    desc: 'Scalable real-time messaging backend with Socket.io supporting rooms, direct messages, file sharing, read receipts, and Redis-based pub/sub for horizontal scaling.',
    gradient: 'linear-gradient(135deg, #1a3a2a 0%, #059669 100%)',
    tags: [{ label: 'Node.js', color: '#68d391' }, { label: 'Socket.io', color: '#fc8181' }, { label: 'Redis', color: '#f687b3' }, { label: 'JWT', color: '#a78bfa' }],
    github: '#',
    demo: '#',
  },
  {
    emoji: '📅',
    name: 'Attendance System',
    desc: 'Web-based attendance management with QR code check-in/out, geolocation verification, shift scheduling, leave workflows, and WhatsApp API notifications.',
    gradient: 'linear-gradient(135deg, #2d1a00 0%, #f59e0b 100%)',
    tags: [{ label: 'Laravel', color: '#f56565' }, { label: 'React', color: '#63b3ed' }, { label: 'QR Code', color: '#68d391' }, { label: 'WhatsApp API', color: '#fbd38d' }],
    github: '#',
    demo: '#',
  },
  {
    emoji: '🗺️',
    name: 'Public Asset Tracker',
    desc: 'GIS-based web app for local government to catalog and monitor public infrastructure assets with interactive Leaflet.js maps, condition reporting, and maintenance scheduling.',
    gradient: 'linear-gradient(135deg, #0d2233 0%, #0284c7 100%)',
    tags: [{ label: 'Laravel', color: '#f56565' }, { label: 'Leaflet.js', color: '#68d391' }, { label: 'PostgreSQL', color: '#63b3ed' }, { label: 'PostGIS', color: '#a78bfa' }],
    github: '#',
    demo: '#',
  },
]

function ProjectCard({ project, delay }: { project: typeof projects[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
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
    <div
      ref={ref}
      style={{ opacity: 0, transform: 'translateY(24px)', transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s` }}
      className="bg-white dark:bg-[#0d1a2e] border border-slate-200 dark:border-[#1a2f4a] rounded-2xl overflow-hidden flex flex-col card-hover"
    >
      {/* Header */}
      <div className="h-[180px] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-500 hover:scale-105" style={{ background: project.gradient }} />
        <span className="text-[60px] relative z-10">{project.emoji}</span>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="font-display font-bold text-[17px] text-slate-900 dark:text-[#d0e4f8] mb-2">{project.name}</div>
        <div className="text-sm text-slate-500 dark:text-[#6a8aad] leading-[1.7] mb-4 flex-1">{project.desc}</div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag.label}
              className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border"
              style={{ color: tag.color, borderColor: tag.color, background: `${tag.color}12` }}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-2.5">
          <a
            href={project.github}
            className="flex-1 text-center text-xs font-semibold py-2.5 rounded-[9px] no-underline transition-all duration-200
              text-slate-700 dark:text-[#b8d0ec] bg-slate-100 dark:bg-white/6 border border-slate-200 dark:border-white/10
              hover:bg-slate-200 dark:hover:bg-white/10"
          >
            <i className="fab fa-github mr-1" /> GitHub
          </a>
          <a
            href={project.demo}
            className="flex-1 text-center text-xs font-semibold py-2.5 rounded-[9px] no-underline transition-all duration-200
              text-white bg-primary hover:bg-[#2d75e8]"
            style={{ boxShadow: '0 2px 8px rgba(17,92,212,0.3)' }}
          >
            <i className="fas fa-external-link-alt mr-1" /> Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const titleRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; observer.unobserve(el) } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-[#080f1e]">
      <div className="section-inner">
        <div ref={titleRef} style={{ opacity: 0, transform: 'translateY(32px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <div className="section-label"><i className="fas fa-rocket mr-1" /> Projects</div>
          <h2 className="section-title text-slate-900 dark:text-blue-50">Featured Work</h2>
          <p className="text-[17px] text-slate-500 dark:text-[#7fa0c8] max-w-[520px]">
            Selected projects that showcase my technical range and problem-solving ability.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}

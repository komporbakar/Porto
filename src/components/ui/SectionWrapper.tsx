'use client'
import { useEffect, useRef } from 'react'
import clsx from 'clsx'

interface SectionWrapperProps {
  id: string
  children: React.ReactNode
  className?: string
}

export default function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  return (
    <section id={id} className={clsx('section-padding', className)}>
      <div className="section-inner">{children}</div>
    </section>
  )
}

// Hook for scroll reveal
export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('opacity-100', 'translate-y-0', 'translate-x-0')
          el.classList.remove('opacity-0', 'translate-y-8', '-translate-x-8', 'translate-x-8')
          // Animate skill bars inside
          el.querySelectorAll('.skill-bar-fill').forEach((bar) =>
            bar.classList.add('animated')
          )
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

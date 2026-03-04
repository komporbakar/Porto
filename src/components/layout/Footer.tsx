export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-[#020810] text-slate-400 py-10">
      <div className="max-w-[1120px] mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
        <div className="font-display font-black text-lg text-white">
          Arif<span className="text-blue-400">.</span>
        </div>
        <div className="text-sm">
          © 2025 Muhamad Arif Nurrohman. All rights reserved.
        </div>
        <div className="flex gap-2.5">
          {[
            { href: 'https://github.com/arifnurrohman', icon: 'fab fa-github' },
            { href: 'https://linkedin.com/in/arifnurrohman', icon: 'fab fa-linkedin-in' },
            { href: 'mailto:arif.nurrohman@email.com', icon: 'fas fa-envelope' },
          ].map((s) => (
            <a
              key={s.href}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="w-[38px] h-[38px] flex items-center justify-center bg-white/7 text-slate-400
                rounded-lg text-base no-underline transition-all duration-300
                hover:bg-primary hover:text-white hover:-translate-y-0.5"
            >
              <i className={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

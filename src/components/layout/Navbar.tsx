"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/components/ui/ThemeProvider";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  // { href: '#projects', label: 'Projects' },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-8 transition-all duration-300 ${
          scrolled
            ? "bg-white/88 dark:bg-[#080f1e]/90 backdrop-blur-xl shadow-sm dark:shadow-none border-b border-transparent dark:border-white/5"
            : ""
        }`}
      >
        <div className="max-w-[1120px] mx-auto flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a
            href="#hero"
            className="font-display font-black text-xl text-slate-900 dark:text-blue-50 no-underline"
          >
            Arif<span className="text-primary">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-1 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-slate-600 dark:text-[#8bafd4] no-underline
                    px-3.5 py-2 rounded-lg transition-all duration-200
                    hover:text-primary hover:bg-[rgba(17,92,212,0.07)]
                    dark:hover:text-[#5a9cf5] dark:hover:bg-[rgba(17,92,212,0.12)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-[38px] h-[38px] flex items-center justify-center rounded-lg
                bg-slate-100 dark:bg-white/7 text-slate-600 dark:text-[#8bafd4]
                hover:bg-[rgba(17,92,212,0.07)] hover:text-primary
                transition-all duration-200 border-none cursor-pointer"
              aria-label="Toggle dark mode"
            >
              <i
                className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"} text-sm`}
              />
            </button>
            <a
              href="#contact"
              className="hidden md:inline-flex btn-primary text-xs !py-2.5 !px-5"
            >
              Hire Me
            </a>
            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
            >
              <span className="block w-[22px] h-[2px] bg-slate-700 dark:bg-[#8bafd4] rounded transition-all" />
              <span className="block w-[22px] h-[2px] bg-slate-700 dark:bg-[#8bafd4] rounded transition-all" />
              <span className="block w-[22px] h-[2px] bg-slate-700 dark:bg-[#8bafd4] rounded transition-all" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed top-[72px] left-0 right-0 z-40 bg-white dark:bg-[#0d1a2e] border-b border-slate-200 dark:border-[#1a2f4a] p-4 shadow-lg md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 px-4 text-[15px] font-medium text-slate-700 dark:text-[#8bafd4]
                no-underline rounded-lg transition-all duration-200
                hover:bg-[rgba(17,92,212,0.07)] hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

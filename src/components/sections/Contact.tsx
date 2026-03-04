"use client";
import { useState, useEffect, useRef } from "react";

const contactItems = [
  {
    href: "mailto:nurrohmanarif000@gmail.com",
    icon: "fa-envelope",
    label: "Email",
    value: "arif.nurrohman@email.com",
  },
  {
    href: "https://github.com/komporbakar",
    icon: "fab fa-github",
    label: "GitHub",
    value: "github.com/arifnurrohman",
  },
  {
    href: "https://linkedin.com/in/arifnurrohman0760",
    icon: "fab fa-linkedin-in",
    label: "LinkedIn",
    value: "linkedin.com/in/arifnurrohman",
  },
  {
    href: "#",
    icon: "fa-map-marker-alt",
    label: "Location",
    value: "Penajam Paser Utara, Kaltim",
  },
];

function useReveal(dir: "up" | "left" | "right" = "up", delay = 0) {
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
  const t =
    dir === "left"
      ? "translateX(-32px)"
      : dir === "right"
        ? "translateX(32px)"
        : "translateY(32px)";
  return {
    ref,
    style: {
      opacity: 0,
      transform: t,
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    } as React.CSSProperties,
  };
}

export default function Contact() {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [toast, setToast] = useState<{
    msg: string;
    type: "success" | "error";
  } | null>(null);

  const title = useReveal("up");
  const left = useReveal("left", 0.1);
  const right = useReveal("right", 0.2);

  const handleSubmit = () => {
    if (!form.fname || !form.email || !form.message) {
      setToast({ msg: "Please fill in required fields.", type: "error" });
    } else {
      setToast({ msg: "Message sent successfully!", type: "success" });
      setForm({ fname: "", lname: "", email: "", subject: "", message: "" });
    }
    setTimeout(() => setToast(null), 3500);
  };

  return (
    <section
      id="contact"
      className="section-padding bg-white dark:bg-[#080f1e]"
    >
      <div className="section-inner">
        <div ref={title.ref} style={title.style}>
          <div className="section-label">
            <i className="fas fa-paper-plane mr-1" /> Contact
          </div>
          <h2 className="section-title text-slate-900 dark:text-blue-50">
            Let&apos;s Work Together
          </h2>
          <p className="text-[17px] text-slate-500 dark:text-[#7fa0c8] max-w-[520px]">
            Have a project in mind or want to discuss opportunities? I&apos;d
            love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 mt-12">
          {/* Info */}
          <div ref={left.ref} style={left.style}>
            <div className="font-display font-bold text-[22px] text-slate-900 dark:text-[#d0e4f8] mb-3">
              Get In Touch
            </div>
            <p className="text-[15px] text-slate-500 dark:text-[#7fa0c8] leading-[1.8] mb-7">
              Whether you&apos;re looking for a collaborator on a technical
              project, need a consultant for your digital transformation, or
              simply want to connect — my inbox is always open.
            </p>
            <div className="space-y-3">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-3.5 no-underline bg-slate-50 dark:bg-[#0d1a2e] border border-slate-200 dark:border-[#1a2f4a] rounded-xl px-4 py-3.5 transition-all duration-300 hover:border-primary hover:bg-[rgba(17,92,212,0.07)] hover:translate-x-1 group"
                >
                  <div className="w-10 h-10 gradient-bg rounded-[10px] flex items-center justify-center text-white text-base flex-shrink-0">
                    <i className={`fas ${item.icon}`} />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-[#b8d0ec]">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div ref={right.ref} style={right.style}>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-slate-600 dark:text-[#8bafd4] block mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    value={form.fname}
                    onChange={(e) =>
                      setForm({ ...form, fname: e.target.value })
                    }
                    className="w-full text-sm text-slate-800 dark:text-[#c9d8f0] bg-slate-50 dark:bg-white/4 border border-slate-200 dark:border-[#1a2f4a] rounded-xl px-4 py-3 outline-none focus:border-primary focus:bg-white dark:focus:bg-[rgba(17,92,212,0.06)] transition-all"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-600 dark:text-[#8bafd4] block mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    value={form.lname}
                    onChange={(e) =>
                      setForm({ ...form, lname: e.target.value })
                    }
                    className="w-full text-sm text-slate-800 dark:text-[#c9d8f0] bg-slate-50 dark:bg-white/4 border border-slate-200 dark:border-[#1a2f4a] rounded-xl px-4 py-3 outline-none focus:border-primary focus:bg-white dark:focus:bg-[rgba(17,92,212,0.06)] transition-all"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  />
                </div>
              </div>
              {[
                {
                  key: "email",
                  label: "Email Address",
                  type: "email",
                  placeholder: "john@example.com",
                },
                {
                  key: "subject",
                  label: "Subject",
                  type: "text",
                  placeholder: "Project Inquiry",
                },
              ].map((f) => (
                <div key={f.key}>
                  <label className="text-xs font-medium text-slate-600 dark:text-[#8bafd4] block mb-1.5">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.key as keyof typeof form]}
                    onChange={(e) =>
                      setForm({ ...form, [f.key]: e.target.value })
                    }
                    className="w-full text-sm text-slate-800 dark:text-[#c9d8f0] bg-slate-50 dark:bg-white/4 border border-slate-200 dark:border-[#1a2f4a] rounded-xl px-4 py-3 outline-none focus:border-primary focus:bg-white dark:focus:bg-[rgba(17,92,212,0.06)] transition-all"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  />
                </div>
              ))}
              <div>
                <label className="text-xs font-medium text-slate-600 dark:text-[#8bafd4] block mb-1.5">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full text-sm text-slate-800 dark:text-[#c9d8f0] bg-slate-50 dark:bg-white/4 border border-slate-200 dark:border-[#1a2f4a] rounded-xl px-4 py-3 outline-none focus:border-primary focus:bg-white dark:focus:bg-[rgba(17,92,212,0.06)] transition-all resize-y"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                />
              </div>
              <button
                onClick={handleSubmit}
                className="btn-primary justify-center text-base !py-4"
              >
                <i className="fas fa-paper-plane" /> Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3.5 rounded-xl text-white text-sm font-medium shadow-2xl transition-all
            ${toast.type === "success" ? "bg-slate-900" : "bg-red-600"}`}
        >
          <i
            className={`fas ${toast.type === "success" ? "fa-check-circle text-emerald-400" : "fa-exclamation-circle text-red-200"}`}
          />
          {toast.msg}
        </div>
      )}
    </section>
  );
}

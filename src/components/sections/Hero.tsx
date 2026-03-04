"use client";
export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden
        bg-gradient-to-br from-[#f0f5ff] via-slate-50 to-[#edf4ff]
        dark:from-[#0a1220] dark:via-[#080f1e] dark:to-[#060d1a]"
    >
      {/* Blobs */}
      <div
        className="blob-float absolute rounded-full pointer-events-none"
        style={{
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(17,92,212,0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
          top: -150,
          right: -100,
        }}
      />
      <div
        className="blob-float-slow absolute rounded-full pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(17,92,212,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
          bottom: -100,
          left: -50,
        }}
      />

      <div className="max-w-[1120px] mx-auto px-6 pt-28 pb-20 w-full grid md:grid-cols-2 gap-14 items-center">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[rgba(17,92,212,0.07)] border border-[rgba(17,92,212,0.2)] rounded-full px-4 py-1.5 mb-6">
            <div className="pulse-dot w-2 h-2 bg-primary rounded-full" />
            <span className="text-xs font-semibold text-primary tracking-wide">
              Available for opportunities
            </span>
          </div>

          <h1
            className="font-display font-black text-slate-900 dark:text-[#e8f2ff] mb-3 leading-[1.05]"
            style={{
              fontSize: "clamp(40px, 6vw, 68px)",
              letterSpacing: "-0.02em",
            }}
          >
            Muhamad Arif
            <br />
            <span className="gradient-text">Nurrohman</span>
          </h1>

          <p className="text-lg font-medium text-slate-500 dark:text-[#7fa0c8] mb-5">
            Programmer &amp;{" "}
            <strong className="text-primary font-semibold">
              Full Stack Developer
            </strong>
          </p>

          <p className="text-[17px] text-slate-500 dark:text-[#6a8aad] leading-[1.8] max-w-[460px] mb-9">
            Passionate developer crafting efficient, scalable web solutions with
            modern JavaScript and PHP ecosystems. Turning complex problems into
            clean, elegant code.
          </p>

          <div className="flex flex-wrap gap-3.5 mb-12">
            <a href="#projects" className="btn-primary">
              <i className="fas fa-code-branch" /> View Projects
            </a>
            <a href="#contact" className="btn-outline">
              <i className="fas fa-envelope" /> Contact Me
            </a>
          </div>

          <div className="flex gap-8 flex-wrap">
            {[
              { num: "3+", label: "Years Experience" },
              // { num: '15+', label: 'Projects Delivered' },
              { num: "6+", label: "Tech Stacks" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display font-black text-[28px] text-slate-900 dark:text-[#d0e4f8]">
                  {s.num.replace("+", "")}
                  <span className="text-primary">+</span>
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right – profile card */}
        <div className="hidden md:flex items-center justify-center relative">
          {/* Floating top-right */}
          <div className="card-float absolute -top-2 -right-8 bg-white dark:bg-[#0d1a2e] border border-[rgba(17,92,212,0.08)] dark:border-[#1a2f4a] rounded-2xl px-4 py-3 flex items-center gap-2.5 shadow-lg z-10">
            <div className="w-9 h-9 gradient-bg rounded-[10px] flex items-center justify-center text-white text-base">
              <i className="fas fa-code" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-[#d0e4f8]">
                Full Stack
              </div>
              <div className="text-xs text-slate-500 dark:text-[#7fa0c8]">
                JS &amp; PHP Expert
              </div>
            </div>
          </div>

          {/* Main card */}
          <div className="bg-white dark:bg-[#0d1a2e] border border-[rgba(17,92,212,0.08)] dark:border-[#1a2f4a] rounded-3xl p-8 w-[340px] z-10 shadow-2xl">
            <div className="w-20 h-20 gradient-bg rounded-[20px] flex items-center justify-center text-white font-display font-black text-4xl mb-4">
              {/* MA */}
            </div>
            <div className="font-display font-bold text-[18px] text-slate-900 dark:text-[#d0e4f8] mb-1">
              Muhamad Arif Nurrohman
            </div>
            <div className="text-sm text-primary font-medium mb-5">
              Full Stack Developer
            </div>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {[
                "JavaScript",
                "PHP",
                "Laravel",
                "Next.js",
                "React",
                "Node.js",
              ].map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-semibold px-2.5 py-1 bg-[rgba(17,92,212,0.07)] text-primary border border-[rgba(17,92,212,0.15)] rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700/40 rounded-xl px-3.5 py-2.5">
              <div className="pulse-dot w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                Government IT Professional · 2025
              </span>
            </div>
          </div>

          {/* Floating bottom-left */}
          <div className="card-float-delayed absolute -bottom-2 -left-6 bg-white dark:bg-[#0d1a2e] border border-[rgba(17,92,212,0.08)] dark:border-[#1a2f4a] rounded-2xl px-4 py-3 flex items-center gap-2.5 shadow-lg z-10">
            <div className="w-9 h-9 gradient-bg rounded-[10px] flex items-center justify-center text-white text-base">
              <i className="fas fa-server" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-[#d0e4f8]">
                3+ Years
              </div>
              <div className="text-xs text-slate-500 dark:text-[#7fa0c8]">
                Professional Dev
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

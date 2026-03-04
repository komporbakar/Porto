# Muhamad Arif Nurrohman — Portfolio

A professional portfolio website built with **Next.js 14 (App Router)** and **Tailwind CSS**.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → Open http://localhost:3000
```

## 🏗️ Build & Deploy

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata & fonts
│   ├── page.tsx            # Home page (assembles all sections)
│   └── globals.css         # Global styles + Tailwind base
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky navbar with dark mode toggle & mobile menu
│   │   └── Footer.tsx      # Footer with social links
│   ├── sections/
│   │   ├── Hero.tsx        # Hero with animated cards & CTA
│   │   ├── About.tsx       # About me + education + core skills
│   │   ├── Experience.tsx  # Timeline work experience
│   │   ├── Skills.tsx      # Skill bars by category
│   │   ├── Projects.tsx    # Project cards grid
│   │   └── Contact.tsx     # Contact form + info
│   └── ui/
│       ├── ThemeProvider.tsx  # Dark/light mode context
│       └── SectionWrapper.tsx # Reusable section wrapper + scroll hook
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS
- **Animations:** CSS keyframes + IntersectionObserver (scroll reveal)
- **Dark Mode:** next-themes via custom ThemeProvider
- **Typography:** Syne (display) + DM Sans (body)
- **Icons:** Font Awesome 6

## ✨ Features

- Dark / Light mode toggle
- Sticky navbar with scroll-aware background
- Mobile-responsive hamburger menu
- Scroll-triggered reveal animations
- Animated skill progress bars
- Project cards with hover effects
- Contact form with toast notifications
- SEO metadata in layout.tsx
- Fully typed with TypeScript

## 🎨 Primary Color

`#115cd4` — used for buttons, accents, gradients, skill bars, and links throughout.

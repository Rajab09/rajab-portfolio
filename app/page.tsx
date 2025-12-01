"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, MessageCircle, ArrowRight, Download, ExternalLink, Phone } from "lucide-react";

// Accent palette
const ACCENTS = {
  blue: {
    base: "#2563EB", // Tailwind blue-600
    ring: "ring-blue-500/30",
    glow: "shadow-[0_0_0_2px_rgba(37,99,235,0.08),0_10px_30px_-10px_rgba(37,99,235,0.35)]",
    grad: "from-blue-500/10 via-blue-400/10 to-blue-600/10",
  },
};

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`scroll-mt-24 px-6 md:px-8 lg:px-10 ${className}`}>{children}</section>
);

const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-7xl ${className}`}>{children}</div>
);

const Tag = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-black/5 bg-white/70 px-3 py-1 text-xs font-medium text-gray-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
    {children}
  </span>
);

export default function Portfolio() {
  const [year, setYear] = useState<number | null>(null);
  const accent = useMemo(() => ACCENTS.blue, []);

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const linkBase = `inline-flex items-center gap-2 rounded-xl border border-black/5 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:translate-y-[-1px] hover:shadow-md focus:outline-none focus:ring-4 ${accent.ring} dark:border-white/10 dark:bg-white/5 dark:text-gray-200`;
  const primaryBtn = `${linkBase} !bg-[${accent.base}] text-white border-0 hover:shadow-lg`;
  const ghostBtn = `${linkBase}`;

  const cardBase = `group relative rounded-2xl border border-black/5 bg-white/80 p-6 shadow-sm transition-all hover:translate-y-[-2px] hover:shadow-lg ${accent.glow} dark:border-white/10 dark:bg-white/5`;
  const softGrad = `bg-gradient-to-br ${accent.grad}`;

  const skillsDev = [
    "HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "Python", "Firebase", "GCP", "Flutter",
  ];
  const skillsAI = [
    "AI Video Generators", "AI Image Creators (Midjourney, Leonardo)", "Photoshop", "Premiere Pro", "Video Editing", "Prompt Design",
  ];

  const projects = [
    {
      title: "RS Web Agency",
      desc: "A boutique web agency site with blazing-fast Next.js SSR and a CMS-powered blog.",
      image: "data:image/svg+xml;utf8,\n      <svg xmlns='http://www.w3.org/2000/svg' width='1600' height='900'>\n        <defs>\n          <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>\n            <stop offset='0%' stop-color='%23ffffff'/>\n            <stop offset='100%' stop-color='%23eaeef9'/>\n          </linearGradient>\n        </defs>\n        <rect width='100%' height='100%' fill='url(%23g)'/>\n        <circle cx='200' cy='200' r='120' fill='%232563eb22'/>\n        <circle cx='900' cy='500' r='180' fill='%237c3aed22'/>\n      </svg>",
      demo: "#",
      github: "#",
    },
    {
      title: "De’Touch Salon Website",
      desc: "Elegant salon presence with booking, gallery, and SEO-first architecture.",
      image: "data:image/svg+xml;utf8,\n      <svg xmlns='http://www.w3.org/2000/svg' width='1600' height='900'><rect width='100%' height='100%' fill='%23f6f7fb'/><rect x='80' y='120' width='400' height='260' rx='24' fill='%232563eb11'/><rect x='560' y='280' width='680' height='320' rx='28' fill='%237c3aed11'/></svg>",
      demo: "#",
      github: "#",
    },
    {
      title: "MedRide App",
      desc: "Patient transport & scheduling app with Firebase auth and real-time tracking.",
      image: "data:image/svg+xml;utf8,\n      <svg xmlns='http://www.w3.org/2000/svg' width='1600' height='900'><rect width='100%' height='100%' fill='%23f8fafc'/><circle cx='300' cy='360' r='160' fill='%232563eb11'/><rect x='760' y='180' width='520' height='520' rx='40' fill='%237c3aed11'/></svg>",
      demo: "#",
      github: "#",
    },
    {
      title: "Restaurant AI System",
      desc: "Menu intelligence, order prediction, and chatbot ordering with GPT-powered flows.",
      image: "data:image/svg+xml;utf8,\n      <svg xmlns='http://www.w3.org/2000/svg' width='1600' height='900'><rect width='100%' height='100%' fill='%23f7f7fb'/><circle cx='500' cy='260' r='140' fill='%237c3aed11'/><circle cx='980' cy='560' r='200' fill='%232563eb11'/></svg>",
      demo: "#",
      github: "#",
    },
  ];

  return (
    <div className={`antialiased`}>
      <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 selection:bg-blue-600/90 selection:text-white">
        {/* Decorative background */}
        <div aria-hidden className={`pointer-events-none fixed inset-0 -z-10 opacity-70 ${softGrad}`}></div>
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(0,0,0,0.05),transparent_40%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.06),transparent_40%)]" />

        {/* Header */}
        <header className="sticky top-0 z-40 w-full border-b border-black/5 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-white/10 dark:bg-[#0b0d10]/60">
          <Container className="flex h-16 items-center justify-between gap-4">
            <a href="#" className="inline-flex items-center gap-2 rounded-xl px-2 py-1 text-sm font-semibold">
              <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-black/80 to-black" />
              <span className="tracking-tight">Rajab</span>
            </a>
            <nav className="hidden items-center gap-1 md:flex">
              {[
                {href: "#about", label: "About"},
                {href: "#skills", label: "Skills"},
                {href: "#projects", label: "Projects"},
                {href: "#experience", label: "Experience"},
                {href: "#contact", label: "Contact"},
              ].map((i)=> (
                <a key={i.href} href={i.href} className="rounded-lg px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white">{i.label}</a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
            </div>
          </Container>
        </header>

        {/* Hero */}
        <Section id="home" className="pt-16">
          <Container className="relative flex min-h-[78vh] flex-col items-center justify-center gap-10 py-16 text-center">
            {/* Light floating shapes */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <motion.div initial={{opacity:0, y:10}} animate={{opacity:0.9, y:0}} transition={{duration:0.9, delay:0.2}} className={`absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full blur-3xl ${softGrad}`}></motion.div>
            </div>

            <Tag>Based in Malaysia 🇲🇾</Tag>
            <motion.h1 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Mahmadrajab Saidzoda
            </motion.h1>
            <motion.p initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.7, delay:0.05}} className="max-w-2xl text-balance text-lg text-gray-600 dark:text-gray-300">
              Full Stack Developer & AI-Powered Creator — crafting high-performance, elegant interfaces and AI-enhanced digital experiences.
            </motion.p>
            <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.7, delay:0.1}} className="flex flex-wrap items-center justify-center gap-3">
              <a href="#projects" className={`${primaryBtn}`}>
                View Projects <ArrowRight size={16}/>
              </a>
              <a href="#contact" className={`${ghostBtn}`}>
                Contact <Mail size={16}/>
              </a>
            </motion.div>
          </Container>
        </Section>

        {/* About */}
        <Section id="about" className="py-20">
          <Container>
            <div className="grid items-center gap-10 md:grid-cols-[auto,1fr]">
              <motion.div initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:0.5}} className="mx-auto">
                <div className={`relative h-28 w-28 overflow-hidden rounded-full border border-black/5 bg-white shadow-sm ${accent.glow} dark:border-white/10 dark:bg-white/5`}>
                  {/* Placeholder avatar */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.06),transparent_40%)] dark:bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_40%)]"/>
                </div>
              </motion.div>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About</h2>
                <p className="max-w-2xl text-gray-600 dark:text-gray-300">
                  I’m Rajab — a full‑stack developer passionate about building delightful, fast, and accessible products. I merge React/Next.js engineering with AI tooling to design frictionless experiences that scale. I care about crisp UI, robust architecture, and measurable impact.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="#" className={`${ghostBtn}`}>
                    <Download size={16}/> Download Resume
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Skills */}
        <Section id="skills" className="py-20">
          <Container>
            <div className="mb-10 flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Skills</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Modern stack for shipping polished, production-grade apps.</p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Development */}
              <div className={`${cardBase}`}>
                <h3 className="mb-4 text-lg font-semibold">Development</h3>
                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {skillsDev.map((s) => (
                    <li key={s} className={`rounded-xl border border-black/5 bg-white/70 px-3 py-2 text-sm text-gray-700 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${accent.glow} hover:ring-2 ${accent.ring} dark:border-white/10 dark:bg-white/5 dark:text-gray-200`}>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Creative & AI Tools */}
              <div className={`${cardBase}`}>
                <h3 className="mb-4 text-lg font-semibold">Creative & AI Tools</h3>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {skillsAI.map((s) => (
                    <li key={s} className={`rounded-xl border border-black/5 bg-white/70 px-3 py-2 text-sm text-gray-700 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${accent.glow} hover:ring-2 ${accent.ring} dark:border-white/10 dark:bg-white/5 dark:text-gray-200`}>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        {/* Projects */}
        <Section id="projects" className="py-20">
          <Container>
            <div className="mb-10 flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Selected Projects</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">A snapshot of shipped work. More on request.</p>
              </div>
              <div className="hidden gap-2 md:flex">
                <Tag>Next.js</Tag>
                <Tag>TypeScript</Tag>
                <Tag>AI</Tag>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <article key={p.title} className={`${cardBase} overflow-hidden`}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-black/5 bg-gray-50 dark:border-white/10 dark:bg-white/5">
                    <img src={p.image} alt="Project cover" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"/>
                    <div className={`pointer-events-none absolute inset-0 rounded-xl ${softGrad} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}/>
                  </div>
                  <div className="mt-4 space-y-3">
                    <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{p.desc}</p>
                    <div className="flex items-center gap-2">
                      <a href={p.demo} className={`${ghostBtn} px-3 py-1.5 text-xs`}>Live Demo <ExternalLink size={14}/></a>
                      <a href={p.github} className={`${ghostBtn} px-3 py-1.5 text-xs`}><Github size={14}/> GitHub</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        {/* Experience & Education */}
        <Section id="experience" className="py-20">
          <Container>
            <h2 className="mb-10 text-2xl font-semibold tracking-tight sm:text-3xl">Experience & Education</h2>
            <div className="relative mx-auto max-w-3xl">
              {/* vertical line */}
              <div aria-hidden className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-gray-200 to-transparent dark:from-white/10"></div>
              <ul className="space-y-10">
                {[ 
                  {
                    title: "Co‑Founder & Developer — RS Web Agency",
                    period: "2022 — Present",
                    desc: "Leading delivery of modern websites & apps for SMEs, owning architecture, performance, and design systems.",
                  },
                  {
                    title: "Freelance AI Creator",
                    period: "2021 — Present",
                    desc: "Building AI-driven content workflows: image/video generation, automation, and custom GPT integrations.",
                  },
                  {
                    title: "BSc Computer Science — Albukhary International University",
                    period: "2019 — 2023",
                    desc: "Core CS foundation with projects across web, mobile, and ML fundamentals.",
                  },
                ].map((item, idx) => (
                  <li key={idx} className="relative pl-12">
                    <div className={`absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-black/5 bg-white shadow-sm ${accent.glow} dark:border-white/10 dark:bg-white/5`}>
                      <div className="h-2.5 w-2.5 rounded-full" style={{backgroundColor: accent.base}} />
                    </div>
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.period}</p>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>

        {/* Contact */}
        <Section id="contact" className="py-20">
          <Container>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Let’s build something great</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Tell me about your project, timeline, and goals.</p>

              <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">Name</label>
                    <input className={`w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm outline-none transition focus:ring-4 ${accent.ring} dark:border-white/10 dark:bg-white/5`} placeholder="Your name"/>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Email</label>
                    <input type="email" className={`w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm outline-none transition focus:ring-4 ${accent.ring} dark:border-white/10 dark:bg-white/5`} placeholder="you@example.com"/>
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Message</label>
                  <textarea rows={5} className={`w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm outline-none transition focus:ring-4 ${accent.ring} dark:border-white/10 dark:bg-white/5`} placeholder="What are we building?"/>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <a href="https://github.com" className="text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"><Github/></a>
                    <a href="https://linkedin.com" className="text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"><Linkedin/></a>
                    <a href="https://instagram.com" className="text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"><Instagram/></a>
                    <a href="https://wa.me/" className="text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"><Phone/></a>
                  </div>
                  <button className={`${ghostBtn}`} type="submit">
                    Send Message <ArrowRight size={16}/>
                  </button>
                </div>
              </form>
            </div>
          </Container>
        </Section>

        {/* Footer */}
        <footer className="mt-20 border-t border-black/5 py-10 text-sm text-gray-500 dark:border-white/10 dark:text-gray-400">
          <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p>© {year || new Date().getFullYear()} Mahmadrajab Saidzoda. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-gray-900 dark:hover:text-white">Privacy</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white">Imprint</a>
            </div>
          </Container>
        </footer>

        {/* Floating chat */}
        <a
          href="#contact"
          className={`fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl focus:outline-none focus:ring-4 ${accent.ring}`}
          style={{ backgroundColor: accent.base }}
        >
          <MessageCircle size={16}/> Chat with Rajab
        </a>
      </div>
    </div>
  );
}

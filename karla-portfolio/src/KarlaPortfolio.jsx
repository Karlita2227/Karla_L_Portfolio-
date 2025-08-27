import { useMemo, useState } from "react";
import { motion } from "framer-motion";
const PROFILE = {
  name: "Karla Lewis",
  role: "Full‑Stack Web Developer",
  tagline:
    "I design and build clean, reliable web apps — from pixel‑perfect UIs to secure, scalable APIs.",
  location: "Los Angeles, CA • Remote‑friendly",
  email: "karlaoglivie@gmail.com",
  resumeUrl: "/resume.pdf",
  github: "https://github.com/Karlita2227",
  linkedin: "www.linkedin.com/in/karlalewis1019", 
};

const SERVICES = [
  {
    title: "Frontend Development",
    blurb:
      "Responsive SPAs with React, Vite, Tailwind/DaisyUI, accessibility and performance in mind.",
    bullets: ["React + Vite setup", "Component architecture", "A11y & Lighthouse basics"],
  },
  {
    title: "Backend APIs",
    blurb:
      "RESTful APIs with Express, auth with Supabase, and data modeling with Prisma + Postgres/SQLite.",
    bullets: ["Express routing", "JWT/Supabase auth", "Prisma ORM & migrations"],
  },
  {
    title: "Database & DevOps",
    blurb:
      "Schema design, seed data, and smooth deploys to Netlify/Vercel with CI‑ready project structure.",
    bullets: ["Postgres/SQLite", "Seeding & testing", "Simple CI set‑up"],
  },
  {
    title: "Team Workflow",
    blurb:
      "Clean Git branching (feature → develop → main), helpful PRs, and solid documentation.",
    bullets: ["Branch strategy", "PR templates", "README & screenshots"],
  },
];

const ALL_PROJECTS = [
  {
    title: "Team TV Show Website (Group Project)",
    repo: "https://github.com/Karlita2227/GroupProject_TeamTvShowWebsite",
    summary:
      "Collaborative site exploring TV shows. Contributed components, styling, and git workflow.",
    tags: ["Frontend", "Team", "HTML/CSS/JS"],
  },
  {
    title: "Donezo — Full‑Stack Productivity App",
    repo: "https://github.com/Karlita2227/Karla_L_donezo",
    summary:
      "React + Express + Supabase + Prisma stack with auth, forms, and grid views for tasks.",
    tags: ["Full‑Stack", "React", "Supabase", "Prisma"],
  },
  {
    title: "Intro to Supabase",
    repo: "https://github.com/Karlita2227/Karla_L_Intro_to_Supabase",
    summary:
      "Explores Supabase auth and database reads/writes from a Node/Express service.",
    tags: ["Backend", "Supabase", "Auth"],
  },
  {
    title: "Intro to Prisma",
    repo: "https://github.com/Karlita2227/Karla_L_Intro_to_Prisma",
    summary:
      "Prisma schema design, migrations, and seeded data with SQLite/Postgres targets.",
    tags: ["Backend", "Prisma", "Database"],
  },
  {
    title: "U.S. Public Library Database",
    repo: "https://github.com/Karlita2227/KarlaL_US_Public_Library_Database",
    summary:
      "Data modeling and queries against a public‑library dataset with clean schema.",
    tags: ["Database", "SQL", "Modeling"],
  },
  {
    title: "Star Wars Character Search",
    repo: "https://github.com/Karlita2227/KarlaL_StarWars_Character",
    summary:
      "Search UI powered by SWAPI with clean UX and responsive cards.",
    tags: ["Frontend", "API", "React"],
  },
  {
    title: "Disney Final Project (Clean Repo)",
    repo: "https://github.com/Karlita2227/KarlaL_JS_Final_Project_Clean_Repo",
    summary:
      "Disney character explorer with video background, audio controls, and search.",
    tags: ["Frontend", "UI", "JavaScript"],
  },
];

const TAGS = ["All", "Frontend", "Backend", "Full‑Stack", "Database", "Team", "React", "Prisma", "Supabase", "API", "UI", "SQL", "HTML/CSS/JS"];

const Chip = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={
      "px-3 py-1 rounded-full text-sm border transition " +
      (active
        ? "bg-pink-600 text-white border-pink-600 shadow"
        : "bg-white/70 backdrop-blur border-slate-200 hover:bg-white")
    }
  >
    {children}
  </button>
);

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-16">
    <div className="max-w-6xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-2 text-slate-600"
        >
          {subtitle}
        </motion.p>
      )}
      <div className="mt-8">{children}</div>
    </div>
  </section>
);

const ProjectCard = ({ p }) => (
  <motion.a
    href={p.repo}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group block rounded-2xl border border-slate-200 bg-white/70 backdrop-blur hover:bg-white hover:shadow-xl transition overflow-hidden"
  >
    <div className="p-5">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold text-lg group-hover:text-pink-700 transition">
          {p.title}
        </h3>
        <span className="text-xs px-2 py-1 rounded-full bg-pink-50 text-pink-700 border border-pink-200">GitHub</span>
      </div>
      <p className="mt-2 text-slate-600 text-sm">{p.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-full border bg-white text-slate-700"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.a>
);

export default function KarlaPortfolio() {
  const [filter, setFilter] = useState("All");
  const [q, setQ] = useState("");

  const projects = useMemo(() => {
    return ALL_PROJECTS.filter((p) => {
      const passTag = filter === "All" || p.tags.includes(filter);
      const passQ = (p.title + p.summary + p.tags.join(" ")).toLowerCase().includes(q.toLowerCase());
      return passTag && passQ;
    });
  }, [filter, q]);

  return (
    <div className="min-h-screen bg-pink-100 text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b">
        <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="#top" className="font-bold tracking-tight">
            <span className="text-pink-700">Karla</span> • Portfolio
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-pink-700">Services</a>
            <a href="#projects" className="hover:text-pink-700">Projects</a>
            <a href="#skills" className="hover:text-pink-700">Skills</a>
            <a href="#contact" className="hover:text-pink-700">Contact</a>
          </div>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm rounded-full border px-3 py-1 hover:bg-pink-50"
          >
            GitHub
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
          {/* soft glow */}
          <div className="w-[40rem] h-[40rem] bg-pink-300/50 blur-3xl rounded-full absolute -top-40 -left-20" />
          <div className="w-[30rem] h-[30rem] bg-fuchsia-300/40 blur-3xl rounded-full absolute top-10 right-[-6rem]" />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-20">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight"
          >
            Hi, I’m {PROFILE.name}. <span className="text-pink-700">{PROFILE.role}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 max-w-2xl text-slate-700"
          >
            {PROFILE.tagline}
          </motion.p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-2xl bg-pink-600 text-white px-4 py-2 shadow hover:bg-pink-700"
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              Download Résumé
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 hover:bg-white"
              href={`mailto:${PROFILE.email}`}
            >
              Email Me
            </a>
          </div>
          <div className="mt-3 text-sm text-slate-500">{PROFILE.location}</div>
        </div>
      </section>

      {/* Services */}
      <Section
        id="services"
        title="Services"
        subtitle="Ways I can help your team ship high‑quality web software."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((s) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border bg-white/70 backdrop-blur p-5 hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{s.blurb}</p>
              <ul className="mt-3 space-y-1 text-sm list-disc pl-5 text-slate-700">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section
        id="projects"
        title="Projects"
        subtitle="Selected repos that show how I build, test, and document software."
      >
        {/* Filter row */}
        <div className="flex flex-wrap items-center gap-2">
          <input
            type="search"
            placeholder="Search projects…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-full md:w-60 border rounded-xl px-3 py-2 bg-white/80 backdrop-blur"
          />
          <div className="flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <Chip key={t} active={filter === t} onClick={() => setFilter(t)}>
                {t}
              </Chip>
            ))}
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
          {projects.length === 0 && (
            <div className="col-span-full text-sm text-slate-600">
              No matches. Try clearing filters.
            </div>
          )}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills" subtitle="Tech I use day‑to‑day.">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl border bg-white/70 backdrop-blur p-5">
            <h4 className="font-semibold">Frontend</h4>
            <p className="mt-2 text-sm text-slate-700">
              React, Vite, Tailwind, DaisyUI, HTML, CSS, JavaScript (ES6+), Accessibility
            </p>
          </div>
          <div className="rounded-2xl border bg-white/70 backdrop-blur p-5">
            <h4 className="font-semibold">Backend & Data</h4>
            <p className="mt-2 text-sm text-slate-700">
              Node.js, Express, REST, Prisma, Supabase (Auth/DB), Postgres, SQLite
            </p>
          </div>
          <div className="rounded-2xl border bg-white/70 backdrop-blur p-5">
            <h4 className="font-semibold">Workflow</h4>
            <p className="mt-2 text-sm text-slate-700">
              Git & GitHub (feature → develop → main), PR reviews, Postman, README docs, Screenshots
            </p>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        title="Let’s work together"
        subtitle="Tell me about your project — I’ll reply with next steps and an estimate."
      >
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="rounded-2xl border bg-white/70 backdrop-blur p-5">
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-2 text-sm text-slate-700 space-y-1">
              <li>
                Email: {" "}
                <a className="text-pink-700 underline" href={`mailto:${PROFILE.email}`}>
                  {PROFILE.email}
                </a>
              </li>
              <li>
                GitHub: {" "}
                <a className="text-pink-700 underline" href={PROFILE.github} target="_blank" rel="noreferrer">
                  {PROFILE.github}
                </a>
              </li>
              {PROFILE.linkedin !== "#" && (
                <li>
                  LinkedIn: {" "}
                  <a className="text-pink-700 underline" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                    {PROFILE.linkedin}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <form
            className="lg:col-span-2 rounded-2xl border bg-white/70 backdrop-blur p-5 grid grid-cols-1 md:grid-cols-2 gap-3"
            action={`mailto:${PROFILE.email}`}
            method="post"
            encType="text/plain"
          >
            <input
              required
              name="name"
              placeholder="Your name"
              className="border rounded-xl px-3 py-2 bg-white/80"
            />
            <input
              required
              name="email"
              type="email"
              placeholder="Your email"
              className="border rounded-xl px-3 py-2 bg-white/80"
            />
            <input
              name="subject"
              placeholder="Subject"
              className="border rounded-xl px-3 py-2 bg-white/80 md:col-span-2"
            />
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Project details…"
              className="border rounded-xl px-3 py-2 bg-white/80 md:col-span-2"
            />
            <button
              type="submit"
              className="md:col-span-2 rounded-2xl bg-pink-600 text-white px-4 py-2 hover:bg-pink-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-10 border-t">
        <div className="max-w-6xl mx-auto px-4 text-sm text-slate-600 flex flex-wrap items-center justify-between gap-2">
          <div>
            © {new Date().getFullYear()} {PROFILE.name}. Built with React + Tailwind.
          </div>
          <div className="flex items-center gap-3">
            <a href="#services" className="hover:text-pink-700">Services</a>
            <a href="#projects" className="hover:text-pink-700">Projects</a>
            <a href="#contact" className="hover:text-pink-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

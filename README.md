# Karla_L_Portfolio-
# Karla Lewis – Developer Portfolio

A responsive developer portfolio built with **React**, **Vite**, and **Tailwind CSS** to showcase my projects from The Knowledge House and my personal work.  

The site highlights my services, selected projects, technical skills, and an easy way to contact me or download my résumé.

> 🔗 **Live Site:** _ https://karlalewportfolio.netlify.app
> 🎥 **Demo Video:** _[Watch the demo] ./screenrecording.jpeg

---

## ✨ Features

- **Hero Section**
  - Intro with my name, role, and a short tagline.
  - Buttons to **download my résumé** and **email me** directly.
  - Location info and soft background glow.

- **Floating Profile Photo**
  - Circular photo in the top-right corner.
  - Soft pink glow, subtle hover animation, and pulse ring for a modern aesthetic.

- **Services Section**
  - Cards describing how I can help a team:
    - Frontend Development
    - Backend APIs
    - Database & DevOps
    - Team Workflow / Git practices

- **Projects Section**
  - Filterable project grid with:
    - **Search bar** (filters by title, summary, tags).
    - **Tag chips** (Frontend, Backend, Full-Stack, React, API, etc.).
    - Each card links directly to the GitHub repo.
  - Includes work such as:
    - SceneIt – Final Group Project
    - Team TV Show Website
    - Donezo Full-Stack Productivity App
    - Intro to Supabase & Prisma
    - U.S. Public Library Database
    - Star Wars Character Search
    - Disney Final Project
    - KarlaLBoxingGame – Boxing Game Project

- **Skills Section**
  - Highlights:
    - **Frontend:** React, Vite, Tailwind, DaisyUI, HTML, CSS, JS, Accessibility
    - **Backend & Data:** Node, Express, REST, Prisma, Supabase, Postgres, SQLite
    - **Workflow:** Git branching (feature → develop → main), PRs, Postman, documentation

- **Contact Section**
  - Contact card with:
    - Email
    - GitHub
    - LinkedIn
  - Simple form that uses `mailto:` to send me a message.

- **Résumé Support**
  - Résumé placed in the `public/` folder and linked throughout the UI (hero button, nav/footer if desired).

---

## 🧰 Tech Stack

- **Frontend Framework:** React (via Vite)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (and utility classes)
- **Animation:** Framer Motion
- **Deployment:** Netlify (planned)
- **Language:** JavaScript (ES6+)

---

## 📂 Project Structure

```bash
karla-portfolio/
├── public/
│   ├── karla-profile.jpeg     # Profile photo used in the header
│   ├── resume.pdf             # My résumé (served from /resume.pdf)
│   └── favicon, etc.
├── src/
│   ├── App.jsx                # Root app component
│   ├── main.jsx               # Entry point
│   ├── index.css              # Global styles
│   └── KarlaPortfolio.jsx     # Main portfolio layout + sections
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md


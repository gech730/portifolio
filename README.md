# Getacher Kifilie — Personal Portfolio

> AI Enthusiast · Full Stack Developer · CS Student

A modern, futuristic developer portfolio built with React and Vite. Features a matrix-style animated background, smooth scroll animations, dark/light theme, and a fully functional contact form.

---

## Live Sections

| Section | Description |
|---------|-------------|
| **Hero** | Typing animation cycling through identity lines with a cyan → purple gradient name |
| **About** | Profile photo with AI-themed frame — radar rings, scan line, orbit tech tags |
| **Skills** | Grouped skill cards: Frontend, Backend & Database, Tools |
| **Projects** | 6 project cards with tech badges, GitHub and live demo links |
| **Resume** | Timeline-based experience, education, certifications + PDF download |
| **Contact** | EmailJS-powered contact form with live send status |

---

## Tech Stack

**Frontend**
- React 19
- React Router DOM 7
- Framer Motion — scroll-triggered animations
- Lucide React — icons

**Styling**
- Pure CSS with CSS custom properties (no CSS framework)
- Dark / Light theme via `data-theme` attribute
- Color system: `#0B0F19` bg · `#06B6D4` cyan · `#8B5CF6` purple

**Background Animation**
- Canvas API — 4 layered effects:
  - Perspective scrolling grid
  - Matrix code rain (binary + hex + katakana + code symbols)
  - Ambient glow orbs (cyan + purple)
  - Floating code snippets (`async/await`, `∇loss`, `git push`, …)

**Email**
- EmailJS (`@emailjs/browser`) — no backend needed

**Build**
- Vite 6

---

## Getting Started

```bash
# install dependencies
npm install

# start dev server
npm run dev

# production build
npm run build

# preview production build
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── AnimatedBackground.jsx  # Canvas background (matrix + grid + orbs)
│   ├── Navbar.jsx
│   ├── Hero.jsx                # Typing animation
│   ├── About.jsx               # AI-themed photo frame
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Resume.jsx
│   ├── Contact.jsx             # EmailJS form
│   └── Footer.jsx
├── context/
│   └── ThemeContext.jsx        # Dark / light theme provider
├── pages/
│   └── Home.jsx
├── styles/
│   ├── theme.css               # CSS variables + global reset
│   ├── navbar.css
│   ├── hero.css
│   ├── about.css
│   ├── skills.css
│   ├── projects.css
│   ├── resume.css
│   ├── contact.css
│   └── footer.css
└── assets/
    └── myphoto.jpg
```

---

## Features

- **Theme toggle** — dark/light mode persisted in `localStorage`
- **Responsive** — mobile-first, tested down to 375px
- **Smooth scroll** — all nav links scroll to sections
- **Staggered animations** — Framer Motion `useInView` triggers on scroll
- **Contact form** — real email delivery via EmailJS, no backend
- **Resume download** — links to `/public/resume.pdf`

---

## Contact

**Getacher Kifilie**
- Email: getacherkifilie23@gmail.com
- GitHub: [github.com/gech730](https://github.com/gech730)
- LinkedIn: [linkedin.com/in/getacher-kifilie-2a33a9362](https://www.linkedin.com/in/getacher-kifilie-2a33a9362/)

---

*Built and designed by Getacher Kifilie*

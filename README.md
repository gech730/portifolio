# Getacher Kifilie — Personal Portfolio

> AI Enthusiast · Full Stack Developer · CS Student

A modern, professional developer portfolio built with React and Vite. Features a sleek blue-black design, smooth CSS animations, dark/light theme toggle, and a fully functional contact form.

---

## Live Sections

| Section | Description |
|---------|-------------|
| **Hero** | Typing animation cycling through identity lines with a professional blue gradient name |
| **About** | Profile photo with AI-themed frame — radar rings, scan line, orbit tech tags |
| **Skills** | Grouped skill cards: Frontend, Backend & Database, Tools |
| **Projects** | 6 project cards with tech badges, GitHub and live demo links |
| **Resume** | Timeline-based education + CV download |
| **Contact** | EmailJS-powered contact form with live send status | add some thing to include sender email address because still , i can not get sender address

---

## Tech Stack

**Frontend**
- React 19
- React Router DOM 7
- Lucide React — icons

**Styling**
- Pure CSS with CSS custom properties (no CSS framework)
- Dark / Light theme via `data-theme` attribute
- Professional blue-black color system: `#0f172a` bg · `#1e40af` blue · `#374151` gray

**Background Animation**
- Canvas API — 4 layered effects:
  - Perspective scrolling grid
  - Matrix code rain (binary + hex + katakana + code symbols)
  - Ambient glow orbs (blue + gray)
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
│   ├── Navbar.jsx
│   ├── Hero.jsx                # Typing animation
│   ├── About.jsx               # Profile section
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

- **Professional Design** — Clean blue-black color scheme for a modern, corporate look
- **Theme toggle** — dark/light mode persisted in `localStorage`
- **Responsive** — mobile-first, tested down to 375px
- **Smooth CSS animations** — Pure CSS animations for performance and modern feel
- **Contact form** — real email delivery via EmailJS, no backend
- **CV download** — links to `/public/GetacherCV.pdf`

---

## Contact

**Getacher Kifilie**
- Email: getacherkifilie23@gmail.com
- GitHub: [github.com/gech730](https://github.com/gech730)
- LinkedIn: [linkedin.com/in/getacher-kifilie-2a33a9362](https://www.linkedin.com/in/getacher-kifilie-2a33a9362/)

---

*Built and designed by Getacher Kifilie*

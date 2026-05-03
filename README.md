# Getacher Kifilie — Personal Portfolio

> Full Stack Developer (MERN) · AI Enthusiast · CS Student

A modern, professional developer portfolio built with **React + Vite**. Features a dark/light theme toggle, smooth animations, scroll-reveal effects, real skill icons, clickable project images, and a fully functional EmailJS contact form.

---

## 🔗 Live Demo

[https://portifolio-five-rosy-72.vercel.app/](https://portifolio-five-rosy-72.vercel.app/)

---

## 📄 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Circular profile image with rotating gradient ring + floating animation, typing animation cycling through roles, CTA buttons |
| **About** | Landscape photo (image left / top on mobile), bio text, stats row, 4 info cards with scroll-reveal |
| **Skills** | Real brand icons (devicons CDN) grouped into Frontend, Backend, Database, Tools — hover effects |
| **Projects** | 3 real project cards — clickable images open live demo, GitHub + Live Demo buttons, tech badges |
| **CV** | Education timeline + prominent Download CV button (PDF) |
| **Contact** | EmailJS-powered form (name, email, subject, message), functional email/phone/location links, social icons |
| **Footer** | Social links, copyright, scroll-to-top button |

---

## 🛠 Tech Stack

**Frontend**
- React 19 (functional components + hooks)
- React Router DOM 7
- Lucide React — icons
- Framer Motion — installed (available for animations)

**Styling**
- Pure CSS with CSS custom properties — no CSS framework
- Dark / Light theme via `data-theme` attribute on `<html>`
- Theme persisted in `localStorage`
- Glassmorphism cards, gradient text, animated rings

**Animations**
- CSS keyframe animations (fade-in-up, float, ring-spin, blob-drift)
- IntersectionObserver scroll-reveal on About and Skills sections
- Typing animation (custom hook-based)
- Scroll progress bar at top of page

**Email**
- EmailJS (`@emailjs/browser`) — no backend needed
- Hidden `reply_to` and `full_message` fields ensure sender email is captured

**Build**
- Vite 6

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Sticky navbar, active section, mobile menu, theme toggle
│   ├── Hero.jsx          # Circular photo, typing animation, scroll progress bar
│   ├── About.jsx         # Landscape image, bio, stats, info cards
│   ├── Skills.jsx        # Real brand icons from devicons CDN
│   ├── Projects.jsx      # Clickable project images, GitHub + live links
│   ├── Resume.jsx        # Education timeline, CV download
│   ├── Contact.jsx       # EmailJS form, functional contact details
│   └── Footer.jsx        # Social links, copyright
├── context/
│   └── ThemeContext.jsx  # Dark / light theme provider
├── pages/
│   └── Home.jsx
├── styles/
│   ├── theme.css         # CSS variables, global reset, shared utilities
│   ├── navbar.css
│   ├── hero.css
│   ├── about.css
│   ├── skills.css
│   ├── projects.css
│   ├── resume.css
│   ├── contact.css
│   └── footer.css
└── assets/
    ├── myphoto.jpg
    ├── portfolio.png
    ├── foodDelivery.png
    └── smartBDU.png

public/
└── GetacherCV.pdf
```

---

## ✨ Key Features

- **Dark / Light mode** — toggle visible on all screen sizes including mobile
- **Circular hero image** — rotating gradient ring, floating animation, hover zoom
- **Scroll progress bar** — gradient bar at top tracks reading position
- **Scroll-reveal animations** — sections animate in as you scroll
- **Real skill icons** — official brand logos via devicons CDN
- **Clickable project images** — hover overlay shows "View Live", click opens live demo
- **Fully responsive** — mobile-first, tested from 375px to 1440px+
- **Functional contact details** — email, phone, and location are all clickable links
- **EmailJS integration** — sender email captured via `reply_to` hidden field

---

## 📧 EmailJS Template Setup

To receive the sender's email address in your inbox, update your EmailJS template body to:

```
From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

Set the **Reply-To** field in your template to `{{reply_to}}` so you can reply directly to the sender.

---

## 📬 Contact

**Getacher Kifilie**
- Email: [getacherkifilie23@gmail.com](mailto:getacherkifilie23@gmail.com)
- Phone: +251 970 143 109
- GitHub: [github.com/gech730](https://github.com/gech730)
- LinkedIn: [linkedin.com/in/getacher-kifilie-2a33a9362](https://www.linkedin.com/in/getacher-kifilie-2a33a9362/)

---

*Designed & Built by Getacher Kifilie*

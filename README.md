# Mohd Farhan — 3D Engineering Portfolio v2

This version is intentionally different from the first portfolio: it uses a **3D/WebGL engineering-lab concept** rather than a conventional glassmorphism portfolio.

---

## 🔗 Live Demo

👉 [Click here to visit the website](https://github.com/ixmartfarhan/ixmartfarhan.io/)

---


## Stack

- React + Vite
- Three.js
- React Three Fiber
- Drei
- Framer Motion
- Lucide React
- Modern CSS

## Features

- Interactive WebGL hero core
- Drag-to-rotate 3D scene
- Animated stars and 3D orbital rings
- Reduced-motion support
- Live GitHub public-repository/follower stats
- Project filtering and search
- Project case-study modal
- Command palette (`Ctrl/Cmd + K`)
- Dark/light theme
- Responsive navigation
- Interactive capability/technology orbit
- Learning/engineering trajectory
- Working mailto contact workflow
- Clipboard email action
- Resume download
- Responsive mobile layout
- SEO/meta description
- No paid backend required

## Run

```bash
npm install
npm run dev
```

Production:

```bash
npm run build
npm run preview
```

## Customize

The main content is near the top of `src/main.jsx`:
- `me`
- `projects`
- `skillGroups`

Replace `public/assets/profile.jpg` with a higher-resolution professional portrait when available.

Project GitHub actions intentionally point to your GitHub profile because individual repository URLs were not provided.

## Deploy

For Vercel/Netlify:
- Build: `npm run build`
- Output: `dist`

For GitHub Pages, use a Vite-compatible Pages deployment workflow.

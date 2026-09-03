# Ahammed Istiak Alam Efty — Developer Portfolio

Official personal portfolio website for **Ahammed Istiak Alam Efty**, a Computer Science & Engineering student and Software Developer. Built with **React**, **Vite**, and **Tailwind CSS**.

- **GitHub Profile**: [https://github.com/istiakalam-efty](https://github.com/istiakalam-efty)
- **LinkedIn**: [https://www.linkedin.com/in/ahammed-istiak-alam-efty-6aa523329/](https://www.linkedin.com/in/ahammed-istiak-alam-efty-6aa523329/)
- **X (Twitter)**: [https://x.com/efty19681972](https://x.com/efty19681972)

---

## 🌟 Key Features

- **Pure Client-Side Frontend**: Zero backend or database required; fully static, hyper-fast, and secure.
- **Dark / Light Theme System**: Complete theme toggle with `localStorage` persistence and automatic system `prefers-color-scheme` detection.
- **Centralized Data Architecture**: All content, project specifications, technical skills, and social links are managed from `src/data/portfolio.js`.
- **Interactive Project Filtering**: Instant filtering across Web Development, Software Development, Database, Compiler Design, and Academic categories.
- **Accessible Contact Form**: Real-time client-side field validation, accessible ARIA error messages, and immediate mail client dispatching.
- **Responsive Layout**: Designed for seamless usability across screens from 360px mobile viewports to ultra-wide displays.
- **SEO & Social Share Ready**: Preconfigured OpenGraph metadata, Twitter cards, and structured semantic HTML5.

---

## 🛠️ Technology Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: JavaScript (ESM)
- **Deployment Targets**: Render, Vercel, Netlify, GitHub Pages

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume/
│       └── README.md
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SkillCard.jsx
│   │   └── SocialLinks.jsx
│   ├── data/
│   │   └── portfolio.js       <-- Centralized Portfolio Data
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── GitHubSection.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── Services.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm or yarn

### Installation
```bash
# Navigate into the project folder
cd portfolio

# Install dependencies
npm install
```

### Running Locally
```bash
npm run dev
```
Open your browser and navigate to the local URL (usually `http://localhost:5173`).

---

## 📦 Production Build

```bash
npm run build
```
The optimized, static output files will be compiled into the `dist/` directory, ready to be served by any static web hosting provider.

You can preview the production build locally with:
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel
1. Push your code to a GitHub repository under your account: `https://github.com/istiakalam-efty/<repo-name>`.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Set Framework Preset to **Vite**.
5. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository on [Netlify](https://www.netlify.com/).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy**.

### Deploy to Render (Static Site)
1. In the [Render Dashboard](https://dashboard.render.com/), create a new **Static Site**.
2. Connect your repository.
3. Build command: `npm run build`
4. Publish directory: `dist`

---

## 📝 Customization & Updating Content

To update personal information, education, experience, or add new projects, simply edit:
👉 `src/data/portfolio.js`

- **Adding a Resume**: Save your PDF file as `public/resume/Ahammed-Istiak-Alam-Efty-CV.pdf` and change `resumeAvailable: true` in `src/data/portfolio.js`.
- **Adding Projects**: Add new project objects to the `projects` array in `portfolio.js` with corresponding categories and features.

---

## 📄 License & Copyright

© 2026 Ahammed Istiak Alam Efty. All Rights Reserved.

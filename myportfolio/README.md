# Oshadhi Goonewardena - Portfolio

A responsive developer portfolio built with React and Vite. The site presents professional experience, technical skills, projects, certifications, and contact information in a dark, animated interface.

## Features

- Responsive single-page portfolio layout
- Hero, About, Skills, Projects, Certifications, and Contact sections
- Scroll reveal and fade-in animations
- Project cards with technology tags, metrics, and GitHub links
- Downloadable resume
- Vercel-ready deployment configuration

## Tech Stack

- React 19
- Vite
- Tailwind CSS 4
- Lucide React and React Icons
- ESLint

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
git clone https://github.com/goagoonewardena/portfolio.git
cd portfolio/myportfolio
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```text
myportfolio/
├── public/                 # Portfolio images, certificates, and resume
├── src/
│   ├── components/         # Layout, sections, UI, and animations
│   ├── data/               # Projects, skills, and services content
│   ├── hooks/              # Reusable scroll-related hooks
│   ├── utils/              # Shared constants and helpers
│   ├── App.jsx             # Main page composition
│   └── main.jsx            # Application entry point
├── index.html
├── package.json
└── vercel.json
```

## Updating Content

- Edit project information in `src/data/projects.js`.
- Edit skills and services in the corresponding files under `src/data/`.
- Add or replace static images in `public/images/`.
- Update the resume at `public/Oshadhi_Goonewardena_Resume.pdf`.

## Deployment

Build the project with:

```bash
npm run build
```

The generated files are placed in `dist/`. The included `vercel.json` supports deploying the single-page application to Vercel.

## License

This project is a personal portfolio. Please contact the owner before reusing its content, images, or personal information.

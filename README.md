# PIYVIAN TECHNOLOGIES — Company Website

**Engineering What's Next.**

A modern, responsive company website for PIYVIAN TECHNOLOGIES, showcasing its web development, AI solutions, and business automation services.

## Overview

This project is the official website frontend for PIYVIAN TECHNOLOGIES. It introduces the company, highlights its services, and allows potential clients to submit project inquiries through a contact form.

The website is built with React and Vite, with custom CSS for styling and responsive layouts.

## Features

- **Responsive design** — layouts for desktop and mobile devices.
- **Company branding** — custom logo, favicon, and dark technology-inspired visual theme.
- **Hero section** — company tagline and calls to action.
- **About section** — company approach and engineering principles.
- **Services section** — website development, AI tools and agents, and business automation.
- **Contact form** — collects a visitor's name, email, requested service, and project description.
- **Email notifications** — contact submissions are handled by Formspree.
- **Navigation and footer** — links to the main website sections and contact options.

## Tech Stack

| Technology | Purpose |
|---|---|
| React | Building reusable UI components |
| JavaScript | Application logic |
| Vite | Development server and production build |
| HTML | Website structure through JSX |
| CSS | Styling, layouts, and responsiveness |
| Formspree | Contact form submissions and email notifications |
| Git and GitHub | Version control and source code hosting |

## Getting Started

### Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/)
- npm, included with Node.js
- [Git](https://git-scm.com/)

### Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate to the project directory:

```bash
cd piyvian-website
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed in the terminal, usually `http://localhost:5173/`.

## Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Generate the production build |
| `npm run preview` | Preview the production build locally |

Production files are generated in the `dist/` directory.

## Contact Form

The website uses Formspree to process contact form submissions without a custom backend.

The form collects:
- Name
- Email address
- Requested service
- Project description

To configure the integration, verify the Formspree endpoint in `src/App.jsx` and configure the recipient email in the Formspree dashboard.

Test a submission before deploying changes to production.

## Project Structure

```text
piyvian-website/
├── public/
│   ├── brand/
│   │   ├── piyvian-logo-dark.svg
│   │   ├── piyvian-logo-light.svg
│   │   └── piyvian-icon.svg
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## Brand Identity

- **Company:** PIYVIAN TECHNOLOGIES
- **Tagline:** Engineering What's Next.
- **Visual direction:** Modern, minimal, technology-focused.
- **Core colors:** Midnight navy, technology blue, purple, teal, and white.

## Production Build

Generate an optimized production build:

```bash
npm run build
```

Preview the generated build locally:

```bash
npm run preview
```

The `dist/` directory contains the files intended for static hosting.

## Deployment

The project can be deployed to a static hosting platform such as Vercel or Netlify.

For a typical Vite deployment:

- Build command: `npm run build`
- Output directory: `dist`

Configure the hosting provider to build from the GitHub repository.

## Future Improvements

- Refine the design against the Figma prototype.
- Add stronger form feedback and submission handling.
- Improve accessibility and search engine optimization.
- Add project case studies and portfolio examples.
- Connect a custom domain and business email.

## License

All rights to the PIYVIAN TECHNOLOGIES brand assets and website content are reserved by their respective owner. Update this section if the project is released under a specific open-source license.

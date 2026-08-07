# Jessica Goel — Personal Portfolio

Production-ready personal portfolio for **Jessica Goel**, a Computer Science student at UBC Okanagan focused on full-stack development, AI, machine learning, data analytics, and mobile applications.

**Live site:** [https://jessica545.github.io](https://jessica545.github.io)

## Screenshot

![Portfolio screenshot placeholder](public/images/profile/jessica-goel.jpg)

> Replace this placeholder with a real homepage screenshot when available.

## Features

- Responsive single-page portfolio (mobile → desktop)
- Light / dark themes with system preference + localStorage persistence
- Structured TypeScript content files for easy updates
- Five featured projects with accessible detail modal
- Keyboard-accessible project filters
- Contact form with Formspree / EmailJS / mailto configuration
- SEO metadata + Person/WebSite structured data
- Vitest + React Testing Library coverage
- GitHub Pages, Vercel, and Netlify deployment configs

## Technology stack

- React + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React
- Vitest + React Testing Library

## Local setup

```bash
git clone https://github.com/jessica545/jessica545.github.io.git
cd jessica545.github.io
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Available scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start Vite development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build |
| `npm run test` | Run unit/UI tests once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Run Oxlint |
| `npm run deploy` | Build production assets into the `docs/` folder for GitHub Pages |

## Folder structure

```text
src/
  components/     # UI sections and reusable primitives
  data/           # Editable portfolio content
  hooks/          # Theme, scroll, focus, motion helpers
  types/          # Shared TypeScript models
  utils/          # Constants
  test/           # Vitest setup + tests
public/
  images/         # Profile + project placeholders
  Jessica-Goel-Resume.pdf
```

## Content customization

Edit these files:

| File | What to update |
| --- | --- |
| `src/data/personal.ts` | Name, links, email, resume path, about copy |
| `src/data/projects.ts` | Project details, feature statuses, URLs |
| `src/data/skills.ts` | Skill categories |
| `src/data/experience.ts` | Work history + dates |
| `src/data/education.ts` | Education, coursework, awards |
| `src/data/leadership.ts` | Leadership roles + dates |
| `src/data/about.ts` | Highlight cards + statistics |

### Updating projects

1. Open `src/data/projects.ts`
2. Update copy, technologies, contributions, and feature lists
3. Only add a `demoUrl` / `githubUrl` when a real public link exists
4. Keep SpendSnap planned features under `plannedFeatures`

### Replacing images

1. Profile: `public/images/profile/jessica-goel.jpg` (or `.webp`)
2. Projects:
   - `public/images/projects/canvas-ai-assistant/`
   - `public/images/projects/spendsnap/`
   - `public/images/projects/sleep-health-analytics/`
   - `public/images/projects/buddycart/`
3. Update `image` / `imageAlt` fields in `projects.ts` and `personal.ts`

### Resume setup

1. Place your PDF at `public/Jessica-Goel-Resume.pdf`
2. Confirm `resumePath` in `src/data/personal.ts`
3. Resume links open in a new tab; the site still works if the file is temporarily missing

### Contact form setup

Copy `.env.example` to `.env.local` and choose a provider:

```bash
VITE_CONTACT_PROVIDER=mailto
# or formspree / emailjs
```

- **mailto (default):** opens the visitor’s email client
- **Formspree:** set `VITE_FORMSPREE_ENDPOINT`
- **EmailJS:** set service/template/public key env vars

Never commit private API secrets.

### SEO customization

- Title/description constants live in `src/data/personal.ts`
- Canonical/site URL placeholders are in the same file
- Runtime meta + JSON-LD are managed by `src/components/seo/Seo.tsx`
- Static fallbacks are in `index.html`

## Deployment

### GitHub Pages (current)

This repository is a user site: `jessica545.github.io` → `https://jessica545.github.io`.

Because this is a **user site**, Vite `base` stays `/` in `vite.config.ts`.

#### Recommended — publish from `main` `/docs`

1. Build into `docs/`:

```bash
npm run deploy
```

2. Commit and push the updated `docs/` folder to `main`
3. In **Settings → Pages**, set source to **Deploy from a branch**
   - Branch: `main`
   - Folder: `/docs`

#### Optional — GitHub Actions

Workflow file: `.github/workflows/deploy.yml`

1. In **Settings → Pages**, set source to **GitHub Actions**
2. Approve the `github-pages` environment if prompted
3. Push to `main` to build and deploy

If using a **project site** instead (`username.github.io/repo-name`), change:

```ts
// vite.config.ts
base: '/repo-name/'
```

### Vercel

1. Import the repository in Vercel
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

`vercel.json` includes SPA-style rewrites.

### Netlify

1. Import the repository in Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

`netlify.toml` is included.

## Accessibility notes

- Semantic landmarks and heading hierarchy
- Visible focus styles
- Keyboard-accessible navigation, filters, and modal
- Escape closes the project modal
- Focus trap + body scroll lock while modal is open
- `prefers-reduced-motion` respected for animations
- Descriptive labels for icon links and buttons

## Testing

```bash
npm run test
```

Covered behaviors include navigation, mobile menu, theme persistence, project rendering/filtering, modal Escape handling, contact validation, resume link presence, and absence of fake demo buttons.

## License

Personal portfolio project for Jessica Goel. All rights reserved unless otherwise noted.

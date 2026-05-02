# Developer Model Management Dashboard

## Project Overview
A React 18 + TypeScript + Vite SPA exported from Figma Make. This is a medical AI model management dashboard for a developer/admin persona.

## Architecture
- **Frontend**: React 18 + TypeScript + Vite (SPA)
- **Styling**: Tailwind CSS v4 + CSS custom properties (design tokens in `src/styles/theme.css`)
- **Routing**: react-router v7 with 4 pages
- **Data**: Static mock data only — no backend or API

## Pages / Routes
- `/` → `DashboardPage` — model grid with status sorting, upload modal, request notifications
- `/model/:id` → `ModelDetailsPage` — per-model metrics, tabs (General, Errors, Jobs)
- `/generate-endpoint` → `GenerateEndpointPage` — approve access requests and generate API endpoints
- `/jobs` → `JobsPage` — training/inference job queue

## Key Directories
- `src/app/components/` — domain components
- `src/app/components/ui/` — shadcn/ui primitives (Radix-based)
- `src/app/data/` — static mock data (`models.ts`, `jobs.ts`)
- `src/app/pages/` — page components
- `src/app/providers/` — ThemeProvider (dark mode support)
- `src/assets/` — static assets (images, SVGs)
- `src/styles/` — global styles and design tokens

## Development
```bash
npm run dev    # Start dev server on port 5000
npm run build  # Production build
```

## Special Conventions
- Images use `figma:asset/` import protocol (resolved by custom Vite plugin)
- `@` alias resolves to `src/`
- All spacing must be multiples of 8
- Dark mode via `.dark` class (ThemeProvider wraps the app)

## Deployment
- Type: Static site
- Build: `npm run build`
- Public Dir: `dist`

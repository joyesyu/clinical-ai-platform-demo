# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm i          # Install dependencies
npm run dev    # Start development server (Vite)
npm run build  # Production build
```

There is no test runner or linter configured in this project.

## Architecture

This is a **React 18 + TypeScript + Vite** SPA exported from Figma Make. It is a medical AI model management dashboard for a developer/admin persona.

### Routing (react-router v7)

Four pages via `src/app/routes.ts`:
- `/` → `DashboardPage` — model grid with status sorting, upload modal, request notifications
- `/model/:id` → `ModelDetailsPage` — per-model metrics, tabs (General, Errors, Jobs)
- `/generate-endpoint` → `GenerateEndpointPage` — approve access requests and generate API endpoints
- `/jobs` → `JobsPage` — training/inference job queue

### Data layer

All data is **static mock data** in `src/app/data/`:
- `models.ts` — exports `models: Model[]` and `modelRequests: ModelRequest[]`. The `Model` type (defined in `src/app/components/ModelCard.tsx`) is the central domain type. Model status values: `active | in_diagnosis | review | disabled`.
- `jobs.ts` — job queue data

There is no API, backend, or state management library. All mutable state is local React `useState`.

### Styling

- **Tailwind CSS v4** (via `@tailwindcss/vite`) — utility classes
- **CSS custom properties** in `src/styles/theme.css` — the design token system. Always prefer these tokens over raw values:
  - Typography: `--text-sm` (12px), `--text-base` (14px), `--text-md` (16px), `--text-18` (18px), `--text-lg` (24px)
  - Text colors: `--text-title`, `--text-primary`, `--text-secondary`, `--text-tertiary`
  - Spacing: 4pt grid — `--spacing-4` through `--spacing-48`, `--spacing-card-gap` (16px)
  - Semantic colors: `--primary` (#1890ff), `--destructive` (#ff4d4f), `--border` (#d9d9d9)
  - Radius: `--radius-button` (2px), `--radius-card` (2px), `--radius-badge` (100px)
- Dark mode is supported via `.dark` class (ThemeProvider wraps the app)
- Font: **Roboto** (body/headings), **Roboto Mono** (badges)

### Component conventions

- `src/app/components/ui/` — shadcn/ui primitives (Radix-based). Use these for low-level interactive elements.
- `src/app/components/` — domain components. `DeveloperModelCard` is the primary card shown on the dashboard (not `ModelCard`, which is a simpler variant).
- Images are imported with the `figma:asset/` protocol (e.g. `import img from "figma:asset/abc123.png"`). This is a Figma Make convention — don't change these imports.
- `@` alias resolves to `src/`.

### Spacing System

- **All spacing values must be multiples of 8** — no odd numbers, no decimals
- Allowed values (examples): 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 64
- **Card internal padding: `px-[24px] py-[16px]`** (24px horizontal, 16px vertical)
- Card-to-card gap: 16px

### Design guidelines (from `guidelines/Guidelines.md`)

- Card internal padding: 24px; card-to-card gap: 16px
- Minimum font size: 12px
- Corner radius: cards 8px (design intent), buttons/inputs 4px, badges pill (but theme.css sets `--radius` to 2px — follow theme.css for code)
- Don't use a dropdown if there are 2 or fewer options

### Typography — Line Height Rules

Always pair font size with the correct line height:

| Font Size | Line Height |
|-----------|-------------|
| 12px      | 20px        |
| 14px      | 22px        |
| 16px      | 24px        |
| 20px      | 28px        |
| 24px      | 32px        |
| 30px      | 38px        |
| 38px      | 46px        |
| 46px      | 54px        |
| 56px      | 64px        |
| 68px      | 76px        |

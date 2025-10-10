# Antonio Hernández Cervantes — Personal Site

Personal portfolio built with [Next.js](https://nextjs.org), Tailwind CSS, and the App Router. The application now lives at the repository root to match the structure of other projects in the ecosystem.

## Getting started

Install dependencies and start the local development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Most pages are server components; edit files inside `app/` or `components/` and the browser will automatically refresh.

## Available scripts

| Command            | Description                                |
| ------------------ | ------------------------------------------ |
| `pnpm dev`         | Start the local dev server.                |
| `pnpm lint`        | Run ESLint + Prettier checks.              |
| `pnpm typecheck`   | Run TypeScript type checking.              |
| `pnpm test`        | Execute the Jest test suite.               |
| `pnpm format`      | Format the codebase with Prettier.         |
| `pnpm build`       | Create an optimized production build.      |
| `pnpm start`       | Serve the production build.                |

## Project structure

- `app/` – App Router routes and page layouts.
- `components/` – Reusable UI building blocks.
- `data/` – Structured content powering sections of the site.
- `public/` – Static assets (images, favicons, etc.).
- `tailwind.config.ts`, `postcss.config.mjs` – Styling configuration.
- `tsconfig.json` – TypeScript configuration for the workspace.

## Deployment

The project is prepared for deployment on [Vercel](https://vercel.com/). Connect the repository to Vercel and it will handle builds and previews automatically on every push.

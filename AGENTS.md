# AntonioHC – Agent Handbook

## Project scope

- Single Next.js application that lives at the repository root.
- Target: high-quality personal portfolio with responsive Tailwind UI and light/dark theming.
- Default package manager: pnpm (lockfile present). Do not replace it.

## Build and quality commands

- Install dependencies: `pnpm install`
- Start dev server: `pnpm run dev`
- Lint: `pnpm run lint` (must pass with no warnings)
- Build: `pnpm run build`
- Preview production build: `pnpm run start`

Run commands from the repository root unless noted otherwise. Never submit work if lint or build fails.

## Code style & design guidelines

- Languages: TypeScript, React (Next.js App Router), Tailwind CSS.
- Formatting: Prettier via Next.js lint pipeline; do not add custom formatters. Ensure every change conforms to prettier and ESLint.
- Components follow a clear separation of concerns and the presentational + hook pattern:
  - UI/rendering in component files under `app/` or `components/` should stay focused on JSX and styling.
  - For interactive components, colocate a hook (e.g., `useFeature.ts`) that exposes exactly two top-level keys—`state` for data (including refs, ids, and derived values) and `actions` for callable handlers.
  - Extract heavy logic into `_helpers/` files once it becomes complex, and cover them with dedicated tests.
  - Place component and helper tests under their respective `__tests__/` directories.
  - Prefer server components for static content and client components only when interactivity is required.
- Maintain consistent Tailwind class ordering (run Prettier) and favor semantic HTML.
- Keep TypeScript strictness; avoid `any` unless justified with an inline comment explaining the constraint.
- Respect accessibility: proper aria-attributes, keyboard navigation, contrast-aware color choices.

## Documentation expectations

- Update `README.md` or relevant docs whenever you introduce new features, scripts, or configuration changes.
- Document new components with clear props descriptions via JSDoc/TSDoc comments when props are non-trivial.
- When adding complex logic, include inline comments explaining intent, not mechanics.

## Testing & validation

- Prioritize linting (`pnpm run lint`) as the linter enforces both ESLint and Prettier rules.
- Execute `pnpm run build` for any change that might affect compilation or routing.
- Add automated tests when introducing logic that can be unit-tested (e.g., data transformers, hooks).

## Security & performance

- Do not introduce server-side secrets or environment variables; the site is static-first.
- Keep client bundles lean: avoid unnecessary dependencies and prefer dynamic imports for heavy client-only modules.
- Validate external links (use `rel="noopener noreferrer"` for new-tab links).

## Git workflow

- Branch names: English kebab-case prefixed with `feature/`, `bugfix/`, `hotfix/`, or `docs/` (e.g., `feature/hero-section-refresh`).
- Commits: follow Conventional Commit style (e.g., `feat: add hero animation`).
- PRs: provide concise summaries, reference related issues, and attach UI screenshots when frontend changes occur.
- Keep branches rebased onto `main`; avoid direct pushes to `main`.

Agents must adhere to these standards for every contribution.

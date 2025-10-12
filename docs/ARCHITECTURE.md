# Architecture Overview

## Philosophy

The application is built with Next.js using the App Router to take advantage of nested layouts, streaming, and server-first rendering. Wherever possible we lean on Server Components to keep the client bundle light and defer interactivity only to the parts of the UI that truly need it. Tailwind CSS powers all styling, enabling a utility-first approach with consistent theming across light and dark modes.

## Directory Structure

- `/app` – Route segments, layouts, and pages implemented with the Next.js App Router. Server Components are the default, with `"use client"` files limited to interactive needs.
- `/components` – Shared UI building blocks. Each component focuses on JSX markup, Tailwind styling, and accessibility concerns.
- `/data` – Static data sources and configuration objects that feed pages and components.
- `/lib` – Framework-agnostic utilities, helpers, and domain logic that can be imported across the app.
- `/public` – Static assets served as-is (images, fonts, favicons, etc.).
- `/styles` – Global stylesheets and Tailwind entrypoints applied across the application.
- `/docs` – Project documentation such as this architecture guide.

## Component Pattern

Components follow a strict separation of responsibilities:

- **`ComponentName.tsx`** (UI) – Contains the presentational React component. It is responsible for describing markup, composing Tailwind classes, and wiring in callbacks exposed by the hook. Business logic should be avoided here.
- **`useComponentName.ts`** (logic) – Encapsulates state management, data fetching, and side effects for its paired UI component. Hooks must return an object with two top-level keys:
  - `state` – All reactive data, memoized values, refs, and derived properties exposed to the component.
  - `actions` – Event handlers and imperative callbacks invoked from the UI layer.

This pattern keeps rendering declarative and testable while isolating complex logic for reuse and easier unit testing. When shared logic grows, move it into `/lib` or colocated `_helpers/` modules and import it into the hook.

## Styling

Tailwind CSS drives all styling. Configuration lives in `tailwind.config.ts`, while global directives and layer definitions reside in `styles/globals.css`. Components compose utility classes directly within JSX, and Prettier ensures consistent class ordering.

## Testing Strategy

Automated tests rely on Jest and React Testing Library. Test files live inside `__tests__/` directories placed next to the components or modules they cover. Hooks and helpers should receive unit coverage where meaningful, and UI components are validated through interaction-focused tests.

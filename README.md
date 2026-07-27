# Security System Checkout

A React + Vite bundle builder for a security-system checkout flow (inspired by Wyze's
store). Users configure cameras, a subscription plan, sensors, and extra protection,
then review a live order summary — all persisted to `localStorage` so the cart survives
a page refresh.

> **Note:** This is a frontend-only prototype. The "checkout" is a UI demonstration —
> there is no backend, payment processing, or order submission.

---

## Tech Stack

| Area | Choice |
| --- | --- |
| Framework | [React 19](https://react.dev) |
| Build tool | [Vite 8](https://vite.dev) |
| Styling | [Tailwind CSS 3](https://tailwindcss.org) + [shadcn/ui](https://ui.shadcn.com) |
| State | [Zustand 5](https://zustand-demo.pmnd.rs) (with `localStorage` persistence) |
| UI primitives | [Radix UI](https://radix-ui.com) (Accordion) |
| Icons | [Lucide React](https://lucide.dev) + inline SVG |
| Linting | ESLint 10 (flat config) |

---

## Prerequisites

- **Node.js 18+** (developed and tested on Node 20.19.5)
- **npm 10+** (tested on npm 11.14.1)

---

## Getting Started

These instructions work from a clean clone.

### 1. Install dependencies

```bash
npm install
```

> A `package-lock.json` is committed, so `npm ci` can be used instead of `npm install`
> for reproducible, deterministic installs in CI.

### 2. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (or the next available port — Vite
auto-increments if 5173 is in use). The app supports Hot Module Replacement (HMR) out
of the box.

### 3. Build for production

```bash
npm run build
```

This produces optimized, minified assets in the `dist/` directory.

### 4. Preview the production build locally

```bash
npm run preview
```

Serves the contents of `dist/` over HTTP so you can sanity-check the production build
before deploying.

### 5. Lint

```bash
npm run lint
```

> ⚠️ **Linting currently fails** — see [Known Issues](#known-issues) below. The build
> and dev server are unaffected.

---

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR. |
| `npm run build` | Build the production bundle into `dist/`. |
| `npm run preview` | Serve the production build locally. |
| `npm run lint` | Run ESLint across the project. |

---

## Project Structure

```
security-system/
├── public/                     # Static assets (favicon, camera/sensor images, icons)
├── src/
│   ├── App.jsx                 # Root component — renders the checkout layout
│   ├── main.jsx                # React entry point (createRoot)
│   ├── index.css               # Tailwind directives + CSS custom properties (theme)
│   ├── Features/
│   │   └── security-checkout/  # The entire checkout feature (feature-sliced)
│   │       ├── Layout/         # Top-level page layout (accordion | summary)
│   │       ├── steps/          # The 4 wizard steps + live checkout summary
│   │       │   ├── select-camera/
│   │       │   ├── select-plan/
│   │       │   ├── select-sensors/
│   │       │   ├── select-extra-protection/
│   │       │   └── checkout/   # Live summary (cameras, sensors, accessories, plan, shipping, total)
│   │       ├── component/      # Shared Accordion component
│   │       ├── data/           # Hardcoded product data (cameras, sensors, plans, accessories)
│   │       └── store/          # Zustand store (useBundleBuilderStore)
│   └── Shared/
│       ├── components/         # Shared UI (shadcn/ui components)
│       └── lib/                # Utilities (e.g. `cn` — clsx + tailwind-merge)
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── tsconfig.json               # IDE support only (noEmit — JS project, not compiled by tsc)
├── components.json             # shadcn/ui configuration
└── package.json
```

### How state flows

1. Product data lives in `src/Features/security-checkout/data/` as plain JS/JSX modules.
2. `useBundleBuilderStore` (Zustand) loads that data, adds `quantity` / `selectedColor`
   fields, and exposes actions (`incrementCameraQuantity`, `selectCameraColor`, etc.)
   plus derived selectors (`getSubtotal`, `getSelectedCameras`, …).
3. The store is wrapped in Zustand's `persist` middleware so selections survive a
   refresh. React elements (SVG icons) can't be JSON-serialized, so the `partialize`
   function strips them before writing to `localStorage` and the `merge` function
   re-attaches them on rehydration.
4. Each wizard step reads from and writes to the store; the checkout summary on the
   right is a live view that re-renders on every change.

---

## Decisions, Tradeoffs & Notes

### JavaScript, not TypeScript
The project is written in plain JavaScript despite shipping a `tsconfig.json`. The
`tsconfig.json` is used for IDE IntelliSense and path-alias resolution (`@/*`), but
`noEmit` is `true` so `tsc` is never part of the build. This was a speed-of-iteration
choice — converting to TypeScript is straightforward but was not in scope.

### Zustand for state (no Redux, no Context)
Zustand was chosen for its minimal API and zero boilerplate. The entire cart state —
cameras, sensors, accessories, selected plan, and all derived totals — lives in a
single store. The `persist` middleware gives us `localStorage` rehydration for free.

### Feature-sliced directory layout
The `security-checkout` feature is organized into `steps/`, `data/`, `store/`, and
`component/` rather than the typical `components/` / `pages/` / `hooks/` split. This
keeps everything related to the checkout in one place and makes it easy to drop the
whole feature into another project.

### `.jsx` data file for accessories
`src/Features/security-checkout/data/extraProtection.jsx` is a `.jsx` file (while the
other data files are `.js`) because it embeds inline JSX/SVG icon elements directly in
the data. The store's persistence layer strips these icons before serializing to
`localStorage` and reconstructs them on load.

### Inline SVG icons instead of an icon library
Camera and sensor images are static assets in `public/`. The extra-protection items
use inline SVG (via `lucide-react` path data) rather than importing icon components,
which is why the data file is JSX.

### No backend / no real checkout
This is a UI prototype. The "Shipping" section collects an address but nothing is
submitted. The summary calculates subtotal / savings / tax placeholder, but there is no
payment gateway integration.

### shadcn/ui "new-york" style
Components were generated with `shadcn` using the `new-york` style and `slate` base
color. The theme uses a custom `--primary` of `#4E2FD2`.

---

## Known Issues & Unfinished Work

These are pre-existing issues that were **not** fixed as part of this task (they don't
block the build or dev server):

1. **ESLint fails (`npm run lint` exits with 25 errors, 1 warning).** The majority are
   unused `import React` statements across components (React 19 + the new JSX
   transform don't require it). Additional errors include unused variables
   (`selectedCamerasCount`, `reset`, `clearSaved`, `plans`, `incrementAccessoryQuantity`,
   `decrementAccessoryQuantity`), `__dirname` being undefined in `vite.config.js`
   (ESM context), and a `react-refresh/only-export-components` warning in
   `button.jsx`. The build and dev server are unaffected — only the lint command fails.

2. **`__dirname` in `vite.config.js`.** Vite polyfills `__dirname` at build time so the
   build succeeds, but ESLint's `no-undef` rule flags it because the project is ESM.
   The idiomatic fix is `import.meta.url` + `fileURLToPath`, but that was left as-is.

3. **Store `reset` / `clearSaved` bug.** Both functions set `accessories: []` instead of
   reconstructing the accessories array from `accessoriesData` (with `quantity: 0`).
   After a reset, the extra-protection step loses its data until a full page reload
   re-initializes the store from the data file.

4. **Unused `plans` import in the store.** `useBundleBuilderStore` imports `plans` from
   `../data/plans` but never references it (the selected plan is stored as a single
   object, not looked up from the array).

5. **No checkout submission.** The shipping form has no validation, no submission
   handler, and no connection to a backend.

6. **No tests.** There are no unit, integration, or end-to-end tests.

7. **Images use generic filenames.** Camera/sensor images in `public/` are named
   `pngwing.com*.png` (downloaded assets), which is not ideal for maintainability.

---

## Deployment

The `dist/` directory is a static site and can be deployed to any static host:

- **Vercel** — `vercel` (auto-detected as a Vite project)
- **Netlify** — set build command `npm run build`, publish directory `dist/`
- **GitHub Pages** — use `peaceiris/actions-gh-pages` with `dist/` as the publish dir
- **Cloudflare Pages** — set build command `npm run build`, publish directory `dist/`

For all of the above, a clean install + build is:

```bash
npm ci && npm run build
```

# Repository Guidelines

## Project Structure & Module Organization
- `src/`: React + TypeScript source (entry: `main.tsx`, root app: `App.tsx`). Tailwind v4 styles in `src/index.css`.
- `public/`: Static assets served as-is (e.g., `vite.svg`).
- `index.html`: Vite HTML template mounting `#root`.
- Tooling: `vite.config.ts`, `eslint.config.js`, `tsconfig*.json`.

## Build, Test, and Development Commands
- `npm run dev`: Start Vite dev server with HMR.
- `npm run build`: Type-check (`tsc -b`) and build production bundle.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run ESLint across the project.
Note: Prefer one package manager. This repo includes `package-lock.json` and `yarn.lock`—use npm by default and keep only `package-lock.json` in commits.

## Coding Style & Naming Conventions
- Language: TypeScript (strict). Indentation: 2 spaces.
- React: Components `PascalCase` in `.tsx`; hooks `useCamelCase`.
- Files: Module imports are ESM; keep relative imports concise.
- Styling: Tailwind CSS v4 via `@tailwindcss/vite`; add utilities in `src/index.css`.
- Linting: ESLint with `typescript-eslint`, `react-hooks`, and `react-refresh`. Auto-fix: `npm run lint -- --fix`.

## Testing Guidelines
- Currently no test runner configured. Recommended: Vitest + React Testing Library.
- Test files: `src/**/*.test.tsx` or `src/**/*.test.ts`.
- Aim for fast unit tests near components and keep side effects isolated.

## Commit & Pull Request Guidelines
- Commits: Use Conventional Commits (e.g., `feat: add navbar`, `fix: handle null id`, `chore: update deps`).
- Before PR: ensure `npm run lint` passes and `npm run build` succeeds.
- PRs: include a clear description, linked issues (e.g., `Closes #123`), and screenshots/GIFs for UI changes.

## Security & Configuration Tips
- Environment variables: use Vite `VITE_`-prefixed vars (e.g., `VITE_API_URL`) via `import.meta.env`.
- Do not commit secrets. Store in `.env.local` and ignore in VCS; consider adding `.env*` to `.gitignore`.


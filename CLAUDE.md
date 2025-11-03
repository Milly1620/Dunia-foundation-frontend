# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite application for "Sesa" - appears to be a non-profit/charity website with pages for Home, About, Programs, Gallery, Contact, and Donate. The app uses React Router for navigation and Tailwind CSS v4 for styling.

## Key Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Type check with TypeScript and build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Architecture Overview

**Routing Structure:**
- Uses React Router v7 with nested routes
- Main layout in `src/components/Layout.tsx` wraps all pages with Navbar and Footer
- Pages located in `src/pages/`: HomePage, AboutPage, ProgramsPage, GalleryPage, ContactPage, DonatePage, NotFoundPage

**Component Organization:**
- Reusable UI components in `src/components/`
- Form components: InputField, TextareaField, SelectField, CheckboxField, ToggleButtonGroup
- Layout components: Hero, PageHero, StatisticsSection, CallToActionSection
- Card components: ProfileCard, ValueCard, PillarCard, ProgramCard, ContactCard, DonationAmountCard
- Section components: SevenPillarsSection, ValuesSection, OurTeamSection, etc.

**Styling:**
- Tailwind CSS v4 configured via `@tailwindcss/vite` plugin
- Custom styles in `src/index.css`
- Mobile-first responsive design with different background colors for mobile/desktop

**Assets:**
- Extensive SVG assets in `src/assets/` including program illustrations, team photos, graphics, and path decorations
- Separate mobile versions for some graphics (e.g., `lovemobile.svg`, `heromobileleftpath.svg`)

## Key Technical Details

- TypeScript with strict mode enabled
- ESM modules (`"type": "module"` in package.json)
- Uses React 19.1.1 with React Router DOM v7
- Lucide React for icons
- ESLint configured for React hooks and TypeScript

## File Structure Pattern

```
src/
├── pages/           # Route components
├── components/      # Reusable UI components
├── assets/          # SVG illustrations and graphics
├── utils/           # Utility functions (util.ts)
├── App.tsx          # Main router setup
├── main.tsx         # Application entry point
└── index.css        # Global styles and Tailwind
```

## Common Patterns

- Components use TypeScript with proper prop typing
- Functional components with hooks
- Tailwind classes for styling with responsive variants
- SVG imports for graphics and illustrations
- Form handling with controlled components
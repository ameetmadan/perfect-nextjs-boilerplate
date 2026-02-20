# AI Agent Instructions (AGENTS.md)

This document contains the critical guidelines, architectural decisions, and styling principles for this project. **You MUST follow these rules carefully whenever writing code or proposing changes in this codebase.**

---

## 🏗️ Technology Stack
- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS v4 + `shadcn/ui`
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **State Management:** Zustand
- **Environment Variables:** `@t3-oss/env-nextjs` + Zod

---

## 🎨 Styling & Aesthetic Guidelines
This project heavily prioritizes a **Premium Visual Identity**. If you implement a UI feature that looks simple, generic, or basic, you have failed the objective.

### 1. Premium Aesthetics & Modern Design
- **NEVER use generic colors** (e.g., plain red, blue, green). Always use harmonious, curated color palettes, utilizing HSL or OKLCH colors defined in `src/app/globals.css`.
- Employ **Glassmorphism** where appropriate (e.g., translucent backgrounds with `backdrop-blur`).
- Use **smooth gradients**, subtle shadows, and borders with low opacity to create depth (e.g., `border-white/10`).
- Ensure every component seamlessly adapts to both **Light and Dark modes**. Specifically test against `.dark` variants.

### 2. Animations & Interactivity
- Static interfaces are unacceptable. Interfaces must feel alive and responsive to user input.
- Use `framer-motion` for complex entry animations (e.g., staggered fades, layout transitions).
- Add **micro-animations** to interactive elements. Buttons, cards, and links must have hover effects (e.g., scaling, background transitions, border color changes).

### 3. Tailwind & Components
- **Tailwind v4** is in use. Do not use outdated Tailwind v3 plugins or syntax. 
- **Component Library:** Use `shadcn/ui` primitives for base components (Buttons, Inputs, Dialogs). Add new ones via the CLI: `npx shadcn@latest add <component>`.
- Use `cn()` from `src/lib/utils.ts` (which utilizes `clsx` and `tailwind-merge`) to conditionally apply Tailwind classes without styling conflicts.

---

## 🧑‍💻 Architecture & Implementation Rules

### 1. React Server Components vs. Client Components
- **Server Components by Default:** Always default to Server Components for fetching data, accessing backend resources, and improving performance.
- **"use client" directives:** Only add `"use client"` when importing hooks (`useState`, `useEffect`, `useTheme`, `useAppStore`), using browser APIs, or implementing interactive DOM events (`onClick`). Minimize the surface area of Client Components.

### 2. Environment Variables
- DO NOT access `process.env` directly in your application code for non-system variables.
- All environment variables **must be defined and validated** inside `src/env.mjs` using Zod. Import them via: `import { env } from "@/env.mjs"`.

### 3. State Management
- For simple local UI state, use React's `useState`.
- For complex, shared client-side logic, use **Zustand** (refer to `src/store/useAppStore.ts`). Avoid overusing React Context to prevent unnecessary re-renders.

### 4. TypeScript Strictness
- Strictly define your interfaces and types.
- **NEVER use `any`.** Use `unknown` with a typeguard if the schema is truly dynamic.
- Leverage Zod for runtime type validation of external data payloads and API responses.

### 5. SEO Best Practices
- Every new page should export a `Metadata` object. Provide descriptive titles and descriptions.
- Use Semantic HTML (`<main>`, `section`, `<nav>`, `<article>`, `<aside>`).
- Maintain proper heading hierarchy (only one `<h1>` per page).
- Ensure interactive elements have accessible aria roles and descriptive identifiers.

---

## 🚀 Workflow for Adding Features
1. **Plan:** Understand requirements and review `AGENTS.md` before coding.
2. **Design:** Prioritize dynamic, premium visuals. Do not use placeholders without generating realistic visual data.
3. **Build:** Scaffold Server Components holding the layout, importing smaller Client Components for interactivity.
4. **Refine:** Verify dark mode, responsive sizing (mobile/tablet desktop), and framer-motion micro-animations.

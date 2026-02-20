# Perfect Next.js Boilerplate 🚀

A robust, meticulously crafted Next.js boilerplate focused on developer experience, performance, and modern design principles. This template skips the setup phase, allowing you to instantly start building features with a production-ready stack.

## ✨ Features

- ⚡️ **Next.js 15+ App Router**: Harness the full power of React Server Components and Server Actions.
- 🎨 **Tailwind CSS v4 & shadcn/ui**: Beautiful, highly customizable components with a premium design system.
- 🌘 **Dark Mode Ready**: Fully integrated system-aware light/dark mode with `next-themes`.
- 💎 **Icons & Animations**: Ready-to-use `lucide-react` icons and `framer-motion` for smooth micro-animations.
- 🛡️ **Type-safe Env Variables**: Guaranteed runtime safety with `@t3-oss/env-nextjs` and `Zod`.
- 🐻 **State Management**: Built-in support for `zustand` to manage complex client-side state efficiently.
- 📡 **Data Fetching**: Ready-to-use `@tanstack/react-query` configured correctly for Next.js 15, plus a universal `fetcher` wrapper.
- ✅ **Strict TypeScript**: Catch errors before they happen with strict typing out-of-the-box.

## 🛠️ Stack Overview

| Technology    | Purpose                      |
| ------------- | ---------------------------- |
| Next.js       | React Framework              |
| TypeScript    | Language                     |
| Tailwind CSS  | Styling                      |
| shadcn/ui     | Component Library            |
| Zustand       | Client State                 |
| React Query   | Client Data Fetching/Caching |
| Zod           | Data Validation              |
| Framer Motion | Animations                   |
| Lucide React  | Icons                        |

## 🚀 Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Copy the example env file and fill in your values (You can check `src/env.mjs` to define your schema).

   ```bash
   cp .env.example .env
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- `src/app/` - Next.js App Router pages and layouts.
- `src/components/ui/` - shadcn/ui primitives.
- `src/components/` - Your custom React components.
- `src/lib/` - Utility functions (like `utils.ts` for cn/tailwind-merge).
- `src/env.mjs` - Environment variable validation schema.

## 📡 Data Fetching

This boilerplate includes a dual approach to handle data fetching seamlessly across both Server and Client environments:

### 1. Server Components (Next.js native)

For Server Components, simply use the custom `fetcher` wrapper located in `src/lib/fetcher.ts`. It provides out-of-the-box error throwing and automatic JSON parsing.

```typescript
import { fetcher } from "@/lib/fetcher";

export default async function Page() {
  const data = await fetcher("https://api.example.com/data", {
    next: { revalidate: 60 } // Next.js standard caching
  });
  
  return <div>{data.title}</div>;
}
```

### 2. Client Components (React Query)

For Client Components that need real-time updates, polling, or complex mutation handling, we use **TanStack React Query**. A `QueryProvider` already wraps your app in `src/app/layout.tsx`.

```typescript
"use client";

import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";

export function ClientComponent() {
  const { data, isLoading } = useQuery({
    queryKey: ["example-data"],
    queryFn: () => fetcher("https://api.example.com/data")
  });

  if (isLoading) return <div>Loading...</div>;
  return <div>{data?.title}</div>;
}
```

## 🎨 Best Practices Included

- **`ThemeProvider` & `QueryProvider`** are wrapped correctly around the root layout to avoid hydration mismatches.
- **`globals.css`** incorporates Next.js Tailwind v4 `@theme` variables setup with clean base classes.
- **Premium Design Aesthetics**: Includes micro-interactions, gradient texts, and a sleek dot-pattern background out-of-the-box in `page.tsx`.

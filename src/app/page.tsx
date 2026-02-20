"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Layers, Zap, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const features = [
  {
    icon: <Zap className="h-6 w-6 text-yellow-500" />,
    title: "Next.js App Router",
    description: "Built on the latest Next.js 15+ features including RSCs and Server Actions.",
  },
  {
    icon: <Code2 className="h-6 w-6 text-blue-500" />,
    title: "TypeScript & strict",
    description: "Fully typed codebase out-of-the-box for bulletproof reliability.",
  },
  {
    icon: <Layers className="h-6 w-6 text-purple-500" />,
    title: "shadcn/ui & Tailwind",
    description: "Beautiful, accessible, and customizable components ready to use.",
  },
  {
    icon: <Shield className="h-6 w-6 text-green-500" />,
    title: "Type-safe Env Vars",
    description: "Validated environment variables using T3 Env and Zod.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground dot-pattern">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <Sparkles className="h-5 w-5 text-primary" />
            <span>Perfect Boilerplate</span>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-32 pb-16 flex flex-col items-center justify-center min-h-[80vh] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-sm font-medium mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          Production Ready Stack
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Ultimate Foundation</span> for your next big idea
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Skip the setup. Start building features instantly with a meticulously crafted Next.js boilerplate focused on performance, styling, and developer experience.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="lg" className="rounded-full px-8 h-12 text-md">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-md">
            View Documentation
          </Button>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-24 text-left w-full max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors shadow-sm">
              <div className="h-12 w-12 rounded-xl bg-muted/50 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}

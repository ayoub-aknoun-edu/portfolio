// src/sections/HeroStory.tsx
import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { ArrowRight, Code2, LayoutTemplate, ServerCog } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "@/components/ui/button";

export const HeroStory: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* editorial highlight */}
      <div className="pointer-events-none absolute -left-32 -top-40 h-72 w-72 rounded-full bg-orange-400/15 blur-3xl dark:bg-orange-500/18" />
      <div className="pointer-events-none absolute right-0 top-10 h-64 w-64 rounded-full bg-slate-300/25 blur-3xl dark:bg-sky-500/10" />

      <div className="relative mx-auto flex max-w-5xl flex-col gap-5 pt-4">
        <motion.p
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[9px] uppercase tracking-wide text-slate-500 shadow-sm dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-300"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Feature • Full-Stack Engineer crafting web platforms, APIs & apps
        </motion.p>

        <motion.h1
          className="text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          I build & ship web platforms, APIs and apps that behave like
          production systems from day one.
        </motion.h1>

        <motion.div
          className="max-w-xl text-sm text-slate-700 dark:text-slate-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.22, duration: 0.5 }}
        >
          <Typewriter
            options={{
              delay: 24,
              cursor: "|",
              strings: [
                "Clean UIs in React/Angular.",
                "Robust backends in Java/Spring, .NET, FastAPI.",
                "CI/CD pipelines, monitoring, and real deployments.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center gap-2 text-[9px] text-slate-600 dark:text-slate-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.32, duration: 0.4 }}
        >
          <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 dark:bg-slate-900">
            <LayoutTemplate className="h-3 w-3 text-orange-500" />
            Pixel-perfect, responsive interfaces (HTML, CSS, Tailwind)
          </span>
          <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 dark:bg-slate-900">
            <ServerCog className="h-3 w-3 text-sky-500" />
            Java/Spring · .NET · FastAPI · REST APIs
          </span>
          <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 dark:bg-slate-900">
            <Code2 className="h-3 w-3 text-emerald-500" />
            GitLab/GitHub workflows · Docker · IIS/NGINX deploys
          </span>
        </motion.div>

        <motion.div
          className="mt-1 flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.4 }}
        >
          <ScrollLink to="projects" smooth offset={-80} duration={500}>
            <Button className="group flex items-center gap-2 bg-orange-500 text-slate-950 hover:bg-orange-400">
              Browse featured case studies
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Button>
          </ScrollLink>

          <ScrollLink
            to="about"
            smooth
            offset={-80}
            duration={500}
            className="cursor-pointer text-xs text-slate-600 hover:text-orange-500 dark:text-slate-300"
          >
            Read the story behind the work →
          </ScrollLink>
        </motion.div>
      </div>
    </div>
  );
};

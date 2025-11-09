// src/pages/Index.tsx
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SystemLogOverlay } from "@/components/SystemLogOverlay";

import { HeroStory } from "@/sections/HeroStory";
import { AboutStory } from "@/sections/AboutStory";
import { TechStack } from "@/sections/TechStack";
import { Timeline } from "@/sections/Timeline";
import { ProjectsDynamic } from "@/sections/ProjectsDynamic";
import { ContactStory } from "@/sections/ContactStory";

const IndexPage: React.FC = () => {
  return (
    <div className="relative">
      <SystemLogOverlay />

      {/* Top magazine masthead */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/70 bg-slate-50/95 backdrop-blur-md dark:border-slate-800/60 dark:bg-slate-950/85">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-orange-500 text-xs font-semibold text-slate-950">
              YB
            </div>
            <div className="leading-tight">
              <p className="text-xs font-semibold">
                Yassine Ballouti
              </p>
              <p className="text-[9px] text-slate-500 dark:text-slate-400">
                Full-Stack Engineer · APIs · UI · Delivery
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-4 text-[10px] font-medium text-slate-700 dark:text-slate-300 sm:flex">
            {[
              ["Story", "hero"],
              ["About", "about"],
              ["Stack", "stack"],
              ["Timeline", "timeline"],
              ["Projects", "projects"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <ScrollLink
                key={id}
                to={id}
                smooth
                offset={-80}
                duration={500}
                className="cursor-pointer rounded-md px-2 py-1 hover:bg-slate-100 hover:text-orange-500 dark:hover:bg-slate-800"
              >
                {label}
              </ScrollLink>
            ))}
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-2 sm:hidden">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Content like an editorial layout */}
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-4 pb-16 pt-24 sm:pt-28">
        <section id="hero">
          <HeroStory />
        </section>
        <section id="about">
          <AboutStory />
        </section>
        <section id="stack">
          <TechStack />
        </section>
        <section id="timeline">
          <Timeline />
        </section>
        <section id="projects">
          <ProjectsDynamic />
        </section>
        <section id="contact">
          <ContactStory />
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50/95 px-4 py-4 text-[9px] text-slate-500 dark:border-slate-800 dark:bg-slate-950/95 dark:text-slate-500">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <p>© {new Date().getFullYear()} Yassine Ballouti — Portfolio Edition.</p>
          <p>React · TypeScript · Tailwind · Framer Motion · GitLab CI/CD ready</p>
        </div>
      </footer>
    </div>
  );
};

export default IndexPage;

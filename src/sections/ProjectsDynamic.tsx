// src/sections/ProjectsDynamic.tsx
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { portfolioConfig } from "@/config/portfolioConfig";

export const ProjectsDynamic: React.FC = () => {
  const { projectsSection } = portfolioConfig;

  return (
    <section>
      <h2 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-500">
        {projectsSection.heading}
      </h2>
      <p className="mb-4 text-sm text-slate-700 dark:text-slate-300">
        {projectsSection.description}
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {projectsSection.projects.map((p, idx) => (
          <motion.article
            key={p.title}
            className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-4 text-[11px] shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: idx * 0.08 }}
          >
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {p.subtitle}
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">
                {p.title}
              </h3>
              <p className="mt-2 text-slate-700 dark:text-slate-300">
                {p.description}
              </p>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {p.tech.map((t) => (
                <Badge
                  key={t}
                  variant="outline"
                  className="border-slate-300 bg-slate-50 text-[10px] dark:border-slate-700 dark:bg-slate-900"
                >
                  {t}
                </Badge>
              ))}
            </div>
            <p className="mt-1 text-[9px] text-emerald-500 dark:text-emerald-400">
              {p.focus}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

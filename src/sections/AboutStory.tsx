// src/sections/AboutStory.tsx
import React from "react";
import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolioConfig";

export const AboutStory: React.FC = () => {
  const { about } = portfolioConfig;

  return (
    <div className="grid gap-6 md:grid-cols-[1.7fr,1.3fr] md:items-start">
      <div>
        <h2 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-500">
          {about.sectionLabel}
        </h2>
        <h3 className="mb-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
          {about.title}
        </h3>
        {about.paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="mb-3 text-sm text-slate-700 dark:text-slate-300"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Sidebar like a magazine callout */}
      <motion.aside
        className="relative mt-1 rounded-xl border border-slate-200 bg-slate-50 p-4 text-[11px] shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
      >
        <p className="mb-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-orange-500">
          {about.snapshotHeading}
        </p>
        <ul className="space-y-1 leading-snug">
          {about.snapshotItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </motion.aside>
    </div>
  );
};

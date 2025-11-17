// src/sections/TechStack.tsx
import React from "react";
import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolioConfig";

export const TechStack: React.FC = () => {
  const { techStack } = portfolioConfig;

  return (
    <section>
      <h2 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-500">
        {techStack.heading}
      </h2>
      <p className="mb-4 text-sm text-slate-700 dark:text-slate-300">
        {techStack.description}
      </p>
      <div className="grid gap-3 md:grid-cols-4">
        {techStack.stacks.map((stack, idx) => (
          <motion.div
            key={stack.label}
            className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-[11px] shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: idx * 0.06 }}
          >
            <p className="mb-2 text-[9px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {stack.label}
            </p>
            <div className="flex flex-wrap gap-1">
              {stack.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-slate-100 px-1.5 py-0.5 dark:bg-slate-900"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

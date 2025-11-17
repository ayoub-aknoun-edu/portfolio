// src/sections/Timeline.tsx
import React from "react";
import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolioConfig";

export const Timeline: React.FC = () => {
  const { timeline } = portfolioConfig;

  return (
    <section>
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange-400">
        {timeline.heading}
      </h2>
      <div className="relative pl-4">
        <div className="absolute left-1 top-1 bottom-1 w-px bg-slate-200 dark:bg-slate-800/80" />
        <div className="space-y-4">
          {timeline.events.map((event, idx) => (
            <motion.div
              key={event.title}
              className="relative ml-2 rounded-md border border-slate-200 bg-slate-50 p-3 text-[10px] text-slate-700 dark:border-slate-800/80 dark:bg-slate-950/80 dark:text-slate-300"
              initial={{ opacity: 0, x: 4 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: idx * 0.06 }}
            >
              <div className="absolute -left-3 top-2 h-2 w-2 rounded-full bg-orange-500" />
              <p className="text-[8px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {event.year}
              </p>
              <p className="mt-0.5 text-[11px] font-semibold text-slate-900 dark:text-slate-100">
                {event.title}
              </p>
              <p className="mt-1 leading-snug">{event.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

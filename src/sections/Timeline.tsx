import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    year: "2022 → 2023",
    title: "Junior Software Developer – Synertek",
    detail:
      "Built reservation portals, weighbridge systems, offline-first desktop apps, and REST integrations for Moroccan ports.",
  },
  {
    year: "2023 → 2024",
    title: "Freelance Engineer",
    detail:
      "Delivered 40+ solutions across events, IoT, analytics, and automation, owning scope, delivery, and deployment.",
  },
  {
    year: "2024 → Now",
    title: "Full-Stack / Integration Engineer",
    detail:
      "End-to-end rollouts at port and silo sites, SQL replication, IIS deployments, Modbus integrations, and modern dashboards.",
  },
];

export const Timeline: React.FC = () => (
  <section>
    <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange-400">
      Timeline
    </h2>
    <div className="relative pl-4">
      <div className="absolute left-1 top-1 bottom-1 w-px bg-slate-800/80" />
      <div className="space-y-4">
        {events.map((event, idx) => (
          <motion.div
            key={event.title}
            className="relative ml-2 rounded-md border border-slate-800/80 bg-slate-950/80 p-3 text-[10px] text-slate-300"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: idx * 0.08 }}
          >
            <div className="absolute -left-3 top-2 h-2 w-2 rounded-full bg-orange-500" />
            <p className="text-[8px] font-semibold uppercase tracking-wide text-slate-500">
              {event.year}
            </p>
            <p className="mt-0.5 text-[11px] font-semibold text-slate-100">
              {event.title}
            </p>
            <p className="mt-1 leading-snug">{event.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

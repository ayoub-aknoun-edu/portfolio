// src/sections/AboutStory.tsx
import React from "react";
import { motion } from "framer-motion";

export const AboutStory: React.FC = () => (
  <div className="grid gap-6 md:grid-cols-[1.7fr,1.3fr] md:items-start">
    <div>
      <h2 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-500">
        Editorial
      </h2>
      <h3 className="mb-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
        From field constraints to elegant, maintainable products.
      </h3>
      <p className="mb-3 text-sm text-slate-700 dark:text-slate-300">
        I’m Yassine Ballouti, a full-stack engineer who learned software by
        shipping systems where downtime actually hurts: port silos, quarries,
        logistics platforms. That experience now feeds how I design{" "}
        <strong>web apps, APIs, and desktop/mobile tools</strong> for real
        users, not just nice screenshots.
      </p>
      <p className="mb-3 text-sm text-slate-700 dark:text-slate-300">
        I build interfaces that feel deliberate, backed by solid backends
        (Java/Spring, .NET, FastAPI) and deployed with Git-based workflows,
        Docker, IIS/NGINX, and monitoring. My integration background is a bonus:
        I understand networks, protocols and constraints, but I speak product and
        UX.
      </p>
      <p className="mb-4 text-sm text-slate-700 dark:text-slate-300">
        This page is structured like a magazine: each section is a feature on
        how I handle design, code quality, delivery, and reliability.
      </p>
    </div>

    {/* Sidebar like a magazine callout */}
    <motion.aside
      className="relative mt-1 rounded-xl border border-slate-200 bg-slate-50 p-3 text-[9px] text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4 }}
    >
      <p className="mb-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-orange-500">
        Snapshot
      </p>
      <ul className="space-y-1 leading-snug">
        <li>• Interfaces: React, Angular, responsive CSS/Tailwind.</li>
        <li>• Backends: Java/Spring Boot, ASP.NET Core, FastAPI.</li>
        <li>• Data: SQL Server, PostgreSQL, relational modeling.</li>
        <li>• Delivery: GitLab/GitHub, CI/CD, Docker, IIS, Nginx.</li>
        <li>• Bonus: industrial & IoT integrations when needed.</li>
      </ul>
    </motion.aside>
  </div>
);

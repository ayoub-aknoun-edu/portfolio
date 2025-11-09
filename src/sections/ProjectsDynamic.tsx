// src/sections/ProjectsDynamic.tsx
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  focus: string; // UI/API/DevOps angle
};

const projects: Project[] = [
  {
    title: "Multi-tenant Logistics & Silo Portal",
    subtitle: "Web app + APIs for 3+ sites",
    description:
      "Reservation and tracking platform built with ASP.NET Core, SQL Server and modern UI components. Deployed on IIS across ports with authentication, roles and real-time synchronization.",
    tech: ["ASP.NET Core", "Telerik UI", "SQL Server", "IIS", "REST"],
    focus: "Backend-heavy B2B web app with production deployment.",
  },
  {
    title: "Weighbridge & Quarry Suite",
    subtitle: "Desktop + mobile apps",
    description:
      "Offline-first WinForms and Flutter apps capturing weighbridge data locally then syncing via secured APIs. Designed flows and UI to keep operators fast and error-free.",
    tech: ["WinForms", "Flutter", "SQLite", "REST APIs"],
    focus: "Robust UX for constrained environments.",
  },
  {
    title: "Cybercoz Security Dashboard",
    subtitle: "Threat monitoring web platform",
    description:
      "FastAPI backend exposing email analysis endpoints, Angular dashboard visualizing threats, and local tooling with Mailpit/Docker. Focus on clear UI and maintainable API design.",
    tech: ["FastAPI", "Angular", "Docker", "Mailpit"],
    focus: "Clean separation between UI and micro services.",
  },
  {
    title: "Event & IoT Telemetry Console",
    subtitle: "Real-time monitoring",
    description:
      "Angular + Python backend for live event metrics and IoT signals, WebSockets for updates, and admin interfaces styled for clarity on stage.",
    tech: ["Angular", "Django/FastAPI", "PostgreSQL", "WebSockets"],
    focus: "Real-time UI with stable backend contracts.",
  },
];

export const ProjectsDynamic: React.FC = () => (
  <section>
    <h2 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-500">
      Case Studies
    </h2>
    <p className="mb-4 text-sm text-slate-700 dark:text-slate-300">
      A selection of projects showing how I link interface, API, and deployment.
    </p>
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((p, idx) => (
        <motion.article
          key={p.title}
          className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-4 text-[10px] text-slate-700 shadow-sm transition-transform dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: idx * 0.08 }}
          whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(15,23,42,0.35)" }}
        >
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              {p.title}
            </h3>
            <p className="mb-1 text-[9px] uppercase tracking-wide text-orange-500">
              {p.subtitle}
            </p>
            <p className="mb-2 leading-snug">{p.description}</p>
          </div>
          <div className="mt-2">
            <div className="mb-1 flex flex-wrap gap-1">
              {p.tech.map((t) => (
                <Badge
                  key={t}
                  variant="outline"
                  className="border-slate-300 bg-slate-100 px-1.5 py-0 text-[8px] text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                >
                  {t}
                </Badge>
              ))}
            </div>
            <p className="mt-1 text-[9px] text-emerald-500 dark:text-emerald-400">
              {p.focus}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

// src/sections/TechStack.tsx
import React from "react";
import { motion } from "framer-motion";

const stacks = [
  {
    label: "Frontend & UX",
    items: ["React", "Angular", "TypeScript", "HTML5", "CSS3", "Tailwind", "Responsive layout"],
  },
  {
    label: "Backend & APIs",
    items: ["Java", "Spring Boot", "Spring Security", "ASP.NET Core", "FastAPI", "REST", "JSON"],
  },
  {
    label: "DevOps & Delivery",
    items: ["GitLab CI/CD (concepts)", "GitHub Actions", "Docker", "IIS", "Nginx"],
  },
  {
    label: "Extras",
    items: ["SQL Server", "PostgreSQL", "Industrial protocols", "Monitoring mindset"],
  },
];

export const TechStack: React.FC = () => (
  <section>
    <h2 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-500">
      Toolbox
    </h2>
    <p className="mb-4 text-sm text-slate-700 dark:text-slate-300">
      A stack focused on building maintainable web platforms and APIs, with enough
      DevOps to own the deployment story end-to-end.
    </p>
    <div className="grid gap-3 md:grid-cols-4">
      {stacks.map((stack, idx) => (
        <motion.div
          key={stack.label}
          className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-[10px] text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
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

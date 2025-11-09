// src/components/SystemLogOverlay.tsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOGS = [
  "[OK] Git repo initialized. Branch strategy defined.",
  "[OK] CI pipeline configured (tests, lint, build).",
  "[OK] API & UI contracts documented.",
  "[OK] Environments aligned (dev / preprod / prod).",
  "[OK] Observability & logs wired.",
  "[OK] Portfolio loaded. Reviewer ready.",
];

export const SystemLogOverlay: React.FC = () => {
  const [visible, setVisible] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setVisible((cur) => {
        if (i >= LOGS.length) {
          clearInterval(id);
          return cur;
        }
        const next = [...cur, LOGS[i]];
        i += 1;
        return next;
      });
    }, 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-3 left-3 z-30 hidden max-w-xs rounded-lg bg-slate-900/92 p-3 text-[9px] text-slate-300 ring-1 ring-slate-800 backdrop-blur md:block">
      <p className="mb-1 text-[8px] font-semibold uppercase tracking-wide text-orange-500">
        Build Log
      </p>
      <div className="space-y-0.5 font-mono leading-snug">
        <AnimatePresence>
          {visible.map((log, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 6 }}
              transition={{ duration: 0.2 }}
            >
              {log}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

// src/components/SystemLogOverlay.tsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";
import { portfolioConfig } from "@/config/portfolioConfig";

export const SystemLogOverlay: React.FC = () => {
  const [visible, setVisible] = useState<string[]>([]);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const logs = portfolioConfig.systemLog.logs;
    let index = 0;

    const interval = setInterval(() => {
      setVisible((prev) => {
        if (index >= logs.length) {
          return prev;
        }
        const next = [...prev, logs[index]];
        index += 1;

        const max = Math.min(logs.length, 6);
        return next.slice(-max);
      });
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  if (!visible.length) return null;

  const latest = visible[visible.length - 1];

  return (
    <div className="pointer-events-none fixed bottom-3 left-3 z-30">
      <AnimatePresence initial={false}>
        {isMinimized ? (
          // MINIMIZED PILL
          <motion.button
            key="minimized"
            type="button"
            className="pointer-events-auto hidden max-w-xs items-center gap-2 rounded-full bg-slate-900/92 px-3 py-1.5 text-[9px] text-slate-400 dark:text-slate-300 ring-1 ring-slate-800 backdrop-blur md:inline-flex"
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            onClick={() => setIsMinimized(false)}
          >
            <span className="text-[8px] font-semibold uppercase tracking-wide text-orange-500">
              Build Log
            </span>
            {latest && (
              <span className="max-w-[9rem] truncate text-[9px] text-slate-400 dark:text-slate-400">
                {latest}
              </span>
            )}
            <ChevronUp className="h-3 w-3 text-slate-400" />
          </motion.button>
        ) : (
          // MAXIMIZED CARD
          <motion.div
            key="maximized"
            className="pointer-events-auto hidden max-w-xs rounded-lg bg-slate-900/92 p-3 text-[9px] text-slate-400 dark:text-slate-300 ring-1 ring-slate-800 backdrop-blur md:block"
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
          >
            <div className="mb-1 flex items-center justify-between gap-2">
              <p className="text-[8px] font-semibold uppercase tracking-wide text-orange-500">
                Build Log
              </p>
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[8px] text-slate-500 hover:bg-slate-800 hover:text-slate-200"
                onClick={() => setIsMinimized(true)}
              >
                <ChevronDown className="h-3 w-3" />
                Minimize
              </button>
            </div>
            <div className="space-y-0.5 font-mono leading-snug">
              <AnimatePresence>
                {visible.map((log, idx) => (
                  <motion.div
                    key={`${idx}-${log}`}
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

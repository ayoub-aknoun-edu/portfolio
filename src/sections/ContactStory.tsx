// src/sections/ContactStory.tsx
import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactStory: React.FC = () => (
  <section>
    <h2 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-500">
      Contact
    </h2>
    <motion.div
      className="grid gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 md:grid-cols-[2fr,1.6fr]"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4 }}
    >
      <div>
        <p className="mb-2">
          Open to{" "}
          <span className="font-semibold">
            mid-level Full-Stack / Java backend / DevOps-friendly
          </span>{" "}
          roles in Morocco (including Kenitra) where code goes to production and
          teams value clean delivery.
        </p>
        <p className="mb-3">
          If you’re building web platforms, APIs or internal tools and need
          someone who cares about both the interface and the infrastructure,
          let’s talk.
        </p>
        <a href="mailto:yassineballoutu@gmail.com">
          <Button className="flex items-center gap-2 bg-orange-500 text-slate-950 hover:bg-orange-400">
            <Mail className="h-4 w-4" />
            Email me your use case
          </Button>
        </a>
      </div>
      <div className="space-y-2 text-[10px]">
        <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Direct links
        </p>
        <a
          href="mailto:yassineballoutu@gmail.com"
          className="flex items-center gap-2 hover:text-orange-500"
        >
          <Mail className="h-3 w-3" />
          yassineballoutu@gmail.com
        </a>
        <a
          href="https://github.com/yassine-san"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-orange-500"
        >
          <Github className="h-3 w-3" />
          github.com/yassine-san
        </a>
        <a
          href="YOUR_LINKEDIN_URL"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-orange-500"
        >
          <Linkedin className="h-3 w-3" />
          https://www.linkedin.com/in/yassine-ballouti/
        </a>
        <p className="mt-2 text-[9px] text-slate-500 dark:text-slate-500">
          I’m used to working with product owners, QA, infra and business teams.
          Happy to walk through this portfolio live.
        </p>
      </div>
    </motion.div>
  </section>
);

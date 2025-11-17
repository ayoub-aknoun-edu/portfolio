// src/sections/ContactStory.tsx
import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioConfig } from "@/config/portfolioConfig";

export const ContactStory: React.FC = () => {
  const { contact } = portfolioConfig;

  return (
    <section>
      <h2 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-500">
        {contact.heading}
      </h2>
      <motion.div
        className="grid gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-[11px] shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 md:grid-cols-[2fr,1.6fr]"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
      >
        <div>
          <p className="mb-2">{contact.availabilityLine}</p>
          <p className="mb-3">{contact.pitchLine}</p>
          <a href={`mailto:${contact.email}`}>
            <Button className="flex items-center gap-2 bg-orange-500 text-white hover:bg-orange-400">
              <Mail className="h-4 w-4" />
              {contact.ctaLabel}
            </Button>
          </a>
        </div>
        <div className="space-y-2 text-[10px]">
          <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            {contact.linksLabel}
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-2 hover:text-orange-500"
          >
            <Mail className="h-3 w-3" />
            {contact.email}
          </a>
          <a
            href={contact.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-orange-500"
          >
            <Github className="h-3 w-3" />
            {contact.githubUrl.replace(/^https?:\/\//, "")}
          </a>
          <a
            href={contact.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-orange-500"
          >
            <Linkedin className="h-3 w-3" />
            {contact.linkedinUrl}
          </a>
          <p className="mt-2 text-[9px] text-slate-500 dark:text-slate-500">
            {contact.footerNote}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

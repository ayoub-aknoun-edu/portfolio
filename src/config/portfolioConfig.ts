// src/config/portfolioConfig.ts

export type NavItem = {
    id: string;
    label: string;
};

export type TimelineEvent = {
    year: string;
    title: string;
    detail: string;
};

export type ProjectConfig = {
    title: string;
    subtitle: string;
    description: string;
    tech: string[];
    focus: string;
};

export type StackCategory = {
    label: string;
    items: string[];
};

export const portfolioConfig = {
    personal: {
        initials: "YB",
        fullName: "Yassine Ballouti",
        role: "Full-Stack Engineer · APIs · UI · Delivery",
    },

    navigation: {
        items: [
            { id: "hero", label: "Story" },
            { id: "about", label: "About" },
            { id: "stack", label: "Stack" },
            { id: "timeline", label: "Timeline" },
            { id: "projects", label: "Projects" },
            { id: "contact", label: "Contact" },
        ] as NavItem[],
    },

    hero: {
        badge: "Feature • Full-Stack Engineer crafting web platforms, APIs & apps",
        title:
            "I build & ship web platforms, APIs and apps that behave like production systems from day one.",
        typewriterStrings: [
            "Clean UIs in React/Angular.",
            "Robust backends in Java/Spring, .NET, FastAPI.",
            "CI/CD pipelines, monitoring, and real deployments.",
        ],
        chips: [
            "Pixel-perfect, responsive interfaces (HTML, CSS, Tailwind)",
            "Java/Spring · .NET · FastAPI · REST APIs",
            "GitLab/GitHub workflows · Docker · IIS/NGINX deploys",
        ],
        primaryCta: {
            label: "Browse featured case studies",
            targetId: "projects",
        },
        secondaryCta: {
            label: "Read the story behind the work →",
            targetId: "about",
        },
    },

    about: {
        sectionLabel: "Editorial",
        title: "From field constraints to elegant, maintainable products.",
        paragraphs: [
            "I'm Yassine Ballouti, a full-stack engineer who learned software by shipping systems where downtime actually hurts: port silos, quarries, logistics platforms. That experience now feeds how I design web apps, APIs, and desktop/mobile tools for real users, not just nice screenshots.",
            "I build interfaces that feel deliberate, backed by solid backends (Java/Spring, .NET, FastAPI) and deployed with Git-based workflows, Docker, IIS/NGINX, and monitoring. My integration background is a bonus: I understand networks, protocols and constraints, but I speak product and UX.",
            "This page is structured like a magazine: each section is a feature on how I handle design, code quality, delivery, and reliability.",
        ],
        snapshotHeading: "Snapshot",
        snapshotItems: [
            "• Interfaces: React, Angular, responsive CSS/Tailwind.",
            "• Backends: Java/Spring Boot, ASP.NET Core, FastAPI.",
            "• Data: SQL Server, PostgreSQL, relational modeling.",
            "• Delivery: GitLab/GitHub, CI/CD, Docker, IIS, Nginx.",
            "• Bonus: industrial & IoT integrations when needed.",
        ],
    },

    techStack: {
        heading: "Toolbox",
        description:
            "A stack focused on building maintainable web platforms and APIs, with enough DevOps to own the deployment story end-to-end.",
        stacks: [
            {
                label: "Frontend & UX",
                items: [
                    "React",
                    "Angular",
                    "TypeScript",
                    "HTML5",
                    "CSS3",
                    "Tailwind",
                    "Responsive layout",
                ],
            },
            {
                label: "Backend & APIs",
                items: [
                    "Java",
                    "Spring Boot",
                    "Spring Security",
                    "ASP.NET Core",
                    "FastAPI",
                    "REST",
                    "JSON",
                ],
            },
            {
                label: "DevOps & Delivery",
                items: [
                    "GitLab CI/CD (concepts)",
                    "GitHub Actions",
                    "Docker",
                    "IIS",
                    "Nginx",
                ],
            },
            {
                label: "Extras",
                items: [
                    "SQL Server",
                    "PostgreSQL",
                    "Industrial protocols",
                    "Monitoring mindset",
                ],
            },
        ] as StackCategory[],
    },

    timeline: {
        heading: "Timeline",
        events: [
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
        ] as TimelineEvent[],
    },

    projectsSection: {
        heading: "Case Studies",
        description:
            "A selection of projects showing how I link interface, API, and deployment.",
        projects: [
            {
                title: "Multi-tenant Logistics & Silo Portal",
                subtitle: "Web app + APIs for 3+ sites",
                description:
                    "Reservation and tracking platform built with ASP.NET Core, Telerik UI, and SQL Server, serving multiple ports with authentication, roles and real-time synchronization.",
                tech: ["ASP.NET Core", "Telerik UI", "SQL Server", "IIS", "REST"],
                focus: "Backend-heavy B2B web app with production deployment.",
            },
            {
                title: "Weighbridge & Quarry Suite",
                subtitle: "Desktop + mobile apps",
                description:
                    "Offline-first WinForms and Flutter apps capturing weighbridge data locally then syncing to central APIs. Designed flows and UI to keep operators fast and error-free.",
                tech: ["WinForms", "Flutter", "SQLite", "REST APIs"],
                focus: "Robust UX for constrained environments.",
            },
            {
                title: "Cybercoz Security Dashboard",
                subtitle: "Threat monitoring web platform",
                description:
                    "FastAPI backend exposing email analysis endpoints, Angular UI aggregating alerts, and containerized Mailpit/Docker. Focus on clear UI and maintainable API design.",
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
        ] as ProjectConfig[],
    },

    contact: {
        heading: "Contact",
        availabilityLine:
            "Open to mid-level Full-Stack / Java backend / DevOps-friendly roles in Morocco (including Kenitra) where code goes to production and teams value clean delivery.",
        pitchLine:
            "If you're building web platforms, APIs or internal tools and need someone who cares about both the interface and the infrastructure, let's talk.",
        email: "yassineballoutu@gmail.com",
        githubUrl: "https://github.com/yassine-san",
        linkedinUrl: "https://www.linkedin.com/in/yassine-ballouti/",
        ctaLabel: "Email me your use case",
        linksLabel: "Direct links",
        footerNote:
            "I'm used to working with product owners, QA, infra and business teams. Happy to walk through this portfolio live.",
    },

    systemLog: {
        logs: [
            "[OK] Git repo initialized. Branch strategy defined.",
            "[OK] CI pipeline configured (tests, lint, build).",
            "[OK] API & UI contracts documented.",
            "[OK] Environments aligned (dev / preprod / prod).",
            "[OK] Observability & logs wired.",
            "[OK] Portfolio loaded. Reviewer ready.",
        ],
    },

    footer: {
        editionLabel: "Portfolio Edition",
        techStackLine:
            "",
    },
} as const;

export type PortfolioConfig = typeof portfolioConfig;

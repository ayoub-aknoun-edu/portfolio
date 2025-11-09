import { Card } from "@/components/ui/card";
import { Server, Lock, Code, Layers, Rocket, FileCode } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Server,
      title: "Backend APIs & Microservices",
      description: "I build REST APIs and modular backend services using Spring Boot and ASP.NET Core, with clean layering (controller–service–repository), DTO mapping, validation, and clear error handling. I design endpoints to be predictable, well-documented, and easy for frontends or external systems to consume."
    },
    {
      icon: Lock,
      title: "Secure Authentication & Authorization",
      description: "I implement modern security practices: JWT-based authentication, OAuth2/OpenID Connect when needed, role-based access control, input validation, and protection against common vulnerabilities (XSS, CSRF, SQL injection). With Spring Security and .NET Identity, I ensure each request is properly authenticated and authorized."
    },
    {
      icon: Code,
      title: "Frontend Development with Angular",
      description: "I create SPA frontends using Angular, leveraging components, services, reactive forms, route guards, and interceptors. I integrate them tightly with backend APIs, handle loading & error states gracefully, and keep the UI consistent, responsive, and maintainable."
    },
    {
      icon: Layers,
      title: "System Integration & Enterprise Environments",
      description: "I integrate systems using REST APIs, webhooks, and background jobs, and I'm comfortable working in environments that involve IIS, Windows Server, or mixed stacks (Java + .NET + Angular)."
    },
    {
      icon: Rocket,
      title: "Deployment, CI/CD & Production Readiness",
      description: "I prepare applications for real-world use: environment-specific configs, Dockerization, IIS deployment, reverse proxies, logs, health checks, and deployment scripts/pipelines to reduce manual operations and errors."
    },
    {
      icon: FileCode,
      title: "Code Quality & Maintainability",
      description: "I care about readable code, clear architecture, and tests. I use patterns like dependency injection, layered architecture, and modular design to keep projects maintainable as they grow."
    }
  ];

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gradient">What I Do</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Card 
              key={idx}
              className="p-6 bg-background border-border hover:border-primary/50 transition-all card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

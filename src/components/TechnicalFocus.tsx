import { Card } from "@/components/ui/card";

const TechnicalFocus = () => {
  const focuses = [
    {
      title: "Backend Engineering",
      items: [
        "REST API design (resource modeling, pagination, filtering, error formats)",
        "DTOs vs entities, mapping, validation (Bean Validation / FluentValidation)",
        "Exception handling middleware / @ControllerAdvice",
        "Background jobs & schedulers (Quartz, Hangfire, Spring @Scheduled)",
        "File upload/download, exports (PDF/Excel/CSV)"
      ]
    },
    {
      title: "Security",
      items: [
        "Spring Security configuration (filters chain, method security)",
        "JWT tokens, refresh tokens",
        ".NET Core authentication handlers & policies",
        "Securing IIS sites with HTTPS, proper headers (HSTS, CORS)",
        "Principles: least privilege, secure secrets & config"
      ]
    },
    {
      title: "Architecture",
      items: [
        "Layered (Presentation / Application / Domain / Infrastructure)",
        "Microservices & API Gateway (when appropriate)",
        "Separation of concerns, dependency injection",
        "Caching strategies (Redis or in-memory), config management"
      ]
    },
    {
      title: "Data",
      items: [
        "Proper schema design, FK constraints, indexes",
        "Using ORM (JPA/Hibernate / EF Core) efficiently (no N+1, tracking vs no-tracking)",
        "Basic performance tuning and query optimization"
      ]
    },
    {
      title: "Frontend Techniques",
      items: [
        "State management patterns with RxJS (services + observables)",
        "Route guards, auth interceptors",
        "Reusable layout & shared modules",
        "Handling roles/permissions in UI"
      ]
    },
    {
      title: "DevOps & Quality",
      items: [
        "Git branching (feature branches, PRs, code reviews)",
        "Automated builds & tests in CI",
        "Environment-based configs (dev/stage/prod)",
        "Logging (structured logs), basic monitoring/health endpoints"
      ]
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Technical Focus & Techniques</h2>
        
        <Card className="p-8 mb-12 bg-card border-border">
          <p className="text-lg text-foreground/90 leading-relaxed">
            Technically, I focus on robust backend architecture, strong security, and clean Angular frontends. 
            I use patterns like layered architecture and dependency injection, rely on ORMs with optimized queries, 
            and design APIs that are explicit and well documented. I integrate CI/CD pipelines, logging, and 
            monitoring so deployments are repeatable and issues are easier to track.
          </p>
        </Card>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focuses.map((focus, idx) => (
            <Card 
              key={idx}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all card-hover"
            >
              <h3 className="text-xl font-bold text-primary mb-4">{focus.title}</h3>
              <ul className="space-y-2">
                {focus.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-foreground/70 text-sm leading-relaxed flex items-start">
                    <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalFocus;

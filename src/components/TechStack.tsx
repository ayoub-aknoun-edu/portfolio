import { Card } from "@/components/ui/card";

const TechStack = () => {
  const categories = [
    {
      title: "Backend",
      skills: [
        "Java · Spring Boot · Spring MVC · Spring Data JPA/Hibernate",
        "Spring Security (JWT, OAuth2, role-based access control)",
        "Spring Cloud (API Gateway, Config Server, service discovery basics)",
        "ASP.NET Core (Web API, MVC)",
        ".NET Identity / JWT auth",
        "RESTful API design, DTO mapping, validation"
      ]
    },
    {
      title: "Frontend",
      skills: [
        "Angular (components, services, RxJS, routing, guards, interceptors)",
        "TypeScript, HTML5, SCSS",
        "Responsive UI, reusable components, reactive forms"
      ]
    },
    {
      title: "Databases & Storage",
      skills: [
        "SQL Server · MySQL · PostgreSQL",
        "Database design, indexing, joins, views, stored procedures",
        "Basic ORM tuning (lazy/eager loading, query optimization)"
      ]
    },
    {
      title: "DevOps & Deployment",
      skills: [
        "IIS configuration & deployment (reverse proxy, bindings, SSL)",
        "Docker (containerizing backend services)",
        "Nginx / Apache as reverse proxy",
        "CI/CD basics (GitHub Actions / GitLab CI / Azure DevOps pipelines)",
        "Environment configuration (dev/stage/prod), logging & monitoring"
      ]
    },
    {
      title: "Tools & Collaboration",
      skills: [
        "Git (branching strategies, pull requests, code reviews)",
        "GitHub / GitLab / Azure DevOps",
        "Postman / Insomnia, Swagger / OpenAPI",
        "Jira / Trello / Agile / Scrum workflows"
      ]
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Tech Stack</h2>
        <p className="text-lg text-muted-foreground mb-12">
          <strong className="text-primary">Comfort zone:</strong> secure APIs, complex business rules, 
          multi-layer architectures, integrations with third-party services.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, idx) => (
            <Card 
              key={idx}
              className="p-6 bg-card border-border hover:border-primary/50 transition-colors card-hover"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIdx) => (
                  <li key={skillIdx} className="text-foreground/80 leading-relaxed flex items-start">
                    <span className="text-primary mr-2 mt-1">▹</span>
                    <span>{skill}</span>
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

export default TechStack;

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const projects = [
    {
      title: "Secure Operations Dashboard",
      role: "Full-Stack Developer",
      description: "Built an internal dashboard to manage users, roles, and operational data. Implemented REST APIs with Spring Boot, JWT authentication with Spring Security, and a SPA frontend with Angular. Deployed behind IIS with SSL, environment-based configuration, and centralized logging.",
      tech: ["Java", "Spring Boot", "Spring Security", "Angular", "SQL Server", "Git"],
      highlights: [
        "JWT auth + role-based access",
        "Modular services",
        "Responsive dashboard",
        "Deployed on Windows Server via IIS and CI/CD pipeline"
      ]
    },
    {
      title: "Document Management API",
      role: "Backend & Integration",
      description: "Developed a .NET Core Web API for secure document storage, metadata search, and access control. Integrated with Angular frontend and Active Directory authentication. Included audit logs and role-based authorization for sensitive operations.",
      tech: ["ASP.NET Core", "EF Core", "Angular", "SQL Server", "IIS", "Git"],
      highlights: [
        "Secure document storage",
        "Active Directory integration",
        "Comprehensive audit logs",
        "Role-based authorization"
      ]
    },
    {
      title: "Microservice-based Booking System",
      role: "Backend Lead",
      description: "Designed a set of Spring Boot microservices for handling bookings, notifications, and reporting. Used API Gateway, centralized config, and service discovery. Exposed well-documented REST APIs consumed by an Angular client.",
      tech: ["Spring Boot", "Spring Cloud", "RabbitMQ", "Angular", "Docker", "GitHub Actions"],
      highlights: [
        "Microservices architecture",
        "API Gateway implementation",
        "Service discovery",
        "Event-driven notifications"
      ]
    },
    {
      title: "E-Commerce Integration Platform",
      role: "Full-Stack Developer",
      description: "Built a comprehensive platform connecting multiple e-commerce systems with centralized inventory management. Implemented real-time synchronization, automated order processing, and detailed analytics dashboard.",
      tech: ["Spring Boot", "Angular", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
      highlights: [
        "Real-time data synchronization",
        "Third-party API integrations",
        "Performance optimization with caching",
        "Scalable microservices deployment"
      ]
    },
    {
      title: "Financial Reporting System",
      role: "Backend Developer",
      description: "Created a secure financial reporting system with complex data aggregation, scheduled report generation, and export capabilities. Implemented fine-grained access control and comprehensive audit trails.",
      tech: [".NET Core", "SQL Server", "Angular", "Hangfire", "Azure DevOps"],
      highlights: [
        "Complex financial calculations",
        "Scheduled background jobs",
        "PDF/Excel export functionality",
        "Comprehensive security measures"
      ]
    },
    {
      title: "Healthcare Management Portal",
      role: "Full-Stack Developer",
      description: "Developed a patient management system with appointment scheduling, medical records, and secure messaging. Ensured HIPAA compliance with encryption, audit logs, and strict access controls.",
      tech: ["Java", "Spring Boot", "Angular", "MySQL", "Docker", "Jenkins"],
      highlights: [
        "HIPAA-compliant security",
        "Real-time appointment management",
        "Encrypted data storage",
        "Multi-role access system"
      ]
    }
  ];

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-gradient transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <Card 
              key={idx}
              className={`p-6 bg-background border-border hover:border-primary/50 transition-all duration-700 card-hover ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-primary font-semibold">{project.role}</p>
              </div>
              
              <p className="text-foreground/80 leading-relaxed mb-4">{project.description}</p>
              
              <div className="mb-4">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIdx) => (
                    <Badge 
                      key={techIdx}
                      variant="secondary"
                      className="bg-secondary text-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-2">Highlights:</p>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, highlightIdx) => (
                    <li 
                      key={highlightIdx}
                      className="text-sm text-foreground/70 flex items-start"
                    >
                      <span className="text-primary mr-2 mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

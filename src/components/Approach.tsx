import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Approach = () => {
  const approaches = [
    "I start by clarifying the requirements and designing the data model and API contracts.",
    "I build backend and frontend in parallel, using clear interfaces and mock data when needed.",
    "I secure the application from day one (auth, roles, validation, logs).",
    "I automate builds and deployments where possible.",
    "I document APIs (Swagger/OpenAPI) and onboarding steps for teams."
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gradient">How I Work</h2>
        
        <Card className="p-8 bg-card border-border">
          <div className="space-y-4">
            {approaches.map((approach, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground/90 leading-relaxed">{approach}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Approach;

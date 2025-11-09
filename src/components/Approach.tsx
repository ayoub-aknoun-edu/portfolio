import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Approach = () => {
  const { ref, isVisible } = useScrollAnimation();
  const approaches = [
    "I start by clarifying the requirements and designing the data model and API contracts.",
    "I build backend and frontend in parallel, using clear interfaces and mock data when needed.",
    "I secure the application from day one (auth, roles, validation, logs).",
    "I automate builds and deployments where possible.",
    "I document APIs (Swagger/OpenAPI) and onboarding steps for teams."
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-gradient transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          How I Work
        </h2>
        
        <Card className={`p-8 bg-card border-border transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-4">
            {approaches.map((approach, idx) => (
              <div 
                key={idx} 
                className={`flex items-start gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${(idx + 2) * 100}ms` }}
              >
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

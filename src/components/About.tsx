import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <h2 className={`text-4xl md:text-5xl font-bold mb-8 text-gradient transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          About Me
        </h2>
        
        <div className="space-y-6 text-foreground/90 leading-relaxed text-lg">
          <p className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            I'm a full-stack developer with strong experience across Java (Spring Boot, Spring Security, 
            Spring Cloud) and .NET Core on the backend, and Angular on the frontend. My focus is clean 
            architecture, secure APIs, and production-ready deployments.
          </p>
          
          <p className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            I'm comfortable owning a feature from the database schema and REST contract, through business 
            logic and security, all the way to UI integration and deployment on IIS or Linux-based servers. 
            I care about reliability, readable code, and building systems that are simple to operate, 
            monitor, and extend.
          </p>
          
          <p className={`text-primary font-semibold transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            I've worked on internal systems, dashboards, and integrations where stability, auditability, 
            and security are non-negotiable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

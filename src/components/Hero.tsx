import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-0" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-gradient">Your Name</span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold text-foreground/90">
            Full-Stack Developer
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base text-muted-foreground">
            <span className="px-4 py-2 rounded-full bg-secondary border border-border">Java</span>
            <span className="px-4 py-2 rounded-full bg-secondary border border-border">.NET Core</span>
            <span className="px-4 py-2 rounded-full bg-secondary border border-border">Angular</span>
            <span className="px-4 py-2 rounded-full bg-secondary border border-border">Spring Boot</span>
          </div>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            I design, build, and deploy secure, scalable web applications end-to-end: from REST APIs 
            and microservices with Spring Boot and ASP.NET Core to modern Angular frontends, CI/CD pipelines, 
            and production deployments on IIS and Linux-based environments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              onClick={scrollToAbout}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          <div className="pt-12">
            <button 
              onClick={scrollToAbout}
              className="animate-bounce text-primary hover:text-primary/80 transition-colors"
              aria-label="Scroll to about section"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

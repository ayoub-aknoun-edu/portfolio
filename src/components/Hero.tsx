import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import javaLogo from "@/assets/logos/java.svg";
import dotnetLogo from "@/assets/logos/dotnet.svg";
import angularLogo from "@/assets/logos/angular.svg";
import springLogo from "@/assets/logos/spring.svg";
import figmaLogo from "@/assets/logos/figma.svg";
import postgresLogo from "@/assets/logos/postgresql.svg";
import gitLogo from "@/assets/logos/git.svg";
import dockerLogo from "@/assets/logos/docker.svg";
import typescriptLogo from "@/assets/logos/typescript.svg";
import sqlserverLogo from "@/assets/logos/sqlserver.svg";
import nginxLogo from "@/assets/logos/nginx.svg";
import linuxLogo from "@/assets/logos/linux.svg";

const technologies = [
  { name: "Java", logo: javaLogo },
  { name: ".NET Core", logo: dotnetLogo },
  { name: "Angular", logo: angularLogo },
  { name: "Spring Boot", logo: springLogo },
  { name: "TypeScript", logo: typescriptLogo },
  { name: "SQL Server", logo: sqlserverLogo },
  { name: "PostgreSQL", logo: postgresLogo },
  { name: "Docker", logo: dockerLogo },
  { name: "Git", logo: gitLogo },
  { name: "Nginx", logo: nginxLogo },
  { name: "Linux", logo: linuxLogo },
  { name: "Figma", logo: figmaLogo },
];

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
          
          <p className="text-2xl md:text-3xl font-semibold text-foreground/90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Full-Stack Developer
          </p>
          
          <div className="w-full max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {technologies.map((tech, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                    <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow flex flex-col items-center justify-center gap-2 h-24">
                      <img 
                        src={tech.logo} 
                        alt={tech.name}
                        className="w-8 h-8 object-contain"
                      />
                      <span className="text-xs text-muted-foreground text-center">{tech.name}</span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
            I design, build, and deploy secure, scalable web applications end-to-end: from REST APIs 
            and microservices with Spring Boot and ASP.NET Core to modern Angular frontends, CI/CD pipelines, 
            and production deployments on IIS and Linux-based environments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
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

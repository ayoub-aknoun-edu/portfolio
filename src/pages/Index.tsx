import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import TechnicalFocus from "@/components/TechnicalFocus";
import Projects from "@/components/Projects";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <TechStack />
      <Services />
      <TechnicalFocus />
      <Projects />
      <Approach />
      <Contact />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>© {new Date().getFullYear()} Your Name. Built with React, TypeScript & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Index;

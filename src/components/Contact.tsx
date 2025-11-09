import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, FileDown } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gradient text-center">Get In Touch</h2>
        
        <Card className="p-8 bg-background border-border text-center">
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            I'm always interested in hearing about new opportunities, projects, or just having a 
            technical discussion. Feel free to reach out through any of the channels below.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a href="mailto:your.email@example.com" className="flex items-center gap-2">
                <Mail size={20} />
                Email Me
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a 
                href="https://github.com/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={20} />
                GitHub
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a href="/cv.pdf" download className="flex items-center gap-2">
                <FileDown size={20} />
                Download CV
              </a>
            </Button>
          </div>
          
          <div className="pt-8 border-t border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">Open Source & Learning</h3>
            <p className="text-foreground/70 leading-relaxed">
              I stay up to date with Spring, .NET, Angular and cloud tooling by following community 
              discussions, contributing to open source projects, and continuously exploring new patterns 
              and best practices in full-stack development.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;

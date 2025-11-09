import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/mephtoo.png";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Developer workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side (Photo) */}
        <div className="flex-1 flex justify-center mb-8 md:mb-0">
          <img
            src={profileImage}
            alt="Sabrine El Boukili"
            className="w-64 h-64 md:w-72 md:h-72 rounded-full shadow-lg object-cover border-4 border-primary/30"
          />
        </div>

        {/* Right Side (Text) */}
        <div className="relative z-10 text-center md:text-left flex-1 px-6">
          <h1 className="font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent block text-5xl md:text-5xl lg:text-5xl">
              SABRINE EL BOUKILI
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl text-muted-foreground mt-2">
              Software Engineering Student
            </span>
          </h1>
          <Badge
            variant="secondary"
            className="px-4 py-2 text-sm shadow-md backdrop-blur-sm bg-background/80 text-center mt-4 md:mt-4 mb-4 inline-block"
          >
            Available for PFE Internship Opportunities
          </Badge>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl">
            Passionate about software development, AI, and creating innovative
            solutions that make technology more accessible, efficient, and
            impactful.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="gradient-primary hover:shadow-glow transition-smooth"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="border-primary/20 hover:border-primary/40 transition-smooth"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="https://github.com/KZEK123"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sabrine-elboukili/"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:elboukilisabrine@gmail.com"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;

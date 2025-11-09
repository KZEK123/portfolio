import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Portfolio
            </div>
            <p className="text-muted-foreground text-sm">
              Full Stack Developer passionate about creating exceptional digital
              experiences with modern technologies and clean, scalable code.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-muted-foreground hover:text-primary transition-smooth text-sm"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/KZEK123"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sabrine-elboukili/"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              elboukilisabrine@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row justify-between items-center"></div>
      </div>
    </footer>
  );
};

export default Footer;

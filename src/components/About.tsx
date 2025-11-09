import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Database, Smartphone } from "lucide-react";

const About = () => {
  const experiences = [
    {
      role: "Full-Stack Developer Intern",
      company: "Maroc Leasing (On-site)",
      duration: "July 2025 – September 2025",
      description:
        "Built an interactive full-stack solution to manage payment defaults, integrating XGBoost and Logistic Regression models to achieve 98% prediction accuracy. Conducted data-driven analysis to reduce early default risks by 70%, enhancing client monitoring and decision-making efficiency.",
    },
    {
      role: "Web Developer Intern",
      company: "OCP Maintenance Solutions (On-site)",
      duration: "July 2024 – September 2024",
      description:
        "Created an interactive documentation hub within the internal platform to enhance user understanding and workflow navigation. Designed a guided manual that simplified tool discovery and feature adoption. Technologies used: React.js, HTML, CSS.",
    },
    {
      role: "Web Developer Intern",
      company: "Laforain Real Estate Agency (Remote)",
      duration: "March 2024 – July 2024",
      description:
        "Developed a professional real estate website with dynamic property listings and a customer support chatbot powered by machine learning. Integrated a smooth user interface and automated recommendation logic using Flask, scikit-learn, and TensorFlow.",
    },
  ];
  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-center">
            I’m a final-year Software and Artificial Intelligence engineering
            student at ENSA Safi, driven by a passion for crafting intuitive web
            experiences that blend creativity with functionality. With a strong
            foundation in full-stack development, I enjoy transforming ideas
            into impactful digital solutions. Curious by nature and committed to
            excellence, I thrive in collaborative environments where innovation,
            adaptability, and continuous learning fuel progress. My approach
            combines technical precision, problem-solving, and empathy ensuring
            that every project I build not only performs efficiently but truly
            connects with users.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          {/* Experience */}
          <div className="w-full max-w-5xl">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Experience
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="shadow-card border-border/50 bg-card/50 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-lg">{exp.role}</h4>
                      <Badge variant="secondary">{exp.duration}</Badge>
                    </div>
                    <p className="text-primary mb-2">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

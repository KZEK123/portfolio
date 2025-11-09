import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Database, Brain, Users } from "lucide-react";

const Skills = () => {
  const expertise = [
    {
      title: "Frontend Development",
      icon: <Code className="w-5 h-5" />,
      skills: [
        "React.js",
        "Vue.js",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="w-5 h-5" />,
      skills: [
        "Java",
        "Spring Boot",
        "Kotlin",
        "ASP.NET",
        "Python",
        "REST APIs",
        "Microservices Architecture",
      ],
    },
    {
      title: "Databases & DevOps",
      icon: <Database className="w-5 h-5" />,
      skills: [
        "MySQL",
        "PostgreSQL",
        "SQLite",
        "Firebase",
        "Oracle",
        "Docker",
        "Git/GitHub",
      ],
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-5 h-5" />,
      skills: [
        "punctual and respect deadlines",
        "Communication",
        "Team Collaboration",
        "Leadership",
        "Adaptability",
        "Problem-Solving",
        "Continuous Learning",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical &{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Soft Skills
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            A combination of technical expertise and interpersonal strengths
            that help me build efficient, user-centered, and collaborative
            digital solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((area, index) => (
            <Card
              key={index}
              className="shadow-card border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="text-primary mr-3">{area.icon}</div>
                  <h4 className="font-semibold text-lg">{area.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

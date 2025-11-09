import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [mediaIndex, setMediaIndex] = useState(0);

  const projects = [
    {
      id: 5,
      title: "BabyGard – Smart Baby Monitoring Mobile App",
      description: `Mobile application for real-time smart baby monitoring. 
Integration of AI models for eye state detection (open/closed) and cry classification. 
Secure authentication and data synchronization implemented.`,
      technologies: [
        "Flutter",
        "Flask",
        "Firebase",
        "Vision Transformer (ViT)",
        "Python",
      ],
      media: [
        "/bebe_project/Video1.mp4",
        "/bebe_project/Video2.mp4",
        "/bebe_project/Video3.mp4",
        "/bebe_project/Video4.mp4",
        "/bebe_project/Video5.mp4",
        "/bebe_project/img1.jpg",
        "/bebe_project/image2.jpg",
      ],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 4,
      title: "SmartInternship – Smart Internship Matching Platform",
      description: `Intelligent platform connecting students and companies for internship opportunities. 
Main modules: management of student and company profiles, posting and searching for offers, application management, notifications, and dashboards. 
Secure authentication using Keycloak. 
Recommendation engine matching students and internships based on skills. 
Virtual interview assistant to prepare students for real interviews.`,
      technologies: [
        "Spring Boot",
        "Microservices",
        "Docker",
        "Keycloak",
        "Recommendation System",
        "AI",
      ],
      media: [
        "/SmartIntern/Part1 - Trim.mp4",
        "/SmartIntern/Part1 - Trim2.mp4",
        "/SmartIntern/Part2 - Trim.mp4",
        "/SmartIntern/Part2 - Trim2.mp4",
        "/SmartIntern/Part3 - Trim.mp4",
        "/SmartIntern/Part3 - Trim2.mp4",
        "/SmartIntern/Part3 - Trim3.mp4",
        "/SmartIntern/Part5 - Trim.mp4",
        "/SmartIntern/Part5 - Trim2.mp4",
        "/SmartIntern/Part5 - Trim3.mp4",
      ],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 3,
      title: "PharmacyApp – Native Mobile Application",
      description: `Native mobile application designed to facilitate access to medications and vitamins. 
Features: search & reserve medications, view detailed ingredients, real-time delivery tracking, admin panel (manage orders, users, products), and a feedback system.`,
      technologies: [
        "Android Studio",
        "Kotlin",
        "RecyclerView",
        "DataBinding",
        "Fragments",
        "SQLite",
        "Firebase Realtime Database",
      ],
      media: [
        "/pharmacyApp/part1 - Trim.mp4",
        "/pharmacyApp/part1 - Trim2.mp4",
        "/pharmacyApp/part2 - Trim.mp4",
        "/pharmacyApp/part2 - Trim2.mp4",
        "/pharmacyApp/part2 - Trim3.mp4",
      ],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 1,
      title: "Contest Management Application",
      description: `ASP.Net Core MVC project: Maintenance of a web application for managing engineering cycle entrance contests. 
Candidate space: registration, personal information management, baccalaureate and diploma data, PDF generation for convocations. 
Administrator space: pre-selection, attendance management, final selection, Excel exports, statistics.`,
      technologies: [
        "ASP.Net Core MVC",
        "C#",
        "SQL Server",
        "HTML",
        "CSS",
        "JavaScript",
        "PDF Generation",
      ],
      media: ["/ASP/Partie1.mp4", "/ASP/Partie1- Trim.mp4"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 2,
      title: "Student Attendance Management",
      description: `Application for managing students and attendance: login/register, add students and courses, track absences, search by multiple criteria, and export data to Excel. 
Database includes: Users, Students, Courses, Enrollments, Absences.`,
      technologies: ["C#", ".NET", "SQLite", "HTML", "CSS", "JavaScript"],
      media: [
        "/gestionabsence/WhatsApp Vidéo 2025-01-09 à 00.33.36_d3a139e8.mp4",
        "/gestionabsence/dakhla.jpg",
        "/gestionabsence/WhatsApp Image 2024-12-22 à 18.17.38_e38628e0.jpg",
        "/gestionabsence/WhatsApp Image 2024-12-22 à 18.17.38_eea2b733.jpg",
        "/gestionabsence/WhatsApp Image 2024-12-22 à 18.17.40_da50b737.jpg",
        "/gestionabsence/WhatsApp Image 2024-12-22 à 18.17.43_eb3ee542.jpg",
        "/gestionabsence/WhatsApp Image 2024-12-26 à 10.26.38_62518326.jpg",
        "/gestionabsence/WhatsApp Image 2024-12-27 à 19.33.52_82fac4f0.jpg",
        "/gestionabsence/WhatsApp Image 2024-12-27 à 19.36.28_739e56c2.jpg",
        "/gestionabsence/WhatsApp Image 2025-01-09 à 00.27.14_6624f05f.jpg",
      ],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  const playVideo = (project) => {
    setSelectedProject(project);
    setMediaIndex(0);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my latest work with interactive demos and detailed
            breakdowns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="shadow-card hover:shadow-glow transition-smooth border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => playVideo(project)}
                      className="border-primary/20 hover:border-primary/40"
                    >
                      <Play className="w-4 h-4 mr-1" />
                      Demo
                    </Button>
                  </div>
                </div>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg max-w-3xl w-full relative p-4">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full flex items-center justify-center">
              <button
                disabled={mediaIndex === 0}
                onClick={() => setMediaIndex((i) => i - 1)}
                className="absolute left-2 bg-white p-2 rounded-full shadow-md disabled:opacity-30"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="w-full flex justify-center">
                {selectedProject.media[mediaIndex].endsWith(".mp4") ? (
                  <video
                    src={selectedProject.media[mediaIndex]}
                    controls
                    className="rounded-lg max-h-[500px]"
                  />
                ) : (
                  <img
                    src={selectedProject.media[mediaIndex]}
                    alt="project media"
                    className="rounded-lg max-h-[500px]"
                  />
                )}
              </div>

              <button
                disabled={mediaIndex === selectedProject.media.length - 1}
                onClick={() => setMediaIndex((i) => i + 1)}
                className="absolute right-2 bg-white p-2 rounded-full shadow-md disabled:opacity-30"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="flex justify-center mt-3 space-x-2">
              {selectedProject.media.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setMediaIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === mediaIndex ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

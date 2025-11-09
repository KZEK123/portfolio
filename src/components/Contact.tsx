import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "elboukilisabrine@gmail.com",
      href: "mailto:elboukilisabrine@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+212 656126507",
      href: "tel:+212 656126507",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "SAFI, MOROCCO",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/sabrine-elboukili/",
      label: "LinkedIn",
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/KZEK123",
      label: "GitHub",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Driven by passion and curiosity, I’m eager to collaborate with your
            team to turn innovative ideas into impactful digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                action="https://formspree.io/f/meoplnvw"
                method="POST"
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-primary hover:shadow-glow transition-smooth"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-card border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="text-primary">{info.icon}</div>
                    <div>
                      <p className="font-medium">{info.title}</p>
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}

                <div className="pt-6 border-t border-border">
                  <p className="font-medium mb-4">Follow Me</p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">
                  Let's Build Something Great
                </h3>
                <p className="text-muted-foreground text-sm">
                  I'm always excited to work on new projects and collaborate
                  with talented individuals. Whether you need a complete
                  application or want to discuss a specific challenge, I'm here
                  to help bring your vision to life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

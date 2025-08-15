import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Camera, MessageSquare, Palette, Rocket, Users } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Smart Photo Sorter",
      description: "Build an AI that can recognize and sort your photos automatically",
      difficulty: "Beginner",
      duration: "Week 2",
      color: "ai-blue"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Friendly Chatbot",
      description: "Create your own AI assistant that answers questions and tells jokes",
      difficulty: "Intermediate", 
      duration: "Week 3",
      color: "ai-green"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Art Style Generator",
      description: "Transform photos into different art styles using AI magic",
      difficulty: "Advanced",
      duration: "Week 4",
      color: "ai-purple"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-ai-orange to-ai-pink bg-clip-text text-transparent">
            Project Zone
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build real AI projects with guided, no-code steps. Create amazing things and show them to your friends!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card border-0 hover:scale-105 transition-all duration-300 group">
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl bg-${project.color}/10 flex items-center justify-center text-${project.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant={project.difficulty === 'Beginner' ? 'secondary' : 
                                 project.difficulty === 'Intermediate' ? 'default' : 'destructive'}>
                    {project.difficulty}
                  </Badge>
                  <span className="text-sm text-muted-foreground font-medium">{project.duration}</span>
                </div>
                <Button variant="project" className="w-full">
                  Start Building
                  <Code className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Card className="max-w-4xl mx-auto shadow-hero border-0">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left space-y-4">
                  <h3 className="text-2xl font-bold">No Coding Required!</h3>
                  <p className="text-muted-foreground">
                    Our visual drag-and-drop interface makes building AI projects as easy as playing with blocks. 
                    You'll learn real AI concepts while having fun!
                  </p>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <Rocket className="h-5 w-5 text-ai-orange" />
                      <span className="font-semibold">Easy to Use</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-ai-green" />
                      <span className="font-semibold">Share with Friends</span>
                    </div>
                  </div>
                </div>
                <div className="gradient-project p-6 rounded-2xl text-white text-center">
                  <h4 className="text-xl font-bold mb-2">Ready to Create?</h4>
                  <p className="mb-4 text-white/90">Start with your first AI project today!</p>
                  <Button variant="quiz" className="bg-white text-ai-purple hover:bg-white/90">
                    Begin Project Journey
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
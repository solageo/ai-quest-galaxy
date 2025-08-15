import { Button } from "@/components/ui/button";
import { Brain, Calendar, Target, Users, BookOpen, Home } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-ai-blue to-ai-purple bg-clip-text text-transparent">
              AI Explorer Hub
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </a>
            <a href="#quiz" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <Target className="h-4 w-4" />
              <span>Start Quiz</span>
            </a>
            <a href="#missions" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <Calendar className="h-4 w-4" />
              <span>Daily Missions</span>
            </a>
            <a href="#projects" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <BookOpen className="h-4 w-4" />
              <span>Projects</span>
            </a>
            <a href="#teachers" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <Users className="h-4 w-4" />
              <span>For Teachers</span>
            </a>
          </div>
          
          <Button variant="hero" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
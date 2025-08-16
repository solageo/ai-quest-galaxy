import { Button } from "@/components/ui/button";
import { Brain, Calendar, Target, Users, BookOpen, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { UserMenu } from "./UserMenu";

const Navigation = () => {
  const { user } = useAuth();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

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
            <button 
              onClick={() => scrollToSection('home')} 
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </button>
            <Link 
              to="/quiz" 
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <Target className="h-4 w-4" />
              <span>Take Quiz</span>
            </Link>
            <Link 
              to="/lessons" 
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <BookOpen className="h-4 w-4" />
              <span>Lessons</span>
            </Link>
            <button 
              onClick={() => scrollToSection('missions')} 
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <Calendar className="h-4 w-4" />
              <span>Daily Missions</span>
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <BookOpen className="h-4 w-4" />
              <span>Projects</span>
            </button>
            <button 
              onClick={() => scrollToSection('teachers')} 
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <Users className="h-4 w-4" />
              <span>For Teachers</span>
            </button>
          </div>
          
          {user ? (
            <UserMenu />
          ) : (
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/signin">Sign In</Link>
              </Button>
              <Button variant="hero" size="sm" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
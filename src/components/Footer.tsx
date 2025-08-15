import { Brain, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-ai-blue" />
              <span className="text-2xl font-bold bg-gradient-to-r from-ai-blue to-ai-purple bg-clip-text text-transparent">
                AI Explorer Hub
              </span>
            </div>
            <p className="text-background/80">
              Making AI education fun, interactive, and accessible for young minds everywhere.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-ai-blue">Learning</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#quiz" className="hover:text-ai-blue transition-colors">Start Quiz</a></li>
              <li><a href="#missions" className="hover:text-ai-blue transition-colors">Daily Missions</a></li>
              <li><a href="#projects" className="hover:text-ai-blue transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-ai-blue transition-colors">Progress Tracker</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-ai-green">Support</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#teachers" className="hover:text-ai-green transition-colors">For Teachers</a></li>
              <li><a href="#" className="hover:text-ai-green transition-colors">Parent Guide</a></li>
              <li><a href="#" className="hover:text-ai-green transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-ai-green transition-colors">Safety & Privacy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-ai-orange">Contact</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-ai-orange" />
                <span>hello@aiexplorer.edu</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-ai-orange" />
                <span>1-800-AI-LEARN</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-ai-orange" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
          <p>&copy; 2024 AI Explorer Hub. Made with ❤️ for young learners everywhere.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
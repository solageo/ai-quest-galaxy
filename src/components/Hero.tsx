import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import aiRobotMascot from "@/assets/ai-robot-mascot.png";

const Hero = () => {
  return (
    <section id="home" className="gradient-hero py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-white/5"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-6 w-6 text-ai-orange animate-bounce-slow" />
                <span className="text-ai-orange font-semibold text-sm uppercase tracking-wide">
                  Learn AI the Fun Way!
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Welcome to the
                <span className="block bg-gradient-to-r from-ai-orange to-ai-pink bg-clip-text text-transparent">
                  AI Explorer Hub
                </span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Join thousands of students on an epic 28-day journey to master AI! 
                Interactive lessons, fun games, and real projects await you.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Take the AI Challenge
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Watch Preview
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 text-white/80">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-ai-orange" />
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">50,000+</span>
                <span>Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">28 Days</span>
                <span>of Fun</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl animate-pulse-glow"></div>
              <img 
                src={aiRobotMascot} 
                alt="AI Robot Mascot" 
                className="relative z-10 w-80 h-80 object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
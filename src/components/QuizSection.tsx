import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Clock, Trophy, ArrowRight } from "lucide-react";

const QuizSection = () => {
  return (
    <section id="quiz" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-ai-blue to-ai-purple bg-clip-text text-transparent">
            Start Your AI Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take our quick quiz to discover your AI interests and get a personalized learning path!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="shadow-card border-0 hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-center">
              <Target className="h-12 w-12 text-ai-blue mx-auto mb-4" />
              <CardTitle className="text-ai-blue">Personalized Path</CardTitle>
              <CardDescription>
                Get AI lessons tailored to your age and interests
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="shadow-card border-0 hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-center">
              <Clock className="h-12 w-12 text-ai-green mx-auto mb-4" />
              <CardTitle className="text-ai-green">Quick & Fun</CardTitle>
              <CardDescription>
                Just 2 minutes to discover your AI learning style
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="shadow-card border-0 hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-center">
              <Trophy className="h-12 w-12 text-ai-orange mx-auto mb-4" />
              <CardTitle className="text-ai-orange">Instant Results</CardTitle>
              <CardDescription>
                Start learning immediately with your custom roadmap
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        
        <div className="text-center">
          <Card className="max-w-2xl mx-auto shadow-hero border-0 gradient-hero text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Begin?</CardTitle>
              <CardDescription className="text-white/90">
                Answer a few questions about yourself and dive into the world of AI!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="quiz" size="lg" className="bg-white text-ai-blue hover:bg-white/90">
                Start Quiz Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar, Gamepad2, Award, CheckCircle, Lock, Target } from "lucide-react";
import { Link } from "react-router-dom";

const MissionsSection = () => {
  const missions = [
    { day: 1, title: "What is Artificial Intelligence?", description: "Understanding AI fundamentals and how machines think", completed: true, difficulty: "Beginner" },
    { day: 2, title: "AI vs Human Intelligence", description: "Comparing how AI and humans solve problems", completed: true, difficulty: "Beginner" },
    { day: 3, title: "Machine Learning Introduction", description: "How computers learn from data without explicit programming", completed: true, difficulty: "Beginner" },
    { day: 4, title: "Types of Machine Learning", description: "Supervised, unsupervised, and reinforcement learning", completed: false, difficulty: "Beginner" },
    { day: 5, title: "Data in Machine Learning", description: "Understanding datasets, features, and training data", completed: false, difficulty: "Beginner" },
    { day: 6, title: "Algorithms and Models", description: "How AI algorithms create predictive models", completed: false, difficulty: "Beginner" },
    { day: 7, title: "Linear Regression Basics", description: "Predicting values with straight line patterns", completed: false, difficulty: "Intermediate" },
    { day: 8, title: "Classification Problems", description: "Teaching AI to categorize and sort data", completed: false, difficulty: "Intermediate" },
    { day: 9, title: "Decision Trees", description: "How AI makes decisions like a flowchart", completed: false, difficulty: "Intermediate" },
    { day: 10, title: "Neural Networks Introduction", description: "Brain-inspired networks that power AI", completed: false, difficulty: "Intermediate" },
    { day: 11, title: "Deep Learning Basics", description: "Multi-layered neural networks for complex tasks", completed: false, difficulty: "Intermediate" },
    { day: 12, title: "Image Recognition", description: "How AI learns to see and understand pictures", completed: false, difficulty: "Intermediate" },
    { day: 13, title: "Natural Language Processing", description: "Teaching AI to understand human language", completed: false, difficulty: "Advanced" },
    { day: 14, title: "Computer Vision", description: "AI systems that can interpret visual information", completed: false, difficulty: "Advanced" },
    { day: 15, title: "Voice Recognition", description: "How AI understands and processes speech", completed: false, difficulty: "Advanced" },
    { day: 16, title: "Recommendation Systems", description: "How Netflix and Spotify suggest content", completed: false, difficulty: "Advanced" },
    { day: 17, title: "Chatbots and Virtual Assistants", description: "Building AI that can have conversations", completed: false, difficulty: "Advanced" },
    { day: 18, title: "AI in Gaming", description: "How AI creates intelligent game opponents", completed: false, difficulty: "Advanced" },
    { day: 19, title: "Convolutional Neural Networks", description: "Specialized networks for image processing", completed: false, difficulty: "Advanced" },
    { day: 20, title: "Recurrent Neural Networks", description: "AI with memory for sequence data", completed: false, difficulty: "Advanced" },
    { day: 21, title: "Transformer Models", description: "The technology behind ChatGPT and modern AI", completed: false, difficulty: "Expert" },
    { day: 22, title: "Generative AI", description: "AI that creates new content and images", completed: false, difficulty: "Expert" },
    { day: 23, title: "AI Ethics and Bias", description: "Responsible AI development and fairness", completed: false, difficulty: "Expert" },
    { day: 24, title: "AI in Healthcare", description: "How AI helps doctors diagnose diseases", completed: false, difficulty: "Expert" },
    { day: 25, title: "Autonomous Vehicles", description: "Self-driving cars and AI navigation", completed: false, difficulty: "Expert" },
    { day: 26, title: "AI in Finance", description: "Fraud detection and algorithmic trading", completed: false, difficulty: "Expert" },
    { day: 27, title: "Future of AI", description: "Emerging trends and career opportunities", completed: false, difficulty: "Expert" },
    { day: 28, title: "Build Your First AI Project", description: "Create a simple AI model from scratch", completed: false, difficulty: "Expert" },
  ];

  return (
    <section id="missions" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-ai-green to-ai-blue bg-clip-text text-transparent">
            Daily AI Missions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete 28 exciting missions to become an AI expert! Each day brings new adventures and discoveries.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="shadow-card border-0 gradient-mission text-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Your Progress</CardTitle>
                  <Calendar className="h-8 w-8" />
                </div>
                <CardDescription className="text-white/90">
                  You're doing amazing! Keep up the great work.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Day 3 of 28</span>
                    <span>11% Complete</span>
                  </div>
                  <Progress value={11} className="h-3 bg-white/20" />
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Award className="h-5 w-5 text-ai-orange" />
                      <span className="font-semibold">3 Badges Earned</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Gamepad2 className="h-5 w-5 text-ai-pink" />
                      <span className="font-semibold">240 Points</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">What makes our missions special?</h3>
              <div className="grid gap-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-ai-blue/10 p-2 rounded-lg">
                    <Gamepad2 className="h-6 w-6 text-ai-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Interactive Games</h4>
                    <p className="text-muted-foreground">Learn through play with drag-and-drop activities and puzzles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-ai-green/10 p-2 rounded-lg">
                    <Award className="h-6 w-6 text-ai-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Instant Feedback</h4>
                    <p className="text-muted-foreground">Get immediate responses and earn badges for achievements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-ai-orange/10 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-ai-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Visual Learning</h4>
                    <p className="text-muted-foreground">Cartoon-style explanations make complex concepts simple</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Start Your AI Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {missions.slice(0, 6).map((mission, index) => {
                const isNext = index === 0; // First mission is always the next one to start
                const isLocked = index > 0; // All missions after the first are locked initially
                
                return (
                  <Card 
                    key={mission.day} 
                    className={`transition-all hover:shadow-lg ${
                      isNext 
                        ? 'ring-2 ring-primary border-primary bg-primary/5' 
                        : isLocked 
                        ? 'opacity-60 cursor-not-allowed' 
                        : ''
                    }`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          Day {mission.day}
                        </Badge>
                        <Badge 
                          className={
                            mission.difficulty === 'Beginner' ? 'bg-green-500' :
                            mission.difficulty === 'Intermediate' ? 'bg-yellow-500' :
                            'bg-red-500'
                          }
                        >
                          {mission.difficulty}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg leading-tight">
                        {mission.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {mission.description}
                      </p>
                      
                      {isNext && (
                        <div className="mb-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                          <div className="flex items-center gap-2 text-primary font-medium text-sm">
                            <Target className="h-4 w-4" />
                            Start your AI journey here!
                          </div>
                        </div>
                      )}
                      
                      <Button 
                        className="w-full" 
                        disabled={isLocked}
                        onClick={() => window.location.href = `/lesson/${mission.day}`}
                        variant={isNext ? "default" : isLocked ? "outline" : "outline"}
                      >
                        {isNext ? 'Start Now' : isLocked ? 'Complete Previous Lessons' : 'Start Lesson'}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/lessons">
                <Button variant="outline" size="lg">
                  View All 28 Lessons
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionsSection;
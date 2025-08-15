import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar, Gamepad2, Award, CheckCircle, Lock } from "lucide-react";

const MissionsSection = () => {
  const missions = [
    { day: 1, title: "What is AI?", description: "Meet your first AI friend", completed: true, difficulty: "Beginner" },
    { day: 2, title: "AI in Everyday Life", description: "Spot AI all around you", completed: true, difficulty: "Beginner" },
    { day: 3, title: "Machine Learning Basics", description: "Teach a computer to learn", completed: true, difficulty: "Beginner" },
    { day: 4, title: "Data Detective", description: "Solve puzzles with data", completed: false, difficulty: "Beginner" },
    { day: 5, title: "Image Recognition", description: "Help AI see like humans", completed: false, difficulty: "Intermediate" },
    { day: 6, title: "Voice Assistants", description: "Chat with AI friends", completed: false, difficulty: "Intermediate" },
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
            <h3 className="text-2xl font-bold mb-6">Upcoming Missions</h3>
            {missions.map((mission) => (
              <Card key={mission.day} className={`shadow-card border-0 transition-all duration-300 hover:scale-102 ${
                mission.completed ? 'bg-ai-green/5 border-ai-green/20' : 
                mission.day === 4 ? 'ring-2 ring-ai-blue shadow-button' : 'opacity-60'
              }`}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                        mission.completed ? 'bg-ai-green text-white' :
                        mission.day === 4 ? 'bg-ai-blue text-white' : 'bg-muted text-muted-foreground'
                      }`}>
                        {mission.completed ? <CheckCircle className="h-6 w-6" /> :
                         mission.day === 4 ? mission.day : <Lock className="h-6 w-6" />}
                      </div>
                      <div>
                        <h4 className="font-semibold">Day {mission.day}: {mission.title}</h4>
                        <p className="text-sm text-muted-foreground">{mission.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <Badge variant={mission.difficulty === 'Beginner' ? 'secondary' : 'default'}>
                        {mission.difficulty}
                      </Badge>
                      {mission.day === 4 && (
                        <Button variant="mission" size="sm">
                          Start Now
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionsSection;
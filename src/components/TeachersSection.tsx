import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Users, BarChart, Shield, BookOpen, Award } from "lucide-react";

const TeachersSection = () => {
  return (
    <section id="teachers" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
            For Teachers & Parents
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive resources and tools to guide young learners on their AI journey safely and effectively.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="shadow-card border-0 hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="bg-ai-purple/10 p-3 rounded-lg">
                    <Download className="h-6 w-6 text-ai-purple" />
                  </div>
                  <div>
                    <CardTitle>Downloadable Guides</CardTitle>
                    <CardDescription>
                      Comprehensive lesson plans and teaching materials
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            
            <Card className="shadow-card border-0 hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="bg-ai-blue/10 p-3 rounded-lg">
                    <BarChart className="h-6 w-6 text-ai-blue" />
                  </div>
                  <div>
                    <CardTitle>Progress Dashboard</CardTitle>
                    <CardDescription>
                      Track student progress and identify learning needs
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            
            <Card className="shadow-card border-0 hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="bg-ai-green/10 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-ai-green" />
                  </div>
                  <div>
                    <CardTitle>Safe Learning Environment</CardTitle>
                    <CardDescription>
                      COPPA compliant with robust privacy protections
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
          
          <div className="space-y-8">
            <Card className="shadow-hero border-0 gradient-hero text-white">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-3">
                  <Users className="h-8 w-8" />
                  <span>Educator Dashboard</span>
                </CardTitle>
                <CardDescription className="text-white/90">
                  Everything you need to support AI education in your classroom
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <BookOpen className="h-6 w-6 mx-auto mb-2" />
                    <div className="font-semibold">28 Lessons</div>
                    <div className="text-sm text-white/80">Complete Curriculum</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <Award className="h-6 w-6 mx-auto mb-2" />
                    <div className="font-semibold">Assessment Tools</div>
                    <div className="text-sm text-white/80">Track Learning</div>
                  </div>
                </div>
                <Button variant="quiz" className="w-full bg-white text-ai-blue hover:bg-white/90">
                  Access Teacher Resources
                </Button>
              </CardContent>
            </Card>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">What educators are saying:</h3>
              <Card className="shadow-card border-0">
                <CardContent className="p-6">
                  <p className="italic text-muted-foreground mb-4">
                    "My students are more engaged than ever! The gamified approach makes complex AI concepts accessible to 6th graders."
                  </p>
                  <div className="font-semibold">
                    — Sarah Johnson, Middle School Teacher
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto shadow-card border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of educators already using AI Explorer Hub in their classrooms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Request Demo
                </Button>
                <Button variant="outline" size="lg">
                  Download Sample Lesson
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
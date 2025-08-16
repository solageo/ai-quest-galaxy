import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { lessons } from '@/data/lessons';
import { useLessonProgress } from '@/hooks/useLessonProgress';
import { CheckCircle, Clock, Trophy, BookOpen, Play } from 'lucide-react';

export default function Lessons() {
  const navigate = useNavigate();
  const { getLessonProgress, getOverallProgress } = useLessonProgress();
  const overallProgress = getOverallProgress();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getNextLesson = () => {
    return lessons.find(lesson => !getLessonProgress(lesson.id)?.completed) || lessons[0];
  };

  const nextLesson = getNextLesson();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">AI Learning Lessons</h1>
              <p className="text-muted-foreground mt-2">
                Complete interactive lessons to master AI and Machine Learning
              </p>
            </div>
            <Button onClick={() => navigate('/')}>
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Your Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-bold text-primary">{overallProgress.percentage}%</div>
                <p className="text-sm text-muted-foreground">Completion Rate</p>
                <Progress value={overallProgress.percentage} className="mt-2" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{overallProgress.completed}</div>
                <p className="text-sm text-muted-foreground">Lessons Completed</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{lessons.length - overallProgress.completed}</div>
                <p className="text-sm text-muted-foreground">Lessons Remaining</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Continue Learning */}
        {nextLesson && (
          <Card className="mb-8 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Continue Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{nextLesson.title}</h3>
                  <p className="text-sm text-muted-foreground">{nextLesson.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge className={getDifficultyColor(nextLesson.difficulty)}>
                      {nextLesson.difficulty}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {nextLesson.duration}
                    </div>
                  </div>
                </div>
                <Button onClick={() => navigate(`/lesson/${nextLesson.id}`)}>
                  Start Lesson
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* All Lessons */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            All Lessons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessons.map((lesson) => {
              const progress = getLessonProgress(lesson.id);
              const isCompleted = progress?.completed || false;
              
              return (
                <Card 
                  key={lesson.id} 
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    isCompleted ? 'border-green-500/30 bg-green-50/50' : ''
                  }`}
                  onClick={() => navigate(`/lesson/${lesson.id}`)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <Badge variant="outline" className="text-xs">
                        Day {lesson.day}
                      </Badge>
                      {isCompleted && (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      )}
                    </div>
                    <CardTitle className="text-lg leading-tight">
                      {lesson.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {lesson.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge className={getDifficultyColor(lesson.difficulty)}>
                          {lesson.difficulty}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {lesson.duration}
                        </div>
                      </div>
                      {progress && (
                        <Badge variant="outline" className="text-xs">
                          {progress.score}%
                        </Badge>
                      )}
                    </div>
                    <Button 
                      className="w-full mt-4" 
                      variant={isCompleted ? "outline" : "default"}
                      size="sm"
                    >
                      {isCompleted ? 'Review' : 'Start Lesson'}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
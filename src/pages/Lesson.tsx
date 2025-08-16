import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { VideoPlayer } from '@/components/VideoPlayer';
import { LessonQuiz } from '@/components/LessonQuiz';
import { lessons } from '@/data/lessons';
import { useLessonProgress } from '@/hooks/useLessonProgress';
import { ArrowLeft, Clock, Trophy } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export default function Lesson() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { updateProgress, getLessonProgress, getOverallProgress } = useLessonProgress();
  const [currentStep, setCurrentStep] = useState<'video' | 'quiz'>('video');
  const [videoWatched, setVideoWatched] = useState(false);

  const lesson = lessons.find(l => l.id === parseInt(lessonId || '1'));
  const lessonProgress = lesson ? getLessonProgress(lesson.id) : null;
  const overallProgress = getOverallProgress();

  useEffect(() => {
    if (!lesson) {
      navigate('/lessons');
    }
  }, [lesson, navigate]);

  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  const handleVideoEnd = () => {
    setVideoWatched(true);
    toast({
      title: "Video Completed!",
      description: "Now you can take the quiz to test your knowledge.",
    });
  };

  const handleQuizComplete = (score: number) => {
    updateProgress(lesson.id, score);
    toast({
      title: score >= 70 ? "Congratulations!" : "Keep Learning!",
      description: score >= 70 
        ? `You passed with ${score}%! Lesson completed.` 
        : `You scored ${score}%. Review the material and try again.`,
      variant: score >= 70 ? "default" : "destructive",
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/lessons')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Lessons
            </Button>
            <div className="flex items-center gap-4">
              <Badge variant="outline">Day {lesson.day}</Badge>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Trophy className="h-4 w-4" />
                {overallProgress.completed}/{overallProgress.total} completed
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Lesson Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Badge className={getDifficultyColor(lesson.difficulty)}>
              {lesson.difficulty}
            </Badge>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              {lesson.duration}
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2">{lesson.title}</h1>
          <p className="text-lg text-muted-foreground">{lesson.description}</p>
          
          {lessonProgress && (
            <Card className="mt-4 p-4 bg-green-50 border-green-200">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-green-600" />
                <span className="font-medium text-green-800">
                  Completed with {lessonProgress.score}%
                </span>
              </div>
            </Card>
          )}
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-6">
          <Button
            variant={currentStep === 'video' ? 'default' : 'outline'}
            onClick={() => setCurrentStep('video')}
          >
            1. Watch Video
          </Button>
          <Button
            variant={currentStep === 'quiz' ? 'default' : 'outline'}
            onClick={() => setCurrentStep('quiz')}
            disabled={!videoWatched && !lessonProgress}
          >
            2. Take Quiz
          </Button>
        </div>

        {/* Content */}
        {currentStep === 'video' && (
          <Card>
            <CardHeader>
              <CardTitle>{lesson.videoTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <VideoPlayer
                videoId={lesson.videoId}
                title={lesson.videoTitle}
                onVideoEnd={handleVideoEnd}
              />
              <div className="mt-4 flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  Watch the full video to unlock the quiz
                </div>
                <Button
                  onClick={() => setCurrentStep('quiz')}
                  disabled={!videoWatched && !lessonProgress}
                >
                  Continue to Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 'quiz' && (
          <LessonQuiz
            questions={lesson.questions}
            onComplete={handleQuizComplete}
          />
        )}

        {/* Overall Progress */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Course Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Overall Progress</span>
                <span>{overallProgress.percentage}%</span>
              </div>
              <Progress value={overallProgress.percentage} />
              <div className="text-xs text-muted-foreground">
                {overallProgress.completed} of {overallProgress.total} lessons completed
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
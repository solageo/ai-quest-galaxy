import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Question } from '@/types/lesson';
import { CheckCircle, XCircle } from 'lucide-react';

interface LessonQuizProps {
  questions: Question[];
  onComplete: (score: number) => void;
}

export const LessonQuiz = ({ questions, onComplete }: LessonQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // Quiz completed
      const score = Math.round((newAnswers.reduce((correct, answer, index) => 
        answer === questions[index].correctAnswer ? correct + 1 : correct, 0
      ) / questions.length) * 100);
      
      setQuizCompleted(true);
      onComplete(score);
    }
  };

  const handleShowResult = () => {
    if (selectedAnswer !== null) {
      setShowResult(true);
    }
  };

  if (quizCompleted) {
    const score = Math.round((answers.reduce((correct, answer, index) => 
      answer === questions[index].correctAnswer ? correct + 1 : correct, 0
    ) / questions.length) * 100);

    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center">Quiz Completed!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="text-4xl font-bold text-primary">{score}%</div>
          <p className="text-muted-foreground">
            You got {answers.filter((answer, index) => answer === questions[index].correctAnswer).length} out of {questions.length} questions correct.
          </p>
          <Badge variant={score >= 70 ? "default" : "destructive"}>
            {score >= 70 ? "Passed" : "Needs Review"}
          </Badge>
          <div className="space-y-2 text-left">
            {questions.map((question, index) => (
              <div key={question.id} className="flex items-center gap-2">
                {answers[index] === question.correctAnswer ? (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                ) : (
                  <XCircle className="h-4 w-4 text-red-500" />
                )}
                <span className="text-sm">{question.question}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  const question = questions[currentQuestion];

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Question {currentQuestion + 1} of {questions.length}</CardTitle>
          <Badge variant="outline">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <h3 className="text-lg font-medium">{question.question}</h3>
        
        <div className="space-y-2">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant={selectedAnswer === index ? "default" : "outline"}
              className="w-full text-left justify-start h-auto p-4"
              onClick={() => handleAnswerSelect(index)}
            >
              <span className="mr-2 font-bold">{String.fromCharCode(65 + index)}.</span>
              {option}
            </Button>
          ))}
        </div>

        {showResult && (
          <Card className={`p-4 ${selectedAnswer === question.correctAnswer ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
            <div className="flex items-center gap-2 mb-2">
              {selectedAnswer === question.correctAnswer ? (
                <>
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-green-800">Correct!</span>
                </>
              ) : (
                <>
                  <XCircle className="h-5 w-5 text-red-600" />
                  <span className="font-medium text-red-800">Incorrect</span>
                </>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{question.explanation}</p>
          </Card>
        )}

        <div className="flex gap-2">
          {!showResult ? (
            <Button 
              onClick={handleShowResult} 
              disabled={selectedAnswer === null}
              className="flex-1"
            >
              Check Answer
            </Button>
          ) : (
            <Button onClick={handleNext} className="flex-1">
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'Complete Quiz'}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowLeft, Trophy, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "What does AI stand for?",
      options: ["Advanced Intelligence", "Artificial Intelligence", "Automated Information", "Applied Integration"],
      correctAnswer: 1,
      explanation: "AI stands for Artificial Intelligence - the simulation of human intelligence in machines."
    },
    {
      id: 2,
      question: "Which of these is NOT a type of machine learning?",
      options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Biological Learning"],
      correctAnswer: 3,
      explanation: "Biological Learning is not a recognized type of machine learning. The three main types are supervised, unsupervised, and reinforcement learning."
    },
    {
      id: 3,
      question: "What is a neural network inspired by?",
      options: ["Computer circuits", "The human brain", "Mathematical equations", "Internet connections"],
      correctAnswer: 1,
      explanation: "Neural networks are inspired by the structure and function of the human brain, specifically how neurons connect and process information."
    },
    {
      id: 4,
      question: "In supervised learning, what do we need to train a model?",
      options: ["Only input data", "Only output data", "Input data with correct answers", "Random data"],
      correctAnswer: 2,
      explanation: "Supervised learning requires labeled training data - input data paired with the correct answers (labels) so the model can learn the relationship."
    },
    {
      id: 5,
      question: "What is deep learning?",
      options: ["Learning underwater", "A subset of machine learning using neural networks", "Very difficult learning", "Learning about the ocean"],
      correctAnswer: 1,
      explanation: "Deep learning is a subset of machine learning that uses artificial neural networks with multiple layers (hence 'deep') to model complex patterns."
    },
    {
      id: 6,
      question: "Which AI application helps Netflix recommend movies?",
      options: ["Image recognition", "Speech recognition", "Recommendation systems", "Natural language processing"],
      correctAnswer: 2,
      explanation: "Recommendation systems analyze user behavior and preferences to suggest content, which is how Netflix recommends movies and shows."
    },
    {
      id: 7,
      question: "What is computer vision?",
      options: ["Computers wearing glasses", "AI that can interpret visual information", "Computer screen technology", "Video game graphics"],
      correctAnswer: 1,
      explanation: "Computer vision is a field of AI that enables computers to interpret and understand visual information from images and videos."
    },
    {
      id: 8,
      question: "Which of these is an example of Natural Language Processing (NLP)?",
      options: ["Face recognition", "Voice assistants like Siri", "Self-driving cars", "Weather prediction"],
      correctAnswer: 1,
      explanation: "Voice assistants like Siri use Natural Language Processing to understand and respond to human speech and text."
    },
    {
      id: 9,
      question: "What is the main goal of reinforcement learning?",
      options: ["To memorize data", "To learn through trial and error", "To copy human behavior", "To process images"],
      correctAnswer: 1,
      explanation: "Reinforcement learning focuses on learning optimal actions through trial and error, receiving rewards or penalties for different choices."
    },
    {
      id: 10,
      question: "Which technology powers most modern chatbots like ChatGPT?",
      options: ["Decision trees", "Linear regression", "Transformer models", "Simple rules"],
      correctAnswer: 2,
      explanation: "Modern chatbots like ChatGPT use transformer models, which are advanced neural networks particularly good at understanding and generating text."
    }
  ];

  const handleAnswerSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      const newAnswers = [...selectedAnswers];
      newAnswers[currentQuestion] = selectedOption;
      setSelectedAnswers(newAnswers);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowResults(true);
      }
    }
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setSelectedOption(null);
  };

  const getScoreMessage = (score: number) => {
    if (score >= 9) return "Amazing! You're an AI expert! 🎉";
    if (score >= 7) return "Great job! You know your AI basics! 👏";
    if (score >= 5) return "Good work! Keep learning! 📚";
    return "Keep exploring AI - you'll get there! 💪";
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="min-h-screen bg-gradient-to-br from-ai-blue via-ai-purple to-ai-pink">
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-white hover:text-ai-orange transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          
          <Card className="max-w-2xl mx-auto shadow-card border-0">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Trophy className="h-16 w-16 text-ai-orange" />
              </div>
              <CardTitle className="text-3xl">Quiz Complete!</CardTitle>
              <CardDescription className="text-xl">
                {getScoreMessage(score)}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {score}/{questions.length}
                </div>
                <Progress value={(score / questions.length) * 100} className="h-4" />
                <p className="text-muted-foreground mt-2">
                  {Math.round((score / questions.length) * 100)}% Correct
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Review Your Answers:</h3>
                {questions.map((question, index) => {
                  const userAnswer = selectedAnswers[index];
                  const isCorrect = userAnswer === question.correctAnswer;
                  
                  return (
                    <Card key={question.id} className={`border ${isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                            isCorrect ? 'bg-green-500' : 'bg-red-500'
                          }`}>
                            {isCorrect ? (
                              <CheckCircle className="h-4 w-4 text-white" />
                            ) : (
                              <span className="text-white text-sm">✕</span>
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium mb-2">{question.question}</p>
                            <p className="text-sm text-muted-foreground mb-1">
                              Your answer: {question.options[userAnswer]}
                            </p>
                            {!isCorrect && (
                              <p className="text-sm text-green-700 mb-1">
                                Correct answer: {question.options[question.correctAnswer]}
                              </p>
                            )}
                            <p className="text-sm text-muted-foreground italic">
                              {question.explanation}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              
              <div className="flex gap-4 justify-center pt-4">
                <Button onClick={resetQuiz} variant="outline" className="space-x-2">
                  <RefreshCw className="h-4 w-4" />
                  <span>Try Again</span>
                </Button>
                <Button asChild variant="hero">
                  <Link to="/">Continue Learning</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-ai-blue via-ai-purple to-ai-pink">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center space-x-2 text-white hover:text-ai-orange transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
        
        <Card className="max-w-2xl mx-auto shadow-card border-0">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">AI Knowledge Quiz</CardTitle>
              <Badge variant="secondary">
                Question {currentQuestion + 1} of {questions.length}
              </Badge>
            </div>
            <Progress value={progress} className="h-3" />
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-6">{question.question}</h3>
              
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                      selectedOption === index
                        ? 'border-primary bg-primary/10 shadow-md'
                        : 'border-muted hover:border-primary/50 hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedOption === index
                          ? 'border-primary bg-primary'
                          : 'border-muted-foreground'
                      }`}>
                        {selectedOption === index && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <span className="font-medium">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button 
                onClick={handleNextQuestion}
                disabled={selectedOption === null}
                variant="hero"
                size="lg"
              >
                {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;
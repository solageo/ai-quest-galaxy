export interface Lesson {
  id: number;
  day: number;
  title: string;
  description: string;
  videoId: string;
  videoTitle: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  questions: Question[];
  completed: boolean;
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface LessonProgress {
  lessonId: number;
  completed: boolean;
  score: number;
  completedAt?: Date;
}
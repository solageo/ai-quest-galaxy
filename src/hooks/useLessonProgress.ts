import { useState, useEffect } from 'react';
import { LessonProgress } from '@/types/lesson';

export const useLessonProgress = () => {
  const [progress, setProgress] = useState<LessonProgress[]>([]);

  useEffect(() => {
    const savedProgress = localStorage.getItem('lessonProgress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  const updateProgress = (lessonId: number, score: number) => {
    const newProgress = progress.filter(p => p.lessonId !== lessonId);
    newProgress.push({
      lessonId,
      completed: score >= 70,
      score,
      completedAt: new Date()
    });
    setProgress(newProgress);
    localStorage.setItem('lessonProgress', JSON.stringify(newProgress));
  };

  const getLessonProgress = (lessonId: number) => {
    return progress.find(p => p.lessonId === lessonId);
  };

  const getOverallProgress = () => {
    const completed = progress.filter(p => p.completed).length;
    const total = 28; // Total lessons
    return { completed, total, percentage: Math.round((completed / total) * 100) };
  };

  return {
    progress,
    updateProgress,
    getLessonProgress,
    getOverallProgress
  };
};
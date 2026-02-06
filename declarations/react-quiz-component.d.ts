declare module 'react-quiz-component' {
  import React from 'react';
    interface Question {
    question: string;
    answers: string[];
    correctAnswerIndex: number;
    explanation?: string;
  }

  interface QuizProps {
    questions: Question[];
    shuffle?: boolean;
    onComplete?: (results: any) => void;
    showInstantFeedback?: boolean;
    continueTillCorrect?: boolean;
    attempts?: number;
  }

  const QuizComponent: any;

  export default QuizComponent;
}
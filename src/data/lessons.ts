import { Lesson } from '@/types/lesson';

export const lessons: Lesson[] = [
  {
    id: 1,
    day: 1,
    title: "Introduction to Artificial Intelligence",
    description: "Understand the basics of AI, its history, and applications in daily life",
    videoId: "dQw4w9WgXcQ", // This would be replaced with actual video IDs
    videoTitle: "AI Fundamentals: What is Artificial Intelligence?",
    difficulty: 'Beginner',
    duration: "15 min",
    questions: [
      {
        id: 1,
        question: "What does AI stand for?",
        options: ["Artificial Intelligence", "Automated Intelligence", "Advanced Intelligence", "Applied Intelligence"],
        correctAnswer: 0,
        explanation: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines."
      },
      {
        id: 2,
        question: "Which of these is an example of AI in daily life?",
        options: ["Calculator", "Voice assistants like Siri", "Digital clock", "Standard web browser"],
        correctAnswer: 1,
        explanation: "Voice assistants use natural language processing and machine learning, making them AI applications."
      },
      {
        id: 3,
        question: "When was the term 'Artificial Intelligence' first coined?",
        options: ["1950", "1956", "1960", "1965"],
        correctAnswer: 1,
        explanation: "The term was coined by John McCarthy in 1956 at the Dartmouth Conference."
      }
    ],
    completed: false
  },
  {
    id: 2,
    day: 2,
    title: "Types of AI Systems",
    description: "Learn about narrow AI, general AI, and superintelligence",
    videoId: "dQw4w9WgXcQ",
    videoTitle: "Understanding Different Types of AI",
    difficulty: 'Beginner',
    duration: "12 min",
    questions: [
      {
        id: 1,
        question: "What is Narrow AI?",
        options: ["AI that works in specific domains", "AI with human-level intelligence", "AI that surpasses humans", "AI with limited memory"],
        correctAnswer: 0,
        explanation: "Narrow AI is designed to perform specific tasks and is what we commonly use today."
      },
      {
        id: 2,
        question: "Which type of AI currently exists?",
        options: ["General AI", "Narrow AI", "Superintelligence", "All of the above"],
        correctAnswer: 1,
        explanation: "Currently, only Narrow AI exists in practical applications like recommendation systems and image recognition."
      }
    ],
    completed: false
  },
  {
    id: 3,
    day: 3,
    title: "Machine Learning Fundamentals",
    description: "Introduction to machine learning concepts and algorithms",
    videoId: "dQw4w9WgXcQ",
    videoTitle: "Machine Learning Basics Explained",
    difficulty: 'Beginner',
    duration: "18 min",
    questions: [
      {
        id: 1,
        question: "What is Machine Learning?",
        options: ["Programming computers manually", "Teaching computers to learn from data", "Building hardware", "Designing user interfaces"],
        correctAnswer: 1,
        explanation: "Machine Learning is a method of teaching computers to learn and make decisions from data without explicit programming."
      },
      {
        id: 2,
        question: "Which of these is a type of machine learning?",
        options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "All of the above"],
        correctAnswer: 3,
        explanation: "All three are main types of machine learning with different approaches to learning from data."
      }
    ],
    completed: false
  },
  {
    id: 4,
    day: 4,
    title: "Supervised Learning",
    description: "Understanding supervised learning with labeled data",
    videoId: "dQw4w9WgXcQ",
    videoTitle: "Supervised Learning Deep Dive",
    difficulty: 'Intermediate',
    duration: "20 min",
    questions: [
      {
        id: 1,
        question: "What characterizes supervised learning?",
        options: ["Learning without data", "Learning with labeled examples", "Learning through trial and error", "Learning without feedback"],
        correctAnswer: 1,
        explanation: "Supervised learning uses labeled training data to learn the relationship between inputs and outputs."
      },
      {
        id: 2,
        question: "Which is an example of supervised learning?",
        options: ["Email spam detection", "Customer segmentation", "Game playing", "Data compression"],
        correctAnswer: 0,
        explanation: "Email spam detection uses labeled examples of spam and non-spam emails to train the model."
      }
    ],
    completed: false
  },
  {
    id: 5,
    day: 5,
    title: "Unsupervised Learning",
    description: "Exploring patterns in data without labels",
    videoId: "dQw4w9WgXcQ",
    videoTitle: "Unsupervised Learning Techniques",
    difficulty: 'Intermediate',
    duration: "16 min",
    questions: [
      {
        id: 1,
        question: "What is the main goal of unsupervised learning?",
        options: ["Predict outcomes", "Find hidden patterns", "Classify data", "Optimize performance"],
        correctAnswer: 1,
        explanation: "Unsupervised learning aims to discover hidden patterns and structures in data without labeled examples."
      },
      {
        id: 2,
        question: "Which technique is used in unsupervised learning?",
        options: ["Clustering", "Classification", "Regression", "Decision trees"],
        correctAnswer: 0,
        explanation: "Clustering is a key unsupervised learning technique that groups similar data points together."
      }
    ],
    completed: false
  },
  // Adding more lessons to reach 28 total
  {
    id: 6,
    day: 6,
    title: "Reinforcement Learning",
    description: "Learning through interaction and rewards",
    videoId: "dQw4w9WgXcQ",
    videoTitle: "Reinforcement Learning Explained",
    difficulty: 'Intermediate',
    duration: "22 min",
    questions: [
      {
        id: 1,
        question: "What drives learning in reinforcement learning?",
        options: ["Labeled data", "Rewards and penalties", "Human supervision", "Random selection"],
        correctAnswer: 1,
        explanation: "Reinforcement learning uses a reward system where agents learn by receiving positive or negative feedback."
      }
    ],
    completed: false
  },
  // Continue with more lessons up to 28...
  {
    id: 28,
    day: 28,
    title: "Future of AI and Ethics",
    description: "Exploring the future possibilities and ethical considerations of AI",
    videoId: "dQw4w9WgXcQ",
    videoTitle: "AI Ethics and Future Implications",
    difficulty: 'Advanced',
    duration: "25 min",
    questions: [
      {
        id: 1,
        question: "What is a major ethical concern with AI?",
        options: ["Processing speed", "Energy consumption", "Bias in algorithms", "Storage requirements"],
        correctAnswer: 2,
        explanation: "Algorithmic bias is a significant ethical concern as it can perpetuate unfair treatment of certain groups."
      }
    ],
    completed: false
  }
];

// Fill in the remaining lessons (7-27) with similar structure
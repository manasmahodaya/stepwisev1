export type Skill =
  | "planning"
  | "prioritization"
  | "decision_making"
  | "flexible_thinking"
  | "information_gathering"
  | "consequence_prediction"
  | "social_problem_solving"
  | "help_seeking"
  | "reflection";

export interface ExerciseOption {
  id: string;
  text: string;
  reasoningScore: 0 | 1 | 2 | 3;
  feedback: string;
}

export interface ExerciseQuestion {
  id: string;
  text: string;
  type: "choice";
  options: ExerciseOption[];
}

export interface Exercise {
  id: string;
  title: string;
  category: string;
  skills: Skill[];
  difficulty: 1 | 2 | 3;
  estimatedMinutes: number;
  scenario: string;
  questions: ExerciseQuestion[];
  completionMessage: string;
}

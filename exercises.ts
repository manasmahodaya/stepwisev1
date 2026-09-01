import exercises from "@/data/exercises.json";
import type { Exercise } from "@/types/exercise";

export const allExercises = exercises as Exercise[];

export function getExercise(id: string) {
  return allExercises.find((exercise) => exercise.id === id);
}

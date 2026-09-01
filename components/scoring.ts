export function getFeedback(score: number) {
  if (score >= 3) {
    return "Good thinking. You considered an important part of the problem.";
  }
  if (score >= 1) {
    return "That is one possibility. Let's think about what else could help.";
  }
  return "Let's look at the situation again and consider another option.";
}

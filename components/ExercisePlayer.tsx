use client';

import { useMemo, useState } from "react";
import type { Exercise } from "@/types/exercise";
import { getFeedback } from "@/lib/scoring";
import ProgressBar from "./ProgressBar";

export default function ExercisePlayer({ exercise }: { exercise: Exercise }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);
  const [scores, setScores] = useState<number[]>([]);

  const question = exercise.questions[questionIndex];
  const selectedOption = useMemo(
    () => question?.options.find((o) => o.id === selected),
    [question, selected]
  );

  if (finished) {
    const total = scores.reduce((a, b) => a + b, 0);
    return (
      <main className="container" style={{padding: "48px 0"}}>
        <div className="card">
          <div style={{fontSize: 42}}>✓</div>
          <h1 style={{fontSize: 32, margin: "12px 0"}}>Practice complete</h1>
          <p style={{fontSize: 18, lineHeight: 1.6}}>{exercise.completionMessage}</p>
          <p className="small">Practice score: {total}</p>
          <a className="primary" href="/home" style={{marginTop: 20}}>Back to home</a>
        </div>
      </main>
    );
  }

  const handleContinue = () => {
    if (!selectedOption) return;
    const nextScores = [...scores, selectedOption.reasoningScore];
    setScores(nextScores);
    if (questionIndex + 1 >= exercise.questions.length) {
      setFinished(true);
      return;
    }
    setQuestionIndex((i) => i + 1);
    setSelected(null);
  };

  return (
    <main className="container" style={{padding: "32px 0 60px"}}>
      <a href="/home" className="small">← Back</a>
      <div style={{marginTop: 24}}>
        <ProgressBar current={questionIndex + 1} total={exercise.questions.length} />
      </div>

      <div className="card" style={{marginTop: 24}}>
        <div className="small">{exercise.category.replace("_", " ")} · Level {exercise.difficulty}</div>
        <h1 style={{fontSize: 30, margin: "10px 0 18px"}}>{exercise.title}</h1>

        <div style={{background: "#f0f5f2", padding: 18, borderRadius: 16, lineHeight: 1.6}}>
          {exercise.scenario}
        </div>

        <h2 style={{fontSize: 22, marginTop: 28}}>{question.text}</h2>

        <div>
          {question.options.map((option) => (
            <button
              key={option.id}
              className={`option ${selected === option.id ? "selected" : ""}`}
              onClick={() => setSelected(option.id)}
            >
              {option.text}
            </button>
          ))}
        </div>

        {selectedOption && (
          <div style={{marginTop: 20, padding: 18, borderRadius: 16, background: "#f7f8f6"}}>
            <strong>{getFeedback(selectedOption.reasoningScore)}</strong>
            <p style={{lineHeight: 1.6, marginBottom: 0}}>{selectedOption.feedback}</p>
          </div>
        )}

        <button
          className="primary"
          disabled={!selected}
          onClick={handleContinue}
          style={{marginTop: 24, opacity: selected ? 1 : 0.45}}
        >
          {questionIndex + 1 === exercise.questions.length ? "Finish" : "Continue"}
        </button>
      </div>
    </main>
  );
}

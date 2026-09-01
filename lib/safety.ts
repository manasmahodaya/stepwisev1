export type SafetyLevel = "normal" | "support" | "urgent";

/*
 * V1 safety placeholder.
 * Do not treat this as a clinical risk detector.
 * Before public/clinical use, replace with a clinician-reviewed safety protocol
 * and tested escalation workflow.
 */
export function classifyInput(_text: string): SafetyLevel {
  return "normal";
}

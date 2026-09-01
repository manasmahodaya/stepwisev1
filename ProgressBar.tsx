export default function ProgressBar({ current, total }: { current: number; total: number }) {
  const width = Math.max(0, Math.min(100, (current / total) * 100));
  return (
    <div aria-label={`Question ${current} of ${total}`}>
      <div style={{height: 8, background: "#e3e9e5", borderRadius: 999}}>
        <div style={{height: 8, width: `${width}%`, background: "var(--accent)", borderRadius: 999}} />
      </div>
      <div className="small" style={{marginTop: 8}}>Question {current} of {total}</div>
    </div>
  );
}

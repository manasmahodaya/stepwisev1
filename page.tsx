import Link from "next/link";

export default function Welcome() {
  return (
    <main className="container" style={{padding: "70px 0"}}>
      <div className="card" style={{textAlign: "center"}}>
        <div style={{fontSize: 48}}>🧩</div>
        <h1 style={{fontSize: 42, margin: "12px 0"}}>StepWise</h1>
        <p style={{fontSize: 21, lineHeight: 1.6, maxWidth: 560, margin: "0 auto"}}>
          Practice everyday problem-solving skills, one small situation at a time.
        </p>
        <p className="small" style={{maxWidth: 540, margin: "18px auto"}}>
          StepWise is a skills-practice prototype. It is not a replacement for medical care,
          psychotherapy, medication, or emergency support.
        </p>
        <Link className="primary" href="/home" style={{marginTop: 12}}>Start practice</Link>
      </div>
    </main>
  );
}

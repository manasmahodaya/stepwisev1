# StepWise

StepWise is a prototype for structured everyday problem-solving practice.

## Important

This prototype is not a medical device, diagnostic tool, therapist, crisis service, or replacement for clinical care. Before public/clinical use, the content, safety protocol, privacy design, accessibility, and claims should be reviewed by qualified professionals.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Local JSON exercise data in V1
- Planned: Supabase + Vercel

## Run locally

1. Install Node.js LTS.
2. Open a terminal in this folder.
3. Run:

```bash
npm install
npm run dev
```

4. Open http://localhost:3000

## Next build

- Add Supabase authentication.
- Move exercises/progress to Supabase.
- Add Row Level Security.
- Add clinician-reviewed safety workflow.
- Add privacy policy/consent flows.
- Only then consider controlled AI personalization.

## Deployment

The intended deployment target is Vercel. Connect the Git repository to Vercel and deploy. If environment variables are added later, add them in Vercel Project Settings rather than committing secrets.

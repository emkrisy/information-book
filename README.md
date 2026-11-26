# 52-Week Athletic Transformation Handbook

An interactive, evidence-based web handbook covering body recomposition, functional strength training, zero-to-marathon running progression, active recovery, cycled nutrition, and applied sports science.

## Features

- **52-Week Macrocycle Infographic**: Interactive 4-phase timeline charting weekly running volume, long-run distance, deload weeks, strength frequency, and daily calorie scaling.
- **Anatomical Muscle Atlas**: Interactive front and back muscle map detailing actions, program exercises, running relevance, and beginner-to-Phase-3 load targets.
- **Movement Biomechanics Visualizer**: Six fundamental movement patterns (Squat, Hinge, Push, Pull, Lunge, Core/Carry) plus running cadence mechanics with Optimal Form vs. Common Fault comparisons.
- **Pace & Heart Rate Zone Calculator**: Live Riegel 10K pace projection and Tanaka/Karvonen heart rate reserve zones paired with RPE and Talk Test cues.
- **Nutrition & Race Fueling Planner**: Daily calorie/macro cycling, Phase 1–4 carbohydrate scaling, Energy Availability (RED-S) safety gauge, and marathon race-day fueling timeline.
- **Applied Sports Science & Recovery**: Daily Traffic-Light Readiness Check, stretch physiology diagrams, injury troubleshooting, health screening (ACSM/PAR-Q+), and peer-reviewed citations.

## Publish to Your Personal GitHub Pages

1. Create a new repository on GitHub (e.g., `athletic-transformation-handbook`).
2. Push this project to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: 52-Week Athletic Transformation Handbook"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/athletic-transformation-handbook.git
   git push -u origin main
   ```
3. In your GitHub repository, open **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
4. The included `.github/workflows/deploy.yml` workflow will automatically build and publish the site.

## Local Development

```bash
npm install
npm run dev
```

export interface WeekSummary {
  week: number;
  phaseId: 'phase1' | 'phase2' | 'phase3' | 'phase4';
  phaseLabel: string;
  isDeload: boolean;
  isTest: boolean;
  isRace: boolean;
  weeklyKm: number;
  longRunKm: number;
  strengthSessions: number;
  runsPerWeek: number;
  calories: number;
  headline: string;
  runNote: string;
  strengthNote: string;
  nutritionNote: string;
}

export interface MuscleGroupInfo {
  id: string;
  name: string;
  view: 'front' | 'back' | 'both';
  priority: string;
  actions: string;
  exercises: string[];
  homeAlternatives: string[];
  whyItMatters: string;
  startingLoad?: string;
  phase3Target?: string;
  weeklySets: string;
}

export interface MovementPatternInfo {
  id: 'squat' | 'hinge' | 'push' | 'pull' | 'lunge' | 'core' | 'run';
  name: string;
  jointsAndMuscles: string;
  exercises: string;
  setup: string;
  checkpoints: string[];
  externalCue: string;
  commonFault: string;
  fix: string;
  biomechanicsNote: string;
}

export interface ExerciseRow {
  gym: string;
  home: string;
  phase1: string;
  phase2: string;
  phase3: string;
  cues: string;
}

export const PROFILE_METRICS = [
  { label: 'Height / Weight', value: '164 cm · 61 kg', note: 'Healthy range: 50–67 kg · BMI 22.7' },
  { label: 'Starting Body Fat', value: '~18% (15–20%)', note: '~11 kg fat mass · ~50 kg lean mass' },
  { label: 'Week 12 Target', value: '14–15% BF', note: 'Scale ~61 kg · Waist -3 to -6 cm · 5K & 10K' },
  { label: 'Week 52 Target', value: '12–14% BF', note: '+2–4 kg lean mass · Half (W34) & Marathon (W52)' },
];

export const YEAR_MILESTONES = [
  { week: 0, label: 'Baseline', weight: 61, bfPct: 18, fatKg: 11.0, leanKg: 50.0, waistDelta: '0 cm', pushups: 'Baseline test', deadlift: '40–50 kg', pullups: '0–2', running: 'Under 1 km' },
  { week: 12, label: 'Phase 1 End', weight: 61.2, bfPct: 15, fatKg: 9.2, leanKg: 52.0, waistDelta: '-3 to -6 cm', pushups: '~2x baseline', deadlift: '55–65 kg', pullups: '1–3 (assisted)', running: '5K (W8), 10K (W12)' },
  { week: 20, label: 'Speed + Lean', weight: 60.8, bfPct: 14, fatKg: 8.5, leanKg: 52.3, waistDelta: '-5 to -8 cm', pushups: '30–35', deadlift: '65–75 kg', pullups: '3–5', running: '10K 72–80 min' },
  { week: 34, label: 'Half Marathon', weight: 62.0, bfPct: 13.5, fatKg: 8.4, leanKg: 53.6, waistDelta: '-5 to -9 cm', pushups: '35–40', deadlift: '70–85 kg', pullups: '5–7', running: 'Half 2:30–2:50' },
  { week: 52, label: 'Marathon', weight: 62.5, bfPct: 13.0, fatKg: 8.1, leanKg: 54.4, waistDelta: '-5 to -9 cm', pushups: '40+', deadlift: '75–95 kg', pullups: '6–10', running: 'Marathon 5:15–5:50' },
];

export const PHASE_METADATA = [
  {
    id: 'phase1' as const,
    name: 'Phase 1: Foundation, Build & 10K',
    weeks: 'Weeks 1–12',
    color: '#0284c7',
    runsPerWeek: '3 runs/wk',
    strengthPerWeek: '3 sessions/wk',
    calories: '~2,300 kcal (cycled)',
    entryGate: 'PAR-Q+ & ACSM screening cleared; 30–40 min steady walk tolerance.',
    schedule: [
      { day: 'Mon', session: 'Strength A: Upper body', time: '60–70 min', intensity: 'Hard (1–3 RIR)' },
      { day: 'Tue', session: 'Run 1: Intervals / fartlek', time: '30–45 min', intensity: 'Easy–moderate' },
      { day: 'Wed', session: 'Strength B: Lower body + core', time: '60–70 min', intensity: 'Hard' },
      { day: 'Thu', session: 'Run 2: Short easy run + prehab', time: '25–40 min', intensity: 'Very easy' },
      { day: 'Fri', session: 'Strength C: Full body + finisher', time: '60–70 min', intensity: 'Moderate–hard' },
      { day: 'Sat', session: 'Run 3: Long run', time: '35–90 min', intensity: 'Easy, steady' },
      { day: 'Sun', session: 'Active recovery: Swim + 25m flex', time: '45–60 min', intensity: 'Very easy' },
    ],
  },
  {
    id: 'phase2' as const,
    name: 'Phase 2: Reset, 10K Speed & Lean-Out',
    weeks: 'Weeks 13–20',
    color: '#0d9488',
    runsPerWeek: '3 runs/wk',
    strengthPerWeek: '3 sessions/wk (hypertrophy)',
    calories: '2,250 kcal (2,500 on W13/W20)',
    entryGate: 'Completed 10K in Phase 1 with no persistent pain; ≥80% planned runs done.',
    schedule: [
      { day: 'Mon', session: 'Upper A (heavy 6–8 reps)', time: '60 min', intensity: '1–2 RIR' },
      { day: 'Tue', session: 'Quality run (tempo or intervals)', time: '35–50 min', intensity: 'RPE 6–8' },
      { day: 'Wed', session: 'Lower body + core', time: '60 min', intensity: 'Hard' },
      { day: 'Thu', session: 'Easy run + 10m prehab', time: '30–40 min', intensity: 'Easy (RPE 3–4)' },
      { day: 'Fri', session: 'Upper B + full body', time: '60 min', intensity: '2–3 RIR' },
      { day: 'Sat', session: 'Long run (8–11 km)', time: '60–90 min', intensity: 'Easy' },
      { day: 'Sun', session: 'Swim (up to 1,800 m) + flexibility', time: '45–60 min', intensity: 'Very easy' },
    ],
  },
  {
    id: 'phase3' as const,
    name: 'Phase 3: Half Marathon Build',
    weeks: 'Weeks 21–34',
    color: '#d97706',
    runsPerWeek: '4 runs/wk (up to 41 km)',
    strengthPerWeek: '2 sessions/wk (+ opt. 25m acc.)',
    calories: '2,650–2,700 kcal + carb load',
    entryGate: '10K in ≤80 min, 3 runs/wk for 8+ weeks, green days outnumber yellow.',
    schedule: [
      { day: 'Mon', session: 'Strength A (full body heavy)', time: '45–50 min', intensity: '2–3 RIR' },
      { day: 'Tue', session: 'Quality run (tempo / 5K intervals)', time: '45–60 min', intensity: 'RPE 6–8' },
      { day: 'Wed', session: 'Easy run (5–7 km)', time: '40–55 min', intensity: 'Zone 2' },
      { day: 'Thu', session: 'Strength B (light)', time: '45 min', intensity: '2–3 RIR' },
      { day: 'Fri', session: 'Rest or swim (or 25m accessory)', time: '25–40 min', intensity: 'Very easy' },
      { day: 'Sat', session: 'Long run (10–18 km)', time: '70–145 min', intensity: 'Easy + late HM pace' },
      { day: 'Sun', session: 'Easy 4–5 km (optional) or swim', time: '30–45 min', intensity: 'Very easy' },
    ],
  },
  {
    id: 'phase4' as const,
    name: 'Phase 4: Marathon Build & Taper',
    weeks: 'Weeks 35–52',
    color: '#b91c1c',
    runsPerWeek: '5 runs/wk (up to 64 km)',
    strengthPerWeek: '2 maintenance sessions/wk',
    calories: '2,750–3,000 kcal + race carb load',
    entryGate: 'Half marathon finished, 35–40 km/wk for 6+ weeks, medical check cleared.',
    schedule: [
      { day: 'Mon', session: 'Strength A (2–3 sets maintenance)', time: '40–45 min', intensity: '2–3 RIR' },
      { day: 'Tue', session: 'Quality run (tempo / MP blocks)', time: '50–75 min', intensity: 'RPE 5–7' },
      { day: 'Wed', session: 'Medium-easy run (8–12 km)', time: '60–95 min', intensity: 'Zone 2' },
      { day: 'Thu', session: 'Strength B (light)', time: '35–40 min', intensity: 'Light/moderate' },
      { day: 'Fri', session: 'Easy 5 km or rest', time: '35–45 min', intensity: 'Zone 1–2' },
      { day: 'Sat', session: 'Long run (14–30 km, cap 3.5–4 h)', time: '1.5–4 h', intensity: 'Easy + MP finishes' },
      { day: 'Sun', session: 'Recovery 5 km (optional) or swim', time: '25–40 min', intensity: 'Very easy' },
    ],
  },
];

// Full 52-week dataset compiled directly from Sections 3.3, 3.4, 5.3, 11.4, 12.5, and 12.6
export const WEEKS_52: WeekSummary[] = [
  // Phase 1 (1-12)
  { week: 1, phaseId: 'phase1', phaseLabel: 'Foundation', isDeload: false, isTest: false, isRace: false, weeklyKm: 4.5, longRunKm: 1.8, strengthSessions: 3, runsPerWeek: 3, calories: 2300, headline: 'Learn technique & easy walk/jog', runNote: 'Tue 8x(1J/1.5W), Thu 6x(1J/2W), Sat 8x(1.5J/2W) (~26 min jog)', strengthNote: '3x10–12 @ 3 RIR, video form check', nutritionNote: 'Track food for calibration, 125g protein' },
  { week: 2, phaseId: 'phase1', phaseLabel: 'Foundation', isDeload: false, isTest: false, isRace: false, weeklyKm: 7.5, longRunKm: 3.0, strengthSessions: 3, runsPerWeek: 3, calories: 2300, headline: 'Longer jog intervals', runNote: 'Tue 8x(2J/1.5W), Thu 6x(2J/1.5W), Sat 6x(3J/2W) (~46 min jog)', strengthNote: 'Add 1 rep per set weekly', nutritionNote: 'Hit 125g protein daily' },
  { week: 3, phaseId: 'phase1', phaseLabel: 'Foundation', isDeload: false, isTest: false, isRace: false, weeklyKm: 9.5, longRunKm: 3.8, strengthSessions: 3, runsPerWeek: 3, calories: 2300, headline: 'First 5-minute jogs', runNote: 'Tue 6x(3J/1.5W), Thu 5x(3J/1W), Sat 5x(5J/2W) (~58 min jog)', strengthNote: 'Add weight, progress to 2 RIR', nutritionNote: 'Keep sleep 7.5+ h' },
  { week: 4, phaseId: 'phase1', phaseLabel: 'Deload', isDeload: true, isTest: true, isRace: false, weeklyKm: 7.5, longRunKm: 2.8, strengthSessions: 3, runsPerWeek: 3, calories: 2300, headline: 'Deload + 1 km test', runNote: 'Tue 4x(4J/1W), Thu 4x(3J/1W), Sat 3x(6J/1.5W) (~46 min jog)', strengthNote: 'Deload: 2 sets, same weight, 3–4 RIR', nutritionNote: 'Reassess weight & waist; 1 km test' },
  { week: 5, phaseId: 'phase1', phaseLabel: 'Build', isDeload: false, isTest: false, isRace: false, weeklyKm: 12.5, longRunKm: 4.5, strengthSessions: 3, runsPerWeek: 3, calories: 2300, headline: '10-minute jog blocks', runNote: 'Tue 4x(7J/1.5W), Thu 3x(6J/1W), Sat 3x(10J/2W) (~76 min jog)', strengthNote: 'Build: 4 sets x 8–10 hypertrophy @ 2 RIR', nutritionNote: 'Increase carbs on run days (350g)' },
  { week: 6, phaseId: 'phase1', phaseLabel: 'Build', isDeload: false, isTest: false, isRace: false, weeklyKm: 13.0, longRunKm: 4.0, strengthSessions: 3, runsPerWeek: 3, calories: 2300, headline: 'First 25 min continuous run', runNote: 'Tue 3x(10J/1.5W), Thu 2x(10J/1W), Sat 25 min continuous', strengthNote: 'Add load when hitting top reps', nutritionNote: 'Adjust calories ±150 if weight trend stalls' },
  { week: 7, phaseId: 'phase1', phaseLabel: 'Build', isDeload: false, isTest: false, isRace: false, weeklyKm: 15.0, longRunKm: 4.5, strengthSessions: 3, runsPerWeek: 3, calories: 2300, headline: 'Near 5K endurance (35 min continuous)', runNote: 'Tue 2x(15J/1.5W), Thu 20 min continuous, Sat 35 min (~4 km)', strengthNote: 'Peak build volume, last set 1 RIR', nutritionNote: 'Prioritise post-workout recovery meals' },
  { week: 8, phaseId: 'phase1', phaseLabel: 'Deload + 5K', isDeload: true, isTest: true, isRace: false, weeklyKm: 12.0, longRunKm: 5.0, strengthSessions: 3, runsPerWeek: 3, calories: 2300, headline: 'Deload + First 5K Test', runNote: 'Tue 20m easy, Thu 15m + 4 strides, Sat 5K Test (target 40–45m)', strengthNote: 'Deload: 2–3 sets @ 3 RIR', nutritionNote: 'Eat well before Saturday 5K test' },
  { week: 9, phaseId: 'phase1', phaseLabel: 'Performance', isDeload: false, isTest: false, isRace: false, weeklyKm: 15.0, longRunKm: 6.0, strengthSessions: 3, runsPerWeek: 3, calories: 2300, headline: 'Extend toward 10K (6 km long run)', runNote: 'Tue 30m + 4 strides, Thu 25m easy, Sat 6 km easy long run', strengthNote: '4x6–8 upper, 3x6–8 legs @ 1–2 RIR', nutritionNote: 'Fuel long runs' },
  { week: 10, phaseId: 'phase1', phaseLabel: 'Performance', isDeload: false, isTest: false, isRace: false, weeklyKm: 17.0, longRunKm: 7.0, strengthSessions: 3, runsPerWeek: 3, calories: 2300, headline: 'Fartlek speed play + 7 km long run', runNote: 'Tue 35m w/ 5x(1 fast/2 easy), Thu 30m easy, Sat 7 km easy', strengthNote: 'Intensifiers on shoulders & arms', nutritionNote: 'Check 7-day weight & waist trend' },
  { week: 11, phaseId: 'phase1', phaseLabel: 'Performance', isDeload: false, isTest: false, isRace: false, weeklyKm: 19.0, longRunKm: 8.0, strengthSessions: 3, runsPerWeek: 3, calories: 2300, headline: 'Peak Phase 1 long run (8 km)', runNote: 'Tue 35m w/ 6x(1.5 fast/2 easy), Thu 30m easy, Sat 8 km easy', strengthNote: 'Hold loads, protect legs (3 sets)', nutritionNote: 'Carb up day before; carry water/snack >60m' },
  { week: 12, phaseId: 'phase1', phaseLabel: 'Taper + 10K', isDeload: true, isTest: true, isRace: true, weeklyKm: 16.0, longRunKm: 10.0, strengthSessions: 3, runsPerWeek: 3, calories: 2300, headline: '10K Race Event & Full Retest', runNote: 'Tue 25m + 4 strides, Thu 15m easy, Sat 10K Event (75–95m)', strengthNote: 'Taper: 2 sets @ 3 RIR, light Wed legs', nutritionNote: 'Extra carbs Fri + pre-race breakfast' },

  // Phase 2 (13-20)
  { week: 13, phaseId: 'phase2', phaseLabel: 'Reset', isDeload: true, isTest: true, isRace: false, weeklyKm: 14, longRunKm: 6, strengthSessions: 2, runsPerWeek: 2, calories: 2500, headline: 'Reset week & full baseline retest', runNote: 'Tue 30m easy, Thu 25m easy, Sat 6 km easy (~14 km)', strengthNote: '2 sessions @ 60% normal sets', nutritionNote: 'Maintenance ~2,500 kcal to restore energy' },
  { week: 14, phaseId: 'phase2', phaseLabel: 'Speed + Lean', isDeload: false, isTest: false, isRace: false, weeklyKm: 19, longRunKm: 8, strengthSessions: 3, runsPerWeek: 3, calories: 2250, headline: 'Introduce tempo + lean-out start', runNote: 'Tue 3x4m tempo/2m jog, Thu 5 km easy, Sat 8 km easy (~19 km)', strengthNote: 'Hypertrophy split: Upper A / Lower / Upper B', nutritionNote: '2,250 kcal, 130g protein (-0.2 to -0.4 kg/wk)' },
  { week: 15, phaseId: 'phase2', phaseLabel: 'Speed + Lean', isDeload: false, isTest: false, isRace: false, weeklyKm: 21, longRunKm: 9, strengthSessions: 3, runsPerWeek: 3, calories: 2250, headline: 'Build tempo volume', runNote: 'Tue 4x4m tempo/2m jog, Thu 5 km easy, Sat 9 km easy (~21 km)', strengthNote: '1–2 RIR, add reps then load', nutritionNote: '2,250 kcal, high protein' },
  { week: 16, phaseId: 'phase2', phaseLabel: 'Speed + Lean', isDeload: false, isTest: false, isRace: false, weeklyKm: 23, longRunKm: 10, strengthSessions: 3, runsPerWeek: 3, calories: 2250, headline: '5x4m tempo + 10 km long run', runNote: 'Tue 5x4m tempo/2m jog, Thu 5 km easy, Sat 10 km easy (~23 km)', strengthNote: 'Progressive overload on compounds', nutritionNote: 'Monitor waist & lifts; stop lean-out if ≤12% BF' },
  { week: 17, phaseId: 'phase2', phaseLabel: 'Deload', isDeload: true, isTest: false, isRace: false, weeklyKm: 16, longRunKm: 7, strengthSessions: 3, runsPerWeek: 3, calories: 2250, headline: 'Phase 2 lighter recovery week', runNote: 'Tue 3x4m tempo, Thu 4 km easy, Sat 7 km easy (~16 km)', strengthNote: '2 sets per exercise (lighter)', nutritionNote: 'Consider 1-wk maintenance diet break if fatigued' },
  { week: 18, phaseId: 'phase2', phaseLabel: 'Speed + Lean', isDeload: false, isTest: false, isRace: false, weeklyKm: 25, longRunKm: 11, strengthSessions: 3, runsPerWeek: 3, calories: 2250, headline: '2x10m tempo + 11 km peak run', runNote: 'Tue 2x10m tempo/3m jog, Thu 6 km easy, Sat 11 km easy (~25 km)', strengthNote: '+1 set on back, shoulders & arms', nutritionNote: '2,250 kcal' },
  { week: 19, phaseId: 'phase2', phaseLabel: 'Speed + Lean', isDeload: false, isTest: false, isRace: false, weeklyKm: 25, longRunKm: 10, strengthSessions: 3, runsPerWeek: 3, calories: 2250, headline: 'VO2max intervals (6x3m RPE 8)', runNote: 'Tue 6x3m hard/2m jog, Thu 6 km easy, Sat 10 km (last 2 km steady)', strengthNote: '+1 set on back, shoulders & arms', nutritionNote: '2,250 kcal' },
  { week: 20, phaseId: 'phase2', phaseLabel: '10K Test', isDeload: true, isTest: true, isRace: true, weeklyKm: 22, longRunKm: 10, strengthSessions: 2, runsPerWeek: 3, calories: 2500, headline: '10K Time Trial (72–80 min) & Retest', runNote: 'Tue 20m easy + 4 strides, Thu 5 km easy, Sat 10K Time Trial (~22 km)', strengthNote: '2–3 light sessions (2 sets)', nutritionNote: 'Maintenance ~2,500 kcal; recalculate P10 zones' },

  // Phase 3: Half Marathon (21-34 -> HM wk 1-14)
  { week: 21, phaseId: 'phase3', phaseLabel: 'Half Wk 1', isDeload: false, isTest: false, isRace: false, weeklyKm: 25, longRunKm: 10, strengthSessions: 2, runsPerWeek: 4, calories: 2650, headline: 'Half Marathon Block begins (4 runs/wk)', runNote: 'Tue 6 km easy + 4 strides, Wed 5 km + Sun 4 km, Sat 10 km (~25 km)', strengthNote: 'Rotate exercises; 2 sessions heavy 3x5–8', nutritionNote: '~2,650 kcal (maintenance + fuel); practice gel >90m' },
  { week: 22, phaseId: 'phase3', phaseLabel: 'Half Wk 2', isDeload: false, isTest: false, isRace: false, weeklyKm: 28, longRunKm: 11, strengthSessions: 2, runsPerWeek: 4, calories: 2650, headline: '3x6m tempo + 11 km long run', runNote: 'Tue 3x6m tempo, Wed 5 + Sun 4 km, Sat 11 km (~28 km)', strengthNote: 'Mon Strength A + Thu Strength B', nutritionNote: '~2,650 kcal, ~390g carbs' },
  { week: 23, phaseId: 'phase3', phaseLabel: 'Half Wk 3', isDeload: false, isTest: false, isRace: false, weeklyKm: 30, longRunKm: 12, strengthSessions: 2, runsPerWeek: 4, calories: 2650, headline: '5K-effort intervals + 12 km long run', runNote: 'Tue 5x3m @ 5K effort, Wed 6 + Sun 4 km, Sat 12 km (~30 km)', strengthNote: 'Keep loads heavy, sets 2–3', nutritionNote: '~2,650 kcal' },
  { week: 24, phaseId: 'phase3', phaseLabel: 'Half Deload', isDeload: true, isTest: false, isRace: false, weeklyKm: 24, longRunKm: 9, strengthSessions: 2, runsPerWeek: 4, calories: 2650, headline: 'Half Block Deload 1', runNote: 'Tue 6 km easy + strides, Wed 5 + Sun 4 km, Sat 9 km (~24 km)', strengthNote: 'Lighter week, maintain strength', nutritionNote: '~2,650 kcal' },
  { week: 25, phaseId: 'phase3', phaseLabel: 'Half Wk 5', isDeload: false, isTest: false, isRace: false, weeklyKm: 33, longRunKm: 13, strengthSessions: 2, runsPerWeek: 4, calories: 2650, headline: '2x12m tempo + 13 km long run', runNote: 'Tue 2x12m tempo, Wed 6 + Sun 5 km, Sat 13 km (~33 km)', strengthNote: '2 sessions + optional 25m Fri accessory', nutritionNote: '~2,650 kcal; 30–60 g/h carbs on long runs' },
  { week: 26, phaseId: 'phase3', phaseLabel: 'Half Wk 6', isDeload: false, isTest: false, isRace: false, weeklyKm: 34, longRunKm: 14, strengthSessions: 2, runsPerWeek: 4, calories: 2650, headline: '6x3m intervals + 14 km long run', runNote: 'Tue 6x3m @ 5K effort, Wed 6 + Sun 5 km, Sat 14 km (~34 km)', strengthNote: '2 sessions heavy @ 2–3 RIR', nutritionNote: '~2,650 kcal' },
  { week: 27, phaseId: 'phase3', phaseLabel: 'Half Wk 7', isDeload: false, isTest: false, isRace: false, weeklyKm: 37, longRunKm: 15, strengthSessions: 2, runsPerWeek: 4, calories: 2650, headline: '3x10m tempo + 15 km long run', runNote: 'Tue 3x10m tempo, Wed 7 + Sun 5 km, Sat 15 km (~37 km)', strengthNote: '2 sessions heavy', nutritionNote: '~2,650 kcal' },
  { week: 28, phaseId: 'phase3', phaseLabel: 'Deload + 5K', isDeload: true, isTest: true, isRace: false, weeklyKm: 25, longRunKm: 5, strengthSessions: 2, runsPerWeek: 4, calories: 2650, headline: 'Lighter + 5K Time Trial (retest P10)', runNote: 'Tue 4x4m tempo, Wed 5 + Sun 4 km, Sat 5K Time Trial (~25 km)', strengthNote: 'Lighter strength week', nutritionNote: '~2,650 kcal; recalculate pace zones' },
  { week: 29, phaseId: 'phase3', phaseLabel: 'Half Wk 9', isDeload: false, isTest: false, isRace: false, weeklyKm: 38, longRunKm: 16, strengthSessions: 2, runsPerWeek: 4, calories: 2700, headline: '25m continuous tempo + 16 km long run', runNote: 'Tue 25m continuous tempo, Wed 7 + Sun 5 km, Sat 16 km (~38 km)', strengthNote: '2 sessions heavy', nutritionNote: '~2,700 kcal' },
  { week: 30, phaseId: 'phase3', phaseLabel: 'Half Wk 10', isDeload: false, isTest: false, isRace: false, weeklyKm: 39, longRunKm: 17, strengthSessions: 2, runsPerWeek: 4, calories: 2700, headline: '17 km long run (last 3 km @ HM pace)', runNote: 'Tue 5x4m @ 5K effort, Wed 7 + Sun 5 km, Sat 17 km w/ 3 km HM pace', strengthNote: '2 sessions heavy', nutritionNote: '~2,700 kcal' },
  { week: 31, phaseId: 'phase3', phaseLabel: 'Half Wk 11', isDeload: false, isTest: false, isRace: false, weeklyKm: 41, longRunKm: 18, strengthSessions: 2, runsPerWeek: 4, calories: 2700, headline: 'Peak Half volume: 41 km · 18 km long run', runNote: 'Tue 2x15m tempo, Wed 7 + Sun 5 km, Sat 18 km w/ 4 km HM pace', strengthNote: '2 sessions heavy', nutritionNote: '~2,700 kcal' },
  { week: 32, phaseId: 'phase3', phaseLabel: 'Half Taper 1', isDeload: true, isTest: false, isRace: false, weeklyKm: 27, longRunKm: 12, strengthSessions: 2, runsPerWeek: 4, calories: 2700, headline: 'Taper begins (-35% volume)', runNote: 'Tue 5 km easy + strides, Wed 5 + Sun 4 km, Sat 12 km (~27 km)', strengthNote: 'Halve sets, keep weights steady', nutritionNote: '~2,700 kcal' },
  { week: 33, phaseId: 'phase3', phaseLabel: 'Half Taper 2', isDeload: true, isTest: false, isRace: false, weeklyKm: 33, longRunKm: 14, strengthSessions: 2, runsPerWeek: 4, calories: 2700, headline: 'Race-pace sharpening (3x8m @ HM)', runNote: 'Tue 3x8m @ HM pace, Wed 6 + Sun 4 km, Sat 14 km (~33 km)', strengthNote: 'Lighter; halve sets', nutritionNote: '~2,700 kcal' },
  { week: 34, phaseId: 'phase3', phaseLabel: 'Half Marathon', isDeload: true, isTest: true, isRace: true, weeklyKm: 30, longRunKm: 21.1, strengthSessions: 1, runsPerWeek: 3, calories: 2850, headline: 'Half Marathon Race Day (21.1 km)', runNote: 'Tue 5 km + strides, Wed 4 km easy, Sat Half Marathon (2:30–2:50)', strengthNote: 'No heavy lower body final 5 days', nutritionNote: 'Carb load 2 days prior + race fueling' },

  // Phase 4: Marathon (35-52 -> Marathon wk 1-18)
  { week: 35, phaseId: 'phase4', phaseLabel: 'Mar Wk 1', isDeload: false, isTest: false, isRace: false, weeklyKm: 42, longRunKm: 16, strengthSessions: 2, runsPerWeek: 5, calories: 2750, headline: 'Marathon Block: 5 runs/wk (easy first 3 days)', runNote: 'Tue 2x10m tempo, Sat 16 km long run (~42 km total)', strengthNote: 'Rotate exercises; 2 sessions (2–3 sets)', nutritionNote: '~2,750 kcal, zero deficit' },
  { week: 36, phaseId: 'phase4', phaseLabel: 'Mar Wk 2', isDeload: false, isTest: false, isRace: false, weeklyKm: 44, longRunKm: 18, strengthSessions: 2, runsPerWeek: 5, calories: 2750, headline: '5x4m intervals + 18 km long run', runNote: 'Tue 5x4m @ 5K effort, Sat 18 km (~44 km)', strengthNote: 'Mon Strength A + Thu Strength B (light)', nutritionNote: '~2,750 kcal' },
  { week: 37, phaseId: 'phase4', phaseLabel: 'Mar Wk 3', isDeload: false, isTest: false, isRace: false, weeklyKm: 49, longRunKm: 20, strengthSessions: 2, runsPerWeek: 5, calories: 2750, headline: 'First 20 km long run', runNote: 'Tue 3x12m tempo, Sat 20 km (~49 km)', strengthNote: '2 maintenance sessions', nutritionNote: '~2,750 kcal; test shoes & race kit' },
  { week: 38, phaseId: 'phase4', phaseLabel: 'Mar Deload', isDeload: true, isTest: false, isRace: false, weeklyKm: 37, longRunKm: 14, strengthSessions: 2, runsPerWeek: 5, calories: 2750, headline: 'Marathon Block Deload 1', runNote: 'Tue Easy + 6 strides, Sat 14 km (~37 km)', strengthNote: 'Lighter sets', nutritionNote: '~2,750 kcal' },
  { week: 39, phaseId: 'phase4', phaseLabel: 'Mar Wk 5', isDeload: false, isTest: false, isRace: false, weeklyKm: 51, longRunKm: 22, strengthSessions: 2, runsPerWeek: 5, calories: 2800, headline: 'First Marathon Pace (MP) work + 22 km', runNote: 'Tue 2x20m @ MP, Sat 22 km (~51 km)', strengthNote: '2 maintenance sessions', nutritionNote: '~2,800 kcal; practice 30–60 g/h fuel every long run' },
  { week: 40, phaseId: 'phase4', phaseLabel: 'Mar Wk 6', isDeload: false, isTest: false, isRace: false, weeklyKm: 54, longRunKm: 24, strengthSessions: 2, runsPerWeek: 5, calories: 2800, headline: '6x3m intervals + 24 km long run', runNote: 'Tue 6x3m @ 5K effort, Sat 24 km (~54 km)', strengthNote: '2 maintenance sessions', nutritionNote: '~2,800 kcal' },
  { week: 41, phaseId: 'phase4', phaseLabel: 'Mar Wk 7', isDeload: false, isTest: false, isRace: false, weeklyKm: 57, longRunKm: 26, strengthSessions: 2, runsPerWeek: 5, calories: 2800, headline: '3x15m tempo + 26 km long run', runNote: 'Tue 3x15m tempo, Sat 26 km (~57 km)', strengthNote: '2 maintenance sessions', nutritionNote: '~2,800 kcal' },
  { week: 42, phaseId: 'phase4', phaseLabel: 'HM Tune-Up', isDeload: true, isTest: true, isRace: false, weeklyKm: 44, longRunKm: 21.1, strengthSessions: 2, runsPerWeek: 5, calories: 2800, headline: 'Lighter + Steady Half Marathon Tune-Up', runNote: 'Tue 5 km easy + strides, Sat 21.1 km steady tune-up (~44 km)', strengthNote: 'Lighter sets', nutritionNote: '~2,800 kcal; check sleep & niggles' },
  { week: 43, phaseId: 'phase4', phaseLabel: 'Mar Wk 9', isDeload: false, isTest: false, isRace: false, weeklyKm: 59, longRunKm: 27, strengthSessions: 2, runsPerWeek: 5, calories: 2900, headline: '27 km long run (last 5 km @ MP)', runNote: 'Tue 8 km @ MP, Sat 27 km w/ last 5 km @ MP (~59 km)', strengthNote: '2 maintenance sessions', nutritionNote: '2,850–2,950 kcal (430–460g carbs)' },
  { week: 44, phaseId: 'phase4', phaseLabel: 'Mar Wk 10', isDeload: false, isTest: false, isRace: false, weeklyKm: 61, longRunKm: 28, strengthSessions: 2, runsPerWeek: 5, calories: 2900, headline: '5x5m tempo + 28 km long run', runNote: 'Tue 5x5m tempo/2m jog, Sat 28 km (~61 km)', strengthNote: '2 maintenance sessions', nutritionNote: '2,850–2,950 kcal' },
  { week: 45, phaseId: 'phase4', phaseLabel: 'Mar Deload', isDeload: true, isTest: false, isRace: false, weeklyKm: 46, longRunKm: 20, strengthSessions: 2, runsPerWeek: 5, calories: 2850, headline: 'Pre-peak deload week', runNote: 'Tue 6 km easy + strides, Sat 20 km (~46 km)', strengthNote: 'Lighter sets', nutritionNote: '~2,850 kcal' },
  { week: 46, phaseId: 'phase4', phaseLabel: 'Mar Wk 12', isDeload: false, isTest: false, isRace: false, weeklyKm: 64, longRunKm: 30, strengthSessions: 2, runsPerWeek: 5, calories: 2950, headline: 'Peak Week 1: 64 km · First 30 km run', runNote: 'Tue 2x5 km @ MP, Sat 30 km (cap 3.5–4 h) (~64 km)', strengthNote: '2 maintenance sessions', nutritionNote: '~2,950 kcal; gut-train 60 g/h carbs' },
  { week: 47, phaseId: 'phase4', phaseLabel: 'Mar Wk 13', isDeload: false, isTest: false, isRace: false, weeklyKm: 53, longRunKm: 24, strengthSessions: 2, runsPerWeek: 5, calories: 2900, headline: '3x10m tempo + 24 km step-back', runNote: 'Tue 3x10m tempo, Sat 24 km (~53 km)', strengthNote: '2 maintenance sessions', nutritionNote: '~2,900 kcal' },
  { week: 48, phaseId: 'phase4', phaseLabel: 'Mar Wk 14', isDeload: false, isTest: false, isRace: false, weeklyKm: 64, longRunKm: 30, strengthSessions: 2, runsPerWeek: 5, calories: 2950, headline: 'Peak Week 2: 64 km · 30 km (last 8 km @ MP)', runNote: 'Tue 10 km @ MP, Sat 30 km w/ last 8 km @ MP (~64 km)', strengthNote: '2 maintenance sessions', nutritionNote: '~2,950 kcal' },
  { week: 49, phaseId: 'phase4', phaseLabel: 'Mar Wk 15', isDeload: false, isTest: false, isRace: false, weeklyKm: 55, longRunKm: 26, strengthSessions: 2, runsPerWeek: 5, calories: 2900, headline: 'Final big week before 3-week taper', runNote: 'Tue 4x8m tempo, Sat 26 km (~55 km)', strengthNote: 'Lighter strength sets', nutritionNote: '~2,900 kcal' },
  { week: 50, phaseId: 'phase4', phaseLabel: 'Taper 1', isDeload: true, isTest: false, isRace: false, weeklyKm: 47, longRunKm: 20, strengthSessions: 2, runsPerWeek: 5, calories: 2900, headline: 'Taper Week 1 (-25% volume)', runNote: 'Tue 6 km @ MP, Sat 20 km (~47 km)', strengthNote: 'Halve sets, keep weights', nutritionNote: '~2,900 kcal' },
  { week: 51, phaseId: 'phase4', phaseLabel: 'Taper 2', isDeload: true, isTest: false, isRace: false, weeklyKm: 35, longRunKm: 14, strengthSessions: 1, runsPerWeek: 4, calories: 2900, headline: 'Taper Week 2 (-45% volume)', runNote: 'Tue 4 km @ MP + 4 strides, Sat 14 km (~35 km)', strengthNote: '1 light session, halve sets', nutritionNote: '~2,900 kcal' },
  { week: 52, phaseId: 'phase4', phaseLabel: 'Marathon', isDeload: true, isTest: true, isRace: true, weeklyKm: 59.2, longRunKm: 42.2, strengthSessions: 0, runsPerWeek: 3, calories: 3100, headline: 'Marathon Race Day (42.2 km · Goal 5:30)', runNote: 'Tue 6 km + strides, Sat 3 km shake-out, Sun Marathon 42.2 km', strengthNote: 'No lifting race week', nutritionNote: '2-day Carb Load (490–610 g/d) + 60 g/h race' },
];

export const MUSCLE_GROUPS: MuscleGroupInfo[] = [
  {
    id: 'back',
    name: 'Latissimus, Mid-Traps, Rhomboids & Rear Delts',
    view: 'back',
    priority: 'Priority #1 (Highest Volume)',
    actions: 'Shoulder extension, scapular retraction & horizontal pulling',
    exercises: ['Chest-supported row', 'Lat pulldown / pull-up', 'Face pull'],
    homeAlternatives: ['Inverted table row', 'Band pulldown / negative pull-up', 'Band pull-apart / prone Y-T-W'],
    whyItMatters: 'Corrects slightly rounded shoulders, builds V-taper width, and drives efficient arm swing during running.',
    startingLoad: 'Row 8–10 kg/hand · Pulldown 30–40 kg',
    phase3Target: 'Row 14–20 kg/hand · Pulldown 45–55 kg',
    weeklySets: '12–14 hard sets/wk',
  },
  {
    id: 'chest-shoulders',
    name: 'Pectorals, Deltoids & Triceps',
    view: 'front',
    priority: 'Upper Width & Pressing Strength',
    actions: 'Horizontal adduction, shoulder flexion & abduction, elbow extension',
    exercises: ['Dumbbell bench press', 'Seated dumbbell shoulder press', 'Dumbbell lateral raise', 'Triceps rope pushdown'],
    homeAlternatives: ['Push-up progression ladder', 'Pike push-up / backpack press', 'Water-bottle lateral raise', 'Chair dips'],
    whyItMatters: 'Maintains chest thickness while lateral raises widen the compact frame for an athletic silhouette.',
    startingLoad: 'DB Bench 8–12 kg/hand · Shoulder Press 6–10 kg/hand',
    phase3Target: 'DB Bench 14–20 kg/hand · Shoulder Press 12–16 kg/hand',
    weeklySets: '10–12 chest · 12–14 shoulders',
  },
  {
    id: 'arms',
    name: 'Biceps & Forearms (Grip)',
    view: 'front',
    priority: 'Direct Isolation 2–3x/wk',
    actions: 'Elbow flexion, supination, and isometric grip stability',
    exercises: ['Incline dumbbell curl', 'Hammer curl', "Farmer's carry"],
    homeAlternatives: ['Backpack / band curl', 'Loaded backpack / water-jug carry'],
    whyItMatters: 'Supports pulling progression, builds balanced arm size, and reinforces posture under loaded carries.',
    startingLoad: "Farmer's carry 10–14 kg/hand",
    phase3Target: "Farmer's carry 20–26 kg/hand",
    weeklySets: '6–9 direct sets/wk + pulling overlap',
  },
  {
    id: 'core',
    name: 'Core (Abs, Obliques & Spinal Erectors)',
    view: 'front',
    priority: 'Anti-Rotation & Trunk Stiffness',
    actions: 'Resisting spinal flexion, extension, and pelvic rotation',
    exercises: ['Plank (to weighted)', 'Pallof press + hanging knee raise', 'Dead bug + bird dog'],
    homeAlternatives: ['Plank', 'Side plank + lying leg raise', 'Dead bug + bird dog'],
    whyItMatters: 'Transfers force efficiently between upper and lower body during every running stride and heavy hinge.',
    weeklySets: '9–12 targeted sets/wk',
  },
  {
    id: 'glutes',
    name: 'Gluteus Maximus & Medius',
    view: 'back',
    priority: 'Propulsion & Knee Alignment',
    actions: 'Hip extension, hip abduction, and single-leg pelvic stability',
    exercises: ['Hip thrust', 'Romanian deadlift', 'Reverse lunge / Bulgarian split squat', 'Banded lateral walk'],
    homeAlternatives: ['Glute bridge / single-leg bridge', 'Backpack RDL', 'Split squat on chair'],
    whyItMatters: 'Primary running propulsion engine. Hip thrusts elicit higher glute activation than squats [33]; glute medius stops knee cave.',
    startingLoad: 'Hip thrust 30–40 kg barbell',
    phase3Target: 'Hip thrust 70–90 kg barbell',
    weeklySets: '10–12 direct + running work',
  },
  {
    id: 'quads',
    name: 'Quadriceps',
    view: 'front',
    priority: 'Landing Shock Absorption',
    actions: 'Knee extension and hip flexion (rectus femoris)',
    exercises: ['Goblet squat (to barbell squat / leg press)', 'Dumbbell step-up', 'Reverse lunge'],
    homeAlternatives: ['Tempo squat / backpack goblet squat', 'Chair step-up', 'Reverse lunge'],
    whyItMatters: 'Absorbs 2–3x bodyweight impact forces on every footstrike and powers uphill running.',
    startingLoad: 'Goblet squat 10–16 kg',
    phase3Target: 'Goblet 24–32 kg or Squat 40–60 kg',
    weeklySets: '10–12 sets/wk (capped in peak run blocks)',
  },
  {
    id: 'hamstrings',
    name: 'Hamstrings',
    view: 'back',
    priority: 'Stride Mechanics & Injury Shield',
    actions: 'Hip extension and eccentric knee flexion control',
    exercises: ['Romanian deadlift (RDL)', 'Trap-bar / conventional deadlift', 'Lying or seated leg curl'],
    homeAlternatives: ['Single-leg RDL', 'Backpack sumo deadlift', 'Towel slider hamstring curl'],
    whyItMatters: 'Decelerates the swinging leg before footstrike and protects against sprinting/tempo pulls via controlled eccentric loading.',
    startingLoad: 'RDL 20–30 kg · Deadlift 30–50 kg',
    phase3Target: 'RDL 50–70 kg · Deadlift 70–90 kg',
    weeklySets: '8–10 sets/wk',
  },
  {
    id: 'calves-shins',
    name: 'Calves (Gastrocnemius/Soleus) & Tibialis Anterior',
    view: 'back',
    priority: "Runner's Armor Prehab",
    actions: 'Ankle plantar flexion (propulsion) & dorsiflexion (foot clearance)',
    exercises: ['Standing single-leg calf raise (3 s down)', 'Wall tibialis raise', 'Foot doming'],
    homeAlternatives: ['Single-leg calf raise on step', 'Wall tibialis raise'],
    whyItMatters: 'Each running stride loads the Achilles tendon several times bodyweight. Tibialis raises prevent shin splints.',
    weeklySets: '4–6 prehab + strength sets/wk',
  },
];

export const MOVEMENT_PATTERNS: MovementPatternInfo[] = [
  {
    id: 'squat',
    name: '1. Squat Pattern',
    jointsAndMuscles: 'Hip & knee flexion · Quads, glutes, core',
    exercises: 'Goblet squat → Barbell squat / Leg press',
    setup: 'Feet shoulder-width, toes slightly out, ribcage stacked over pelvis, elbows inside knees.',
    checkpoints: ['Knees track directly over toes', 'Heels stay planted on floor', 'Neutral spine to controlled depth'],
    externalCue: '"Spread the floor apart with your feet"',
    commonFault: 'Knees caving inward (valgus) or heels lifting off the ground',
    fix: 'Cue knees out (or light band around knees); widen stance slightly or elevate heels 1–2 cm while building ankle dorsiflexion.',
    biomechanicsNote: 'Knee load increases with depth but is well tolerated in healthy knees with controlled 3-second lowering [36, 37].',
  },
  {
    id: 'hinge',
    name: '2. Hip Hinge Pattern',
    jointsAndMuscles: 'Hip flexion/extension · Glutes, hamstrings, spinal erectors',
    exercises: 'Romanian deadlift (RDL), Trap-bar deadlift, Hip thrust, Swing',
    setup: 'Feet hip-width, soft knee unlock (~15°), bar/load over mid-foot, lats engaged ("armpits squeezed").',
    checkpoints: ['Hips push straight back toward wall', 'Shins stay nearly vertical on RDL', 'Flat back with bar sliding close to thighs'],
    externalCue: '"Push the floor away" (deadlift) · "Slide the bar down your thighs" (RDL)',
    commonFault: 'Rounding the lower back or turning the hinge into a squat by bending knees too much',
    fix: 'Reduce load, practise dowel-rod 3-point contact drill (head, mid-back, tailbone), push hips farther back before lowering.',
    biomechanicsNote: 'Pushing hips back shifts torque onto the posterior chain while sparing lumbar shear.',
  },
  {
    id: 'push',
    name: '3. Push Pattern',
    jointsAndMuscles: 'Shoulder & elbow · Pectorals, anterior deltoids, triceps',
    exercises: 'Dumbbell bench press, Push-up progression, Overhead press',
    setup: 'Shoulder blades pinched & depressed, feet planted, wrists stacked vertically over elbows.',
    checkpoints: ['Elbows angled ~45° from torso (not 90° T-shape)', '3-second controlled lowering to mid-chest', 'Ribs stay down on overhead presses'],
    externalCue: '"Push yourself away from the floor" · "Press the ceiling away"',
    commonFault: 'Elbows flaring to 90° or hips sagging / lumbar over-arching',
    fix: 'Tuck elbows slightly toward ribs; squeeze glutes and brace abs before initiating every rep.',
    biomechanicsNote: 'Push-ups and bench press at comparable intensities produce similar strength gains and muscle activation [38].',
  },
  {
    id: 'pull',
    name: '4. Pull Pattern',
    jointsAndMuscles: 'Shoulder extension & scapular retraction · Lats, mid-traps, rhomboids, biceps',
    exercises: 'Chest-supported row, Lat pulldown, Pull-up / Chin-up, Face pull',
    setup: 'Full arm extension at start, shoulder blades depressed away from ears, chest proud.',
    checkpoints: ['Initiate by pulling shoulder blades down/back', 'Drive elbows toward ribs/back pockets', '1-second pause at peak contraction; zero body swing'],
    externalCue: '"Drive your elbows into your back pockets"',
    commonFault: 'Shrugging upper traps toward ears or using momentum/torso swing',
    fix: 'Lower the load, pause 1 second at the top of rows, and consciously depress shoulders before bending elbows.',
    biomechanicsNote: 'Pull-ups and chin-ups distribute load differently across lats and biceps [39]; alternating builds balanced pulling strength.',
  },
  {
    id: 'lunge',
    name: '5. Lunge / Single-Leg',
    jointsAndMuscles: 'Unilateral hip & knee · Glutes, quads, hip stabilisers',
    exercises: 'Reverse lunge, Bulgarian split squat, Step-up',
    setup: 'Hip-width rail stance (not tightrope), torso tall, front foot flat.',
    checkpoints: ['Front heel stays firmly planted', 'Front knee tracks over mid-foot', 'Back knee lowers straight down cleanly'],
    externalCue: '"Drop straight down like an elevator"',
    commonFault: 'Pushing off the back foot on step-ups or knee collapsing inward',
    fix: 'Shorten stance slightly, drive solely through the lead heel, and slow down the lowering phase to 3 seconds.',
    biomechanicsNote: 'A slight forward trunk lean shifts load toward the glutes/hamstrings; a vertical torso biases the quads [40].',
  },
  {
    id: 'core',
    name: '6. Core & Loaded Carry',
    jointsAndMuscles: 'Trunk anti-flexion, anti-extension & anti-rotation · Abs, obliques, erectors',
    exercises: "Plank, Pallof press, Dead bug, Bird dog, Farmer's carry",
    setup: 'Ribcage pulled down over pelvis, glutes lightly squeezed, steady nasal/oral breathing.',
    checkpoints: ['Zero rotation during Pallof press', 'Lower back stays flat against floor in dead bug', 'Tall stacked posture on carries'],
    externalCue: '"Make your torso stiff like a board against a light punch"',
    commonFault: 'Lower back arching/sagging as legs extend or shoulders hiking during carries',
    fix: 'Shorten lever arm (bend knees more in dead bug / leg raises) and never hold breath continuously.',
    biomechanicsNote: 'Resisting unwanted motion—not crunching—is the primary athletic function of the trunk musculature [41].',
  },
  {
    id: 'run',
    name: '7. Running Mechanics',
    jointsAndMuscles: 'Stretch-shortening cycle · Calves, Achilles, glutes, quads, hamstrings',
    exercises: 'Easy Zone 2 runs, Strides (4–6 x 20 s), Tempo & Intervals',
    setup: 'Tall upright posture with slight ankle lean, eyes ahead, relaxed shoulders & soft hands.',
    checkpoints: ['Foot lands underneath hips (not far ahead)', 'Quick cadence ~165–180 steps/min', 'Conversational breathing on easy days'],
    externalCue: '"Run quietly with light feet"',
    commonFault: 'Overstriding (heavy heel strike far in front of center of mass) and tense elevated shoulders',
    fix: 'Increase cadence subtly by ~5% (not forced overhaul) [44]; shake out hands and drop elbows at 90°.',
    biomechanicsNote: 'Self-selected stride is usually economical [43]; raising cadence 5–10% lowers hip/knee peak loading in overstriders.',
  },
];

export const WORKOUT_A: ExerciseRow[] = [
  { gym: 'Dumbbell bench press (or chest press)', home: 'Push-up progression ladder', phase1: '3x10–12', phase2: '4x8–10', phase3: '4x6–8', cues: 'Shoulder blades pinched, feet planted, lower to mid-chest in 3 s' },
  { gym: 'Lat pulldown (or assisted pull-up)', home: 'Band pulldown or negative pull-ups', phase1: '3x10–12', phase2: '4x8–10', phase3: '4x6–8', cues: 'Chest up, drive elbows to ribs, no swinging' },
  { gym: 'Seated dumbbell shoulder press', home: 'Pike push-up or backpack press', phase1: '3x10–12', phase2: '3x8–10', phase3: '4x6–8', cues: 'Ribs down, press slightly in front of body' },
  { gym: 'Chest-supported row (or cable row)', home: 'Inverted table row or backpack row', phase1: '3x10–12', phase2: '4x10–12', phase3: '4x8–10', cues: 'Pause 1 s with shoulder blades together. Priority #1' },
  { gym: 'Dumbbell lateral raise', home: 'Water-bottle or backpack lateral raise', phase1: '3x12–15', phase2: '3x12–15', phase3: '4x12–20', cues: 'Lead with elbows, stop at shoulder height. Builds width' },
  { gym: 'Face pull (or reverse pec-deck)', home: 'Band pull-apart or prone Y-T-W', phase1: '3x15', phase2: '3x15', phase3: '3x15', cues: 'Pull to eye level, rotate thumbs back. Posture' },
  { gym: 'Incline dumbbell curl', home: 'Backpack or band curl', phase1: '2x10–12', phase2: '3x10–12', phase3: '3x8–12', cues: 'Elbows still, control lowering' },
  { gym: 'Triceps rope pushdown', home: 'Bench or chair dips', phase1: '2x10–12', phase2: '3x10–12', phase3: '3x8–12', cues: 'Elbows pinned, full lockout' },
  { gym: 'Plank (progress to weighted)', home: 'Plank', phase1: '3x30–45s', phase2: '3x45–60s', phase3: '3x60s', cues: 'Squeeze glutes, ribs down' },
];

export const WORKOUT_B: ExerciseRow[] = [
  { gym: 'Goblet squat (→ barbell squat / leg press)', home: 'Tempo squat → backpack goblet squat', phase1: '3x10–12', phase2: '4x8–10', phase3: '3x6–8', cues: 'Elbows inside knees, knees track over toes, controlled depth' },
  { gym: 'Romanian deadlift (DB or barbell)', home: 'Backpack RDL or single-leg RDL', phase1: '3x10–12', phase2: '4x8–10', phase3: '3x6–8', cues: 'Hips back, flat back, shins vertical, feel hamstrings' },
  { gym: 'Reverse lunge (→ Bulgarian split squat)', home: 'Reverse lunge or split squat on chair', phase1: '3x8–10/leg', phase2: '3x8–10/leg', phase3: '3x6–8/leg', cues: 'Step back, torso tall, front heel stays down' },
  { gym: 'Hip thrust', home: 'Glute bridge → single-leg bridge', phase1: '3x10–12', phase2: '4x8–12', phase3: '3x8–10', cues: 'Chin tucked, pause 1 s at the top' },
  { gym: 'Lying or seated leg curl', home: 'Towel slider hamstring curl', phase1: '3x10–12', phase2: '3x10–12', phase3: '3x8–12', cues: 'Controlled lowering, protects hamstrings when running' },
  { gym: 'Standing single-leg calf raise', home: 'Single-leg calf raise on a step', phase1: '3x12–15', phase2: '3x12–15', phase3: '3x10–15', cues: '3 s lowering, full range. Protects Achilles' },
  { gym: 'Tibialis raise', home: 'Wall tibialis raise', phase1: '2x15–20', phase2: '2x15–20', phase3: '2x15–20', cues: 'Heels on floor, lift toes up. Prevents shin splints' },
  { gym: 'Pallof press + hanging knee raise', home: 'Side plank + lying leg raise', phase1: '3x10 each', phase2: '3x12 each', phase3: '3x12 each', cues: 'Resist rotation, no swinging' },
];

export const WORKOUT_C: ExerciseRow[] = [
  { gym: 'Trap-bar or conventional deadlift', home: 'Backpack sumo deadlift', phase1: '3x8', phase2: '4x6–8', phase3: '3x5–6', cues: 'Bar over mid-foot, chest up, push the floor away' },
  { gym: 'Dumbbell push press (or landmine)', home: 'Backpack push press or pike push-up', phase1: '3x8', phase2: '3x8', phase3: '4x6–8', cues: 'Dip and drive with the legs, lock out overhead' },
  { gym: 'Pull-up or chin-up (assisted)', home: 'Inverted row with feet raised', phase1: '3x5–8', phase2: '4x6–8', phase3: '4x6–10', cues: 'Full hang to chin over bar; use band assistance if needed' },
  { gym: 'Dumbbell step-up', home: 'Chair or sturdy step-up', phase1: '3x8/leg', phase2: '3x8–10/leg', phase3: '3x8/leg', cues: 'Drive through lead heel, do not push off back foot' },
  { gym: "Farmer's carry (or suitcase carry)", home: 'Loaded backpack or water jugs', phase1: '3x30 m', phase2: '4x30–40 m', phase3: '4x40 m', cues: 'Tall posture, tight core, grip strength' },
  { gym: 'Dumbbell swing (light)', home: 'Backpack good morning or hip hinge', phase1: '3x12', phase2: '3x15', phase3: '3x15', cues: 'Hinge, not squat. Snap the hips forward' },
  { gym: 'Core: dead bug + bird dog', home: 'Same', phase1: '3x8/side', phase2: '3x10/side', phase3: '3x12/side', cues: 'Slow, ribs down, low back flat' },
  { gym: 'Finisher AMRAP (8 push-ups, 10 squats, 8 band rows, 20s mountain climbers)', home: 'Same', phase1: '6 min', phase2: '8 min', phase3: '10 min', cues: 'Moderate pace, count rounds, beat last week' },
];

export const RUNNERS_ARMOR = [
  { exercise: 'Single-leg calf raise (3 s down)', dose: '2 x 12–15 / leg', why: 'Calf and Achilles tendon load tolerance' },
  { exercise: 'Tibialis raise (wall)', dose: '2 x 15–20', why: 'Anterior shin strength & shin splint prevention' },
  { exercise: 'Banded lateral walk', dose: '2 x 12 steps each way', why: 'Glute medius & single-leg knee stability' },
  { exercise: 'Single-leg glute bridge', dose: '2 x 10 / leg', why: 'Hip stability & glute drive' },
  { exercise: 'Copenhagen or side plank', dose: '2 x 20–30 s / side', why: 'Adductor (inner thigh) & hip control' },
  { exercise: 'Foot doming (short foot)', dose: '2 x 10 holds of 5 s', why: 'Intrinsic arch strength & plantar fascia protection' },
];

export const HOME_LADDERS = [
  { name: 'Push-up Ladder', steps: ['Wall', 'Incline (table)', 'Knees', 'Full floor', 'Feet elevated', 'Archer', 'Pseudo-planche'], rule: 'Move up at 3x12 with 3 s lowering' },
  { name: 'Pull Ladder', steps: ['Band row', 'Inverted row (knees bent)', 'Inverted row (legs straight)', 'Feet-elevated inverted row', 'Negative pull-up (5 s down)', 'Assisted pull-up', 'Full pull-up'], rule: 'Pause 1 s at top' },
  { name: 'Squat Ladder', steps: ['Bodyweight', 'Tempo squat (3s down, 1s pause)', 'Backpack goblet squat', 'Split squat', 'Bulgarian split squat', 'Shrimp squat'], rule: 'Full controlled depth' },
  { name: 'Hinge Ladder', steps: ['Hip bridge', 'Single-leg bridge', 'Backpack RDL', 'Single-leg RDL', 'Backpack good morning'], rule: 'Flat spine throughout' },
];

export const NUTRITION_CYCLING = [
  { day: 'Mon', type: 'Normal training', kcal: 2300, protein: 125, fat: 60, carbs: 315 },
  { day: 'Tue', type: 'Normal training', kcal: 2300, protein: 125, fat: 60, carbs: 315 },
  { day: 'Wed', type: 'Hard (Leg day)', kcal: 2450, protein: 125, fat: 60, carbs: 350 },
  { day: 'Thu', type: 'Easy day', kcal: 2200, protein: 125, fat: 60, carbs: 290 },
  { day: 'Fri', type: 'Normal training', kcal: 2300, protein: 125, fat: 60, carbs: 315 },
  { day: 'Sat', type: 'Hard (Long run)', kcal: 2450, protein: 125, fat: 60, carbs: 350 },
  { day: 'Sun', type: 'Active recovery', kcal: 2100, protein: 125, fat: 60, carbs: 265 },
];

export const NUTRITION_PHASES = [
  { phase: '1. Foundation', weeks: '1–12', kcal: '2,100–2,450 (avg 2,300)', kcalMid: 2300, protein: 125, fat: 60, carbs: '265–350 g (4.3–5.7 g/kg)', carbMid: 310, note: 'Recomposition, cycled by training day' },
  { phase: 'Reset', weeks: '13', kcal: '~2,500', kcalMid: 2500, protein: 125, fat: 65, carbs: '~355 g', carbMid: 355, note: 'Maintenance, restores energy & hormones' },
  { phase: '2. Lean-out', weeks: '14–19', kcal: '~2,250', kcalMid: 2250, protein: 130, fat: 60, carbs: '~300 g (4.9 g/kg)', carbMid: 300, note: 'Aim -0.2 to -0.4 kg/wk; stop at 12–13% BF' },
  { phase: 'Test', weeks: '20', kcal: '~2,500', kcalMid: 2500, protein: 125, fat: 65, carbs: '~355 g', carbMid: 355, note: 'Maintenance for 10K time trial' },
  { phase: '3. Half Marathon', weeks: '21–34', kcal: '2,600–2,750 (avg 2,650)', kcalMid: 2650, protein: 125, fat: 65, carbs: '~390 g (6.4 g/kg)', carbMid: 390, note: 'Maintenance + small lean gain; pre-race carb load' },
  { phase: '4. Marathon', weeks: '35–52', kcal: '2,750–3,000', kcalMid: 2900, protein: 125, fat: 70, carbs: '430–460 g (7–7.5 g/kg)', carbMid: 445, note: 'Eat to fuel; no deficit; 8–10 g/kg 2d pre-race' },
];

export const SAMPLE_MEAL_DAY = [
  { meal: 'Breakfast', items: '3 whole eggs scrambled, 2 slices whole-wheat bread, 1 banana', kcal: 475, protein: 28, carbs: 66, fat: 14 },
  { meal: 'Mid-morning', items: '200 g plain yogurt with 30 g oats', kcal: 235, protein: 18, carbs: 32, fat: 4 },
  { meal: 'Lunch', items: '150 g cooked chicken breast, 250 g cooked rice, large veg, 1 tsp oil', kcal: 665, protein: 48, carbs: 84, fat: 12 },
  { meal: 'Pre-workout', items: '1 banana, 1 slice bread with 1 tbsp peanut butter', kcal: 280, protein: 7, carbs: 43, fat: 9 },
  { meal: 'Dinner (post-workout)', items: '120 g grilled fish, 250 g cooked rice, 100 g tofu, vegetables', kcal: 655, protein: 39, carbs: 85, fat: 14 },
];

export const TROUBLESHOOTING_ITEMS = [
  { issue: 'Shin pain (shin splints)', cause: 'Too much running too soon, weak calves/shins, hard surfaces', fix: 'Cut running 30%, wall tibialis raises & calf work, softer surface. Seek help if >2 weeks.' },
  { issue: 'Knee pain at front', cause: 'Weak hips/glutes, excessive mileage jump', fix: 'Reduce volume, banded lateral walks, glute bridges, controlled quad strength.' },
  { issue: 'Achilles or calf tightness', cause: 'Rapid running increase, tight calves', fix: 'Single-leg calf raises with 3 s slow lowering, calf stretches, avoid hills temporarily.' },
  { issue: 'Plantar (heel) pain', cause: 'Stiff foot, worn running shoes (>600–800 km)', fix: 'Foot doming (short foot), calf stretching, inspect/replace shoes.' },
  { issue: 'Lower back ache', cause: 'Weak core, poor hip-hinge form', fix: 'Review deadlift/RDL form, dead bugs, bird dogs, half-kneeling hip flexor stretch.' },
  { issue: 'Shoulder discomfort', cause: 'Too much pressing relative to pulling', fix: 'Add face pulls and rows, reduce pressing volume by 1 set.' },
];

export const FLEXIBILITY_STRETCHES = [
  { name: 'Cat-cow', how: 'On hands & knees, alternate arching and rounding spine', dose: '10 slow reps', routine: 'A & B' },
  { name: 'Open book rotation', how: 'Side-lying, knees bent, open top arm across chest', dose: '8 / side', routine: 'A & B' },
  { name: 'Doorway chest stretch', how: 'Forearm on doorframe, step gently through', dose: '30–40 s / side', routine: 'A & B' },
  { name: 'Half-kneeling hip flexor', how: 'Tuck pelvis under, squeeze back glute, lean slightly forward', dose: '40 s / side', routine: 'A & B' },
  { name: 'Hamstring stretch', how: 'Lying leg raise with band or towel', dose: '30–40 s / side', routine: 'A & B' },
  { name: 'Calf stretch (straight & bent)', how: 'Hands on wall, back heel down; then soften knee for soleus', dose: '30 s each / side', routine: 'A & B' },
  { name: 'Figure-4 glute stretch', how: 'On back, ankle over opposite knee, pull thigh toward chest', dose: '40 s / side', routine: 'B only' },
  { name: 'Quad stretch', how: 'Side-lying or standing, heel to glute, hips pressed forward', dose: '30–40 s / side', routine: 'B only' },
  { name: "Child's pose with side reach", how: 'Sit hips back, walk hands left then right', dose: '30 s each side', routine: 'B only' },
  { name: 'Lat stretch', how: 'Hands on bench or wall, sit hips back, drop chest', dose: '30–40 s', routine: 'B only' },
  { name: 'Deep squat hold (supported)', how: 'Hold a post, sit comfortably into deep squat', dose: '45–60 s total', routine: 'B only' },
  { name: 'Thread the needle', how: 'On all fours, slide one arm under body to rotate thoracic spine', dose: '8 / side', routine: 'B only' },
];

export const ALTERNATIVE_TRACKS = [
  { id: 'A', title: 'Path A: Maintain Results', when: 'Happy with physique & running; want minimum time commitment', split: '2 Full Body strength (45–50m) + 2 runs (6–8 km long) + Sunday swim/flex', nutrition: 'Maintenance ~2,450–2,550 kcal on training days, 110–125g protein' },
  { id: 'B', title: 'Path B: Improve Physique (W13–24)', when: 'Want visible abs (~12–13% BF) and bigger shoulders, back & arms', split: '4 strength (Upper A heavy, Lower A, Upper B volume, Lower B light) + 2 runs + swim', nutrition: '8–12 wk lean-out (~2,150–2,250 kcal, 130–140g protein), 1-wk diet break, then +200–250 kcal lean gain' },
  { id: 'C', title: 'Path C: Improve Running (W13–20)', when: 'Want faster 10K (65–75 min) or prepare for Half Marathon', split: '3 runs (1 quality tempo/intervals, 1 easy, 1 long up to 11 km) + 2 maintenance lifts', nutrition: 'Maintenance or slight surplus; 350–400g carbs on long-run days' },
  { id: 'D', title: 'Path D: Hybrid (Recommended)', when: 'Want both physique and endurance year-round without burnout', split: 'Alternating 8–12 week focus blocks (Lean-out → Running → Muscle gain → 10K → Lean-out)', nutrition: 'Matched per block: slight deficit, maintenance, +200–250 surplus' },
];

export const KEY_CITATIONS = [
  { id: '1, 2', topic: 'Concurrent Training', ref: 'Wilson et al. (2012) J Strength Cond Res; Schumann et al. (2022) Sports Med — Concurrent endurance & strength does not meaningfully limit muscle size or lower-body strength when volume & recovery are managed.' },
  { id: '3, 4, 20', topic: 'Strength for Runners', ref: 'Ronnestad & Mujika (2014); Blagrove et al. (2018); Balsalobre-Fernandez et al. (2016) — Heavy strength training improves running economy and endurance performance.' },
  { id: '5, 6, 146', topic: 'Stretching & Injury', ref: 'Behm et al. (2016); Afonso et al. (2021); Lauersen et al. (2014) — Static stretching improves ROM via stretch tolerance, does not cut DOMS; strength training cuts sports injuries far more than stretching.' },
  { id: '7', topic: 'Energy Availability (RED-S)', ref: 'Mountjoy et al. (2018) Br J Sports Med — IOC consensus: <30 kcal/kg FFM/day impairs hormones, bone health, and immunity in men and women.' },
  { id: '8, 9, 10', topic: 'Sports Fueling & Macros', ref: 'Jeukendrup (2014); Thomas et al. (2016) AND/ACSM Position Stand; Burke et al. (2011) — 30–60 g/h (up to 90 g/h >2.5h), 8–12 g/kg/day carb load, 1.2–2.0 g/kg protein.' },
  { id: '11, 13, 14', topic: 'Marathon Determinants & 80/20', ref: 'Doherty et al. (2020) meta-analysis; Seiler (2010); Munoz et al. (2014) — Weekly volume, run frequency, longest run, and ~80% low-intensity polarized distribution drive endurance outcomes.' },
  { id: '17, 21, 22', topic: 'Workload & Tapering', ref: 'Gabbett (2016) BJSM; Bosquet et al. (2007); Mujika & Padilla (2003) — Gradual chronic load protects against spikes; 40–60% volume taper over 2 weeks maximizes race performance.' },
  { id: '33, 35, 38', topic: 'Biomechanics & Hypertrophy', ref: 'Contreras et al. (2015); Schoenfeld (2010); Calatayud et al. (2015) — Hip thrusts maximize glute EMG; mechanical tension drives hypertrophy; push-ups match bench press at equal load.' },
  { id: '65–71', topic: 'Resistance Volume & Rest', ref: 'Schoenfeld et al. (2016, 2017); Refalo et al. (2023) — 10+ sets/muscle/wk, 2x/wk frequency, 1–3 RIR, and 2–3 min rests optimize hypertrophy and strength.' },
  { id: '95–100', topic: 'Behavior & Habits', ref: 'Ryan & Deci (2000) SDT; Gollwitzer & Sheeran (2006); Lally et al. (2010); Harkin et al. (2016) — Implementation intentions ("if-then"), 66-day median habit curve, and progress tracking.' },
];

export const BODY_ASSESSMENT = [
  { area: 'Frame', observation: 'Slim to average frame, compact build, relatively lean.', response: 'Good base for both running and lean athleticism; compact frames respond well to shoulder & back width.' },
  { area: 'Chest & Shoulders', observation: 'Some existing development; deltoids and upper chest visible.', response: 'Maintain with pressing and add lateral raises for shoulder width.' },
  { area: 'Back', observation: 'Some lat width, but mid-back, lower traps & rear delts underdeveloped.', response: 'Highest-priority muscle group: rows, pulldowns, and face pulls get the most volume.' },
  { area: 'Arms', observation: 'Lean, modest size.', response: 'Direct biceps and triceps isolation 2–3 times per week.' },
  { area: 'Midsection', observation: 'Slightly soft, abs not yet visible (~18% BF).', response: 'Fat loss via mild nutrition deficit, running volume, and core bracing; spot reduction does not work.' },
  { area: 'Posture', observation: 'Shoulders sit slightly forward.', response: 'Extra pulling volume, thoracic mobility, and doorway chest stretching.' },
  { area: 'Legs & Cardio', observation: 'Cannot run 500 m–1 km steadily yet.', response: 'Aerobic base is the biggest limiter, not strength. Walk/jog intervals fix this rapidly.' },
];

export const REALISTIC_EXPECTATIONS = [
  { goal: 'Run 5K continuously', wk12: 'Week 7–8 with 3 runs/week', verdict: 'Very realistic' },
  { goal: 'Run 10K', wk12: 'Week 12 with run/walk (continuous if W9–11 go well; fallback Wk 14)', verdict: 'Realistic (stretch)' },
  { goal: 'Fat loss & muscle', wk12: '2–4 kg fat lost · 1.5–3 kg lean mass · Scale stays ~60–62 kg', verdict: 'Realistic recomposition' },
  { goal: 'Waist & strength', wk12: 'Waist −3 to −6 cm · Main lifts +30–50% · Push-ups ~2x', verdict: 'Very realistic' },
  { goal: 'Visible abs & full physique', wk12: 'Faint upper abs possible; clear abs (~12% BF) & athletic build take 6–12 mo', verdict: 'Needs full year' },
];

export const STARTING_LOADS = [
  { exercise: 'Dumbbell bench press', start: '8–12 kg / hand', target: '14–20 kg / hand' },
  { exercise: 'Lat pulldown', start: '30–40 kg', target: '45–55 kg' },
  { exercise: 'Dumbbell shoulder press', start: '6–10 kg / hand', target: '12–16 kg / hand' },
  { exercise: 'Chest-supported row', start: '8–10 kg / hand', target: '14–20 kg / hand' },
  { exercise: 'Goblet squat', start: '10–16 kg', target: '24–32 kg (or 40–60 kg barbell)' },
  { exercise: 'Romanian deadlift', start: '20–30 kg barbell', target: '50–70 kg barbell' },
  { exercise: 'Hip thrust', start: '30–40 kg barbell', target: '70–90 kg barbell' },
  { exercise: 'Deadlift', start: '30–50 kg', target: '70–90 kg' },
  { exercise: "Farmer's carry", start: '10–14 kg / hand', target: '20–26 kg / hand' },
];

export const PHASE2_HYPERTROPHY: { day: string; gym: string; home: string; sets: string; notes: string }[] = [
  { day: 'Mon Upper A', gym: 'Barbell or DB bench press', home: 'Feet-elevated push-up w/ loaded backpack', sets: '4 × 6–8', notes: '1–2 RIR, controlled lowering' },
  { day: 'Mon Upper A', gym: 'Weighted or assisted pull-up / pulldown', home: 'Band-assisted pull-up', sets: '4 × 6–8', notes: 'Full hang to chin over bar' },
  { day: 'Mon Upper A', gym: 'Seated DB shoulder press', home: 'Pike push-up or backpack press', sets: '3 × 8–10', notes: 'Ribs down' },
  { day: 'Mon Upper A', gym: 'Chest-supported row', home: 'One-arm backpack row', sets: '4 × 8–10', notes: 'Pause 1 s at top' },
  { day: 'Mon Upper A', gym: 'Lateral raise + Face pull', home: 'Backpack raise + Band pull-apart', sets: '4 × 12–20, 3 × 15', notes: 'Shoulder width & posture' },
  { day: 'Mon Upper A', gym: 'Incline curl + Overhead triceps ext.', home: 'Backpack curl + Chair dips', sets: '3 × 8–12 each', notes: 'Direct arm volume' },
  { day: 'Mon Upper A', gym: 'Weighted plank or ab wheel', home: 'Plank', sets: '3 × 45–60 s', notes: 'Neutral spine' },
  { day: 'Wed Lower', gym: 'Back squat or leg press', home: 'Backpack goblet squat / tempo squat', sets: '4 × 6–8', notes: 'Controlled depth' },
  { day: 'Wed Lower', gym: 'Romanian deadlift', home: 'Single-leg RDL', sets: '3 × 8', notes: 'Flat back' },
  { day: 'Wed Lower', gym: 'Bulgarian split squat', home: 'Split squat on chair', sets: '3 × 8 / leg', notes: 'Back foot elevated' },
  { day: 'Wed Lower', gym: 'Hip thrust + Leg curl', home: 'Single-leg bridge + Towel slider curl', sets: '3 × 8–10, 3 × 10–12', notes: 'Glutes & hamstrings' },
  { day: 'Wed Lower', gym: 'Standing calf raise + Tibialis raise', home: 'Single-leg calf + Wall tibialis raise', sets: '4 × 10–15, 2 × 15–20', notes: 'Runner tendon protection' },
  { day: 'Wed Lower', gym: 'Pallof press or hanging leg raise', home: 'Side plank or lying leg raise', sets: '3 × 10–12', notes: 'Anti-rotation core' },
  { day: 'Fri Upper B + Full', gym: 'Trap-bar deadlift', home: 'Backpack deadlift', sets: '3 × 5', notes: '2–3 RIR before Sat long run' },
  { day: 'Fri Upper B + Full', gym: 'Incline DB press', home: 'Incline push-up', sets: '3 × 8–12', notes: 'Upper chest' },
  { day: 'Fri Upper B + Full', gym: 'Chin-up (assisted if needed)', home: 'Inverted row, feet elevated', sets: '3 × 6–10', notes: 'Full hang' },
  { day: 'Fri Upper B + Full', gym: 'One-arm DB row + Rear-delt fly', home: 'Backpack row + Band fly', sets: '3 × 10–12, 3 × 12–15', notes: 'Mid-back priority' },
  { day: 'Fri Upper B + Full', gym: 'Dips / close-grip push-up + Hammer curl', home: 'Chair dips + Backpack hammer curl', sets: '3 × 8–12', notes: 'Arms' },
  { day: 'Fri Upper B + Full', gym: "Farmer's carry", home: 'Water jugs or backpack carry', sets: '4 × 40 m', notes: 'Tall posture' },
];

export const PACE_MILESTONES = [
  { week: 8, event: '5K Test', targetTime: '40–45 min', racePaceSec: 510, racePaceLabel: '8:00–9:00', easyPaceSec: 585, easyPaceLabel: '9:00–10:30 (walk breaks)' },
  { week: 12, event: '10K Event', targetTime: '80–95 min', racePaceSec: 525, racePaceLabel: '8:00–9:30', easyPaceSec: 585, easyPaceLabel: '9:15–10:30' },
  { week: 20, event: '10K Time Trial', targetTime: '72–80 min', racePaceSec: 456, racePaceLabel: '7:12–8:00', easyPaceSec: 540, easyPaceLabel: '8:30–9:30' },
  { week: 28, event: '10K Tune-up', targetTime: '68–74 min', racePaceSec: 426, racePaceLabel: '6:48–7:24', easyPaceSec: 510, easyPaceLabel: '8:00–9:00' },
  { week: 34, event: 'Half Marathon', targetTime: '2:30–2:50', racePaceSec: 455, racePaceLabel: '7:07–8:03', easyPaceSec: 510, easyPaceLabel: '8:00–9:00' },
  { week: 42, event: 'Half Tune-up', targetTime: '2:25–2:45', racePaceSec: 440, racePaceLabel: '6:52–7:49', easyPaceSec: 500, easyPaceLabel: '7:50–8:50' },
  { week: 52, event: 'Full Marathon', targetTime: '5:15–5:50 (5:30)', racePaceSec: 469, racePaceLabel: '7:28–8:18 (7:49)', easyPaceSec: 495, easyPaceLabel: '7:45–8:45' },
];

export const VARIATIONS_MATRIX = [
  { situation: 'Only dumbbells & bench', action: 'Replace pulldown with one-arm rows (or bar pull-ups); hip thrusts with DB, goblet & split squats.' },
  { situation: 'No pool on Sunday', action: 'Swap swimming for 40 min easy cycling or brisk walking + 25 min Flexibility Routine B.' },
  { situation: 'Short on time (35–40 min)', action: 'Do 4 exercises (3–4 sets each): 1 push, 1 pull, 1 squat/hinge, 1 core. Cut run from 35 to 20 min.' },
  { situation: 'Travelling / hotel', action: 'Hotel circuit: push-ups, split squats, backpack rows, glute bridges, plank + 20–30 min run/walk.' },
  { situation: 'Hot or rainy weather', action: 'Treadmill at 1% incline, indoor circuit, or shift run to early morning / late evening (+10–20 s/km slower in heat).' },
  { situation: 'Feeling sick', action: 'Mild head cold: easy walk only. Fever, body aches, or chest symptoms: complete rest until recovered.' },
];

export const MOVEMENT_SCREENS = [
  { test: 'Overhead / Bodyweight Squat', check: 'Feet shoulder width, squat to comfortable depth', norm: 'Heels down, knees over toes, upright torso', response: 'Ankle mobility, tempo goblet squats, glute activation' },
  { test: 'Single-Leg Stance & Squat', check: 'Stand 30 s per leg, then shallow single-leg squat', norm: 'Level pelvis, stable knee', response: 'Banded lateral walks, glute bridges, single-leg work' },
  { test: 'Hip Hinge (Dowel Test)', check: 'Broomstick along spine while hinging at hips', norm: 'Head, mid-back & tailbone stay in contact', response: 'Hinge drills and light RDL practice' },
  { test: 'Ankle Dorsiflexion (Knee-to-Wall)', check: 'Foot flat, drive knee to touch wall; measure toe distance', norm: '≥10 cm; <1.5–2 cm left/right asymmetry', response: 'Straight/bent-knee calf stretches & slow heel raises' },
  { test: 'Thomas Test (Hip Extension)', check: 'Lie on table edge, hug one knee to chest', norm: 'Hanging thigh rests flat, knee ~80–90°', response: 'Half-kneeling hip flexor stretch with glute squeeze' },
  { test: 'Straight-Leg Raise & Shoulder Flexion', check: 'Lying straight-leg lift & overhead reach (ribs down)', norm: 'Hamstrings 70–90° · Shoulder 180° pain-free', response: 'Hamstring PNF / towel stretch; doorway chest stretch' },
];

export const SPOTTING_SAFETY = [
  { lift: 'Barbell bench press', rule: 'Spotter or safety arms set just above chest height; learn how to bail out.' },
  { lift: 'Barbell squat', rule: 'Squat inside a rack with safety pins set just below lowest controlled depth.' },
  { lift: 'Dumbbell press', rule: 'Spotter assists getting heavy DBs into position and spots at the wrists.' },
  { lift: 'Deadlift', rule: 'No spotter. Lift on flat floor with collars; drop bar cleanly forward if needed.' },
  { lift: 'Pre-session check', rule: 'Floor clear of plates, collars on barbells, cables/pins inspected, dry hands & shoes.' },
];

export const MOTIVATION_CALENDAR = [
  { week: 'Week 4', milestone: 'First Month Done', action: 'Review training log; buy a non-food reward (running socks or playlist).' },
  { week: 'Week 8', milestone: 'First 5K Test', action: 'Compare progress photos, share with a friend, register for the 10K.' },
  { week: 'Week 12', milestone: '10K & Phase 1 Complete', action: 'Full retest battery, adjust goals, inspect/replace shoes if worn.' },
  { week: 'Week 20', milestone: '10K Time Trial', action: 'Recalculate P10 pace zones and celebrate speed gains.' },
  { week: 'Week 34', milestone: 'Half Marathon Finish', action: 'Take recovery week, then formally register for the Week 52 Marathon.' },
  { week: 'Week 42', milestone: 'Half Tune-up & Peak Block', action: 'Audit sleep, nutrition, and any physical niggles before 30 km runs.' },
  { week: 'Week 52', milestone: 'Marathon Finish', action: 'Recover 2–3 weeks, retest baseline battery, and choose Year 2 focus.' },
];


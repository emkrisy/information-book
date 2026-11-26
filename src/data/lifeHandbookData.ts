export type EvidenceStrength =
  | 'Strong'
  | 'Moderate'
  | 'Emerging'
  | 'Contested'
  | 'Rule of thumb'
  | 'Theory';

export interface IdentitySnapshotItem {
  label: string;
  detail: string;
}

export interface SurveyTensionItem {
  id: number;
  title: string;
  insight: string;
}

export interface TraditionRow {
  tradition: string;
  gives: string;
  shortfall: string;
  verdict: string;
}

export interface PhilosophyLayer {
  id: 'purpose' | 'compass' | 'engine' | 'discipline' | 'foundation';
  title: string;
  subtitle: string;
  question: string;
  thinkers: string;
  summary: string;
}

export interface CoreTensionResolution {
  tension: string;
  resolution: string;
  whyItHolds: string;
}

export interface CorePrinciple {
  number: number;
  title: string;
  rule: string;
}

export interface LifeAreaEvidence {
  claim: string;
  detail: string;
  strength: string;
}

export interface LifeAreaItem {
  id: string;
  sectionCode: string;
  name: string;
  priority: number;
  currentRating: number;
  targetRating: number;
  extraMetric?: string;
  direction: string;
  whereIAm: string;
  watchOut: string;
  practices: string[];
  limitingBeliefs?: { from: string; to: string }[];
  evidence: LifeAreaEvidence[];
  targets12Month: string[];
}

export interface ProtectedHourBlock {
  category: string;
  hours: number;
  color: string;
  focus: string;
}

export interface SampleWeekDay {
  day: string;
  protectedBlock: string;
  exercise: string;
}

export interface RoadmapHorizon {
  horizon: string;
  title: string;
  items: { period: string; summary: string }[];
}

export interface WorkPlanMonth {
  month: string;
  deliverable: string;
  doneWhen: string;
}

export interface BudgetRow {
  category: string;
  amount: number;
  pct: number;
  note?: string;
  color: string;
}

export interface ScorecardRow {
  quality: string;
  whatIWouldSee: string;
  redFlag: string;
}

export interface FearLadderStep {
  step: number;
  task: string;
  difficulty: number;
}

export interface DecisionMatrixRow {
  decision: string;
  reversibility: 'Reversible' | 'Partly reversible' | 'Fairly reversible' | 'Hard to reverse';
  reversibilityNote: string;
  rule: string;
  when: string;
}

export interface RiskRegisterRow {
  risk: string;
  earlySign: string;
  planB: string;
}

export interface ReadingBook {
  order: number;
  title: string;
  author: string;
  why: string;
  when: string;
  isWorkbook?: boolean;
}

export interface OpenQuestion {
  number: number;
  question: string;
}

export interface HandbookReferenceGroup {
  area: string;
  items: string[];
}

export interface ScientificUpgradeItem {
  id: string;
  domain: string;
  previousIntuition: string;
  scientificFinding: string;
  exactNumbers: string;
  actionRule: string;
  citation: string;
  strength: EvidenceStrength;
}

export const HANDBOOK_META = {
  title: 'My Life Handbook (Draft 2)',
  epigraph:
    'Built from my Discovery Survey. This is a living document: I read it every week, and I rewrite it at least once a year. It is a compass, not a cage.',
  closingMaxim:
    'Remember: the point is not a perfect life. It is a life that moves, steadily, in a direction I chose.',
};

export const WHO_I_AM: IdentitySnapshotItem[] = [
  {
    label: 'Stage of life',
    detail:
      "Fresh graduate starting a master's degree (~2 years) in Indonesia, supported by a loving family, parent-funded, no income yet.",
  },
  {
    label: 'Core values',
    detail:
      'Growth, health, security, learning, freedom, family, love. Non-negotiables: health, wealth, love.',
  },
  {
    label: 'Strengths',
    detail:
      'Smart, visionary, open-minded, determined, sincere. Strong at analysis, operations, and leadership in structured team environments.',
  },
  {
    label: 'Weak spots',
    detail:
      'Procrastination, anxiety, fear of failure, shyness, pull toward the safe zone. Common thread: inconsistency.',
  },
  {
    label: 'Biggest fear',
    detail: 'Not having a stable life later (career, money, family).',
  },
  {
    label: 'Dream life',
    detail: 'Teach at a university. Also: a garden, a think tank, a library.',
  },
  {
    label: 'Role models',
    detail: 'People who succeed in academia or business, especially B.J. Habibie.',
  },
  {
    label: 'Wellbeing priority',
    detail:
      'Diagnosed with anxiety and depressive symptoms linked to perfectionism and improving with professional help. Protecting this progress comes before any ambition.',
  },
];

export const SURVEY_PATTERNS: SurveyTensionItem[] = [
  {
    id: 1,
    title: "You don't lack ability. You lack consistency, and fear is the cause.",
    insight:
      "Procrastination, inconsistency, and repeating 'I will fail' are faces of perfectionism: if I don't start, I can't fail.",
  },
  {
    id: 2,
    title: 'Security is your deepest want, but your dreams are risky.',
    insight:
      'Stability, freedom, a PhD abroad, business, and a think tank can coexist only if sequenced: security first, then bigger bets.',
  },
  {
    id: 3,
    title: 'Wealth is non-negotiable, yet money is rated 1/10 and untouched.',
    insight:
      'Having no income made money an avoided topic—and avoidance grows fear. Turn money from dread into a tracked skill.',
  },
  {
    id: 4,
    title: 'Career is the lever, and also the biggest source of dread.',
    insight:
      "Rated 1/10 despite being the highest-leverage area—good news because master's → PhD is already in motion.",
  },
  {
    id: 5,
    title: 'Romance is blocked by avoidance, not a shortage of options.',
    insight:
      "Indecision and loneliness meet parents' rule ('be stable first') and marriage target ~27. Romance, money, and career share one timeline.",
  },
  {
    id: 6,
    title: 'Faith and reason conflict only because they were separated.',
    insight:
      "Desire for reasoned faith vs. reflection-only habit today. Asking honest questions is healthy; the gap is practice plus good sources.",
  },
  {
    id: 7,
    title: 'Eight protected hours a week is enough, if protected.',
    insight:
      '8 hours/week plus ~200 minutes of exercise fits inside current capacity once tracked instead of guessed.',
  },
  {
    id: 8,
    title: "'Too far' and exhaustion come from carrying perfectionism.",
    insight:
      'Comparing yourself mid-journey against someone else’s finished version breeds false verdicts; exhaustion is not proof of defect.',
  },
];

export const TRADITIONS_TABLE: TraditionRow[] = [
  {
    tradition: 'Stoicism (Epictetus, Seneca, Marcus Aurelius)',
    gives: 'Separating what I control from what I do not; daily emotional discipline; ancestor of CBT.',
    shortfall: 'Thin on love, meaning, and transcendence; easy to misuse as emotional suppression.',
    verdict: 'Adopt as daily practice',
  },
  {
    tradition: "Aristotle's virtue ethics & Miskawayh",
    gives: 'Character built by repeated action; flourishing (eudaimonia) as whole-life aim; friendship as central.',
    shortfall: 'Says little about faith, doubt, or crisis.',
    verdict: 'Adopt for character & habits',
  },
  {
    tradition: 'Existentialism (Kierkegaard, Sartre, Camus)',
    gives: 'Radical responsibility, authenticity, and Kierkegaard’s view of anxiety as the dizziness of freedom.',
    shortfall: 'Sartre and Camus end without ultimate meaning; style can feed overthinking.',
    verdict: 'Adopt responsibility; decline atheistic conclusion',
  },
  {
    tradition: "Frankl's logotherapy",
    gives: 'Meaning found through work, love, and stance toward unavoidable suffering.',
    shortfall: 'Not a complete worldview on its own.',
    verdict: 'Adopt as the meaning engine',
  },
  {
    tradition: 'Islamic rationalism (Ibn Rushd, al-Ghazali, Ibn Tufayl) & Iqbal',
    gives: 'Faith and reason in harmony; doubt as a stage on the road; active, creative selfhood (khudi).',
    shortfall: 'Needs a qualified teacher; schools disagree on fate and interpretation.',
    verdict: 'Adopt as the foundation',
  },
  {
    tradition: 'Absurdism or nihilism alone',
    gives: 'Honesty about uncertainty.',
    shortfall: 'Cannot sustain a life of contribution; clashes with core belief.',
    verdict: 'Learn from it, do not live by it',
  },
];

export const PHILOSOPHY_LAYERS: PhilosophyLayer[] = [
  {
    id: 'purpose',
    title: 'Purpose: The Khalifah-Scholar Way',
    subtitle: 'A steward who seeks truth and leaves benefit behind',
    question: 'Why live?',
    thinkers: 'Quranic stewardship (khalifah) + Scholarly duty',
    summary:
      'A khalifah is a steward accountable for what was entrusted; a scholar seeks truth with reason and turns knowledge into lasting benefit.',
  },
  {
    id: 'compass',
    title: 'Layer 1 · Compass',
    subtitle: 'Faith with reason',
    question: 'What is true?',
    thinkers: 'Ibn Rushd, al-Ghazali, B.J. Habibie (IPTEK + IMTAQ), M. Amin Abdullah',
    summary:
      'Revelation and demonstrated reason cannot truly contradict. Apparent clashes call for careful study and spiritual practice, not panic or abandoning either.',
  },
  {
    id: 'engine',
    title: 'Layer 2 · Engine',
    subtitle: 'An authored life',
    question: 'What is mine to do?',
    thinkers: 'Muhammad Iqbal (khudi), Viktor Frankl, Soren Kierkegaard, Jean-Paul Sartre',
    summary:
      'Selfhood grows through purposeful action. Anxiety is the dizziness of freedom—it appears because real choices matter.',
  },
  {
    id: 'discipline',
    title: 'Layer 3 · Discipline',
    subtitle: 'Stoic & Aristotelian habits',
    question: 'What do I practise on Tuesday?',
    thinkers: 'Epictetus, Seneca, Aristotle',
    summary:
      'Focus on effort, judgments, and choices (up to me) rather than outcomes or luck. Review each evening; build character by small repeated acts. Sits beside therapy, never replaces it.',
  },
  {
    id: 'foundation',
    title: 'Foundation Under All Three',
    subtitle: 'Health, basic security, close relationships',
    question: 'What keeps the system standing?',
    thinkers: 'WHO, Harvard Adult Study, Behavioral Activation',
    summary: 'A philosophy that ignores physical health, financial stability, and close human ties is a hobby.',
  },
];

export const CORE_TENSIONS: CoreTensionResolution[] = [
  {
    tension: 'Faith versus science',
    resolution:
      'Science tells me how nature works; revelation, philosophy, and ethics address meaning, purpose, and how to live. Check both scientific consensus and scholarly interpretation without panic.',
    whyItHolds:
      "Ian Barbour's 4 models (conflict, independence, dialogue, integration) show conflict is only one option; Ibn Rushd and Habibie model dialogue & integration.",
  },
  {
    tension: 'Fate versus free will',
    resolution:
      'Strive with full effort (ikhtiar), then release the result with trust (tawakkul). Tie the camel, then trust in God; verify classical positions on qadar with a teacher.',
    whyItHolds:
      "Classical Muslim accounts (Ash'ari kasb, Maturidi, Mu'tazila) and modern compatibilists (Frankfurt, Dennett) preserve moral responsibility; matches Stoic control split.",
  },
  {
    tension: 'Security versus freedom',
    resolution:
      'Sequence them: security first, then options, then freedom. Decide reversible choices quickly and irreversible ones slowly.',
    whyItHolds:
      "Aristotle's golden mean between recklessness and cowardice; fear of instability is data to plan around, not a character flaw.",
  },
  {
    tension: 'Ambition versus peace',
    resolution:
      'Care deeply about effort and contribution, hold outcomes loosely, and keep intention clean (niyyah).',
    whyItHolds: "Stoic indifference to external outcomes paired with al-Ghazali's focus on inner intention.",
  },
  {
    tension: 'Fear of failure versus a meaningful life',
    resolution: 'Act while afraid. Treat anxiety as information about what matters, not a ban.',
    whyItHolds:
      'Kierkegaard on anxiety and freedom; CBT exposure shrinks fear through small faced steps.',
  },
  {
    tension: 'Suffering and setbacks',
    resolution:
      'Ask what is mine to do right now, and what this moment can teach or build (patience / sabr).',
    whyItHolds: "Frankl's attitudinal meaning combined with Stoic acceptance.",
  },
];

export const MANIFESTO_PARAGRAPHS: string[] = [
  'I am a steward, not an owner, of my time, my mind, my body and my talents. I seek truth with reason and humility, and I keep faith as the compass that tells me what truth is for. I give full effort to what is in front of me and release the outcome with trust.',
  'I treat anxiety as a sign that something matters, not as a verdict that I will fail. I build character through small repeated acts, because I become what I practise. I choose security first, so that I can take larger risks later.',
  'I love with loyalty and honesty, and I say the hard thing early. I measure my life by the benefit I leave behind: knowledge shared, people helped, promises kept. When I fall, I take a smaller step and begin again.',
  'This is my decision for now. I will test it for a year, discuss the faith questions with a trusted teacher, and revise it when real life shows me where it is wrong.',
];

export const CORE_PRINCIPLES: CorePrinciple[] = [
  { number: 1, title: 'Direction over speed', rule: 'I am under 25. I do not need it all figured out; I need steady movement in a chosen direction.' },
  { number: 2, title: 'Consistency beats intensity', rule: 'A small thing done daily beats a perfect plan I never start.' },
  { number: 3, title: 'Done is better than perfect', rule: 'First drafts are allowed to be bad. I finish, then improve.' },
  { number: 4, title: 'Failure is data, not a verdict', rule: 'After any failure I ask: what did I learn, and what is the next small step?' },
  { number: 5, title: 'Health first', rule: 'Mind and body are the foundation. If they break, nothing else works.' },
  { number: 6, title: 'Security before big risks', rule: 'Build a stable base (degree, income, savings), then take larger bets.' },
  { number: 7, title: 'Faith with reason', rule: 'Keep asking honest questions and keep practice. Doubt is part of learning, not the end of belief.' },
  { number: 8, title: 'Love with honesty and commitment', rule: 'I am loyal, communicate even when uncomfortable, and do not hide in avoidance.' },
  { number: 9, title: 'Kind but clear boundaries', rule: 'Saying no is how I protect my yes.' },
  { number: 10, title: 'Decide by values, not by fear', rule: 'Ask which option fits my values—not which feels safest right now.' },
  { number: 11, title: 'Learn in public, build a track record', rule: 'Produce visible work: projects, writing, research, teaching.' },
  { number: 12, title: 'Review weekly, reset yearly', rule: 'I never judge my whole life by one bad week.' },
];

export const LIFE_AREAS: LifeAreaItem[] = [
  {
    id: 'growth',
    sectionCode: '5.1',
    name: 'Personal Growth',
    priority: 1,
    currentRating: 6,
    targetRating: 7,
    extraMetric: 'Discipline 4→6 · Confidence 5→7',
    whereIAm: 'Strong intellectual capacity paired with perfectionism-driven inconsistency and no structured method for failure or criticism.',
    direction: 'Turn inconsistency into reliable daily habits, and build a concrete method to handle stress, failure, and criticism.',
    watchOut: 'Do not overload the plan. Perfectionism will try to turn this handbook into a new thing to fail at. Restart the next day—no catching up.',
    practices: [
      'Daily minimum: 3 tasks max; do the top task first for 25 minutes. Even a bad 25 minutes counts.',
      "Make starting tiny: 'open the file and work for 5 minutes.' Stopping after 5 minutes is allowed.",
      'Name the emotion first (Affect Labeling): say/write "I feel anxious about ___" to dampen amygdala alarm before starting.',
      'Perfectionism practice: deliberately submit or share one item weekly at 80% polish.',
      'Weekly failure log: what did not work, what it taught me, what I will try next.',
      'Track time for one full week with phone screen-time + simple log to replace guesses with facts.',
      'Phone in ANOTHER room for work hour 1—never face-down on the desk (removes subconscious cognitive drain).',
      'Write a one-paragraph note from closed-book memory first after every finished book or paper.',
    ],
    limitingBeliefs: [
      { from: "'I will fail'", to: "'I might fail at some things, and I can learn from each one.'" },
      { from: "'I have no luck'", to: "'I create my chances by showing up repeatedly.'" },
      { from: "'I procrastinate because I am lazy'", to: "'Procrastination is short-term mood repair; shrinking the step removes the threat.'" },
    ],
    evidence: [
      { claim: 'Procrastination as emotion regulation (Steel, 2007; Sirois & Pychyl, 2013)', detail: 'Avoidance is not a time-management flaw—it is short-term mood repair to escape anxiety or self-doubt at future-self cost.', strength: 'Strong' },
      { claim: 'Smartphone "Brain Drain" (Ward et al., 2017, JACR)', detail: 'Even when silent and face-down on a desk, your own phone reduces available working memory and fluid intelligence compared to keeping it in another room.', strength: 'Moderate to strong' },
      { claim: 'Affect labeling dampens fear (Lieberman et al., 2007; Kircanski et al., 2012)', detail: 'Putting anxiety words on paper engages right ventrolateral prefrontal cortex (rVLPFC) and downregulates amygdala reactivity during exposure.', strength: 'Moderate to strong' },
      { claim: 'Self-determination theory (Deci & Ryan, 2000)', detail: 'Autonomy, competence, and relatedness form the motivation backbone.', strength: 'Strong' },
      { claim: 'Perfectionism & anxiety (Limburg et al., 2017; Egan et al., 2011)', detail: 'Perfectionistic concerns strongly predict anxiety/procrastination; CBT perfectionism work reduces them.', strength: 'Strong link / Moderate treatment' },
      { claim: 'Habit formation (Lally et al., 2010)', detail: 'Median 66 days to automaticity (18–254 range); one missed day did not break habit.', strength: 'Moderate' },
      { claim: 'Implementation intentions (Gollwitzer & Sheeran, 2006)', detail: '94 tests show If-Then plans improve goal completion (effect size d = 0.65).', strength: 'Strong' },
      { claim: 'Behavioural activation (Richards et al., 2016 COBRA trial)', detail: 'Scheduling valued action works comparably to full cognitive therapy for low mood.', strength: 'Moderate to strong' },
      { claim: 'Self-compassion (MacBeth & Gumley, 2012; Breines & Chen, 2012)', detail: 'Self-kindness after failure predicts persistence and lower distress.', strength: 'Moderate' },
      { claim: 'Social media cap (Hunt et al., 2018) & Growth mindset (Sisk et al., 2018)', detail: '30-min cap eased loneliness; Sisk et al. found small overall achievement effect (d ≈ 0.08)—kept as mindset, not magic fix.', strength: 'Emerging / Contested' },
    ],
    targets12Month: [
      '25-min top task on 5 days/week for 12 consecutive weeks, with phone placed in another room.',
      'Log time for one week now and again at Month 6.',
      'Complete weekly failure log in at least 40 of 48 weeks.',
      'Enforce daily social-media cap + Sunday screen-time review.',
      'Continue work with psychologist with explicit perfectionism targets (discipline 4→6, confidence 5→7).',
    ],
  },
  {
    id: 'career',
    sectionCode: '5.2',
    name: 'Career & Work',
    priority: 2,
    currentRating: 1,
    targetRating: 6,
    extraMetric: 'Parallel PhD + Analyst Tracks',
    whereIAm: 'Fresh graduate starting master’s degree; analytical skill, data-analyst internship, leadership, and supportive family—yet rated 1/10 from dread.',
    direction: "Finish the master's strongly, win a PhD scholarship, and become a university lecturer—while keeping analyst/consultant open as a strong parallel path.",
    watchOut: "Reframe 'if I choose study, I lose career': for an academic path, study IS the career. The real risk is spending time without visible output.",
    practices: [
      'Choose a thesis topic linking academia with analytical skills that can become a publishable paper.',
      'Build a close working relationship with at least one supervisor for strong recommendations.',
      "Aim for one concrete research output during the master's (paper, conference, working paper).",
      'Use active recall when mapping literature: read a paper, close the PDF, write your 1-paragraph summary from memory before checking.',
      'Build a portfolio of 3–5 public analysis projects for analyst/consultant readiness.',
      'Pursue CV-building paid roles: TA, RA, or freelance analysis.',
      'Research PhD scholarships (Indonesian & international) at least 12 months before deadlines.',
      'Keep business as a post-stability option once stable income and savings exist.',
    ],
    evidence: [
      { claim: 'Testing effect & retrieval practice (Roediger & Karpicke, 2006)', detail: 'After 1 week, closed-book recall produced 56–61% retention vs. 42% from repeated re-reading (even though re-readers felt more confident).', strength: 'Strong' },
      { claim: 'Planned happenstance (Mitchell, Levin & Krumboltz, 1999)', detail: 'Curiosity, persistence, and flexibility help turn chance encounters into career breaks.', strength: 'Moderate' },
      { claim: 'Academic job market realities', detail: 'Far more PhDs are awarded than permanent posts; verify Indonesian paths with local lecturers while keeping industry live.', strength: 'Strong (general)' },
      { claim: 'Self-efficacy (Bandura, 1977)', detail: 'Completed artefacts build real confidence far better than pep talks.', strength: 'Strong' },
      { claim: 'Deliberate practice (Ericsson, 1993; Macnamara, 2014)', detail: 'Targeted feedback improves skill, though hours alone are not the whole story.', strength: 'Moderate / Partly contested' },
      { claim: 'Strength of weak ties (Granovetter, 1973)', detail: 'Short chats with lecturers, alumni, and researchers uncover openings acquaintances hold.', strength: 'Strong' },
    ],
    targets12Month: [
      'Month 1: Agree thesis direction with supervisor and fix biweekly meetings.',
      'Month 3: Shortlist 3 PhD programs/scholarships and hold three 20-min informational chats.',
      'Month 6: Publish 2 portfolio projects and apply to ≥2 TA/RA positions.',
      'Months 9–12: Submit conference abstract/paper draft and prepare required language test.',
      'Keep 1 active analysis project running each year.',
    ],
  },
  {
    id: 'financial',
    sectionCode: '5.3',
    name: 'Financial',
    priority: 3,
    currentRating: 1,
    targetRating: 6,
    extraMetric: 'Key lever: Funded Scholarship',
    whereIAm: 'No income yet, parent-funded, skipped money section completely out of avoidance.',
    direction: 'Turn money from a source of fear into a calm habit: awareness now, 10% automatic saving on first income, emergency fund before investing.',
    watchOut: "Money anxiety + perfectionism creates 'all-or-nothing' avoidance. Also: a fully funded scholarship outweighs early investing by far.",
    practices: [
      'Stage 1 (Now): Track every rupiah spent for 30 days; agree clear monthly allowance with parents.',
      'Stage 2 (First income): Automatically move a fixed % (e.g. 10%) to separate savings on payday.',
      'Stage 3 (Safety net): Build 1 month of essential expenses first, then grow to 3–6+ months.',
      'Stage 4 (Basics): Read one beginner finance book (budgeting, inflation, avoiding high-interest debt).',
      'Stage 5 (Later): Simple low-cost OJK-supervised index funds only after emergency fund exists; avoid get-rich-quick schemes.',
    ],
    evidence: [
      { claim: 'Compounding & time', detail: 'Small early contributions grow longest—arithmetic, not opinion.', strength: 'Strong' },
      { claim: 'Automatic saving (Thaler & Benartzi, 2004)', detail: 'Pre-commitment & automation outperform willpower.', strength: 'Strong' },
      { claim: 'Low-cost index funds (Fama & French, 2010; SPIVA)', detail: 'Most active funds trail benchmarks after fees; verify OJK supervision in Indonesia.', strength: 'Strong' },
      { claim: 'Emergency fund rule (3–6+ months)', detail: 'Irregular academic/freelance contracts warrant higher cash cushions.', strength: 'Rule of thumb' },
      { claim: 'Income & wellbeing (Killingsworth, Kahneman & Mellers, 2023; Scarcity 2013; Dunn 2008)', detail: 'Scarcity taxes cognitive bandwidth; writing plans lowers stress; giving (sadaqah/zakat) lifts mood.', strength: 'Moderate' },
    ],
    targets12Month: [
      'Month 1: 30-day expense log + clear monthly allowance agreement with parents.',
      'Month 3: Finish one beginner personal-finance book and open separate savings account.',
      'First income: Automate 10% savings split and build first 1-month emergency buffer.',
      'Month 12: Zero consumer debt, written money plan, and itemized PhD abroad cost sheet.',
    ],
  },
  {
    id: 'romantic',
    sectionCode: '5.4',
    name: 'Romantic',
    priority: 4,
    currentRating: 2,
    targetRating: 6,
    extraMetric: 'Target marriage ~27 · Anti-avoidance 48h rule',
    whereIAm: 'Single with one past relationship; wants marriage around 27. Loyalty is a strength, avoidance/indecision is the friction, cheating is the deal-breaker.',
    direction: 'Replace comparison paralysis and avoidance with concrete observable standards, calm early communication, and aligned life timelines.',
    watchOut: 'Do not let fear of failure turn into permanent "not yet." Choosing carefully is wise; never choosing is a choice too.',
    practices: [
      "Translate vague traits ('commitment', 'compatibility') into observable daily behaviors.",
      'Avoid comparison paralysis: evaluate against fixed criteria & how you feel over time—not overthinking.',
      '48-hour anti-avoidance rule: name any bothering issue calmly within 48 hours.',
      'Never date merely to escape loneliness; date for shared values and character.',
      'Discuss location (abroad vs Indonesia), family timeline, and finances early when serious.',
      'Write lessons from past relationship once and review before starting new.',
    ],
    evidence: [
      { claim: 'Attachment theory (Bowlby; Hazan & Shaver, 1987)', detail: 'Avoidant tendencies are a learned pattern that can shift toward earned security.', strength: 'Strong theory / Moderate change' },
      { claim: "Gottman's Four Horsemen", detail: 'Criticism, contempt, defensiveness, and stonewalling (avoidance) harm ties; repair attempts protect them.', strength: 'Moderate' },
      { claim: "Sternberg's Triangular Theory (1986)", detail: 'Useful checklist across intimacy, passion, and commitment.', strength: 'Moderate' },
      { claim: 'Harvard Study of Adult Development (Waldinger & Schulz, 2023)', detail: 'Close relationship quality strongly predicts lifelong health and happiness.', strength: 'Strong' },
      { claim: 'Satisficing vs maximizing (Schwartz et al., 2002) + Quran (30:21)', detail: 'Seek tranquilllity (sakinah), affection, and mercy in someone meeting must-haves—not perfection.', strength: 'Mixed / Faith lens' },
    ],
    targets12Month: [
      'Rewrite must-haves into concrete observable behaviors before dating.',
      'Focus on 1–2 people at a time; run a 3-month calm/respected/myself check-in.',
      'Hold honest talk on expectations, children, residence, and timeline within early months of serious dating.',
      'Practise the 48-hour anti-avoidance rule on small friction first.',
      'Revisit marriage timeline at Month 12 alongside financial & career readiness.',
    ],
  },
  {
    id: 'physical',
    sectionCode: '5.5',
    name: 'Physical Health',
    priority: 5,
    currentRating: 7,
    targetRating: 8,
    extraMetric: '~200 min/wk · <Rp 300k/mo · Quit smoking',
    whereIAm: 'Good baseline health, 6–8h sleep, regular running/gym, worried about visceral fat, currently social smoker.',
    direction: 'Sustain 200 min/week (2 strength + 2 easy runs, every 4th week lighter), eliminate social smoking completely, get objective health baseline.',
    watchOut: 'Monitor whether visceral-fat worry mutates into rigid rules, guilt, or skipped meals; raise immediately with doctor or psychologist.',
    practices: [
      '2 runs + 2 strength sessions/week (~50 min each), with 1 lighter deload week every 4th week.',
      'Treat social smoking as zero-tolerance risk: never buy cigarettes, decline cues immediately.',
      'Get real data (WHO Asia-Pacific waist target <90 cm for men, BP, fasting glucose, lipids) from a doctor instead of scale anxiety.',
      'Keep steady 7+ hr sleep schedule with dark room, consistent wake time, and strict caffeine cutoff ≥6–8h before bed.',
      'Use exercise deliberately as an anti-anxiety tool on the days you least want to move.',
    ],
    evidence: [
      { claim: 'WHO Physical Activity Guidelines (2020)', detail: '150–300 min moderate aerobic + ≥2 strength days/wk; 200 min fits squarely inside.', strength: 'Strong' },
      { claim: 'Exercise & Mental Health (Cooney et al., 2013; Singh et al., 2023)', detail: 'Clear reductions in depressive and anxious symptoms.', strength: 'Strong' },
      { claim: 'WHO Asia-Pacific visceral fat cutoffs', detail: 'For Asian men, central obesity risk starts at waist ≥90 cm and overweight at BMI 23.0–24.9 (obesity ≥25.0)—making waist measurement far more accurate than Western BMI charts.', strength: 'Strong' },
      { claim: 'Light/social smoking risk (Hackshaw et al., 2018, BMJ)', detail: 'Across 141 cohorts, smoking just 1 cigarette/day carries ~46% of the excess male coronary heart disease risk and ~41% of the excess stroke risk of a 20/day pack (+48% to +74% CHD risk vs never-smokers).', strength: 'Strong' },
      { claim: 'Caffeine 6h before bed (Drake et al., 2013, JCSM) & Sleep (Watson et al., 2015)', detail: '400 mg caffeine taken even 6 hours before bedtime cut objective total sleep by >1 hour—often without the person realizing sleep was impaired.', strength: 'Strong' },
    ],
    targets12Month: [
      'Hit ~200 min exercise in ≥40 of 48 weeks (staying under Rp 300,000/month).',
      'Stop buying cigarettes immediately; fully quit within 3 months.',
      'Sleep ≥7 hours on 5+ nights/week with caffeine stopped ≥6–8 hours before bedtime.',
      'Complete general medical checkup (target waist <90 cm, BP <120/80, glucose, lipids) in Months 1–3.',
    ],
  },
  {
    id: 'social',
    sectionCode: '5.6',
    name: 'Social & Belonging',
    priority: 6,
    currentRating: 7,
    targetRating: 8,
    extraMetric: 'Dunbar inner circle: 5 close friends',
    whereIAm: '~5 energizing close friends, supportive family, religious & football communities, yet occasional loneliness from lacking someone to discuss big ideas with.',
    direction: 'Keep inner circle deep, cultivate one intellectual peer group/companion, and practise assertive boundaries without over-explaining.',
    watchOut: 'Saying yes out of shyness drains protected hours; keep the boundary script brief without inviting negotiation.',
    practices: [
      "Join one research circle, reading group, or seminar in the master's program.",
      "Practise clean 'no' script: 'Thanks for asking. I can't this time.'—and stop talking.",
      'Schedule a weekly message/meetup slot for one close friend; be supportive and present.',
      'Maintain regular contact with parents and share roadmap updates transparently.',
    ],
    evidence: [
      { claim: 'Social ties & survival (Holt-Lunstad et al., 2010)', detail: 'Across 148 studies, stronger relationships showed ~50% higher survival likelihood.', strength: 'Strong' },
      { claim: 'Loneliness as connection gap', detail: 'Having 5 close friends does not exclude feeling intellectually isolated—depth & idea-peers matter.', strength: 'Strong' },
      { claim: "Dunbar's circles (5 / 15 / 50 / 150)", detail: 'Inner circle is already full; grow outward selectively via weak ties (Granovetter, 1973).', strength: 'Moderate / Strong' },
      { claim: 'Assertiveness training', detail: 'Boundary setting and graded exposure are validated CBT tools for social anxiety.', strength: 'Strong' },
    ],
    targets12Month: [
      'Month 3: Join one intellectual community and attend ≥2x/month.',
      'Hold one mentor/lecturer/senior conversation per quarter.',
      'Contact/meet one close friend weekly and call family monthly.',
      "Practise one low-stakes 'no' per week.",
    ],
  },
  {
    id: 'spiritual',
    sectionCode: '5.7',
    name: 'Spiritual & Inner Peace',
    priority: 7,
    currentRating: 2,
    targetRating: 6,
    extraMetric: 'Inner peace 4→6 · Faith + Reason',
    whereIAm: 'Born Muslim, believes in God and afterlife; currently practises through nature & reflection; wants consistent prayer while examining questions on fate and science.',
    direction: 'Faith that is practiced steadily and examined honestly with qualified sources and a trusted teacher.',
    watchOut: 'Waiting to resolve every metaphysical doubt before praying traps you outside practice; follow al-Ghazali: doubt → inquiry → practice.',
    practices: [
      'Start with ONE daily prayer anchored to an existing daily cue; build after 66 days.',
      'Read primary & respected sources (al-Ghazali, Ibn Rushd, contemporary science & Islam).',
      'Find a qualified lecturer/scholar who welcomes hard questions; do not carry doubt alone.',
      'Sort each question separately: scientific, philosophical, theological, ethical, or emotional.',
      'Keep 30 min weekly quiet reflection outdoors; pair faith with existentialism in dialogue.',
    ],
    evidence: [
      { claim: 'Religious struggle (Pargament; Exline)', detail: 'Doubt with curiosity and mentorship produces growth; silent shame-filled doubt links to distress.', strength: 'Moderate' },
      { claim: 'Practice & wellbeing (VanderWeele, 2017; Goyal et al., 2014)', detail: 'Community and mindfulness show consistent wellbeing benefits; prayer studies emerging.', strength: 'Moderate / Emerging' },
      { claim: 'Time in nature (White et al., 2019)', detail: '≥120 min/week outdoors correlates with improved health/wellbeing—outdoor runs already count.', strength: 'Moderate' },
      { claim: 'Gratitude review (Emmons & McCullough, 2003)', detail: 'Nightly three-good-things note yields reliable small-to-moderate wellbeing gains.', strength: 'Moderate' },
    ],
    targets12Month: [
      'Keep one daily prayer consistently for at least 66 days, then expand with teacher advice.',
      'Months 1–3: Deliverance from Error (al-Ghazali); 4–6: Decisive Treatise (Ibn Rushd); 7–9: Science & Islam book.',
      'Meet monthly with a teacher using a written question list.',
      'Weekly 30-min outdoor reflection + brief nightly muhasabah review.',
      'Re-rate inner peace quarterly (aiming 4 → 6).',
    ],
  },
];

export const PROTECTED_HOURS_BREAKDOWN: ProtectedHourBlock[] = [
  { category: 'Career capital', hours: 3.0, color: '#0369a1', focus: 'Thesis direction, portfolio projects, PhD scholarship research' },
  { category: 'Spiritual', hours: 1.5, color: '#0f766e', focus: 'Reading classical/reasoned faith texts, outdoor reflection, teacher questions' },
  { category: 'Personal growth', hours: 1.0, color: '#4338ca', focus: 'Reading notes, failure log, CBT thought records' },
  { category: 'Money skills', hours: 1.0, color: '#b45309', focus: 'Expense tracking, personal finance study, Sunday check' },
  { category: 'Relationships & social', hours: 1.0, color: '#be123c', focus: 'Friends, family call, honest dating check-ins' },
  { category: 'Weekly review', hours: 0.5, color: '#475569', focus: 'Sunday 30-min audit & next 3 weekly priorities' },
];

export const SAMPLE_WEEK_SCHEDULE: SampleWeekDay[] = [
  { day: 'Monday', protectedBlock: 'Growth (60m): 30m read + 1-page note; 30m thought record', exercise: 'Strength session A (50m)' },
  { day: 'Tuesday', protectedBlock: 'Career (90m): Portfolio analysis project', exercise: 'Easy conversational run (50m)' },
  { day: 'Wednesday', protectedBlock: 'Money (30m): Expenses & lesson · Social (30m): Friend call/msg', exercise: 'Rest or easy walk' },
  { day: 'Thursday', protectedBlock: 'Career (90m): Scholarship shortlist & supervisor tasks', exercise: 'Strength session B (50m)' },
  { day: 'Friday', protectedBlock: 'Spiritual (60m): Reading & drafting teacher questions', exercise: 'Rest' },
  { day: 'Saturday', protectedBlock: 'Spiritual (30m): Outdoor reflection · Social/Romantic (30m) + friends', exercise: 'Longer easy outdoor run (50m)' },
  { day: 'Sunday', protectedBlock: 'Money (30m): Weekly spend check · Review (30m): Audit', exercise: 'Rest' },
];

export const DAILY_MINIMUMS: string[] = [
  'One prayer, kept consistently (anchored to an existing cue).',
  'Three tasks maximum written down, with one 25-minute deep block on the top task.',
  'Some physical movement.',
  'Phone out of reach during work hour 1 and outside the bed area at sleep.',
];

export const FIRST_7_DAYS: { day: string; task: string }[] = [
  { day: 'Day 1', task: 'Write 3 priorities for next 12 months (1 sentence each) and pick a fixed wake time.' },
  { day: 'Day 2', task: "Enable phone screen-time report and start a simple 1-week time log." },
  { day: 'Day 3', task: 'Log every rupiah spent; pick one daily prayer and anchor it to coming home.' },
  { day: 'Day 4', task: 'Message thesis supervisor for a first meeting; book a general medical checkup.' },
  { day: 'Day 5', task: 'Run first 25-min deep focus block and write first CBT thought record.' },
  { day: 'Day 6', task: 'Message one close friend to meet; spend 30 min outdoors in quiet reflection.' },
  { day: 'Day 7', task: 'Complete first Sunday 30-min review (finished, avoided, learned, next 3 priorities).' },
];

export const IF_THEN_PLANS: { trigger: string; response: string }[] = [
  { trigger: 'If I sit down at my desk', response: 'then I open the thesis file and write for 5 minutes before anything else.' },
  { trigger: 'If I feel the urge to open social media', response: 'then I take three slow breaths and write one sentence first.' },
  { trigger: "If I notice 'I will fail' in my head", response: 'then I write it down and ask what the evidence is.' },
  { trigger: 'If a friend offers a cigarette', response: "then I say 'no thanks, I quit', hold a drink, and step toward non-smokers." },
  { trigger: "If someone asks a favour I can't give", response: "then I say 'thanks for asking, I can't this time' and stop talking." },
  { trigger: 'If I miss a day', response: 'then the next day I do the daily floor only, with no catching up.' },
];

export const ROADMAP_HORIZONS: RoadmapHorizon[] = [
  {
    horizon: 'Next 12 Months',
    title: 'Foundation, Habits & Research Output',
    items: [
      { period: 'Months 1–3', summary: 'Track time & spending, get medical checkup, anchor prayer + weekly review, choose thesis topic with supervisor.' },
      { period: 'Months 4–6', summary: 'Start public portfolio project, apply for TA/RA role, compile PhD scholarship deadlines & requirements.' },
      { period: 'Months 7–9', summary: 'Produce first publishable draft, start emergency fund with first income, make clear romantic decision.' },
      { period: 'Months 10–12', summary: 'Full-year review, score all 7 areas, draft Version 3 of Life Handbook, and plan Year 2.' },
    ],
  },
  {
    horizon: '3 Years',
    title: 'Realistic Good Outcome',
    items: [
      {
        period: 'Academic & Work',
        summary: "Master's degree completed strongly, PhD scholarship secured, professional analyst or research role active.",
      },
      {
        period: 'Personal & Health',
        summary: 'Loving partner aligned on values, healthy parents, steadier mental health, and durable daily habits.',
      },
    ],
  },
  {
    horizon: '10 Years',
    title: 'The Dream Horizon',
    items: [
      {
        period: 'Vocation & Life',
        summary: 'Living abroad as an academic or professional, married, teaching and publishing meaningful work, content at heart.',
      },
      {
        period: 'Personal Spaces',
        summary: 'Possibly a garden, a quiet library, and a think tank contributing ideas that outlive you.',
      },
    ],
  },
];

export const CAREER_12M_PLAN: WorkPlanMonth[] = [
  { month: 'Month 1', deliverable: 'Supervisor meeting & thesis direction', doneWhen: 'Topic agreed in writing; biweekly meetings fixed' },
  { month: 'Month 2', deliverable: 'Literature map', doneWhen: '15 key papers read with 1-paragraph notes each' },
  { month: 'Month 3', deliverable: 'PhD scholarship shortlist', doneWhen: '3–5 programmes mapped with deadlines + 3 alumni chats' },
  { month: 'Month 4', deliverable: 'Portfolio project 1', doneWhen: 'Published with clean code + 1-page insight (e.g. BPS data)' },
  { month: 'Month 5', deliverable: 'Research proposal draft', doneWhen: '2-page proposal reviewed by supervisor' },
  { month: 'Month 6', deliverable: 'Income/CV step & Gate Check', doneWhen: '≥2 TA/RA applications sent; Gate questions answered' },
  { month: 'Months 7–8', deliverable: 'Thesis analysis & Portfolio project 2', doneWhen: 'Analysis plan approved; Project 2 published' },
  { month: 'Month 9', deliverable: 'Conference abstract or paper draft', doneWhen: 'Abstract submitted or draft shared with supervisor' },
  { month: 'Month 10', deliverable: 'Language test & referees', doneWhen: 'IELTS/TOEFL booked; 2–3 referees asked early' },
  { month: 'Month 11', deliverable: 'Scholarship statement drafts', doneWhen: 'Draft 1 reviewed by two trusted readers' },
  { month: 'Month 12', deliverable: 'Full decision gate & Handbook Draft 3', doneWhen: 'PhD vs analyst routine run with live offers' },
];

export const BUDGET_EXAMPLE: BudgetRow[] = [
  { category: 'Food', amount: 1200000, pct: 40, color: '#0369a1' },
  { category: 'Transport', amount: 300000, pct: 10, color: '#0284c7' },
  { category: 'Health & exercise (ceiling)', amount: 300000, pct: 10, note: 'Protected ceiling', color: '#059669' },
  { category: 'Saving (10%)', amount: 300000, pct: 10, note: 'Auto-moved first', color: '#0f766e' },
  { category: 'Social & fun', amount: 300000, pct: 10, note: 'Flex absorb source', color: '#6366f1' },
  { category: 'Study materials', amount: 250000, pct: 8.3, color: '#475569' },
  { category: 'Phone & internet', amount: 200000, pct: 6.7, color: '#64748b' },
  { category: 'Buffer for surprises', amount: 100000, pct: 3.3, color: '#d97706' },
  { category: 'Giving (sadaqah)', amount: 50000, pct: 1.7, color: '#be123c' },
];

export const LOVE_SCORECARD: ScorecardRow[] = [
  { quality: 'Commitment', whatIWouldSee: 'Does what they say; speaks about the future plainly', redFlag: 'Vague for months; keeps me out of their life' },
  { quality: 'Communication', whatIWouldSee: 'Raises problems calmly; listens; apologises and repairs', redFlag: 'Silent treatment, sarcasm, contempt' },
  { quality: 'Compromise', whatIWouldSee: 'Finds middle ground without keeping score; both give', redFlag: 'One person always yields' },
  { quality: 'Fidelity (deal-breaker)', whatIWouldSee: 'Consistent words and actions; open boundaries', redFlag: 'Secrecy, lies, disrespectful flirting' },
  { quality: 'Compatibility (physical, emotional, values)', whatIWouldSee: 'Mutual attraction; respectful limits; shared faith/value basics', redFlag: 'Pressure, shame, or clash on core values' },
  { quality: 'Calm, respected, myself', whatIWouldSee: 'After time together I feel steady and more myself', redFlag: 'Feel anxious, smaller, or constantly on edge' },
];

export const FEAR_LADDER: FearLadderStep[] = [
  { step: 1, task: 'Send a short email after reading it once—not five times', difficulty: 3 },
  { step: 2, task: 'Ask one spontaneous question in a class or seminar', difficulty: 4 },
  { step: 3, task: 'Share a rough 70% draft with a trusted friend', difficulty: 5 },
  { step: 4, task: 'Send supervisor a rough two-page outline with 3 questions', difficulty: 6 },
  { step: 5, task: 'Publish one data-analysis portfolio project publicly online', difficulty: 6 },
  { step: 6, task: 'Ask a professor or researcher for a 20-minute conversation', difficulty: 7 },
  { step: 7, task: 'Submit a good-enough (not perfect) PhD scholarship application', difficulty: 8 },
];

export const DECISION_STEPS: { num: number; name: string; prompt: string }[] = [
  { num: 1, name: 'Classify it', prompt: 'Two-way door (reversible)? Decide in days with ~70% info. One-way door? Decide slowly with counsel.' },
  { num: 2, name: 'Values filter', prompt: 'Does it honour growth, health, security, learning, freedom, family, and love?' },
  { num: 3, name: 'Pre-mortem', prompt: 'Imagine it is a year from now and this failed—list every probable reason in advance.' },
  { num: 4, name: '10 / 10 / 10 Regret check', prompt: 'How will I feel in 10 minutes, 10 months, and 10 years? Long-run regret favours action over inaction.' },
  { num: 5, name: 'Satisfice', prompt: 'Fix non-negotiable must-haves upfront; pick the first option meeting them and stop endless comparing.' },
  { num: 6, name: 'Consult + Istikhara', prompt: 'Speak with 2 people who know you well, 1 thoughtful dissenter, elders (shura), and pray istikhara.' },
  { num: 7, name: 'Fear check', prompt: 'Is hesitation information or fear? If I had no fear, what small next step would I take?' },
];

export const UPCOMING_DECISIONS: DecisionMatrixRow[] = [
  { decision: 'Thesis topic & supervisor', reversibility: 'Fairly reversible', reversibilityNote: 'Early weeks open', rule: 'Use analytical strength + paper potential; commit after 2 meetings.', when: 'Months 1–2' },
  { decision: "PhD vs analyst after master's", reversibility: 'Reversible', reversibilityNote: 'Can re-apply later', rule: 'Apply to both. Take funded PhD with fitting supervisor; else analyst role + re-apply.', when: 'Start Month 12' },
  { decision: 'Whom to date', reversibility: 'Reversible', reversibilityNote: 'Early-stage choice', rule: 'Fixed scorecard + 3-month calm/respected/myself check-in; zero endless comparing.', when: 'Month 3' },
  { decision: 'Marriage', reversibility: 'Hard to reverse', reversibilityNote: 'Permanent commitment', rule: 'Only after financial base, ≥12 months known well, istikhara, and family consultation.', when: 'Revisit Month 12' },
  { decision: 'Living abroad', reversibility: 'Partly reversible', reversibilityNote: 'Multi-year move', rule: 'Decide after funded offer, family conversation, and full written cost comparison.', when: 'When offers arrive' },
  { decision: 'Starting a business', reversibility: 'Reversible', reversibilityNote: 'If started small', rule: 'Test tiny side project first; scale only after stable income and emergency savings.', when: 'After 1st stable income' },
];

export const RISK_REGISTER: RiskRegisterRow[] = [
  { risk: 'No scholarship or PhD offer in round 1', earlySign: 'Rejections, thin CV, zero supervisor contact', planB: 'Apply wider, request feedback, work 1 yr as RA/analyst to publish, and re-apply.' },
  { risk: 'Parent allowance shrinks or stops', earlySign: 'Unclear terms or unplanned overspending', planB: 'Talk openly early, take TA/RA or freelance analysis, trim wants, leverage stipends.' },
  { risk: 'Anxiety or depressive low mood returns', earlySign: 'Poor sleep, dread, anhedonia >2 weeks', planB: 'Contact psychologist immediately, shrink to 4-item daily floor, protect sleep & movement.' },
  { risk: 'Procrastination spiral or burnout', earlySign: '3+ consecutive missed minimum days', planB: 'Reset to 5-minute starts, take one true rest day, diagnose root cause on Sunday.' },
  { risk: 'Relationship ends or turns unhealthy', earlySign: 'Avoidance, secrecy, feeling smaller', planB: 'Speak honestly first; if ended, protect daily routine, lean on friends, pause big choices 3 months.' },
  { risk: 'Deeper faith crisis', earlySign: 'Dropping prayer, anger, quiet isolation', planB: 'Keep minimum 1 prayer, meet teacher, reread al-Ghazali, make zero big verdicts in low mood.' },
  { risk: 'Physical injury or smoking slip', earlySign: 'Missed workouts, cigarette cravings', planB: 'Shift to low-impact walks, strip triggers, book doctor visit early; never quit the whole plan.' },
  { risk: 'Family expectations clash (living abroad)', earlySign: 'Tense silences or repeated friction', planB: 'Discuss early with written roadmap, consult elders, anchor to shared safety + future goals.' },
];

export const READING_PATH: ReadingBook[] = [
  { order: 1, title: "Man's Search for Meaning", author: 'Viktor Frankl', why: 'The meaning engine of the philosophy', when: 'Months 1–2' },
  { order: 2, title: 'Meditations / Enchiridion', author: 'Marcus Aurelius / Epictetus', why: 'Daily Stoic practice—one page a day', when: 'Months 1–3' },
  { order: 3, title: 'Deliverance from Error', author: 'al-Ghazali', why: 'Model of honest doubt turning into steady practice', when: 'Months 1–3' },
  { order: 4, title: 'Mind Over Mood', author: 'Greenberger & Padesky', why: 'Practical CBT tools for anxious thoughts (use with psychologist)', when: 'Months 1–6', isWorkbook: true },
  { order: 5, title: "When Perfect Isn't Good Enough", author: 'Antony & Swinson', why: 'Targeted perfectionism exercises (use with psychologist)', when: 'Months 2–4', isWorkbook: true },
  { order: 6, title: 'Deep Work', author: 'Cal Newport', why: 'Focus architecture for protected study blocks', when: 'Months 2–3' },
  { order: 7, title: 'The Psychology of Money', author: 'Morgan Housel', why: 'Money behaviour before money technique', when: 'Months 3–4' },
  { order: 8, title: 'The Decisive Treatise', author: 'Ibn Rushd (Averroes)', why: 'Reason and revelation reconciled in one framework', when: 'Months 4–6' },
  { order: 9, title: 'The Seven Principles for Making Marriage Work', author: 'John Gottman', why: 'Evidence-based relationship repair and conflict tools', when: 'Months 6–8' },
  { order: 10, title: 'The Little Book of Common Sense Investing', author: 'John Bogle', why: 'Long-term case for low-cost index funds', when: 'Months 6–9' },
  { order: 11, title: 'When Science Meets Religion', author: 'Ian Barbour', why: 'Four models mapping how science and faith interact', when: 'Months 7–9' },
  { order: 12, title: 'The Reconstruction of Religious Thought in Islam', author: 'Muhammad Iqbal', why: 'Active selfhood (khudi) and modern Islamic thought', when: 'Months 10–12' },
  { order: 13, title: 'The Myth of Sisyphus & The Concept of Anxiety', author: 'Camus & Kierkegaard', why: 'Existentialist tests to sharpen personal answers', when: 'Year 2' },
];

export const OPEN_QUESTIONS: OpenQuestion[] = [
  { number: 1, question: 'What did my family and culture teach me to want, and which of those wants are genuinely mine?' },
  { number: 2, question: 'Academic path or analyst/consultant path: what exact facts would decide between them?' },
  { number: 3, question: 'Where do I actually want to live, and how do my parents feel about me living abroad?' },
  { number: 4, question: "What does 'enough' money and lifestyle mean to me concretely?" },
  { number: 5, question: 'What do I really want from a partner, and which qualities show consistently in who I date?' },
  { number: 6, question: 'What is the real emotional reason I avoid my daily to-do list when I look closely?' },
  { number: 7, question: "What does 'success' mean to me beyond an impressive CV?" },
];

export const STRENGTH_LABELS: { label: EvidenceStrength; meaning: string; tone: string }[] = [
  { label: 'Strong', meaning: 'Multiple studies or meta-analyses agree, or well-established fact', tone: 'text-emerald-800 bg-emerald-50 border-emerald-200' },
  { label: 'Moderate', meaning: 'Consistent findings with fewer trials or observational limits', tone: 'text-sky-800 bg-sky-50 border-sky-200' },
  { label: 'Emerging', meaning: 'Early or small studies; promising but unproven', tone: 'text-indigo-800 bg-indigo-50 border-indigo-200' },
  { label: 'Contested', meaning: 'Mixed results or large reviews found small effect sizes', tone: 'text-amber-900 bg-amber-50 border-amber-200' },
  { label: 'Rule of thumb', meaning: 'Widely practical guideline rather than clinical trial', tone: 'text-slate-800 bg-slate-100 border-slate-300' },
  { label: 'Theory', meaning: 'Organising conceptual model with supporting research', tone: 'text-slate-800 bg-slate-100 border-slate-300' },
];

export const HANDBOOK_REFERENCES: HandbookReferenceGroup[] = [
  {
    area: 'Mind, habits & growth',
    items: [
      'Bandura, A. (1977). Self-efficacy: toward a unifying theory of behavioral change. Psychological Review.',
      'Breines, J. G., & Chen, S. (2012). Self-compassion increases self-improvement motivation.',
      "Deci, E. L., & Ryan, R. M. (2000). The 'what' and 'why' of goal pursuits. Psychological Inquiry.",
      'Egan, S. J., Wade, T. D., & Shafran, R. (2011). Perfectionism as a transdiagnostic process.',
      'Emmons, R. A., & McCullough, M. E. (2003). Counting blessings versus burdens.',
      'Ericsson, K. A., et al. (1993). Deliberate practice; Macnamara et al. (2014). Meta-analysis.',
      'Gollwitzer, P. M., & Sheeran, P. (2006). Implementation intentions meta-analysis (94 studies, d = 0.65).',
      'Hunt, M. G., et al. (2018). Limiting social media decreases loneliness and depression.',
      'Kircanski, K., Lieberman, M. D., & Craske, M. G. (2012). Feelings into words: affect labeling & exposure. Psychological Science.',
      'Lally, P., et al. (2010). Modelling habit formation in the real world (66-day median, 18–254 range).',
      'Lieberman, M. D., et al. (2007). Affect labeling disrupts amygdala reactivity via rVLPFC. Psychological Science.',
      'Limburg, K., et al. (2017). Perfectionism and psychopathology meta-analysis.',
      'MacBeth, A., & Gumley, A. (2012). Self-compassion and psychopathology meta-analysis.',
      'Richards, D. A., et al. (2016). COBRA trial: Behavioural activation vs CBT. The Lancet.',
      'Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning: retrieval practice (56–61% vs 42% at 1 wk). Psychological Science.',
      'Sirois, F., & Pychyl, T. (2013). Procrastination & short-term mood regulation; Steel, P. (2007). Psychological Bulletin.',
      'Sisk, V. F., et al. (2018). Growth mind-sets meta-analysis. Psychological Science.',
      'Ward, A. F., et al. (2017). Brain Drain: mere presence of own smartphone reduces cognitive capacity. JACR.',
    ],
  },
  {
    area: 'Career & decisions',
    items: [
      'Gilovich, T., & Medvec, V. H. (1995). The experience of regret. Psychological Review.',
      'Granovetter, M. S. (1973). The strength of weak ties. American Journal of Sociology.',
      'Mitchell, D. J., Russo, J. E., & Pennington, N. (1989). Temporal perspective (pre-mortem).',
      'Mitchell, K. E., Levin, A. S., & Krumboltz, J. D. (1999). Planned happenstance theory.',
    ],
  },
  {
    area: 'Money',
    items: [
      'Dunn, E. W., Aknin, L. B., & Norton, M. I. (2008). Spending money on others promotes happiness. Science.',
      'Fama, E. F., & French, K. R. (2010). Luck versus skill in mutual fund returns. Journal of Finance.',
      'Killingsworth, M. A., Kahneman, D., & Mellers, B. (2023). Income and emotional well-being. PNAS.',
      'Mullainathan, S., & Shafir, E. (2013). Scarcity.',
      'Thaler, R. H., & Benartzi, S. (2004). Save More Tomorrow. Journal of Political Economy.',
    ],
  },
  {
    area: 'Love & relationships',
    items: [
      'Gottman, J. M. (1999). The Seven Principles for Making Marriage Work.',
      'Hazan, C., & Shaver, P. (1987). Romantic love conceptualized as an attachment process.',
      'Holt-Lunstad, J., Smith, T. B., & Layton, J. B. (2010). Social relationships and mortality risk. PLoS Medicine.',
      'Scheibehenne, B., et al. (2010). Too many options? · Schwartz, B., et al. (2002). Maximizing vs satisficing.',
      'Sternberg, R. J. (1986). A triangular theory of love. Psychological Review.',
      'Waldinger, R., & Schulz, M. (2023). The Good Life (Harvard Study of Adult Development).',
    ],
  },
  {
    area: 'Body & health',
    items: [
      'Cooney, G. M., et al. (2013). Exercise for depression. Cochrane Database.',
      'Drake, C., et al. (2013). Caffeine taken 0, 3, or 6 hours before bedtime cuts total sleep >1h. JCSM.',
      'Hackshaw, A., et al. (2018). Low cigarette consumption (1 cig/day = 46% excess male CHD risk). BMJ.',
      'Singh, B., et al. (2023). Umbrella review of physical activity for depression & anxiety. BJSM.',
      'Watson, N. F., et al. (2015). Recommended sleep for healthy adults (≥7h). JCSM.',
      'White, M. P., et al. (2019). Spending ≥120 minutes/week in nature. Scientific Reports.',
      'WHO (2020) Physical Activity Guidelines · WHO Western Pacific (WPRO) Asian BMI (23/25) & Waist (<90 cm male) cutoffs.',
    ],
  },
  {
    area: 'Spirit & philosophy',
    items: [
      'Aristotle (Nicomachean Ethics); Epictetus (Enchiridion); Marcus Aurelius (Meditations); Seneca (Letters).',
      'Barbour, I. (1997). Religion and Science.',
      'Camus (1942); Sartre (1946); Kierkegaard (1844).',
      'Frankl, V. (1946). Man’s Search for Meaning · Frankfurt (1969) & Dennett (1984) on compatibilism.',
      'Al-Ghazali (Deliverance from Error); Ibn Rushd (Decisive Treatise); Ibn Tufayl; Miskawayh; M. Iqbal (1930).',
      'Goyal et al. (2014 JAMA); Pargament & Exline on spiritual struggle; VanderWeele (2017); Abdullah & Habibie (IPTEK/IMTAQ).',
    ],
  },
];

export const SCIENTIFIC_UPGRADES: ScientificUpgradeItem[] = [
  {
    id: 'procrastination-mood',
    domain: 'Habits & Consistency',
    previousIntuition: '“I procrastinate because I lack discipline or willpower.”',
    scientificFinding:
      'Procrastination is primarily an emotion-regulation failure (“short-term mood repair”) triggered when a task evokes anxiety, self-doubt, or boredom.',
    exactNumbers: 'Meta-analysis (r links impulsivity & task aversiveness)',
    actionRule:
      'Lower emotional threat, not just schedule pressure: pair a 5-minute ugly draft start with Affect Labeling before working.',
    citation: 'Steel (2007, Psych Bull); Sirois & Pychyl (2013)',
    strength: 'Strong',
  },
  {
    id: 'affect-labeling',
    domain: 'Anxiety & Exposure',
    previousIntuition: 'Thinking calming thoughts works only if I can suppress anxiety.',
    scientificFinding:
      'Putting feelings into words activates right ventrolateral prefrontal cortex (rVLPFC) and downregulates amygdala threat firing, improving follow-up exposure.',
    exactNumbers: 'Significant skin-conductance fear drop 1 wk post-exposure',
    actionRule:
      'Write exact emotion words (“anxious about thesis rejection”) in Section 8 / thought record before starting difficult rungs.',
    citation: 'Lieberman et al. (2007); Kircanski et al. (2012, Psych Sci)',
    strength: 'Moderate',
  },
  {
    id: 'phone-brain-drain',
    domain: 'Deep Focus Blocks',
    previousIntuition: '“My phone is face-down and silent on the desk, so it is fine.”',
    scientificFinding:
      'The mere visible presence of your own smartphone consumes working memory and lowers fluid intelligence through continuous subconscious inhibition.',
    exactNumbers: 'Another room > Pocket/Bag > Desk (working memory span)',
    actionRule:
      'Place phone in another room during the 25-min top task and all 90-min Career blocks—not merely face-down.',
    citation: 'Ward et al. (2017, J. Assoc. Consum. Res.)',
    strength: 'Moderate',
  },
  {
    id: 'retrieval-practice',
    domain: 'Reading & Master’s Study',
    previousIntuition: '“Re-reading papers and copying highlights builds thesis mastery.”',
    scientificFinding:
      'Passive re-reading inflates confidence immediately after study but fades quickly; closed-book retrieval practice locks long-term retention.',
    exactNumbers: '56–61% retention at 1 wk (retrieval) vs 42% (re-reading)',
    actionRule:
      'Close the paper or book first, write your 1-paragraph summary from memory, then check gaps.',
    citation: 'Roediger & Karpicke (2006, Psych Sci)',
    strength: 'Strong',
  },
  {
    id: 'social-smoking-exact',
    domain: 'Cardiovascular Protection',
    previousIntuition: '“Being just a social smoker carries only minor fractional risk.”',
    scientificFinding:
      'Cardiovascular smoke toxicity is non-linear—even 1 cigarette/day triggers almost half the coronary risk of a full 20-cigarette pack.',
    exactNumbers: 'Men: 46% of pack-a-day excess CHD risk · 41% stroke risk',
    actionRule:
      'Hold strict zero-cigarette policy (decline immediately with a drink in hand); never rationalize “just one.”',
    citation: 'Hackshaw et al. (2018, BMJ · 141 cohort studies)',
    strength: 'Strong',
  },
  {
    id: 'sleep-caffeine-asian-waist',
    domain: 'Sleep & Asian Metabolic Targets',
    previousIntuition: '“I fall asleep fine after afternoon coffee, and normal BMI = healthy.”',
    scientificFinding:
      'Caffeine 6h before bed cuts objective sleep >1h unnoticed, and Asian men carry visceral metabolic risk at lower BMI and smaller waists.',
    exactNumbers: '>1h sleep lost at −6h caffeine · Asian male waist <90 cm',
    actionRule:
      'Cut off caffeine ≥6–8h before sleep, sleep ≥7h, and track doctor waist checkup (<90 cm) + Asian normal BMI (18.5–22.9).',
    citation: 'Drake et al. (2013, JCSM); WHO WPRO Asian Cutoffs',
    strength: 'Strong',
  },
];

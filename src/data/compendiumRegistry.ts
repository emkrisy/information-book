export type VolumeId = 'library' | 'athletic' | 'life' | 'history';

export interface VolumeMetadata {
  id: Exclude<VolumeId, 'library'>;
  number: string;
  title: string;
  subtitle: string;
  pagesLabel: string;
  pdfPath: string;
  summary: string;
  highlights: string[];
  chapters: { id: string; label: string }[];
}

export interface DictionaryEntry {
  id: string;
  term: string;
  volume: Exclude<VolumeId, 'library'>;
  volumeLabel: string;
  chapterId: string;
  category: string;
  definition: string;
}

export const COMPENDIUM_VOLUMES: VolumeMetadata[] = [
  {
    id: 'athletic',
    number: 'Volume 01',
    title: '52-Week Athletic Transformation',
    subtitle: 'Body recomposition, functional strength & zero-to-marathon running',
    pagesLabel: '59 Pages · Personalised (164 cm, 61 kg)',
    pdfPath: './assets/aistudio/52_Week_Athletic_Transformation_Handbook_Full_7b42871c.pdf',
    summary:
      'One-year integrated roadmap combining body recomposition (12–14% target BF), 6 functional movement patterns, 80/20 running progression from walk/jog to marathon, cycled nutrition, and 157 sports-science citations.',
    highlights: [
      '4-Phase 52-Week Macrocycle (5K → 10K → Half → Marathon)',
      'Anatomical Muscle Atlas & Optimal vs Fault Form Visualizer',
      'Live Riegel Pace & Heart Rate Reserve Calculator',
      'Cycled Nutrition, RED-S Gauge & Marathon Fueling Timeline',
    ],
    chapters: [
      { id: 'overview', label: '01 · Overview & Recomp' },
      { id: 'timeline', label: '02 · 52-Week Timeline' },
      { id: 'strength', label: '03 · Muscle & Form' },
      { id: 'running', label: '04 · Running & Readiness' },
      { id: 'nutrition', label: '05 · Nutrition & Fueling' },
      { id: 'science', label: '06 · Sports Science' },
    ],
  },
  {
    id: 'life',
    number: 'Volume 02',
    title: 'My Life Handbook (Draft 2)',
    subtitle: 'Philosophy, core principles, 7 life areas, weekly rhythm & decision systems',
    pagesLabel: '45 Pages · Living Document (Weekly Review / Yearly Rewrite)',
    pdfPath: './assets/aistudio/My_Life_Handbook__Draft_2__5a96f809.pdf',
    summary:
      'Built from the Discovery Survey around the Khalifah-Scholar Way: reasoned faith, Stoic discipline, and an authored life—organizing 7 priority life areas into 8 protected weekly hours, CBT tools, and explicit decision/risk rules.',
    highlights: [
      'Khalifah-Scholar 3-Layer Philosophy & 12 Core Principles',
      '7 Priority Life Areas Radar & 12-Month Targets',
      '8 Protected Weekly Hours + Sample Week & Rp 3M Budget Visual',
      'Fear Ladder, 7-Step Decision Gate, Risk Plan B & 13-Book Path',
    ],
    chapters: [
      { id: 'life-philosophy', label: '01 · Identity & Philosophy' },
      { id: 'life-principles', label: '02 · Principles & Manifesto' },
      { id: 'life-areas', label: '03 · 7 Life Areas' },
      { id: 'life-rhythm', label: '04 · Rhythm & Playbook' },
      { id: 'life-decisions', label: '05 · Mind, Decisions & Risk' },
      { id: 'life-reading', label: '06 · Reading & Evidence' },
    ],
  },
  {
    id: 'history',
    number: 'Volume 03',
    title: 'Handbook of World History',
    subtitle: '21-chapter critical synthesis of global chronology, networks & methodology',
    pagesLabel: '34 Pages · Parts I–IX + Glossary, Indices & 34-Work Bibliography',
    pdfPath: './assets/aistudio/The_Comprehensive_Informational_and_Critical_Handbook_of_World_History__1__f0dcf48b.pdf',
    summary:
      'Polycentric synthesis uniting Afro-Eurasian, American, African, and Oceanic chronology (12,000 BCE–Present) with Trouillot archival critique, Great Divergence economics, Braudel causation, and Maritime Southeast Asia (Nusantara) history.',
    highlights: [
      'Interactive 7-Era Timeline & Wrigley Energy Regime Axis',
      'Pre-1500 Four Exchange Circuits & 1450–1750 Global Convergence Schematic',
      'Braudel Temporalities & 4-School Great Divergence Comparison Matrix',
      'Trouillot Silencing Pipeline, 5-Dimension Diagnostic Sandbox & 19-Term Glossary',
    ],
    chapters: [
      { id: 'wh-foundations', label: '01 · Historiography & Foundations' },
      { id: 'wh-chronology', label: '02 · Global Chronology & Nusantara' },
      { id: 'wh-networks', label: '03 · Exchange Circuits & Oceans' },
      { id: 'wh-debates', label: '04 · Divergence & Policy Lessons' },
      { id: 'wh-reference', label: '05 · Inquiry Sandbox & Reference' },
    ],
  },
];

export const FUTURE_VOLUME_SLOTS = [
  {
    number: 'Volume 04 · Planned',
    title: 'Academic & Data Analysis Dictionary',
    description: 'Thesis notes, statistical methods, BPS open-data case studies, and lecturer-path literature maps.',
  },
  {
    number: 'Volume 05 · Planned',
    title: 'Reading Summaries & Concept Glossary',
    description: 'One-page notes after every completed book—al-Ghazali, Ibn Rushd, Frankl, Epictetus, Gottman, and Bogle.',
  },
];

export const DICTIONARY_ENTRIES: DictionaryEntry[] = [
  {
    id: 'polycentric-world-history',
    term: 'Polycentric Global History',
    volume: 'history',
    volumeLabel: 'Vol 03 · World History',
    chapterId: 'wh-foundations',
    category: 'Historiography',
    definition: 'Approaches world history through multicentered innovation, reciprocal comparison, and transregional networks rather than Eurocentric stages (McNeill, Hodgson, Abu-Lughod, Pomeranz).',
  },
  {
    id: 'trouillot-archival-silences',
    term: "Trouillot's Four Archival Silences",
    volume: 'history',
    volumeLabel: 'Vol 03 · World History',
    chapterId: 'wh-foundations',
    category: 'Methodology',
    definition: 'Power enters historical knowledge at four distinct moments: fact creation (sources), fact assembly (archives), fact retrieval (narratives), and retrospective significance.',
  },
  {
    id: 'great-divergence',
    term: 'The Great Divergence (Four Schools)',
    volume: 'history',
    volumeLabel: 'Vol 03 · World History',
    chapterId: 'wh-debates',
    category: 'Economic History',
    definition: 'Compares California School (coal + ghost acreage), Neo-Institutionalist (property law), Factor-Price (high urban wages vs cheap coal), and Protectionist/War Capitalism explanations.',
  },
  {
    id: 'braudel-longue-duree',
    term: "Braudel's Three Temporalities",
    volume: 'history',
    volumeLabel: 'Vol 03 · World History',
    chapterId: 'wh-debates',
    category: 'Causation',
    definition: 'Nests geographical longue durée (millennia) beneath structural conjunctures (centuries–decades) and surface événementielle events—balanced against subaltern agency.',
  },
  {
    id: 'manila-silver-circuit',
    term: 'Manila–Acapulco Silver Circuit',
    volume: 'history',
    volumeLabel: 'Vol 03 · World History',
    chapterId: 'wh-networks',
    category: 'Global Trade',
    definition: 'Early modern monetary loop linking Andean Potosí silver (mit’a labor) through Acapulco and Manila galleons to Ming China’s Single Whip silver tax demand.',
  },
  {
    id: 'nusantara-tambora-bandung',
    term: 'Nusantara, 1815 Tambora & Bandung',
    volume: 'history',
    volumeLabel: 'Vol 03 · World History',
    chapterId: 'wh-chronology',
    category: 'Regional Synthesis',
    definition: 'Maritime Southeast Asia bridged monsoon port commerce, VOC Batavia sea-law debates (Grotius 1609), global cooling after 1815 Mount Tambora, and 1955 Bandung Non-Alignment.',
  },
  {
    id: 'khalifah-scholar',
    term: 'Khalifah-Scholar Way',
    volume: 'life',
    volumeLabel: 'Vol 02 · Life Handbook',
    chapterId: 'life-philosophy',
    category: 'Philosophy',
    definition: 'Personal synthesis combining reasoned faith (Compass), authored purpose via Iqbal/Frankl (Engine), and Stoic/Aristotelian habits (Discipline) on top of health, security, and relationships.',
  },
  {
    id: 'ikhtiar-tawakkul',
    term: 'Ikhtiar & Tawakkul (Control Split)',
    volume: 'life',
    volumeLabel: 'Vol 02 · Life Handbook',
    chapterId: 'life-philosophy',
    category: 'Core Tensions',
    definition: 'Give full, disciplined effort to what is up to you (ikhtiar), then release outcomes outside your control with trust (tawakkul)—aligning Islamic agency with Stoic dichotomy of control.',
  },
  {
    id: 'daily-floor',
    term: 'Daily Floor (Minimum Viable Day)',
    volume: 'life',
    volumeLabel: 'Vol 02 · Life Handbook',
    chapterId: 'life-rhythm',
    category: 'Habits',
    definition: 'Four non-negotiable minimums on hard days: 1 fixed prayer, 3 tasks max with one 25-min deep block, some physical movement, and phone out of the bed area at sleep.',
  },
  {
    id: 'protected-8h',
    term: '8 Protected Hours + 200 Min Exercise',
    volume: 'life',
    volumeLabel: 'Vol 02 · Life Handbook',
    chapterId: 'life-rhythm',
    category: 'Weekly Rhythm',
    definition: 'Weekly life-building allocation outside classes: Career 3h, Spiritual 1.5h, Personal Growth 1h, Money 1h, Social/Love 1h, Sunday Review 0.5h, plus 4×50m exercise.',
  },
  {
    id: 'fear-ladder',
    term: 'Exposure Fear Ladder (3/10 to 8/10)',
    volume: 'life',
    volumeLabel: 'Vol 02 · Life Handbook',
    chapterId: 'life-decisions',
    category: 'CBT & Mind',
    definition: 'Graded steps to weaken perfectionist avoidance—starting with sending an email after one read (3/10) up to submitting a good-enough PhD application (8/10).',
  },
  {
    id: 'one-way-two-way',
    term: 'One-Way vs Two-Way Door Decisions',
    volume: 'life',
    volumeLabel: 'Vol 02 · Life Handbook',
    chapterId: 'life-decisions',
    category: 'Decision Routine',
    definition: 'Reversible choices (thesis topic, dating exploration, starting small projects) get decided fast with ~70% info; hard-to-reverse choices (marriage, moving countries) go through values, pre-mortem, regret check, consultation, and istikhara.',
  },
  {
    id: 'anti-avoidance-48h',
    term: '48-Hour Anti-Avoidance Rule',
    volume: 'life',
    volumeLabel: 'Vol 02 · Life Handbook',
    chapterId: 'life-areas',
    category: 'Relationships',
    definition: 'When something bothers you in a close relationship, express it calmly in one sentence within 48 hours using a gentle start-up instead of withdrawing (stonewalling).',
  },
  {
    id: 'calm-respected-myself',
    term: 'Calm / Respected / Myself Check-In',
    volume: 'life',
    volumeLabel: 'Vol 02 · Life Handbook',
    chapterId: 'life-decisions',
    category: 'Relationships',
    definition: 'Quran 30:21 values test at 3 months: After time together, do I feel calmer, respected, and more myself—or anxious and smaller?',
  },
  {
    id: 'muhasabah-review',
    term: 'Evening Muhasabah Review (10 min)',
    volume: 'life',
    volumeLabel: 'Vol 02 · Life Handbook',
    chapterId: 'life-decisions',
    category: 'Reflection',
    definition: "Combines Seneca's nightly audit with Islamic self-accounting: What went well, where I fell short, what changes tomorrow, one gratitude, and tomorrow's niyyah.",
  },
  {
    id: 'recomp-trajectory',
    term: 'Body Recomposition Trajectory (61 kg)',
    volume: 'athletic',
    volumeLabel: 'Vol 01 · Athletic Plan',
    chapterId: 'overview',
    category: 'Physiology',
    definition: 'Simultaneous −2–4 kg fat loss and +1.5–3 kg lean mass gain across Weeks 1–12 via 125g protein/day and modest 5–10% energy deficit, progressing toward 12–14% BF by Week 52.',
  },
  {
    id: '80-20-running',
    term: '80/20 Polarized Running & Riegel Zones',
    volume: 'athletic',
    volumeLabel: 'Vol 01 · Athletic Plan',
    chapterId: 'running',
    category: 'Endurance',
    definition: 'Keep ~80% of weekly running in conversational Zone 2 aerobics while building safely toward 5K (Wk 8), 10K (Wk 12), Half Marathon (Wk 34), and Marathon (Wk 52).',
  },
  {
    id: 'runners-armor',
    term: "Runner's Armor & 6 Movement Patterns",
    volume: 'athletic',
    volumeLabel: 'Vol 01 · Athletic Plan',
    chapterId: 'strength',
    category: 'Strength',
    definition: 'Squat, Hinge, Push, Pull, Lunge, and Core/Carry strength work paired with tibia, calf, hip-abductor, and hamstring durability to protect tendons as mileage climbs.',
  },
  {
    id: 'reds-gauge',
    term: 'Energy Availability & RED-S Threshold',
    volume: 'athletic',
    volumeLabel: 'Vol 01 · Athletic Plan',
    chapterId: 'nutrition',
    category: 'Nutrition',
    definition: 'Maintain ≥38–45 kcal/kg FFM/day (avoiding <30 kcal/kg danger zone) and cycle high/moderate/rest carbs around long runs and heavy gym sessions.',
  },
  {
    id: 'traffic-light-readiness',
    term: 'Traffic-Light Daily Readiness Check',
    volume: 'athletic',
    volumeLabel: 'Vol 01 · Athletic Plan',
    chapterId: 'running',
    category: 'Recovery',
    definition: 'Pre-session Green/Yellow/Red check scoring sleep, soreness, mood, and resting HR—forcing an extra rest day whenever 2+ Red signals cluster in one week.',
  },
  {
    id: 'affect-labeling',
    term: 'Affect Labeling (Name It to Tame It)',
    volume: 'life',
    volumeLabel: 'Vol 02 · Life Handbook',
    chapterId: 'life-decisions',
    category: 'Neuroscience',
    definition: 'Putting exact emotion words on paper engages right ventrolateral prefrontal cortex (rVLPFC) and dampens amygdala threat response during exposure (Lieberman 2007; Kircanski 2012).',
  },
  {
    id: 'mood-repair-procrastination',
    term: 'Procrastination as Mood Repair',
    volume: 'life',
    volumeLabel: 'Vol 02 · Life Handbook',
    chapterId: 'life-areas',
    category: 'Behavioral Psych',
    definition: 'Procrastination is short-term emotion regulation escaping task anxiety rather than laziness (Steel 2007; Sirois & Pychyl 2013)—broken via tiny 5-minute ugly-draft starts.',
  },
  {
    id: 'smartphone-brain-drain',
    term: 'Smartphone Brain Drain (Another Room Rule)',
    volume: 'life',
    volumeLabel: 'Vol 02 · Life Handbook',
    chapterId: 'life-reading',
    category: 'Attention',
    definition: 'Even face-down and silent on a desk, your own phone impairs working memory and fluid intelligence compared to placing it in another room (Ward et al., 2017).',
  },
  {
    id: 'retrieval-practice-recall',
    term: 'Testing Effect (Closed-Book Recall)',
    volume: 'life',
    volumeLabel: 'Vol 02 · Life Handbook',
    chapterId: 'life-reading',
    category: 'Learning Science',
    definition: 'Summarizing books and papers from memory before re-checking yields 56–61% retention at 1 week vs 42% for repeated re-reading (Roediger & Karpicke, 2006).',
  },
  {
    id: 'asian-waist-smoking-check',
    term: 'WHO Asia-Pacific Waist (<90 cm) & 1-Cig Risk',
    volume: 'life',
    volumeLabel: 'Vol 02 · Life Handbook',
    chapterId: 'life-areas',
    category: 'Preventive Health',
    definition: 'Asian male visceral risk begins at waist ≥90 cm / BMI ≥23.0 (WHO WPRO), and even 1 cigarette/day causes ~46% of pack-a-day male coronary risk (Hackshaw 2018 BMJ).',
  },
];

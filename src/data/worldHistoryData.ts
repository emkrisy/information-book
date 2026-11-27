export interface HistoriographicalTradition {
  tradition: string;
  thinkers: string;
  premise: string;
  limitations: string;
}

export interface PeriodizationModel {
  model: string;
  pivots: string;
  rationale: string;
  blindSpots: string;
}

export interface EarlyComplexSociety {
  region: string;
  ecology: string;
  governance: string;
  debate: string;
}

export interface ExchangeCircuit {
  id: string;
  zone: string;
  nodes: string;
  commodities: string;
  impact: string;
  diaspora: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
}

export interface ComparativeModernizationRow {
  society: string;
  strategy: string;
  obstacles: string;
  outcome1914: string;
}

export interface TheoreticalLensRow {
  lens: string;
  category: string;
  contribution: string;
  critique: string;
}

export interface DivergenceSchool {
  id: string;
  school: string;
  theorists: string;
  driver: string;
  evidence: string;
  limitations: string;
  timeframeFocus: string;
}

export interface CausalRegisterRow {
  register: string;
  forces: string;
  timescale: string;
  risk: string;
  braudelLayer: string;
}

export interface PolicyCaseStudy {
  domain: string;
  cases: string;
  lessons: string;
  pitfalls: string;
}

export interface MethodFrontier {
  frontier: string;
  tools: string;
  insights: string;
  cautions: string;
}

export interface ResearchProtocolStep {
  stage: string;
  tasks: string;
  benchmarks: string;
}

export interface CriticalQuestionDimension {
  dimension: string;
  question: string;
  pitfall: string;
}

export interface ChronologyEra {
  id: string;
  era: string;
  energyRegime: 'Foraging' | 'Agrarian Solar' | 'Fossil Mineral';
  afroEurasia: string;
  americasAfricaOceania: string;
  climateOrPathogen: string;
  chapters: string;
}

export interface HistoryGlossaryItem {
  term: string;
  definition: string;
}

export interface ThematicIndexRow {
  subject: string;
  topics: string;
  chapters: string;
}

export const WORLD_HISTORY_META = {
  title: 'The Comprehensive Informational and Critical Handbook of World History',
  subtitle:
    'A Unified Twenty-One-Chapter Synthesis of Global Chronology, Interregional Networks, Theoretical Frameworks, Comparative Debates, and Critical Methodology',
  preface:
    'World history is neither an encyclopedic catalog of isolated national pasts nor a linear narrative of inevitable Western ascendance. It integrates empirical synthesis across Afro-Eurasia, the Americas, and Oceania with critical historiography—examining how periodization, archival survival, ecological regimes, and geopolitical power shape what endures as the historical record.',
};

export const HISTORIOGRAPHY_TRADITIONS: HistoriographicalTradition[] = [
  {
    tradition: 'Pre-Modern Universal Chronicles',
    thinkers: 'Sima Qian (Shiji, c. 94 BCE); Polybius (symploke); Rashīd al-Dīn (Jāmiʿ al-Tawārīkh); Ibn Khaldun (Muqaddimah)',
    premise: 'Cosmic moral order, dynastic cycles, and sociological tension between pastoral-nomadic solidarity (asabiyyah) and sedentary urban luxury.',
    limitations: 'Limited to known Afro-Eurasian horizons; primarily elite courtly or bureaucratic vantage points.',
  },
  {
    tradition: 'Civilizational Morphology',
    thinkers: 'Oswald Spengler; Arnold Toynbee (A Study of History)',
    premise: 'Autonomous civilizations pass through organic life cycles of genesis, growth, breakdown, and dissolution.',
    limitations: 'Treats cultures as bounded biological organisms, underestimating porous cross-border entanglement.',
  },
  {
    tradition: 'Diffusionist Modernization',
    thinkers: 'Leopold von Ranke; G. W. F. Hegel; W. W. Rostow',
    premise: 'Linear stages of institutional and economic growth originating in Western Europe and diffusing outward.',
    limitations: 'Eurocentric teleology; conflates colonial coercion and extraction with voluntary modernization.',
  },
  {
    tradition: 'Polycentric Global History',
    thinkers: 'William H. McNeill; Marshall Hodgson; Janet Abu-Lughod; Jerry Bentley; C. A. Bayly; Kenneth Pomeranz',
    premise: 'Multicentered innovation, reciprocal comparison, and transregional connective networks driving shared change.',
    limitations: 'Demands multilingual collaboration to avoid superficial synthesis of secondary literature.',
  },
];

export const ARCHIVAL_METHODS = {
  trouillotMoments: [
    {
      step: 1,
      moment: 'Fact Creation',
      where: 'The making of sources',
      detail: 'Colonial courts, tax ledgers, and state decrees determine who enters written record—often recording rebels or enslaved people solely as criminal defendants or fiscal liabilities.',
    },
    {
      step: 2,
      moment: 'Fact Assembly',
      where: 'The building of archives',
      detail: 'Institutions select which texts survive, get cataloged, digitized, or discarded—reflecting funding and linguistic hierarchies.',
    },
    {
      step: 3,
      moment: 'Fact Retrieval',
      where: 'The crafting of narratives',
      detail: 'Historians choose which periods, spatial frames, and witnesses to center when assembling an argument.',
    },
    {
      step: 4,
      moment: 'Retrospective Significance',
      where: 'The making of history in the final instance',
      detail: 'Commemoration, national curricula, and political memory canonize certain events while rendering alternatives unthinkable.',
    },
  ],
  grainStrategies: [
    {
      strategy: 'Reading Along the Grain (Ann Laura Stoler)',
      purpose: 'Reconstruct the internal logic, anxieties, taxonomic categories, and administrative routines of ruling elites to see what threatened authority.',
    },
    {
      strategy: 'Reading Against the Grain (Subaltern Studies / Ranajit Guha)',
      purpose: 'Interrogate elite records for unintended admissions, courtroom testimonies, rumors, desertion, flight, and syncretic ritual revealing marginalized agency.',
    },
    {
      strategy: 'Multi-Media Evidentiary Triangulation',
      purpose: 'Combine written texts with epigraphy, archaeological stratigraphy, numismatics, textiles, archaeobotany, oral griots, and Polynesian genealogists.',
    },
  ],
};

export const PERIODIZATION_MODELS: PeriodizationModel[] = [
  {
    model: 'Traditional Tripartite (Ancient · Medieval · Modern)',
    pivots: 'c. 476 CE (Fall of Rome) · c. 1453/1492 CE',
    rationale: 'Tracks Western European political and cultural transitions from classical antiquity through Renaissance modernity.',
    blindSpots: 'Distorts 600–1300 CE—an era of urban and scientific fluorescence across Song China, Abbasid Baghdad, Chola India, and Mali—into a Eurocentric "Middle Age."',
  },
  {
    model: 'Interaction-Based (Jerry Bentley)',
    pivots: 'c. 3500 BCE · 200 BCE · 600 CE · 1000 CE · 1500 CE',
    rationale: 'Marks systemic thresholds in cross-cultural trade, imperial integration, missionary religion, and biological exchange.',
    blindSpots: 'Privileges Afro-Eurasian connectivity over autonomous American and Pacific timelines.',
  },
  {
    model: 'Energy-Regime (E. A. Wrigley / J. R. McNeill)',
    pivots: 'Foraging → Agrarian Solar (c. 10,000 BCE) → Fossil Mineral (c. 1800 CE)',
    rationale: 'Anchors human history in thermodynamic solar/mineral capture and ecological carrying capacity.',
    blindSpots: 'Can flatten institutional, cultural, and political variation within long agrarian eras.',
  },
];

export const DOMESTICATION_CENTERS: { region: string; cropsAndAnimals: string }[] = [
  { region: 'Fertile Crescent', cropsAndAnimals: 'Wheat, barley, sheep, goats' },
  { region: 'Yangtze & Yellow Rivers', cropsAndAnimals: 'Rice, millet, pigs' },
  { region: 'New Guinea Highlands', cropsAndAnimals: 'Taro, bananas' },
  { region: 'Mesoamerica', cropsAndAnimals: 'Maize, beans, squash' },
  { region: 'Central Andes', cropsAndAnimals: 'Potatoes, quinoa, llamas' },
  { region: 'Sub-Saharan West Africa', cropsAndAnimals: 'Sorghum, pearl millet, yams' },
  { region: 'Eastern North America', cropsAndAnimals: 'Sunflower, goosefoot' },
];

export const EARLY_COMPLEX_SOCIETIES: EarlyComplexSociety[] = [
  {
    region: 'Mesopotamia (Sumer, Akkad, Babylon)',
    ecology: 'Tigris–Euphrates alluvium; barley, dates, sheep; salinization vulnerability',
    governance: 'Cuneiform on clay tablets; city-states evolving into codified territorial law (Hammurabi)',
    debate: 'Balance between temple/palace redistribution and private merchant enterprise.',
  },
  {
    region: 'Nile Valley (Old–New Kingdom Egypt)',
    ecology: 'Predictable annual Nile inundation; emmer wheat, barley, flax',
    governance: 'Hieroglyphic/hieratic scripts; divine kingship (Pharaoh) and centralized nomarch bureaucracy',
    debate: 'Degree of provincial autonomy during Intermediate Periods versus royal ideology.',
  },
  {
    region: 'Indus Valley (Harappan)',
    ecology: 'Indus & Ghaggar–Hakra basins; wheat, barley, cotton, maritime trade',
    governance: 'Undeciphered Indus script; standardized weights, planned grid cities, urban drainage',
    debate: 'Absence of overt royal palaces or war monuments suggests oligarchic or corporate rule.',
  },
  {
    region: 'North China (Shang & Western Zhou)',
    ecology: 'Loess plateau & Yellow River; millet, wheat, rice, ritual bronze casting',
    governance: 'Oracle bone script; lineage-based segmentary state and Mandate of Heaven',
    debate: 'Continuity between Neolithic regional cultures and Shang ritual bronze hierarchy.',
  },
  {
    region: 'Andes & Mesoamerica (Caral-Supe, Olmec)',
    ecology: 'Vertical microclimates; maize, potatoes, cotton, rich marine fisheries',
    governance: 'Quipu knotted cords (Andes) & early glyphic calendars (Mesoamerica); ritual reciprocity',
    debate: 'Emergence of monumental ceremonial centers prior to widespread pottery or intensive war.',
  },
];

export const EXCHANGE_CIRCUITS: ExchangeCircuit[] = [
  {
    id: 'indian-ocean',
    zone: 'Indian Ocean Basin (Ch. 6 & 15)',
    nodes: 'Kilwa, Aden, Calicut, Malacca, Quanzhou',
    commodities: 'Black pepper, cloves, cotton textiles, porcelain, timber, ivory; dhow & junk shipping timed to monsoon winds',
    impact: 'Cosmopolitan port law, peaceful diffusion of Islam into Southeast Asia, shared port-city architecture.',
    diaspora: 'Arab, Persian, Gujarati Hindu & Muslim, Malay, and Chinese mariners',
    x1: 270,
    y1: 215,
    x2: 505,
    y2: 225,
    color: '#0369a1',
  },
  {
    id: 'silk-roads',
    zone: 'Eurasian Silk Roads (Ch. 6 & 9)',
    nodes: "Chang'an, Dunhuang, Kashgar, Samarkand, Tabriz, Tana",
    commodities: 'Raw & woven silk, steppe horses, jade, paper-making, woodblock printing, gunpowder, compass',
    impact: 'Gandharan & syncretic art, diplomatic relay stations (Pax Mongolica), plus Yersinia pestis plague transmission.',
    diaspora: 'Sogdian caravans, Persian & Mongol-protected merchant associations',
    x1: 295,
    y1: 120,
    x2: 530,
    y2: 132,
    color: '#b45309',
  },
  {
    id: 'trans-saharan',
    zone: 'Trans-Saharan Routes (Ch. 6 & 9)',
    nodes: 'Sijilmasa, Taghaza, Timbuktu, Gao, Kano',
    commodities: 'Bambuk & Akan gold, Saharan rock salt, copper, Arabic manuscripts, kola nuts, enslaved captives',
    impact: 'Rise of Ghana, Mali, and Songhai empires; centers of Islamic scholarship in Timbuktu and Djenné.',
    diaspora: 'Berber camel caravans and Wangara gold traders',
    x1: 195,
    y1: 145,
    x2: 235,
    y2: 205,
    color: '#0f766e',
  },
  {
    id: 'americas',
    zone: 'Mesoamerican & Andean Corridors (Ch. 6 & 9)',
    nodes: 'Tenochtitlan, Tlatelolco, Cuzco, Quito',
    commodities: 'Cacao, obsidian, quetzal feathers, turquoise, freeze-dried potatoes (chuño), alpaca textiles',
    impact: 'Chinampa urban feeding, 4,000 km Inca highways, astronomical calendars, and mit’a vertical redistribution.',
    diaspora: 'Pochteca long-distance guilds & Inca state storehouse networks',
    x1: 75,
    y1: 185,
    x2: 118,
    y2: 245,
    color: '#4338ca',
  },
];

export const CHRONOLOGY_ERAS: ChronologyEra[] = [
  {
    id: 'era-1',
    era: 'c. 12,000 – 3500 BCE',
    energyRegime: 'Agrarian Solar',
    afroEurasia: 'Holocene warming (~11,700 BP); independent agricultural transitions in Fertile Crescent, Yangtze, Yellow River, and New Guinea.',
    americasAfricaOceania: 'Domestication of maize, squash, potatoes, and llamas in Mesoamerica & the Andes; West African sorghum & pearl millet.',
    climateOrPathogen: 'Post-glacial Holocene stability unlocks sedentary storage alongside higher zoonotic disease load.',
    chapters: 'Ch. 4, Ch. 5 (§5.1), Ch. 7 (§7.1)',
  },
  {
    id: 'era-2',
    era: 'c. 3500 – 600 BCE',
    energyRegime: 'Agrarian Solar',
    afroEurasia: 'Sumerian city-states, Egypt, Harappan Indus grid cities, Shang/Zhou China, steppe chariots, and c. 1200 BCE Bronze Age Collapse.',
    americasAfricaOceania: 'Caral-Supe monumental centers in Peru; Olmec civilization in Mesoamerica; early Bantu agrarian expansions.',
    climateOrPathogen: '4.2-kiloyear aridification event stresses Egypt/Akkad; c. 1200 BCE Eastern Mediterranean megadrought.',
    chapters: 'Ch. 5 (§5.2–5.3), Ch. 7 (§7.2–7.3)',
  },
  {
    id: 'era-3',
    era: 'c. 600 BCE – 600 CE',
    energyRegime: 'Agrarian Solar',
    afroEurasia: 'Axial Age ethics (Confucius, Buddha, Greek reason, Zoroaster, Judaism); Achaemenid, Mauryan, Qin-Han, Roman empires; Silk Roads.',
    americasAfricaOceania: 'Chavín, Moche, Maya Classic city-states, Teotihuacan; Kingdom of Aksum and trans-Saharan camel integration.',
    climateOrPathogen: 'Antonine & Justinianic Plagues (Yersinia pestis confirmed via aDNA); 536–660 CE Late Antique Little Ice Age.',
    chapters: 'Ch. 6, Ch. 8 (§8.1–8.3), Ch. 20',
  },
  {
    id: 'era-4',
    era: 'c. 600 – 1450 CE',
    energyRegime: 'Agrarian Solar',
    afroEurasia: 'Dar al-Islam common market & Baghdad House of Wisdom; Song China industrial/print/gunpowder boom; Mongol Pax Mongolica.',
    americasAfricaOceania: 'Ghana, Mali, Songhai, Swahili coast, Great Zimbabwe; Mexica (Aztec) Tenochtitlan & Inca Empire; Polynesian settlement of Aotearoa/Hawai’i.',
    climateOrPathogen: 'Medieval Climate Anomaly; 14th-c. Black Death kills 1/3–1/2 across parts of West Asia, North Africa, and Europe.',
    chapters: 'Ch. 9 (§9.1–9.3), Ch. 15, Ch. 16',
  },
  {
    id: 'era-5',
    era: 'c. 1450 – 1750 CE',
    energyRegime: 'Agrarian Solar',
    afroEurasia: 'Ottoman, Safavid, Mughal Gunpowder Empires; Ming/Qing manufacturing supremacy & Single Whip silver demand; European trading-post forts.',
    americasAfricaOceania: 'Columbian Exchange (75–90% Indigenous demographic collapse); Potosí/Zacatecas silver → Manila galleons; >12M forced Middle Passage.',
    climateOrPathogen: 'Smallpox/measles pathogen shock in Americas; 17th-century Little Ice Age fiscal crises (Ming, Ottoman, Europe).',
    chapters: 'Ch. 10 (§10.1–10.3), Ch. 15, Ch. 17',
  },
  {
    id: 'era-6',
    era: 'c. 1750 – 1914 CE',
    energyRegime: 'Fossil Mineral',
    afroEurasia: 'Coal Industrial Revolution; Great Divergence; Opium Wars, Taiping Rebellion, Ottoman Tanzimat, Meiji Restoration.',
    americasAfricaOceania: 'American, French, Haitian (1791–1804 first Black republic), and Latin American revolutions; New Imperialism & Scramble for Africa.',
    climateOrPathogen: '1815 Mount Tambora (Indonesia) → 1816 "Year Without a Summer"; shift from organic land ceilings to coal.',
    chapters: 'Ch. 11 (§11.1–11.2), Ch. 17, Ch. 18, Ch. 20',
  },
  {
    id: 'era-7',
    era: 'c. 1914 – Present',
    energyRegime: 'Fossil Mineral',
    afroEurasia: 'World Wars I & II; Russian & Chinese revolutions; Cold War; 1944 Bretton Woods; post-1978 East/Southeast Asian resurgence.',
    americasAfricaOceania: 'Asian & African decolonization (1945–1975); 1955 Bandung Asian–African Conference; Non-Aligned Movement; hyper-globalization.',
    climateOrPathogen: '1918–1919 Influenza NPIs; post-1945 "Great Acceleration" carbon/nitrogen planetary boundary forcing (Anthropocene).',
    chapters: 'Ch. 11 (§11.3), Ch. 14, Ch. 19, Ch. 20, Ch. 21',
  },
];

export const COMPARATIVE_19C_RESPONSES: ComparativeModernizationRow[] = [
  {
    society: 'Meiji Japan',
    strategy: 'Abolition of feudal domains, universal conscription, state-led industrialization, constitutional monarchy.',
    obstacles: 'Limited domestic raw materials and initial unequal commercial treaties.',
    outcome1914: 'Achieved treaty revision, defeated Qing China and Tsarist Russia, annexed Korea and Taiwan.',
  },
  {
    society: 'Qing China',
    strategy: 'Self-Strengthening Movement (arsenals, shipyards) followed by late Hundred Days’ Reforms.',
    obstacles: 'Massive demographic strain, Taiping civil war devastation, foreign treaty-port concessions.',
    outcome1914: 'Xinhai Revolution (1911) overthrew the Qing dynasty and established a fragile republic.',
  },
  {
    society: 'Ottoman Empire',
    strategy: 'Tanzimat legal & military centralization, secular schooling, railway construction.',
    obstacles: 'Sovereign debt default, European capitulations, and separatist nationalism in the Balkans.',
    outcome1914: 'Young Turk constitutional revolution (1908) amid ongoing territorial contraction.',
  },
  {
    society: 'Sub-Saharan Africa',
    strategy: 'Diplomatic alliances, armed resistance (Samori Touré; Menelik II victory at Adwa), religious revivalism.',
    obstacles: 'Maxim machine gun disparity, post-Berlin Conference coordination, rinderpest cattle plague.',
    outcome1914: 'Near-total colonial partition except Ethiopia and Liberia; emergence of educated nationalist elites.',
  },
];

export const THEORETICAL_LENSES: TheoreticalLensRow[] = [
  {
    lens: 'World-Systems & Annales',
    category: 'Longue durée structures, capital accumulation, core–periphery hierarchy',
    contribution: 'Exposes systemic economic interdependence and multi-century cycles (Braudel, Wallerstein, Abu-Lughod).',
    critique: 'Can underplay cultural meaning, religion, and local political agency.',
  },
  {
    lens: 'Postcolonial & Feminist',
    category: 'Discursive power, archival silences, subaltern resistance, gender',
    contribution: 'Dismantles Eurocentric and patriarchal assumptions embedded in colonial archives (Said, Chakrabarty, Guha, Scott).',
    critique: 'Sometimes prioritizes textual deconstruction over material-economic quantification.',
  },
  {
    lens: 'Environmental & Big History',
    category: 'Energy flows, biomes, climate forcing, 13.8B-year cosmic thresholds',
    contribution: 'Connects human societies to Earth-system limits and deep geological time (Crosby, Christian, J. R. McNeill).',
    critique: 'Risks environmental determinism or obscuring unequal intra-human emissions.',
  },
  {
    lens: 'Cliometrics',
    category: 'Real wages, historical GDP per capita, demographic rates, price convergence',
    contribution: 'Tests grand claims about living standards and divergence with quantitative rigor (Maddison, Allen, Broadberry).',
    critique: 'Sparse pre-1800 datasets require bold statistical extrapolations across archives.',
  },
];

export const DIVERGENCE_SCHOOLS: DivergenceSchool[] = [
  {
    id: 'cal-school',
    school: 'California School',
    theorists: 'Kenneth Pomeranz · R. Bin Wong · J.-L. Rosenthal',
    driver: 'Contingent coal geography near navigable British waterways + colonial American "ghost acreage" after 1750.',
    evidence: 'Comparable living standards, market integration, credit, and life expectancy in Yangtze Delta (Jiangnan) and England c. 1750.',
    limitations: 'Can underplay pre-1750 differences in scientific institutions, state fiscal capacity, and real wages.',
    timeframeFocus: 'Post-1750/1800 conjuncture',
  },
  {
    id: 'neo-inst',
    school: 'Neo-Institutionalist',
    theorists: 'Douglass North · Daron Acemoglu · Max Weber (earlier)',
    driver: 'Secure property rights, representative legislatures, and competitive interstate markets forcing ruler accountability.',
    evidence: 'Dutch & British sovereign bond stability, patent law, and limits on royal expropriation.',
    limitations: 'Overstates Asian "despotism" and overlooks strong customary property and factor markets in Qing China.',
    timeframeFocus: 'Pre-1750 institutional build-up',
  },
  {
    id: 'factor-price',
    school: 'Factor-Price & Useful Knowledge',
    theorists: 'Robert C. Allen · Joel Mokyr',
    driver: 'Uniquely high British urban wages relative to cheap coal + Enlightenment artisan–scientist collaboration.',
    evidence: 'Relative price ratios of labor vs. energy made spinning jennies & Watt engines profitable in Britain first, not low-wage Asia.',
    limitations: 'Debated whether high British wages preceded industrialization or resulted from early commercial empire.',
    timeframeFocus: '1700–1830 induced innovation',
  },
  {
    id: 'protectionist',
    school: 'Global Protectionist / War Capitalism',
    theorists: 'Prasannan Parthasarathi · Sven Beckert · Peer Vries',
    driver: 'Mercantilist tariffs, war capitalism, fiscal-military competition, and colonial deindustrialization of Asia.',
    evidence: 'British Calico Acts protecting domestic weavers from superior Indian textiles + slave-grown Atlantic cotton supply.',
    limitations: 'Explains global market capture better than the initial mechanical breakthroughs in steam engineering.',
    timeframeFocus: '1650–1850 mercantilist coercion',
  },
];

export const CAUSAL_SPECTRUM: CausalRegisterRow[] = [
  {
    register: 'Deep Environmental & Material',
    forces: 'Continental axes, climate regimes, energy density, pathogen pools, soil fertility',
    timescale: 'Millennia to centuries',
    braudelLayer: 'Longue durée (Geographical time)',
    risk: 'Environmental determinism that naturalizes conquest and erases human institutions (critique of Diamond).',
  },
  {
    register: 'Institutional & Economic Structure',
    forces: 'State fiscal capacity, property law, class relations, trade networks, secular cycles (Turchin/Goldstone)',
    timescale: 'Centuries to decades',
    braudelLayer: 'Conjunctural cycles (Social time)',
    risk: 'Reifying abstract systems while neglecting ideological rupture and individual leadership.',
  },
  {
    register: 'Conjunctural & Contingent',
    forces: 'Succession crises (Ögedei 1241), strategic reversals (Zheng He 1433), Atlantic/Ming silver overlap',
    timescale: 'Years to single events',
    braudelLayer: 'Histoire événementielle (Event time)',
    risk: 'Anecdotal fragmentation that loses sight of deeper material and structural constraints.',
  },
  {
    register: 'Subaltern & Collective Agency',
    forces: 'Haitian Revolution, Maroon communities, strikes, Scott’s "everyday resistance" (foot-dragging, flight, folklore)',
    timescale: 'Generations to immediate mobilization',
    braudelLayer: 'Lived agency from below',
    risk: 'Romanticizing resistance without accounting for coercive state and military asymmetries.',
  },
];

export const POLICY_CASE_STUDIES: PolicyCaseStudy[] = [
  {
    domain: 'Epidemic Preparedness',
    cases: '1348 Venetian maritime quarantines (lazarettos); 1918–1919 urban non-pharmaceutical interventions (NPIs)',
    lessons: 'Early layered action, transparent communication, and social safety nets reduce both mortality and economic shock.',
    pitfalls: 'Treating public health purely as coercive policing that scapegoats the poor or minorities.',
  },
  {
    domain: 'Macroeconomic Stability & Debt',
    cases: 'Yuan/Ming paper currency over-issue; 16th-c. Habsburg defaults; 1929 Gold Standard vs 1944 Bretton Woods',
    lessons: 'Lender-of-last-resort liquidity and countercyclical fiscal space halt debt-deflation spirals; early gold-exit speeds recovery.',
    pitfalls: 'Inflexible monetary orthodoxy or assuming every inflation/debt shock matches one past crisis.',
  },
  {
    domain: 'Transboundary Water & Climate',
    cases: '1960 Indus Waters Treaty, Nile & Mekong basins; Early Qing granary relief during 17th-c. Little Ice Age',
    lessons: 'Institutionalized data-sharing and flexible buffer granaries mitigate scarcity; mutual dependence deters unilateral sabotage.',
    pitfalls: 'Assuming resource scarcity automatically causes violent collapse regardless of agrarian governance.',
  },
];

export const METHOD_FRONTIERS: MethodFrontier[] = [
  {
    frontier: 'Paleogenomics (aDNA) & Isotopes',
    tools: 'Ancient human/pathogen whole genomes, dental calculus, strontium & oxygen bone isotopes',
    insights: 'Maps Bronze Age Yamnaya & Austronesian migrations; confirms Yersinia pestis lineages in Justinianic & Black Death plagues.',
    cautions: 'Genetic ancestry never equals cultural identity; requires indigenous descendant consent and data sovereignty.',
  },
  {
    frontier: 'High-Resolution Paleoclimate',
    tools: 'Greenland/Antarctic ice cores, tree-ring widths, cave speleothems, pollen cores, harvest price series',
    insights: 'Connects 536–540 CE volcanic winter and 1815 Mount Tambora (Indonesia) to global crop failures.',
    cautions: 'Climate correlation still requires institutional mediation—avoid simplistic climate determinism.',
  },
  {
    frontier: 'Computational & Spatial History (HGIS)',
    tools: 'OCR / Handwritten Text Recognition (HTR) on millions of prints/memorials, GIS & correspondence network graphs',
    insights: 'Exposes macro-patterns in slave-trade voyages, port-city brokers, and Begriffsgeschichte semantic shifts.',
    cautions: 'Digitization budgets disproportionately mirror state, colonial, and major-language print archives.',
  },
  {
    frontier: 'Anthropocene & Planetary History',
    tools: 'Stratigraphic markers, post-1945 "Great Acceleration" energy/plastic/nitrogen accounting (Chakrabarty)',
    insights: 'Collapses natural vs. human history boundary as humanity acts as a geological planetary force.',
    cautions: 'Must differentiate unequal historical fossil emissions rather than blaming an undifferentiated "humanity."',
  },
];

export const RESEARCH_PROTOCOL: ResearchProtocolStep[] = [
  { stage: '1. Historiographical Positioning', tasks: 'Survey existing scholarship to pinpoint unresolved debates or regional omissions.', benchmarks: 'States clearly how the project extends, qualifies, or challenges prior interpretations.' },
  { stage: '2. Question & Scale Calibration', tasks: 'Frame a falsifiable causal or comparative question with justified space/time boundaries.', benchmarks: 'Avoids Eurocentric default timelines; chooses most-similar or most-different cases deliberately.' },
  { stage: '3. Source Triangulation', tasks: 'Assemble administrative, commercial, material, oral, and scientific proxies.', benchmarks: 'Evaluates authorial position, survival bias, and Trouillot-style silences in every source.' },
  { stage: '4. Causal & Counterfactual Audit', tasks: 'Separate structural preconditions from short-term conjunctures and human agency.', benchmarks: 'Tests rival explanations fairly with disciplined counterfactuals rather than cherry-picking.' },
  { stage: '5. Synthesis & Exposition', tasks: 'Organize analytical arguments backed by contextualized primary quotations.', benchmarks: 'Avoids hindsight teleology and anachronistic moralizing; maintains complete citation transparency.' },
];

export const CRITICAL_INQUIRY_DIMENSIONS: CriticalQuestionDimension[] = [
  { dimension: 'Scale & Spatiality', question: 'How does this phenomenon change when shifted from a national frame to an oceanic, hemispheric, or planetary scale?', pitfall: 'Methodological nationalism treating modern borders as timeless containers.' },
  { dimension: 'Causation & Contingency', question: 'Which outcomes came from deep structural trends, and which hinged on short-term conjuncture or fragile human choice?', pitfall: 'Hindsight teleology portraying historical outcomes as inevitable.' },
  { dimension: 'Agency & Silences', question: 'Whose voices survived in the archive, and how did non-elite or marginalized actors resist or reshape power?', pitfall: 'Confusing state administrator perspectives with total social reality.' },
  { dimension: 'Material & Ecological Base', question: 'What energy sources, crops, diseases, climate forcing, and labor regimes sustained or constrained this society?', pitfall: 'Analyzing ideology or politics divorced from biophysical limits.' },
  { dimension: 'Periodization & Positionality', question: 'Whose turning points define this timeline, and how would a different regional center alter the chronology?', pitfall: 'Projecting European Ancient/Medieval/Modern labels globally.' },
];

export const NUSANTARA_IN_WORLD_HISTORY = [
  {
    era: 'Monsoon Common Market (Ch. 6 & 15)',
    title: 'Malacca, Java & Gujarati–Hokkien Diasporas',
    detail: 'Maritime Southeast Asia sat at the hinge of the Indian Ocean and South China Sea—where predictable monsoon wind reversals fostered multi-ethnic port law, pepper/clove spice circuits, and peaceful Islamization blending Javanese and cosmopolitan Islamic architecture.',
  },
  {
    era: 'Amphibious Trading-Post Empires (Ch. 15)',
    title: 'Batavia VOC Monopoly & Hugo Grotius (1609)',
    detail: 'Rather than conquering vast continents early on, European companies seized maritime choke points (Malacca, Batavia). Dutch rivalry against Iberian oceanic monopolies directly birthed Grotius’s Mare Liberum (The Free Sea), foundational to modern maritime law.',
  },
  {
    era: 'Planetary Climate Forcing (Ch. 20)',
    title: '1815 Mount Tambora & Global Harvest Crises',
    detail: 'Stratospheric sulfate aerosols from the 1815 eruption of Mount Tambora in Sumbawa, Indonesia cooled northern summers worldwide, driving the 1816 "Year Without a Summer" and synchronized harvest failures from Yunnan to Europe and New England.',
  },
  {
    era: 'Decolonization & Non-Alignment (Ch. 11)',
    title: '1955 Bandung Asian–African Conference',
    detail: 'Hosted in Indonesia amid Cold War superpower rivalry, the Bandung Conference articulated Third World solidarity, anti-colonial sovereignty, and an independent diplomatic corridor outside rigid US–Soviet bipolarity.',
  },
];

export const HISTORY_GLOSSARY: HistoryGlossaryItem[] = [
  { term: 'Anthropocene', definition: 'Proposed geological epoch in which human fossil-fuel, industrial, and agricultural activity acts as a dominant driver of Earth’s climate and biosphere.' },
  { term: 'Axial Age', definition: 'Concept coined by Karl Jaspers for c. 800–200 BCE, when foundational ethical and philosophical traditions emerged across China, India, Persia, and the Mediterranean.' },
  { term: 'Columbian Exchange', definition: 'Post-1492 biological transfer of crops (maize, potatoes), domesticated animals, human populations, and Afro-Eurasian pathogens across hemispheres.' },
  { term: 'Conjuncture', definition: 'Intersection of multiple independent causal processes at a specific moment, opening contingent pathways for rapid structural change.' },
  { term: 'Dar al-Islam', definition: 'Literally "Abode of Islam"; interconnected Afro-Eurasian cultural, legal, and commercial sphere linked by Islamic institutions and Arabic scholarship.' },
  { term: 'Fiscal-Military State', definition: 'Early modern state built around centralized taxation, standing armies/navies, and public sovereign debt markets to sustain continuous interstate war.' },
  { term: 'Ghost Acreage', definition: 'Kenneth Pomeranz’s term for the land-use relief Britain gained by importing land-intensive cotton, sugar, timber, and grain from coerced colonial territories.' },
  { term: 'Great Divergence', definition: '19th-century widening of per capita income, fossil-fueled output, and geopolitical power between Western Europe/North America and East/South Asia.' },
  { term: 'Histoire Croisée', definition: 'Entangled history examining how cross-cultural encounters mutually transform every participating society rather than tracing one-way diffusion.' },
  { term: 'Longue Durée', definition: 'Fernand Braudel’s term for slow-moving geographical, climatic, and demographic structures unfolding across centuries or millennia.' },
  { term: 'Methodological Nationalism', definition: 'Analytical fallacy of projecting the modern bounded nation-state backward as the natural container for all historical eras.' },
  { term: "Mit'a", definition: 'Rotational public labor tribute organized by Andean communities under the Inca Empire, later repurposed by Spanish colonial authorities at Potosí.' },
  { term: 'Organic vs. Mineral Regime', definition: 'E. A. Wrigley’s distinction between solar-constrained pre-industrial economies (muscle, wood, wind) and coal/oil-powered industrial economies.' },
  { term: 'Pax Mongolica', definition: '13th–14th century period of trans-Eurasian commercial and diplomatic integration under Mongol rule—accelerating both trade and plague transmission.' },
  { term: 'Periodization', definition: 'Interpretive division of continuous historical time into named eras reflecting specific regional priorities or causal pivots.' },
  { term: 'Reciprocal Comparison', definition: 'Method advocated by R. Bin Wong & Kenneth Pomeranz evaluating regions symmetrically against each other instead of benchmarking against Europe.' },
  { term: 'Subaltern', definition: 'Term adapted from Antonio Gramsci by South Asian historians to denote populations subordinated by class, caste, gender, race, or colonial rule.' },
  { term: 'Teleology', definition: 'Fallacy of reading past events as inevitable predetermined steps leading toward a single modern outcome.' },
  { term: 'World-Systems Analysis', definition: 'Immanuel Wallerstein’s macro-sociological framework analyzing divisions of labor across core, semi-peripheral, and coerced peripheral zones.' },
];

export const THEMATIC_INDEX: ThematicIndexRow[] = [
  { subject: 'Agriculture, Climate & Ecology', topics: 'Holocene warming, 7 domestication centers, Columbian Exchange, Little Ice Age, energy regimes, paleoclimatology, Anthropocene', chapters: 'Ch. 4, 5, 7, 10, 14, 17, 19, 20' },
  { subject: 'Commerce & Monetary Systems', topics: 'Silk Roads, Indian Ocean monsoons, Dar al-Islam markets, Potosí–Manila silver circuit, Bretton Woods', chapters: 'Ch. 6, 8, 9, 10, 15, 19' },
  { subject: 'Empires, Law & Statecraft', topics: 'Grain-state thesis, satrapies, Qin-Han & Rome, Gunpowder Empires, Meiji state, Qing multi-idiom rule', chapters: 'Ch. 5, 7, 8, 10, 11, 12, 16' },
  { subject: 'Epidemics & Demography', topics: 'Zoonotic origins, Justinianic Plague, Black Death, Indigenous American collapse (75–90%), 1918 NPIs, aDNA', chapters: 'Ch. 4, 8, 9, 10, 19, 20' },
  { subject: 'Historiography & Methodology', topics: 'Universal chronicles, archival silences (Trouillot), periodization, postcolonial/feminist critique, HGIS, research design', chapters: 'Ch. 1, 2, 3, 12, 13, 14, 18, 20, 21' },
  { subject: 'Labor, Slavery & Resistance', topics: 'Mit’a labor tax, Transatlantic Slave Trade (>12M), Haitian Revolution, Maroons, everyday peasant resistance', chapters: 'Ch. 2, 9, 10, 11, 13, 18' },
  { subject: 'Oceans, Borderlands & Concepts', topics: 'Thalassology, Indian/Atlantic/Pacific worlds, trading-post cartazes, middle grounds, Begriffsgeschichte', chapters: 'Ch. 6, 15, 16' },
  { subject: 'Industrialization & Divergence', topics: 'Song proto-industrialization, California School, ghost acreage, high wages vs coal, Calico Acts', chapters: 'Ch. 9, 11, 14, 17' },
];

export const WORLD_HISTORY_BIBLIOGRAPHY: string[] = [
  'Abu-Lughod, J. L. (1989). Before European hegemony: The world system A.D. 1250–1350. Oxford University Press.',
  'Allen, R. C. (2009). The British Industrial Revolution in global perspective. Cambridge University Press.',
  'Bayly, C. A. (2004). The birth of the modern world, 1780–1914. Blackwell Publishing.',
  'Beckert, S. (2014). Empire of cotton: A global history. Alfred A. Knopf.',
  'Bentley, J. H. (1993). Old World encounters. Oxford University Press.',
  'Braudel, F. (1972). The Mediterranean and the Mediterranean world in the age of Philip II. Harper & Row.',
  'Chakrabarty, D. (2000). Provincializing Europe. Princeton University Press.',
  'Chakrabarty, D. (2009). The climate of history: Four theses. Critical Inquiry, 35(2), 197–222.',
  'Christian, D. (2004). Maps of time: An introduction to Big History. University of California Press.',
  'Crosby, A. W. (1972). The Columbian exchange. Greenwood Press.',
  'Curtin, P. D. (1984). Cross-cultural trade in world history. Cambridge University Press.',
  'Darwin, J. (2008). After Tamerlane: The rise and fall of global empires, 1400–2000. Bloomsbury Press.',
  'Diamond, J. (1997). Guns, germs, and steel. W. W. Norton & Company.',
  'Frank, A. G. (1998). ReORIENT: Global economy in the Asian age. University of California Press.',
  'Gilroy, P. (1993). The Black Atlantic. Harvard University Press.',
  'Goldstone, J. A. (1991). Revolution and rebellion in the early modern world. University of California Press.',
  'Harper, K. (2017). The fate of Rome: Climate, disease, and the end of an empire. Princeton University Press.',
  'Hodgson, M. G. S. (1974). The venture of Islam (Vols. 1–3). University of Chicago Press.',
  'Ibn Khaldun. (1967). The Muqaddimah (F. Rosenthal, Trans.). Princeton University Press.',
  'James, C. L. R. (1938). The Black Jacobins: Toussaint L’Ouverture and the San Domingo Revolution.',
  'McNeill, J. R. (2000). Something new under the sun. W. W. Norton & Company.',
  'McNeill, W. H. (1963). The rise of the West. University of Chicago Press.',
  'Neustadt, R. E., & May, E. R. (1986). Thinking in time: The uses of history for decision-makers. Free Press.',
  'North, D. C. (1990). Institutions, institutional change and economic performance. Cambridge University Press.',
  'Osterhammel, J. (2014). The transformation of the world: A global history of the nineteenth century. Princeton UP.',
  'Parker, G. (2013). Global crisis: War, climate change and catastrophe in the seventeenth century. Yale UP.',
  'Parthasarathi, P. (2011). Why Europe grew rich and Asia did not: 1600–1850. Cambridge University Press.',
  'Pomeranz, K. (2000). The great divergence: China, Europe, and the making of the modern world economy. Princeton UP.',
  'Said, E. W. (1978). Orientalism. Pantheon Books.',
  'Scott, J. C. (1985). Weapons of the weak. Yale UP · Scott, J. C. (2017). Against the grain. Yale UP.',
  'Stoler, A. L. (2009). Along the archival grain. Princeton University Press.',
  'Subrahmanyam, S. (1997). Connected histories: Early modern Eurasia. Modern Asian Studies, 31(3), 735–762.',
  'Trouillot, M.-R. (1995). Silencing the past: Power and the production of history. Beacon Press.',
  'Wallerstein, I. (1974). The modern world-system I. Academic Press · White, R. (1991). The middle ground · Wong, R. B. (1997). China transformed.',
];

export interface WorldHistoryBookRec {
  order: number;
  title: string;
  authorYear: string;
  track: 'Big Picture' | 'Critical Method' | 'Divergence & Trade' | 'Climate & Ecology';
  chapters: string;
  whyRead: string;
  keyTakeaway: string;
}

export const WORLD_HISTORY_BOOK_RECOMMENDATIONS: WorldHistoryBookRec[] = [
  {
    order: 1,
    title: 'Maps of Time: An Introduction to Big History',
    authorYear: 'David Christian (2004)',
    track: 'Big Picture',
    chapters: 'Ch. 3, 4 & 14',
    whyRead: 'Ideal first book if you want the widest zoom—linking Holocene warming, energy capture, and collective learning before any nation-state existed.',
    keyTakeaway: 'Frames human civilizations as energy-harvesting thresholds nested inside planetary history.',
  },
  {
    order: 2,
    title: 'Before European Hegemony: The World System A.D. 1250–1350',
    authorYear: 'Janet L. Abu-Lughod (1989)',
    track: 'Divergence & Trade',
    chapters: 'Ch. 6 & 9',
    whyRead: 'Dismantles the myth that Europe invented global trade by mapping eight interlocking Afro-Eurasian circuits two centuries before Columbus.',
    keyTakeaway: 'Shows a polycentric medieval world system anchored across Cairo, Samarkand, Calicut, and Quanzhou.',
  },
  {
    order: 3,
    title: 'The Venture of Islam (Vols. 1–3)',
    authorYear: 'Marshall G. S. Hodgson (1974)',
    track: 'Big Picture',
    chapters: 'Ch. 1, 9 & 10',
    whyRead: 'Essential counterweight to Eurocentric timelines—demonstrating how an Afro-Eurasian Islamicate common market, law, and scholarship unified continents.',
    keyTakeaway: 'Coins "Islamicate" to distinguish shared pluralistic civilization from strictly religious doctrine.',
  },
  {
    order: 4,
    title: 'Silencing the Past: Power and the Production of History',
    authorYear: 'Michel-Rolph Trouillot (1995)',
    track: 'Critical Method',
    chapters: 'Ch. 2, 11 & 21',
    whyRead: 'Short, razor-sharp guide to why historical archives are never neutral—centered on how colonial records erased the Haitian Revolution.',
    keyTakeaway: 'Silences enter at fact creation, archive assembly, narrative retrieval, and public commemoration.',
  },
  {
    order: 5,
    title: 'Along the Archival Grain: Epistemic Anxieties and Colonial Common Sense',
    authorYear: 'Ann Laura Stoler (2009)',
    track: 'Critical Method',
    chapters: 'Ch. 2 & 15',
    whyRead: 'Draws directly on Dutch East Indies (Sumatra & Java) colonial archives—reading official anxieties along the grain before reading against it.',
    keyTakeaway: 'Colonial bureaucratic paper reveals the hidden vulnerabilities and fears of ruling elites.',
  },
  {
    order: 6,
    title: 'The Great Divergence: China, Europe, and the Making of the Modern World Economy',
    authorYear: 'Kenneth Pomeranz (2000)',
    track: 'Divergence & Trade',
    chapters: 'Ch. 17',
    whyRead: 'The landmark book that sparked the modern comparative economics debate between England and China’s Yangtze Delta (Jiangnan).',
    keyTakeaway: 'Argues post-1750 coal access and New World "ghost acreage"—not timeless culture—drove industrial divergence.',
  },
  {
    order: 7,
    title: 'Empire of Cotton: A Global History',
    authorYear: 'Sven Beckert (2014)',
    track: 'Divergence & Trade',
    chapters: 'Ch. 11 & 17',
    whyRead: 'Connects Indian handloom dominance, British Calico tariffs, plantation slavery, and Asian agricultural frontiers into a single narrative.',
    keyTakeaway: 'Industrial capitalism emerged inseparable from state-backed "war capitalism" and coerced land/labor.',
  },
  {
    order: 8,
    title: 'The Fate of Rome: Climate, Disease, and the End of an Empire',
    authorYear: 'Kyle Harper (2017)',
    track: 'Climate & Ecology',
    chapters: 'Ch. 8 & 20',
    whyRead: 'Model demonstration of 21st-century paleoclimatology and ancient DNA (aDNA) integrated seamlessly with classical written sources.',
    keyTakeaway: 'Solar cooling, volcanic winters (536 CE), and Yersinia pestis interacted with imperial fiscal fragility.',
  },
  {
    order: 9,
    title: 'Global Crisis: War, Climate Change and Catastrophe in the Seventeenth Century',
    authorYear: 'Geoffrey Parker (2013)',
    track: 'Climate & Ecology',
    chapters: 'Ch. 10 & 20',
    whyRead: 'Compares synchronized 17th-century Little Ice Age upheavals from Ming China and the Ottoman Empire to Europe and Tokugawa Japan.',
    keyTakeaway: 'Shared climatic shocks produced sharply different outcomes depending on granary relief and state governance.',
  },
  {
    order: 10,
    title: 'The Muqaddimah: An Introduction to History',
    authorYear: 'Ibn Khaldun (1377 / Rosenthal Trans.)',
    track: 'Critical Method',
    chapters: 'Ch. 1 & 18',
    whyRead: '14th-century North African masterpiece foundational to sociology, historiography, and cyclical statecraft (asabiyyah).',
    keyTakeaway: 'Treats historical change as law-governed social, ecological, and economic dynamics rather than mere court gossip.',
  },
];


// Content sourced from the Or Initiative "Social Media Toolbox" doc (tool detail tabs +
// Toolkit Overview table) and the "Or_Toolkit_OnePager" acrostic doc.
// Arc assignment below is an inference from each tool's description — the source doc
// defines the 3 arcs but doesn't color-code the overview table rows by arc.

export type Arc = 1 | 2 | 3;

export const ARCS: Record<Arc, { label: string; description: string }> = {
  1: { label: "How we know", description: "Knowledge-building" },
  2: { label: "How we talk", description: "Discourse skills" },
  3: { label: "How we apply", description: "Content and identity" },
};

export type SeeTrait = {
  letter: string;
  name: string;
  sourceName: string;
};

export const SEE_TRAITS: SeeTrait[] = [
  { letter: "S", name: "Surface uncertainty", sourceName: "Elevating Uncertainty" },
  { letter: "E", name: "Express uncertainty", sourceName: "Expressing Uncertainty" },
  { letter: "E", name: "Explore perspectives", sourceName: "Multiple Perspectives" },
];

export type Tool = {
  slug: string;
  letter: string;
  name: string;
  formerName?: string;
  arc: Arc;
  duration: string;
  grade: string;
  format: string;
  bestUsed: string;
  overview: string;
  groundedInInterviews: string;
  competencies?: string[];
  // "teaser" (default) fades the lesson content behind a gradient for public visitors.
  // "open" leaves the lesson content fully readable and instead calls out the locked
  // download button — a second gating pattern to compare against the teaser style.
  gatingStyle?: "teaser" | "open";
};

// Order follows the PRACTICES acrostic: P R A C T I C E S
export const TOOLS: Tool[] = [
  {
    slug: "pause",
    letter: "P",
    name: "Pause",
    arc: 3,
    duration: "45–55 mins",
    grade: "7 – 12",
    format: "Individual, small group, & whole class",
    bestUsed: "When content is pushing students to form a snap judgement about complex topics",
    overview:
      "The Pause tool gives students a structured protocol to help them practice slowing down before they react to emotionally-charged social media content. The tool guides them to stop, reflect, and examine their reaction before deciding what to think and how to respond. When they do this, they can choose to respond intentionally and thoughtfully—or to not respond at all.\n\nBy practicing with this tool repeatedly, taking a pause can become a habit for students, allowing them to more regularly engage with complex online content as informed and empathetic participants rather than purely reactive ones.",
    groundedInInterviews:
      "Students consistently described regret tied to impulsive commenting and fear of screenshots or permanence. Many reported either reacting quickly in anger or choosing strategic silence to avoid social risk. The pause tool responds to this tension by offering a middle path between reacting and ignoring.",
    competencies: [
      "Identifying what emotions online content is attempting to elicit, recognizing their own emotional responses, and pausing to acknowledge uncertainty before engaging.",
      "Reflecting on how their choices online influence their attention, mood, and knowledge.",
      "Recognizing gaps in their knowledge and identifying the evidence needed to answer a question.",
      "Applying the Pause tool independently to content they encounter outside class.",
    ],
  },
  {
    slug: "reframe",
    letter: "R",
    name: "Reframe",
    arc: 2,
    duration: "50–60 mins",
    grade: "7 – 12",
    format: "Individual, small group, & whole class",
    bestUsed: "When a meme, slogan, or rage bait post is built to make you pick a side instantly",
    overview:
      "The Reframe Tool gives students a set of moves for transforming content built to be quickly reacted to, including memes, slogans, and rage bait, and converting them into statements that open the door for real conversation. Students will learn to spot the \"closing moves\" that shut a conversation down before it even has a chance to start and then they will practice turning a closed declaration into either a claim that can be tested against evidence or a question that genuinely invites thoughtful conversation.",
    groundedInInterviews:
      "Students frequently described recognizing rage bait and understanding that engagement amplifies it, yet felt that online spaces rewarded certainty and sharpness. They also reported cynicism about comment sections. This tool builds on their awareness and offers an alternative discourse move.",
    competencies: [
      "1d. Detect cherry-picking, false dilemmas, and omitted context, and explain how they distort understanding.",
      "2a. Transform emotionally charged or polarized claims into neutral, investigatable questions.",
      "3b. Explain how context and platform affordances shape expression for better and worse.",
    ],
  },
  {
    slug: "amplification-detector",
    letter: "A",
    name: "Amplification Detector",
    arc: 1,
    duration: "45–55 mins",
    grade: "7 – 12",
    format: "Individual, small group, & whole class",
    bestUsed: "For analysis of high-intensity or emotional content",
    overview:
      "The Amplification Detector gives students a structured vocabulary for what they already know intuitively: that online, emotional content spreads farther and faster than neutral content, and that social media platforms are built to exploit this. Students will analyze how creators use specific signals such as tone, word choice, imagery, music, pacing, and framing to intensify emotional reactions, and why those intensified reactions are valuable to platforms and to creators.\n\nIn our interviews with students, they told us they are aware that digital creators intentionally amplify the emotional intensity of their content because such emotionally-charged posts are more likely to attract engagement. Students also described a tension: despite knowing about the emotional engineering of online content, they often feel pulled into it anyway. Similarly, many expressed cynicism about the posts in comment sections while simultaneously liking or responding to them.\n\nThis lesson doesn't ask students to stop having reactions, but it prompts them to notice how those reactions are being influenced by platforms and content creators, to better balance both their genuine response and their analytical awareness.",
    groundedInInterviews:
      "Students demonstrated awareness that rage bait and strong emotional content spreads more quickly, yet still described being pulled in by it. Many expressed cynicism about comment sections while simultaneously engaging with them. This tool responds to their recognition that emotion fuels algorithms but gives them a structured way to name and examine it.",
  },
  {
    slug: "context-builder",
    letter: "C",
    name: "Context Builder",
    arc: 1,
    duration: "45–55 mins",
    grade: "7 – 12",
    format: "Individual, small group, and whole class",
    bestUsed: "When students are first experiencing a topic they have little background knowledge about",
    overview:
      "Prompts students to ask what background knowledge they would need before discussing an issue responsibly. Rather than rushing to take a side, students generate questions about history, stakeholders, timelines, and missing perspectives. It cultivates nuance and complexity tolerance.",
    groundedInInterviews:
      "Students expressed frustration with oversimplified narratives and a desire for deeper understanding. At the same time, many described inconsistently triangulating information within their feeds. The Context Builder supports their instinct for nuance while providing a clearer structure for responsible inquiry.",
    gatingStyle: "open",
  },
  {
    slug: "translate",
    letter: "T",
    name: "Translate",
    formerName: "Platform Translation",
    arc: 2,
    duration: "45–55 mins",
    grade: "7 – 12",
    format: "Individual, small group & whole class",
    bestUsed:
      "When the comments section of a piece of content is inflammatory and/or extreme",
    overview:
      "Asks students to translate online comments into what they would sound like face-to-face. By explicitly comparing digital norms with in-person discourse, students notice shifts in tone, certainty, and empathy. It creates a bridge between feed culture and relational conversation.",
    groundedInInterviews:
      "Many students reported preferring in-person conversations for difficult topics and recognized differences in tone between online and offline exchanges. They described online spaces as more performative and polarized. This tool builds on that insight and makes the contrast visible and actionable.",
    gatingStyle: "open",
  },
  {
    slug: "identity-split",
    letter: "I",
    name: "Identity Split",
    arc: 3,
    duration: "55–65 mins",
    grade: "7 – 12",
    format: "Individual, small group, & whole class",
    bestUsed: "When a comment section or online conversation turns someone's specific claim into a label for who they are",
    overview:
      "The Identity Split Tool helps students distinguish between who someone is and what they're arguing. Students practice separating identity from claim, reducing the likelihood that disagreement becomes identity threat. The tool protects discourse from collapsing into personal labeling.",
    groundedInInterviews:
      "Several students described feeling that expressing a view could define their entire identity. Jewish students in particular described experiences of identity collapse or fear of being labeled. This tool directly addresses those concerns by explicitly disentangling identity from argument.",
    competencies: [
      "Distinguishing who someone is from what they're arguing",
      "Recognizing \"collapse moves\" that treat a claim as proof of identity or loyalty",
      "Protecting discourse from collapsing into personal labeling",
    ],
  },
  {
    slug: "clarify",
    letter: "C",
    name: "Clarify",
    formerName: "Ask First",
    arc: 2,
    duration: "50–60 mins",
    grade: "7 – 12",
    format: "Individual, small group, & whole class",
    bestUsed: "Before disagreeing — replacing rebuttals with clarifying questions",
    overview:
      "Replaces rebuttals with clarifying questions. Before disagreeing, students practice asking for definition, evidence, or clarification. The aim is to shift from performance to curiosity.",
    groundedInInterviews:
      "Students shared that productive conversations sometimes occur in person and often begin with questions rather than attacks. Many expressed a desire for more curiosity-driven dialogue. This tool operationalizes that preference and makes it repeatable.",
    competencies: [
      "2a. Transform emotionally charged or polarized claims into neutral, investigable questions",
      "4c. Prioritize accurate understanding over winning arguments or conforming to prior beliefs",
      "2e. Generate shared standards for discourse, reasoning, and evidence use",
    ],
  },
  {
    slug: "evidence",
    letter: "E",
    name: "Evidence",
    formerName: "Claim vs. Evidence",
    arc: 1,
    duration: "45–55 mins",
    grade: "7 – 12",
    format: "Individual, small group, & whole class",
    bestUsed: "For analysis of high-intensity or emotional content",
    overview:
      "The Claim vs. Evidence tool guides students to distinguish between what a piece of content asserts and what it actually can prove or demonstrate based on the information it provides. Students learn to identify the central claim, evaluate the quality and type of supporting evidence, and recognize when emotional language, personal commentary, or repetition are replacing evidence.\n\nThis tool guides students to analyze the strength of the evidence provided in a post to support its central claim. If students conclude that the evidence is weak, it does not necessarily mean that the claim is incorrect — the value of this tool is that it provides students with a routine they can employ to identify, relatively quickly, when they should be suspicious of a claim being made on social media platforms. At that point they have choices: doing the extra legwork to further research the claim, simply moving on and ignoring the post, or even acting on the emotions the post sparked — but doing so with a clear understanding that the accuracy of its central claim is questionable.",
    groundedInInterviews:
      "Students described feeling anger and sadness before analyzing content and frequently equated comments, opinions, and arguments. Several interviews revealed confusion between emotional expression and factual claims. This tool addresses that confusion by separating reasoning from reaction.",
    competencies: [
      "Evaluating the strength and limitations of evidence",
      "Identifying what emotions a creator is attempting to elicit, recognizing their own emotional responses to the content, and pausing to acknowledge uncertainty before engaging with it",
      "Prompting themselves and peers to identify the relevant evidence and context needed to evaluate a claim",
      "Recognizing gaps in their knowledge and identifying the evidence needed to answer a question",
      "Applying the Claims vs. Evidence tool independently to content they encounter outside class",
    ],
  },
  {
    slug: "stakes-check",
    letter: "S",
    name: "Stakes Check",
    arc: 3,
    duration: "50–55 mins",
    grade: "7 – 12",
    format: "Individual, small group, & whole class",
    bestUsed: "Before deciding whether to comment, share, or post publicly",
    overview:
      "Invites students to reflect on what is actually at risk before engaging: social relationships, reputation, safety, long-term digital permanence, or personal values. It helps them evaluate whether engagement serves their goals. The tool promotes strategic agency rather than reactive participation.",
    groundedInInterviews:
      "Students described calculating the social and future costs of speaking publicly online. Fear of permanence, screenshots, and misinterpretation shaped their participation decisions. This tool acknowledges those realities and supports more intentional engagement.",
  },
];

export const TOOL_BY_SLUG = new Map(TOOLS.map((t) => [t.slug, t]));

// The growing library of resources from OTHER organizations — not authored by
// the Or Initiative. Each one must credit its real source org and link out.
export type ExternalResourceType =
  | "Platform"
  | "Curriculum"
  | "Toolkit"
  | "Guide"
  | "Training"
  | "Article";

export type ExternalResource = {
  slug: string;
  name: string;
  organization: string;
  resourceType: ExternalResourceType;
  description: string;
  url: string;
};

export const EXTERNAL_RESOURCES: ExternalResource[] = [
  {
    slug: "sway-classroom",
    name: "SWAY Classroom",
    organization: "SWAY",
    resourceType: "Platform",
    description:
      "A student debate platform teachers can pair with the PRACTICES toolkit for structured, evidence-based classroom debate.",
    url: "https://www.swayed.us/",
  },
  {
    slug: "constructive-dialogue-high-school",
    name: "High School Dialogue Programs",
    organization: "Constructive Dialogue Institute",
    resourceType: "Training",
    description:
      "Free workshops, a student curriculum, and a resource library that teach high schoolers and their teachers how to talk across political and social differences without shutting the conversation down.",
    url: "https://constructivedialogue.org/solutions/high-school/teachers/",
  },
  {
    slug: "facing-history-resource-library",
    name: "Resource Library",
    organization: "Facing History and Ourselves",
    resourceType: "Curriculum",
    description:
      "A searchable library of thousands of history and civics lessons and discussion strategies that help teachers connect polarizing current events to historical context and classroom dialogue.",
    url: "https://www.facinghistory.org/resource-library",
  },
  {
    slug: "checkology",
    name: "Checkology",
    organization: "News Literacy Project",
    resourceType: "Platform",
    description:
      "A free virtual classroom with 250+ ready-made lessons that teach grades 5-12 how to tell fact from fiction, spot bias, and evaluate news sources online.",
    url: "https://newslit.org/educators/checkology/",
  },
  {
    slug: "allsides-for-schools",
    name: "AllSides for Schools",
    organization: "AllSides",
    resourceType: "Toolkit",
    description:
      "A free classroom package of lesson plans, a side-by-side news comparison tool, and a media bias chart that teaches students to spot slant and compare how outlets cover the same story.",
    url: "https://www.allsides.com/schools",
  },
  {
    slug: "braver-education",
    name: "Braver Education",
    organization: "Braver Angels",
    resourceType: "Training",
    description:
      "A program of workshops, structured debates, and a free downloadable toolkit that middle and high schools use to help students practice disagreeing respectfully across political lines.",
    url: "https://braverangels.org/braver-education/",
  },
  {
    slug: "icivics-teacher-resources",
    name: "iCivics Teacher Resources",
    organization: "iCivics",
    resourceType: "Platform",
    description:
      "A free library of civics games, lesson plans, and assignable digital-literacy activities that teach students how government and civic participation actually work, no prior knowledge needed.",
    url: "https://ed.icivics.org/",
  },
  {
    slug: "living-room-conversations-guides",
    name: "Conversation Guides",
    organization: "Living Room Conversations",
    resourceType: "Guide",
    description:
      "Free, step-by-step scripts for structured small-group conversations on more than 150 hot-button topics, built so people who disagree can talk without it turning into a fight.",
    url: "https://www.livingroomconversations.org/topics/",
  },
  {
    slug: "ground-news",
    name: "Ground News",
    organization: "Ground News",
    resourceType: "Platform",
    description:
      "A news app that shows how outlets across the political spectrum cover the same story side by side, useful for teaching students to notice bias, framing, and blind spots in the news they consume.",
    url: "https://ground.news/",
  },
  {
    slug: "mediawise",
    name: "MediaWise",
    organization: "Poynter",
    resourceType: "Curriculum",
    description:
      "A free media-literacy program with fact-checking lessons and classroom-ready activities that teach students how to verify what they see online before they share it.",
    url: "https://www.poynter.org/mediawise/",
  },
  {
    slug: "listen-first-schools",
    name: "Listen First Schools",
    organization: "Listen First Project",
    resourceType: "Toolkit",
    description:
      "A network and set of tools that help schools build a listening-first culture, giving teachers structured formats for student conversations across disagreement.",
    url: "https://www.listenfirstproject.org/schools",
  },
];

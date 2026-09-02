export const profile = {
  name: "Renee Chen",
  role: "Computer Science · Stony Brook University",
  location: "New York",
  email: "renee.chen.1@stonybrook.edu",
  github: "https://github.com/reneechenn",
  githubUser: "reneechenn",
  linkedin: "https://www.linkedin.com/in/renee-chen-543364284",
  resume: "/Renee_Chen_Resume.pdf",
  grad: "May 2027",
}

export const about = {
  lead: "I like building software that feels useful the first time you open it — draft tools, playlists, games, dashboards.",
  body: "I'm a CS major at Stony Brook (class of 2027). Between semesters I've interned in city IT, entertainment production, career-platform support, and education outreach. That mix shows up in how I work: I care about clean data, clear interfaces, and systems that still make sense when plans change.",
}

export type Experience = {
  id: string
  role: string
  org: string
  place: string
  dates: string
  tags: string[]
  bullets: string[]
}

export const experience: Experience[] = [
  {
    id: "ddc",
    role: "Administrative IT Intern, Technology & Innovation",
    org: "NYC Department of Design and Construction",
    place: "New York, NY",
    dates: "Jul 2026 – Aug 2026",
    tags: ["TypeScript", "Excel", "Power BI"],
    bullets: [
      "Developed a TypeScript-based procurement tracking system in Excel to improve workflow organization and visibility across the Technology & Innovation department.",
      "Built and supported Power BI dashboards that turned operational data into insights for department stakeholders.",
    ],
  },
  {
    id: "magilla",
    role: "Production Assistant Intern",
    org: "Magilla Entertainment",
    place: "New York, NY",
    dates: "Jul 2025 – Aug 2025",
    tags: ["Research", "Ops", "Spreadsheets"],
    bullets: [
      "Conducted site and location research to support field production planning and creative development.",
      "Managed large-scale spreadsheets tracking talent, locations, legal documentation, and production logistics.",
      "Coordinated outreach with contributors, location contacts, and vendors while adapting to rapidly changing production priorities.",
    ],
  },
  {
    id: "hats",
    role: "Help Desk IT Intern",
    org: "Hats & Ladders",
    place: "New York, NY",
    dates: "Mar 2025 – Jun 2025",
    tags: ["Support", "Databases", "QA"],
    bullets: [
      "Provided technical support to SYEP participants, coaches, parents, staff, and administrators navigating training platforms and digital resources.",
      "Managed databases containing confidential user information and assisted users with account and platform-related issues.",
      "Collaborated with software and marketing teams to identify, troubleshoot, and resolve platform issues.",
    ],
  },
  {
    id: "doe",
    role: "Office of Student Pathways Intern",
    org: "NYC Department of Education",
    place: "New York, NY",
    dates: "Jun 2023 – Aug 2023",
    tags: ["CS education", "Comms"],
    bullets: [
      "Supported logistics and execution of NYC DOE summer workshops and student programming.",
      "Developed a year-long communication plan for high school seniors around postsecondary and educational pathways.",
      "Collaborated with NYC educators on education plans focused on computer science and technology.",
    ],
  },
]

export type Project = {
  id: string
  name: string
  repo: string
  github: string
  live?: string
  blurb: string
  details: string
  stack: string[]
  accent: string
}

export const featuredProjects: Project[] = [
  {
    id: "draftiq",
    name: "DraftIQ",
    repo: "draft_iq_mvp",
    github: "https://github.com/reneechenn/draft_iq_mvp",
    live: "https://416-minimum-viable-product.vercel.app",
    blurb: "Fantasy baseball auction draft platform with live valuations, rosters, and team comparison.",
    details:
      "Full-stack draft room: player valuation, league setup, roster and budget tracking, draft history, and comparison tools. Paired with a player-data API that ingests MLB rosters, stats, injuries, and transactions.",
    stack: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "Jest", "Vercel"],
    accent: "#f0a202",
  },
  {
    id: "lyricslens",
    name: "LyricsLens",
    repo: "lyric-lens",
    github: "https://github.com/reneechenn/lyric-lens",
    live: "https://lyric-lens-tau.vercel.app",
    blurb: "Spotify-aware lyric translator for whatever is playing right now — 17 languages.",
    details:
      "Detects the currently playing Spotify track, pulls lyrics, and translates them with playback controls. Built as a React + Express app deployed on Vercel and Render.",
    stack: ["React", "JavaScript", "Node.js", "Express", "Spotify API", "Axios", "Vercel"],
    accent: "#7dcfb6",
  },
  {
    id: "playlister",
    name: "Playlister",
    repo: "316-FinalProject-ChenRenee",
    github: "https://github.com/reneechenn/316-FinalProject-ChenRenee",
    blurb: "MERN playlist studio with auth, YouTube playback, and undo/redo editing.",
    details:
      "Full-stack playlist platform: accounts, song search, playlist management, REST APIs, YouTube playback, and transaction-based undo/redo. Tested with Vitest and Postman.",
    stack: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "YouTube API", "Vitest"],
    accent: "#e4572e",
  },
  {
    id: "marketplace",
    name: "Marketplace Hunt",
    repo: "Marketplace_Hunt",
    github: "https://github.com/reneechenn/Marketplace_Hunt",
    live: "https://marketplace-hunt.firebaseapp.com/",
    blurb: "2D grocery scavenger hunt with randomized objectives, NPCs, and persistent progress.",
    details:
      "A Wolfie2D game: randomized shopping lists, inventory validation, NPC movement, collisions, power-ups, difficulty levels, and Firebase-backed progression.",
    stack: ["TypeScript", "HTML/CSS", "Wolfie2D", "Tiled", "Piskel", "Firebase"],
    accent: "#c9a227",
  },
]

export const relatedRepos = [
  {
    name: "draft_iq_player_data_api",
    url: "https://github.com/reneechenn/draft_iq_player_data_api",
    note: "MLB ingest + valuation feed for DraftIQ",
  },
]

export const education = {
  school: "Stony Brook University",
  degree: "Bachelor of Science in Computer Science",
  dates: "Aug 2023 – May 2027",
  place: "Stony Brook, NY",
}

export type SkillGroup = {
  label: string
  items: { name: string; usedIn: string }[]
}

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: [
      { name: "TypeScript", usedIn: "DDC tracker, Marketplace Hunt" },
      { name: "JavaScript", usedIn: "DraftIQ, LyricsLens, Playlister" },
      { name: "Java", usedIn: "Coursework" },
      { name: "Python", usedIn: "Data work, coursework" },
      { name: "C/C++", usedIn: "Coursework" },
      { name: "SQL", usedIn: "Backend + internships" },
      { name: "R", usedIn: "Analytics coursework" },
      { name: "Swift", usedIn: "Coursework" },
      { name: "OCaml", usedIn: "Coursework" },
      { name: "HTML/CSS", usedIn: "Every frontend I ship" },
    ],
  },
  {
    label: "Frameworks",
    items: [
      { name: "React", usedIn: "DraftIQ, LyricsLens, Playlister" },
      { name: "Node.js / Express", usedIn: "All three full-stack apps" },
      { name: "MongoDB", usedIn: "DraftIQ, Playlister" },
      { name: "PostgreSQL", usedIn: "Data + backend work" },
      { name: "REST APIs", usedIn: "Spotify, YouTube, MLB data" },
    ],
  },
  {
    label: "Data",
    items: [
      { name: "Power BI", usedIn: "NYC DDC dashboards" },
      { name: "Excel", usedIn: "Procurement tracker, production logs" },
      { name: "pandas", usedIn: "Analysis coursework" },
      { name: "NumPy", usedIn: "Analysis coursework" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git / GitHub", usedIn: "Every project" },
      { name: "VS Code", usedIn: "Daily driver" },
      { name: "Postman", usedIn: "Playlister API tests" },
      { name: "Xcode", usedIn: "Swift coursework" },
    ],
  },
]

export const huntItems = [
  { id: "list", label: "Shopping list", hint: "Spawns somewhere new each round." },
  { id: "badge", label: "Intern badge", hint: "No fixed corner this time." },
  { id: "disc", label: "Playlist disc", hint: "Scan the whole page, not one section." },
  { id: "chip", label: "Skill chip", hint: "They roam now." },
] as const

export type HuntId = (typeof huntItems)[number]["id"]

export type HuntPrize = {
  kicker: string
  title: string
  body: string
  cta: string
  target: string
}

export const huntPrizes: HuntPrize[] = [
  {
    kicker: "Prize Unlocked",
    title: "Project shelf shortcut",
    body: "You found every token, so here’s the fast track to the projects I’d actually walk someone through first.",
    cta: "Jump to projects",
    target: "#projects",
  },
  {
    kicker: "Prize Unlocked",
    title: "Backstage note",
    body: "Round two points back to the section that explains how I like to work when a product gets messy in real life.",
    cta: "See how I work",
    target: "#about",
  },
  {
    kicker: "Prize Unlocked",
    title: "Conversation starter",
    body: "If you made it this far, you earned the direct path to the contact section. Weird ideas and interesting work both count.",
    cta: "Open contact",
    target: "#contact",
  },
]

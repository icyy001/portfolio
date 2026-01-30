// app/projects/data.ts
export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  tech: string[];
  image?: { src: string; alt: string };
  highlights: string[];
  links: { label: string; href: string }[];
  details: {
    overview: string;
    whatIDid: string[];
    results: string[];
    nextSteps?: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "eventhub-pro",
    title: "EventHub Pro",
    subtitle: "Events REST API with search & pagination",
    tech: ["Node.js", "Express", "Prisma", "SQLite"],
    image: { src: "/screens/eventhub-pro.png", alt: "EventHub Pro UI" },
    highlights: [
      "Paginated, case-insensitive search: /events?search=&page=&limit=",
      "Endpoints with correct status handling (404/204)",
      "Seeded 25 Durham tech/study events + minimal homepage",
    ],
    links: [{ label: "Repo", href: "https://github.com/icyy001/EventHub-Pro" }],
    details: {
      overview:
        "A small but realistic events API to practise Prisma schema/seed, REST endpoints, and a minimal UI consuming the API.",
      whatIDid: [
        "Implemented pagination and search with predictable response shape",
        "Added seed script and Prisma schema",
        "Built minimal homepage to test the API end-to-end",
      ],
      results: [
        "Clean API contract with paging metadata",
        "Working end-to-end demo (UI + API + database)",
      ],
      nextSteps: ["Add OpenAPI docs and deploy the API publicly"],
    },
  },
  {
    slug: "eventhub",
    title: "EventHub",
    subtitle: "Web app + tiny JSON API + tests",
    tech: ["Node.js", "Express", "Bootstrap", "Jest", "Supertest"],
    image: { src: "/screens/eventhub.png", alt: "EventHub UI" },
    highlights: [
      "6 endpoints across places/events under /api",
      "UI → API → updated listing flow (add event form)",
      "Automated API tests with Jest/Supertest",
    ],
    links: [{ label: "Repo", href: "https://github.com/icyy001/EventHub" }],
    details: {
      overview:
        "A lightweight event listing UI connected to a small Express JSON API, with tests to verify behaviour.",
      whatIDid: [
        "Built the API and wired it to the frontend",
        "Added Jest/Supertest integration tests",
        "Kept the interface simple and responsive",
      ],
      results: ["Tested endpoints and a functional UI workflow"],
    },
  },
  {
    slug: "maze-benchmarking",
    title: "Maze Generation Algorithms — Benchmarking Study",
    subtitle: "Performance comparison across maze sizes (Python)",
    tech: ["Python", "NumPy", "Matplotlib", "CSV"],
    image: { src: "/screens/maze-results.png", alt: "Maze benchmarking results chart" },
    highlights: [
      "Benchmarked DFS, Prim’s and Kruskal’s across 50×50–200×200 over 100 iterations",
      "Measured execution time and memory; stored results in CSV for repeatable analysis",
      "Visualised comparisons and summarised findings in a research poster",
      "Independent project completed as part of the Durham University ISC Extended Project module.",
    ],
    links: [],
    details: {
      overview:
        "An experiment-style study comparing maze generation algorithms under consistent conditions and summarising findings with charts.",
      whatIDid: [
        "Designed repeatable benchmarking runs across multiple sizes",
        "Logged results to CSV and analysed trends",
        "Produced visualisations and a poster-style summary",
      ],
      results: ["Clear comparison charts and conclusions based on measured data"],
    },
  },
  {
    slug: "dynamic-event-website",
    title: "Dynamic Event Website",
    subtitle: "JSON → DOM rendering with Fetch API",
    tech: ["Vanilla JS", "HTML", "CSS", "JSON"],
    image: { src: "/screens/dynamic.png", alt: "Dynamic Event Website" },
    highlights: [
      "Loads event data from local JSON via Fetch (AJAX)",
      "Updates the DOM dynamically without reloads",
      "Minimal, responsive layout focused on clarity",
    ],
    links: [
      { label: "Live", href: "https://icyy001.github.io/Dynamic-Event-Website/" },
      { label: "Repo", href: "https://github.com/icyy001/Dynamic-Event-Website" },
    ],
    details: {
      overview:
        "A simple front-end project showing dynamic rendering from JSON with clean UI updates.",
      whatIDid: ["Built the fetch + render flow", "Styled for clarity and responsiveness"],
      results: ["Clean dynamic UI behaviour without frameworks"],
    },
  },
];

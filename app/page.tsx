// app/page.tsx
import { ArrowUpRight, Github, Mail, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { MotionDiv } from "./components/Motion";


type Project = {
  slug: string;
  title: string;
  subtitle: string;
  highlights: string[];
  tech: string[];
  links: { label: string; href: string }[];
  image?: { src: string; alt: string };
  extraImages?: { src: string; alt: string }[];
};

const projects: Project[] = [
  {
    slug: "eventhub-pro",
    title: "EventHub Pro",
    subtitle: "Events REST API with search & pagination",
    tech: ["Node.js", "Express", "Prisma", "SQLite"],
    highlights: [
      "Paginated, case-insensitive search: /events?search=&page=&limit=",
      "Endpoints with correct status handling (404/204)",
      "Seeded 25 Durham tech/study events + minimal homepage",
    ],
    links: [{ label: "Repo", href: "https://github.com/icyy001/EventHub-Pro" }],
    image: { src: "/screens/eventhub-pro.png", alt: "EventHub Pro UI" },
  },
  {
    slug: "eventhub",
    title: "EventHub",
    subtitle: "Web app + tiny JSON API + tests",
    tech: ["Node.js", "Express", "Bootstrap", "Jest", "Supertest"],
    highlights: [
      "6 endpoints across places/events under /api",
      "UI → API → updated listing flow (add event form)",
      "Automated API tests with Jest/Supertest",
    ],
    links: [{ label: "Repo", href: "https://github.com/icyy001/EventHub" }],
    image: { src: "/screens/eventhub.png", alt: "EventHub UI" },
  },
  {
    slug: "maze-benchmarking",
    title: "Maze Generation Algorithms — Benchmarking Study",
    subtitle: "Performance comparison across maze sizes (Python)",
    tech: ["Python", "NumPy", "Matplotlib", "CSV"],
    highlights: [
      "Benchmarked DFS, Prim’s and Kruskal’s maze generation across 50×50–200×200 grids over 100 iterations",
      "Measured execution time and memory usage; stored results in CSV for repeatable analysis",
      "Visualised comparisons using Matplotlib and summarised findings in a research poster",
      "Independent project completed as part of the Durham University ISC Extended Project module.",
    ],
    links: [],
    image: {
      src: "/screens/maze-results.png",
      alt: "Maze benchmarking results chart",
    },
    extraImages: [
      { src: "/screens/maze-method.png", alt: "Maze benchmarking methodology" },
    ],
  },
  {
    slug: "dynamic-event-website",
    title: "Dynamic Event Website",
    subtitle: "JSON → DOM rendering with Fetch API",
    tech: ["Vanilla JS", "HTML", "CSS", "JSON"],
    highlights: [
      "Loads event data from local JSON via Fetch (AJAX)",
      "Updates the DOM dynamically without reloads",
      "Minimal, responsive layout focused on clarity",
    ],
    links: [
      { label: "Live", href: "https://icyy001.github.io/Dynamic-Event-Website/" },
      {
        label: "Repo",
        href: "https://github.com/icyy001/Dynamic-Event-Website",
      },
    ],
    image: { src: "/screens/dynamic.png", alt: "Dynamic Event Website" },
  },
];

const skills = [
  { label: "Languages", value: "Python, Java, JavaScript, HTML/CSS" },
  {
    label: "Backend/DB",
    value: "Node.js, Express, REST APIs, Prisma, SQLite",
  },
  { label: "Testing/Data", value: "Jest, Supertest, NumPy, Pandas, Matplotlib" },
  { label: "Other", value: "Git, Linux/VM workflows" },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold tracking-tight">{children}</h2>
      <div className="h-px flex-1 bg-white/10 ml-4" />
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

function ButtonLink({
  href,
  children,
  icon,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition";
  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-white/90"
      : "border border-white/10 bg-white/5 text-white hover:bg-white/10";
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${base} ${styles}`}
    >
      {icon}
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0D12] text-white">
      {/* subtle gradient */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(99,102,241,0.20),transparent_40%),radial-gradient(800px_circle_at_80%_30%,rgba(34,211,238,0.14),transparent_35%)]" />

      <div className="relative mx-auto max-w-5xl px-5 py-12 sm:py-16">
        <MotionDiv
          initial={{ opacity: 0, y: 40, scale: 0.98}}
          animate={{ opacity: 1, y: 0, scale: 1}}
          transition={{ duration: 0.9, ease: "easeOut"}}
          >
        {/* Header */}
        <header className="flex flex-col items-center gap-6 text-center">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-white/70">Durham, England</p>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
              Rayane El Mselmi
            </h1>
            <p className="max-w-2xl text-white/75">
              Second-year BSc Computer Science student at Durham University
              (Expected 2027). I build clean, reliable web software — APIs, UI,
              and data-driven projects.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition"
            >
              View Projects <ArrowUpRight size={16} />
            </a>

            <ButtonLink
              href="https://github.com/icyy001"
              icon={<Github size={16} />}
              variant="ghost"
            >
              GitHub
            </ButtonLink>

            <ButtonLink
              href="/Rayane_El_Mselmi_CV.pdf"
              icon={<FileText size={16} />}
              variant="ghost"
            >
              Download CV
            </ButtonLink>

            <ButtonLink
              href="mailto:rayane.elmselmi@gmail.com"
              icon={<Mail size={16} />}
              variant="ghost"
            >
              Email
            </ButtonLink>
          </div>

          {/* Quick highlights */}
          <div className="grid gap-3 sm:grid-cols-3 text-center">
            {[
              { k: "Focus", v: "Backend / Full-stack / Data / Cyber" },
              { k: "Strengths", v: "APIs, testing, clear documentation" },
              { k: "Projects", v: "Prisma/SQLite REST API + benchmarking study" },
            ].map((x) => (
              <div
                key={x.k}
                className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
              >
                <p className="text-xs text-white/60">{x.k}</p>
                <p className="mt-1 text-sm text-white/85">{x.v}</p>
              </div>
            ))}
          </div>
        </header>
         </MotionDiv> 

        {/* Projects */}
        <section id="projects" className="mt-12 sm:mt-16">
          <SectionTitle>Projects</SectionTitle>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <MotionDiv
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                key={p.slug}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <div className="flex items-start justify-between gap-3">
                  {p.image && (
                    <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/20">
                      <a
                        href={p.image.src}
                        target="_blank"
                        rel="noreferrer"
                        className="block"
                      >
                        <div className="aspect-video w-full md:aspect-[16/9]">
                          <img
                            src={p.image.src}
                            alt={p.image.alt}
                            className="h-64 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                            loading="lazy"
                          />
                        </div>
                      </a>
                      <p className="px-3 py-2 text-xs text-white/55">
                        Click to view full size
                      </p>
                    </div>
                  )}

                  <div>
                    <h3 className="text-base font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{p.subtitle}</p>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>

                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Links + Details */}
                <div className="mt-4 flex flex-wrap gap-3">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition"
                    >
                      {l.label} <ArrowUpRight size={16} className="opacity-70" />
                    </a>
                  ))}

                  <Link
                    href={`/projects/${p.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition"
                  >
                    Details <ArrowUpRight size={16} className="opacity-70" />
                  </Link>
                </div>

                {/* Extra images (e.g., methodology) */}
                {p.extraImages && p.extraImages.length > 0 && (
                  <details className="mt-4">
                    <summary className="cursor-pointer text-sm text-white/80 hover:text-white transition">
                      Show methodology
                    </summary>
                    <div className="mt-3 grid gap-3">
                      {p.extraImages.map((img) => (
                        <div
                          key={img.src}
                          className="overflow-hidden rounded-xl border border-white/10 bg-black/20 p-2"
                        >
                          <a
                            href={img.src}
                            target="_blank"
                            rel="noreferrer"
                            className="block"
                          >
                            <img
                              src={img.src}
                              alt={img.alt}
                              className="w-full h-auto rounded-lg"
                              loading="lazy"
                            />
                          </a>
                          <p className="mt-2 text-xs text-white/55">
                            Click to view full size
                          </p>
                        </div>
                      ))}
                    </div>
                  </details>
                )}
              </MotionDiv>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mt-12 sm:mt-16">
          <SectionTitle>Skills</SectionTitle>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {skills.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <p className="text-xs text-white/60">{s.label}</p>
                <p className="mt-1 text-sm text-white/85">{s.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="mt-12 sm:mt-16">
          <SectionTitle>About</SectionTitle>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-white/80 leading-relaxed">
              I enjoy building small end-to-end projects, writing tests, and
              making results easy to understand through clear visuals and
              documentation. I’m open to internships in software engineering,
              backend/full-stack, data, or cybersecurity.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="mt-12 sm:mt-16">
          <SectionTitle>Contact</SectionTitle>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-white/80">
                Want to chat? Email me and I’ll reply ASAP.
              </p>
              <p className="mt-1 text-sm text-white/60">
                rayane.elmselmi@gmail.com
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink
                href="mailto:rayane.elmselmi@gmail.com"
                icon={<Mail size={16} />}
              >
                Email
              </ButtonLink>
              <ButtonLink
                href="https://github.com/icyy001"
                icon={<Github size={16} />}
                variant="ghost"
              >
                GitHub
              </ButtonLink>
            </div>
          </div>
        </section>

        <footer className="mt-12 text-center text-xs text-white/45">
          © {new Date().getFullYear()} Rayane El Mselmi
        </footer>
      </div>
    </main>
  );
}

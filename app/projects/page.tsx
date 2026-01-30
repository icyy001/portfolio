import Link from "next/link";
import { projects } from "./data";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0B0D12] text-white">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="mt-2 text-white/70">Selected work and short case studies.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <h2 className="font-semibold">{p.title}</h2>
              <p className="mt-1 text-sm text-white/70">{p.subtitle}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

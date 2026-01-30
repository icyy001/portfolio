import Link from "next/link";
import { projects } from "../data";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);

if (!p) {
  return (
    <main className="min-h-screen bg-[#0B0D12] text-white">
      <div className="mx-auto max-w-3xl px-5 py-12">
        <p className="text-white/70">Project not found.</p>
        <Link className="text-white underline" href="/projects">
          Back to projects
        </Link>
      </div>
    </main>
  );
}

  return (
    <main className="min-h-screen bg-[#0B0D12] text-white">
      <div className="mx-auto max-w-3xl px-5 py-12">
        <Link href="/" className="text-sm text-white/70 hover:text-white">
          ← Home
        </Link>

        <h1 className="mt-4 text-3xl font-bold">{p.title}</h1>
        <p className="mt-2 text-white/70">{p.subtitle}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="text-xs rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-white/80"
            >
              {t}
            </span>
          ))}
        </div>

        {p.image && (
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <img src={p.image.src} alt={p.image.alt} className="w-full" />
          </div>
        )}

        <section className="mt-8">
          <h2 className="text-lg font-semibold">Overview</h2>
          <p className="mt-2 text-white/80 leading-relaxed">{p.details.overview}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold">What I did</h2>
          <ul className="mt-3 space-y-2 text-white/80">
            {p.details.whatIDid.map((x) => (
              <li key={x} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60 shrink-0" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold">Results</h2>
          <ul className="mt-3 space-y-2 text-white/80">
            {p.details.results.map((x) => (
              <li key={x} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60 shrink-0" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </section>

        {p.details.nextSteps?.length ? (
          <section className="mt-8">
            <h2 className="text-lg font-semibold">Next steps</h2>
            <ul className="mt-3 space-y-2 text-white/80">
              {p.details.nextSteps.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60 shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {p.links.length ? (
          <section className="mt-8">
            <h2 className="text-lg font-semibold">Links</h2>
            <div className="mt-3 flex flex-wrap gap-3">
              {p.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}

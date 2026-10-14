import { Fingerprint, Globe, Leaf, Ruler, Scissors, Weight } from "lucide-react";
import { FEATURES } from "../data";
import { Reveal } from "./Reveal";

const ICONS = {
  fiber: Fingerprint,
  weight: Weight,
  fit: Ruler,
  cut: Scissors,
  leaf: Leaf,
  globe: Globe,
} as const;

export function Features() {
  return (
    <section id="story" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.28em] text-copper uppercase">
              Why it lasts
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] font-medium tracking-tight text-ink md:text-6xl">
              Designed like a tool.
              <br />
              <em className="italic text-ink-soft">Worn like a ritual.</em>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-lg text-ink-muted">
              Six quiet decisions that separate a tee you rotate out in a season
              from the one that becomes your uniform.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon as keyof typeof ICONS];
            return (
              <Reveal key={f.title} delay={i * 80} className="h-full">
                <article className="group relative h-full overflow-hidden rounded-3xl border border-ink/8 bg-ivory-deep/50 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-ink/15 hover:bg-ivory hover:shadow-[0_30px_60px_-36px_rgba(22,20,18,0.35)]">
                  <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-ink text-ivory transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <h3 className="font-display text-2xl font-medium tracking-tight">{f.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{f.body}</p>
                  <div className="pointer-events-none absolute -right-8 -bottom-10 h-32 w-32 rounded-full bg-copper/0 blur-2xl transition-colors duration-500 group-hover:bg-copper/10" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

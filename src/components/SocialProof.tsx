import { PRESS, STATS } from "../data";
import { Reveal } from "./Reveal";

export function SocialProof() {
  const loop = [...PRESS, ...PRESS];

  return (
    <section aria-label="Social proof" className="relative border-y border-ink/8 bg-ivory-deep/60">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px border-b border-ink/8 sm:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 90}
            className="px-6 py-10 text-center"
          >
            <p className="font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
              {s.value}
            </p>
            <p className="mt-2 text-[11px] font-medium tracking-[0.2em] text-ink-muted uppercase">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>

      <div className="relative overflow-hidden py-7">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ivory-deep to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ivory-deep to-transparent sm:w-28" />
        <div className="marquee-track flex w-max gap-16 pr-16">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-xl tracking-[0.28em] text-ink/35 uppercase italic md:text-2xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

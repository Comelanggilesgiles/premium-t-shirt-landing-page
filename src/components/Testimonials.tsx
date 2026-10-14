import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "../data";
import { Reveal } from "./Reveal";
import { cn } from "../utils/cn";

export function Testimonials() {
  const featured = TESTIMONIALS[0];
  const rest = TESTIMONIALS.slice(1);

  return (
    <section id="reviews" className="relative scroll-mt-24 bg-ink py-24 text-ivory md:py-32">
      <div className="orb top-0 right-0 h-72 w-72 bg-copper/20" />
      <div className="orb bottom-0 left-0 h-72 w-72 bg-sage/15" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="text-[11px] font-medium tracking-[0.28em] text-gold uppercase">
                The wearers
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] font-medium tracking-tight md:text-6xl">
                Fewer tees.
                <br />
                <em className="italic text-ivory/70">Much better days.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="flex items-center gap-3">
              <div className="flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-ivory/70">
                4.9 average · 2,847 reviews
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-5">
          <Reveal className="lg:col-span-2" variant="left">
            <article className="flex h-full flex-col justify-between rounded-[1.8rem] bg-ivory/[0.06] p-8 ring-1 ring-ivory/10 md:p-10">
              <Quote className="h-8 w-8 text-gold/80" strokeWidth={1.4} />
              <p className="mt-8 font-display text-2xl leading-snug font-medium md:text-3xl">
                “{featured.quote}”
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div
                  className={cn(
                    "grid h-12 w-12 place-items-center rounded-full text-sm font-semibold",
                    featured.tone,
                  )}
                >
                  {featured.initials}
                </div>
                <div>
                  <p className="font-medium">{featured.name}</p>
                  <p className="text-sm text-ivory/55">
                    {featured.role} · {featured.place}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-5 lg:col-span-3">
            {rest.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <article className="rounded-[1.6rem] bg-ivory/[0.05] p-6 ring-1 ring-ivory/8 transition-colors duration-500 hover:bg-ivory/[0.08] md:p-7">
                  <p className="text-[15px] leading-relaxed text-ivory/85">“{t.quote}”</p>
                  <div className="mt-5 flex items-center gap-3">
                    <div
                      className={cn(
                        "grid h-10 w-10 place-items-center rounded-full text-xs font-semibold",
                        t.tone,
                      )}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-xs text-ivory/50">
                        {t.role} · {t.place}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

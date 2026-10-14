import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-[2rem] bg-ink text-ivory md:rounded-[2.4rem]">
            <img
              src="/images/hero-model-2.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
            <div className="orb -top-16 right-10 h-64 w-64 bg-copper/30" />

            <div className="relative grid gap-10 px-8 py-16 md:grid-cols-2 md:items-center md:px-14 md:py-24">
              <div>
                <p className="text-[11px] font-medium tracking-[0.28em] text-gold uppercase">
                  Your new uniform
                </p>
                <h2 className="mt-4 font-display text-4xl leading-[1.08] font-medium tracking-tight md:text-6xl">
                  Your drawer,{" "}
                  <em className="italic text-ivory/70">edited.</em>
                </h2>
                <p className="mt-6 max-w-md text-ivory/70">
                  Join 48,000 people who wear less — and better. The Essential
                  ships tomorrow. The rest of your tees can wait.
                </p>
                <a
                  href="#shop"
                  className="btn-fill mt-8 inline-flex items-center gap-2 rounded-full bg-ivory px-7 py-3.5 text-[13px] font-semibold tracking-[0.16em] text-ink uppercase"
                >
                  Shop The Essential — $64
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <ul className="grid gap-4 text-sm sm:grid-cols-2">
                {[
                  "Complimentary shipping over $100",
                  "30-day fit guarantee",
                  "Free size exchanges, for life",
                  "Lifetime repair program",
                  "GOTS organic Pima cotton",
                  "Carbon-neutral delivery",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-ivory/8 px-4 py-3 ring-1 ring-ivory/10"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

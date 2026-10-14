import { useState } from "react";
import { Check } from "lucide-react";
import { PLANS, SIZES } from "../data";
import { useCart } from "../context/CartContext";
import { cn } from "../utils/cn";
import { Reveal } from "./Reveal";

export function Pricing() {
  const { addBundle } = useCart();
  const [bundleSize, setBundleSize] = useState("M");

  return (
    <section id="pricing" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.28em] text-copper uppercase">
              Edit your drawer
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] font-medium tracking-tight md:text-6xl">
              Own fewer.
              <br />
              <em className="italic text-ink-soft">Wear them more.</em>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-ink-muted">
              Bundles ship together, save you a little, and replace a drawer of
              almost-right tees with the ones you’ll actually reach for.
            </p>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="mt-10 flex flex-col items-center gap-3">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-ink-muted uppercase">
              Bundle size
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {SIZES.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setBundleSize(s)}
                  className={cn(
                    "h-10 min-w-10 rounded-full border px-3 text-sm font-medium transition-all",
                    bundleSize === s
                      ? "border-ink bg-ink text-ivory"
                      : "border-ink/15 hover:border-ink/40",
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 100} className="h-full">
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-[1.8rem] border p-8 transition-all duration-500 hover:-translate-y-1.5",
                  plan.popular
                    ? "border-ink bg-ink text-ivory shadow-[0_40px_80px_-32px_rgba(22,20,18,0.55)]"
                    : "border-ink/10 bg-ivory hover:border-ink/20 hover:shadow-[0_30px_60px_-36px_rgba(22,20,18,0.3)]",
                )}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-copper px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-ivory uppercase">
                    Most chosen
                  </span>
                )}
                <p
                  className={cn(
                    "text-[11px] font-medium tracking-[0.22em] uppercase",
                    plan.popular ? "text-ivory/55" : "text-ink-muted",
                  )}
                >
                  {plan.name}
                </p>
                <div className="mt-4 flex items-end gap-2">
                  <p className="font-display text-5xl font-medium tracking-tight">${plan.price}</p>
                  {plan.original && (
                    <p
                      className={cn(
                        "mb-1 text-sm line-through",
                        plan.popular ? "text-ivory/40" : "text-ink/35",
                      )}
                    >
                      ${plan.original}
                    </p>
                  )}
                </div>
                <p
                  className={cn(
                    "mt-2 text-sm",
                    plan.popular ? "text-ivory/60" : "text-ink-muted",
                  )}
                >
                  {plan.cadence}
                </p>
                <ul className="mt-8 flex flex-1 flex-col gap-3">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          plan.popular ? "text-gold" : "text-sage",
                        )}
                      />
                      <span className={plan.popular ? "text-ivory/85" : "text-ink-soft"}>
                        {perk}
                      </span>
                    </li>
                  ))}
                </ul>
                {plan.id === "single" ? (
                  <a
                    href="#shop"
                    className={cn(
                      "btn-fill mt-8 flex h-12 items-center justify-center rounded-full text-[12px] font-semibold tracking-[0.16em] uppercase",
                      plan.popular
                        ? "bg-ivory text-ink"
                        : "bg-ink text-ivory",
                    )}
                  >
                    {plan.cta}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => addBundle(plan.id as "rotation" | "wardrobe", bundleSize)}
                    className={cn(
                      "btn-fill mt-8 flex h-12 items-center justify-center rounded-full text-[12px] font-semibold tracking-[0.16em] uppercase",
                      plan.popular
                        ? "bg-ivory text-ink"
                        : "bg-ink text-ivory",
                    )}
                  >
                    {plan.cta}
                  </button>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

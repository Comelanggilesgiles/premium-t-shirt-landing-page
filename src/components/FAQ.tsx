import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQS } from "../data";
import { cn } from "../utils/cn";
import { Reveal } from "./Reveal";

export function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 bg-ivory-deep/50 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:gap-20 lg:px-8">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.28em] text-copper uppercase">
              Good questions
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-4xl leading-[1.08] font-medium tracking-tight md:text-5xl">
              Everything you want to know{" "}
              <em className="italic text-ink-soft">before you commit.</em>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-sm text-ink-muted">
              Still unsure? Write us — real humans, usually within a few hours.
              hello@aether.studio
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <ul>
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={item.q} delay={i * 60} as="li">
                  <div className="border-b border-ink/10">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="font-display text-xl font-medium tracking-tight md:text-2xl">
                        {item.q}
                      </span>
                      <span
                        className={cn(
                          "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/15 transition-transform duration-500",
                          isOpen && "rotate-45 bg-ink text-ivory",
                        )}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                    <div
                      className={cn(
                        "grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]",
                      )}
                    >
                      <p className="overflow-hidden text-[15px] leading-relaxed text-ink-muted">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

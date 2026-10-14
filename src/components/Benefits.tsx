import { STEPS } from "../data";
import { Reveal } from "./Reveal";

const BLOCKS = [
  {
    id: "fabric",
    eyebrow: "The hand-feel",
    title: "A fabric you can feel in a single touch.",
    italic: "Then never forget.",
    body: "Extra-long staple Pima is 40% longer than ordinary cotton. Longer fibers mean a tighter yarn, a quieter surface, and a tee that refuses to pill. 220 GSM gives it presence without bulk — the rare weight that drapes like a shirt and breathes like a second skin.",
    image: "/images/fabric-detail.png",
    alt: "Macro photograph of extra-long staple Pima cotton knit",
    reverse: false,
  },
  {
    id: "made",
    eyebrow: "The making",
    title: "Twelve pairs of hands.",
    italic: "One uncompromising standard.",
    body: "Knit, cut, and sewn in a family mill outside Porto. Side-seamed so it never twists. Pre-washed so it never shrinks. We visit twice a year. Fair wages are a requirement, not a caption. Small batches, because quality does not scale the way hype does.",
    image: "/images/atelier.png",
    alt: "Artisan cutting organic cotton in a sunlit Portuguese atelier",
    reverse: true,
  },
  {
    id: "life",
    eyebrow: "The wearing",
    title: "From six in the morning",
    italic: "to midnight, one tee.",
    body: "Under a blazer. Over swim shorts. On a red-eye, in a meeting, at dinner. The Essential is cut to look considered in every context — which is another way of saying you can own fewer things, and feel better in all of them.",
    image: "/images/lifestyle-city.png",
    alt: "Man wearing the Aether Essential in sand on a sunlit city street",
    reverse: false,
  },
];

export function Benefits() {
  return (
    <section className="relative py-8 md:py-12">
      {BLOCKS.map((b) => (
        <article
          key={b.id}
          id={b.id === "fabric" ? "fabric" : undefined}
          className="scroll-mt-24 py-16 md:py-24"
        >
          <div
            className={`mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8 ${
              b.reverse ? "" : ""
            }`}
          >
            <Reveal
              variant={b.reverse ? "right" : "left"}
              className={b.reverse ? "lg:order-2" : ""}
            >
              <div className="group relative overflow-hidden rounded-[2rem] bg-ivory-deep shadow-[0_40px_80px_-40px_rgba(22,20,18,0.35)]">
                <div className="aspect-[5/4] overflow-hidden">
                  <img
                    src={b.image}
                    alt={b.alt}
                    className="img-zoom h-full w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal
              variant={b.reverse ? "left" : "right"}
              delay={100}
              className={b.reverse ? "lg:order-1" : ""}
            >
              <p className="text-[11px] font-medium tracking-[0.28em] text-copper uppercase">
                {b.eyebrow}
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[1.08] font-medium tracking-tight md:text-5xl">
                {b.title} <em className="italic text-ink-soft">{b.italic}</em>
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink-muted">{b.body}</p>
              <a
                href="#shop"
                className="underline-draw mt-8 inline-flex text-[13px] font-semibold tracking-[0.16em] text-ink uppercase"
              >
                Shop The Essential
              </a>
            </Reveal>
          </div>
        </article>
      ))}

      <div className="mx-auto mt-8 max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="text-center text-[11px] font-medium tracking-[0.28em] text-copper uppercase">
            From field to fold
          </p>
        </Reveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="relative border-t border-ink/10 pt-6">
                <p className="font-display text-3xl text-sand italic">{s.n}</p>
                <h3 className="mt-3 font-display text-2xl font-medium">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, Star } from "lucide-react";

function MagneticLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{ transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1)" }}
    >
      {children}
    </a>
  );
}

export function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 40);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="orb -top-24 -left-24 h-80 w-80 bg-copper/15 animate-float" />
      <div className="orb right-[-8%] bottom-[-10%] h-96 w-96 bg-sage/15 animate-float-slow" />
      <div className="orb top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 bg-gold/10 animate-pulse-soft" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pt-8 pb-20 lg:grid-cols-12 lg:gap-6 lg:px-8 lg:pt-12 lg:pb-28">
        <div className="relative z-10 lg:col-span-6">
          <p
            className={`mb-6 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-ivory-deep/70 px-3.5 py-1.5 text-[11px] font-medium tracking-[0.22em] text-ink-muted uppercase transition-all duration-700 ${
              ready ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-copper animate-pulse-soft" />
            Introducing the 2026 Essential
          </p>

          <h1
            className={`font-display text-[3.35rem] leading-[0.92] font-medium tracking-tight text-ink sm:text-7xl lg:text-[5.35rem] ${
              ready ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "120ms" }}
          >
            The T-shirt,{" "}
            <em className="italic text-ink-soft">perfected.</em>
          </h1>

          <p
            className={`mt-7 max-w-md text-[16px] leading-relaxed text-ink-muted sm:text-lg ${
              ready ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "240ms" }}
          >
            Extra-long staple Pima cotton. A weightless, architectural drape.
            Engineered to look better after every wash — not worse.
          </p>

          <div
            className={`mt-9 flex flex-wrap items-center gap-4 ${
              ready ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "360ms" }}
          >
            <MagneticLink
              href="#shop"
              className="btn-fill inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[13px] font-semibold tracking-[0.16em] text-ivory uppercase"
            >
              Shop The Essential — $64
              <ArrowRight className="h-4 w-4" />
            </MagneticLink>
            <a
              href="#fabric"
              className="inline-flex items-center gap-2 px-2 py-3 text-[13px] font-medium tracking-[0.12em] text-ink/70 uppercase transition-colors hover:text-ink"
            >
              Feel the fabric
              <ArrowDown className="h-3.5 w-3.5" />
            </a>
          </div>

          <div
            className={`mt-10 flex flex-wrap items-center gap-6 ${
              ready ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "480ms" }}
          >
            <div className="flex items-center gap-2">
              <div className="flex text-copper" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="text-sm text-ink-muted">
                <span className="font-semibold text-ink">4.9</span> · 2,847 reviews
              </p>
            </div>
            <div className="hidden h-4 w-px bg-ink/10 sm:block" />
            <p className="text-sm text-ink-muted">
              Worn by <span className="font-semibold text-ink">48,000+</span>
            </p>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div
            className={`relative mx-auto max-w-lg lg:ml-auto lg:max-w-none ${
              ready ? "animate-scale-in" : "opacity-0"
            }`}
            style={{ animationDelay: "180ms" }}
          >
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-b from-cream to-ivory-deep shadow-[0_40px_80px_-32px_rgba(22,20,18,0.35)]">
                <img
                  src="/images/tee-white.png"
                  alt="The Aether Essential tee in ivory, ghost-mannequin product photograph"
                  className="h-full w-full object-contain p-6 sm:p-10 animate-float-slow"
                />
              </div>

              <div className="absolute -bottom-4 -left-2 hidden w-40 overflow-hidden rounded-2xl shadow-2xl ring-4 ring-ivory sm:block md:-left-8 md:w-48 lg:w-52">
                <img
                  src="/images/hero-model.png"
                  alt="Campaign portrait wearing The Essential"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>

              <div className="glass absolute top-6 right-4 rounded-2xl px-4 py-3 shadow-lg animate-float">
                <p className="text-[11px] tracking-[0.18em] text-ink-muted uppercase">Ivory · 220 GSM</p>
                <p className="mt-0.5 text-sm font-semibold">The Essential · $64</p>
              </div>

              <div className="glass-dark absolute right-6 bottom-10 hidden rounded-2xl px-4 py-3 text-ivory sm:block">
                <p className="text-[11px] tracking-[0.18em] text-ivory/60 uppercase">In stock</p>
                <p className="mt-0.5 text-sm font-medium">Ships tomorrow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

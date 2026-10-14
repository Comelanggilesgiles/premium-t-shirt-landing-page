import { useRef, useState } from "react";
import { Check, Minus, Plus, ShoppingBag } from "lucide-react";
import { PRODUCTS, SIZES } from "../data";
import { useCart } from "../context/CartContext";
import { cn } from "../utils/cn";
import { Reveal } from "./Reveal";

export function Showcase() {
  const { addItem } = useCart();
  const [selected, setSelected] = useState(PRODUCTS[0]);
  const [size, setSize] = useState<string>("M");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  const onTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = stageRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(900px) rotateY(${(x - 0.5) * 8}deg) rotateX(${(0.5 - y) * 8}deg)`;
  };

  const resetTilt = () => {
    if (stageRef.current) stageRef.current.style.transform = "";
  };

  const handleAdd = () => {
    addItem(selected, size, qty);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };

  return (
    <section id="shop" className="relative scroll-mt-24 bg-ivory-deep/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="text-[11px] font-medium tracking-[0.28em] text-copper uppercase">
                The Core Four
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] font-medium tracking-tight md:text-6xl">
                One cut.{" "}
                <em className="italic text-ink-soft">Four moods.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-muted">
              The Essential, in the only colors a drawer actually needs. Same pattern.
              Same 220 GSM Pima. Different presence.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="scale" className="relative">
            <div
              ref={stageRef}
              onMouseMove={onTilt}
              onMouseLeave={resetTilt}
              className="relative aspect-square overflow-hidden rounded-[2rem] bg-gradient-to-b from-cream/80 to-ivory shadow-[0_40px_80px_-40px_rgba(22,20,18,0.4)] transition-transform duration-300 ease-out"
            >
              {PRODUCTS.map((p) => (
                <img
                  key={p.id}
                  src={p.image}
                  alt={`${p.name} in ${p.color}`}
                  className={cn(
                    "absolute inset-0 h-full w-full object-contain p-8 transition-opacity duration-700",
                    selected.id === p.id ? "opacity-100" : "opacity-0",
                  )}
                />
              ))}
              {selected.tag && (
                <span className="absolute top-6 left-6 rounded-full bg-ink px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-ivory uppercase">
                  {selected.tag}
                </span>
              )}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <p className="text-[11px] font-medium tracking-[0.22em] text-ink-muted uppercase">
                Aether · Unisex
              </p>
              <h3 className="mt-2 font-display text-4xl font-medium tracking-tight md:text-5xl">
                The Essential
              </h3>
              <p className="mt-2 text-lg text-ink-muted">
                <span className="font-semibold text-ink">${selected.price}</span>
                <span className="mx-2 text-ink/20">·</span>
                {selected.color}
              </p>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-muted">
                Relaxed through the body, clean at the shoulder, a hem that sits
                right at the hip. The tee you reach for first — and the one that
                outlasts the rest.
              </p>

              <fieldset className="mt-8">
                <legend className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-ink uppercase">
                  Color — {selected.color}
                </legend>
                <div className="flex gap-3">
                  {PRODUCTS.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelected(p)}
                      aria-label={p.color}
                      aria-pressed={selected.id === p.id}
                      className={cn(
                        "relative h-10 w-10 rounded-full border transition-transform duration-300 hover:scale-110",
                        selected.id === p.id
                          ? "border-ink ring-2 ring-ink/20 ring-offset-2 ring-offset-ivory"
                          : "border-ink/15",
                      )}
                      style={{ background: p.colorHex }}
                    >
                      {selected.id === p.id && (
                        <Check
                          className={cn(
                            "absolute inset-0 m-auto h-4 w-4",
                            p.id === "ink" ? "text-ivory" : "text-ink",
                          )}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset className="mt-7">
                <legend className="mb-3 flex w-full items-center justify-between text-[11px] font-semibold tracking-[0.18em] text-ink uppercase">
                  <span>Size — {size}</span>
                  <span className="font-medium tracking-normal text-ink-muted normal-case">
                    True to size. Size up for oversized.
                  </span>
                </legend>
                <div className="grid grid-cols-6 gap-2">
                  {SIZES.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSize(s)}
                      className={cn(
                        "h-11 rounded-full border text-sm font-medium transition-all duration-300",
                        size === s
                          ? "border-ink bg-ink text-ivory"
                          : "border-ink/15 text-ink hover:border-ink/40",
                      )}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <div className="flex h-12 items-center justify-between rounded-full border border-ink/15 px-2 sm:w-36">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="grid h-10 w-10 place-items-center rounded-full hover:bg-ink/5"
                  >
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="w-6 text-center text-sm font-semibold">{qty}</span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQty((q) => q + 1)}
                    className="grid h-10 w-10 place-items-center rounded-full hover:bg-ink/5"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={handleAdd}
                  className="btn-fill flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-copper px-6 text-[13px] font-semibold tracking-[0.16em] text-ivory uppercase transition-colors"
                >
                  {added ? (
                    <>
                      <Check className="h-4 w-4" /> Added
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="h-4 w-4" /> Add to bag — ${selected.price * qty}
                    </>
                  )}
                </button>
              </div>

              <p className="mt-5 text-sm text-ink-muted">
                4 interest-free payments of ${Math.round((selected.price * qty) / 4)}. Free
                carbon-neutral shipping over $100. 30-day fit guarantee.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <button
                type="button"
                onClick={() => {
                  setSelected(p);
                  document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={cn(
                  "group w-full overflow-hidden rounded-[1.6rem] border bg-ivory text-left transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_50px_-32px_rgba(22,20,18,0.4)]",
                  selected.id === p.id ? "border-ink/20" : "border-ink/8",
                )}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-ivory-deep">
                  <img
                    src={p.image}
                    alt={`${p.name} in ${p.color}`}
                    className="img-zoom h-full w-full object-contain p-5"
                  />
                  {p.tag && (
                    <span className="absolute top-4 left-4 rounded-full bg-ink/90 px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.16em] text-ivory uppercase">
                      {p.tag}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between px-5 py-4">
                  <div>
                    <p className="text-sm font-semibold">{p.color}</p>
                    <p className="text-xs text-ink-muted">The Essential</p>
                  </div>
                  <p className="text-sm font-medium">${p.price}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

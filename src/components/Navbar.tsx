import { useEffect, useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { cn } from "../utils/cn";
import { useCart } from "../context/CartContext";

const LINKS = [
  { href: "#shop", label: "Shop" },
  { href: "#fabric", label: "Fabric" },
  { href: "#story", label: "Story" },
  { href: "#reviews", label: "Reviews" },
  { href: "#pricing", label: "Bundles" },
];

function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-2.5" aria-label="Aether home">
      <span
        className={cn(
          "relative grid h-8 w-8 place-items-center rounded-full border transition-transform duration-500 group-hover:rotate-90",
          inverted ? "border-ivory/40" : "border-ink/20",
        )}
      >
        <span
          className={cn(
            "block h-1.5 w-1.5 rounded-full",
            inverted ? "bg-ivory" : "bg-copper",
          )}
        />
      </span>
      <span
        className={cn(
          "font-display text-[17px] font-semibold tracking-[0.28em] uppercase",
          inverted ? "text-ivory" : "text-ink",
        )}
      >
        Aether
      </span>
    </a>
  );
}

export function Navbar() {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [pop, setPop] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (count === 0) return;
    setPop(true);
    const t = window.setTimeout(() => setPop(false), 450);
    return () => window.clearTimeout(t);
  }, [count]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div
        className={cn(
          "relative z-50 overflow-hidden bg-ink text-ivory/80 transition-all duration-500",
          scrolled ? "max-h-0" : "max-h-12",
        )}
      >
        <p className="flex h-9 items-center justify-center gap-3 px-4 text-center text-[11px] font-medium tracking-[0.18em] uppercase">
          <span className="hidden sm:inline">Complimentary shipping over $100</span>
          <span className="hidden sm:inline text-ivory/30">·</span>
          <span>30-day fit guarantee</span>
          <span className="hidden sm:inline text-ivory/30">·</span>
          <span className="hidden md:inline">Lifetime repair</span>
        </p>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-500",
          scrolled ? "glass shadow-[0_8px_40px_-24px_rgba(22,20,18,0.35)]" : "bg-transparent",
        )}
      >
        <nav
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 lg:px-8",
            scrolled ? "h-[68px]" : "h-[78px]",
          )}
          aria-label="Primary"
        >
          <Logo />

          <ul className="hidden items-center gap-9 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="underline-draw text-[13px] font-medium tracking-[0.16em] text-ink/70 uppercase transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openCart}
              className="relative grid h-11 w-11 place-items-center rounded-full transition-colors hover:bg-ink/5"
              aria-label={`Open bag, ${count} items`}
            >
              <ShoppingBag className={cn("h-[18px] w-[18px]", pop && "bag-pop")} />
              {count > 0 && (
                <span className="absolute top-1.5 right-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-copper px-1 text-[10px] font-semibold text-ivory">
                  {count}
                </span>
              )}
            </button>
            <a
              href="#shop"
              className="btn-fill hidden rounded-full bg-ink px-5 py-2.5 text-[12px] font-semibold tracking-[0.16em] text-ivory uppercase transition-colors lg:inline-flex"
            >
              Shop now
            </a>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full hover:bg-ink/5 lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[60] bg-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden",
          open ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div className="flex h-[78px] items-center justify-between px-5">
          <Logo inverted />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="grid h-11 w-11 place-items-center rounded-full text-ivory hover:bg-ivory/10"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <ul className="flex flex-col gap-2 px-8 pt-10">
          {LINKS.map((l, i) => (
            <li
              key={l.href}
              style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
              className={cn(
                "transition-all duration-700",
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
              )}
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-5xl font-medium tracking-tight text-ivory"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="absolute right-8 bottom-10 left-8">
          <a
            href="#shop"
            onClick={() => setOpen(false)}
            className="flex h-14 items-center justify-center rounded-full bg-ivory text-sm font-semibold tracking-[0.18em] text-ink uppercase"
          >
            Shop The Essential
          </a>
        </div>
      </div>
    </>
  );
}

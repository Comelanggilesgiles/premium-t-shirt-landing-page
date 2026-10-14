import { useState } from "react";
import { ArrowRight } from "lucide-react";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { href: "#shop", label: "The Essential" },
      { href: "#pricing", label: "Bundles" },
      { href: "#shop", label: "Ivory" },
      { href: "#shop", label: "Ink" },
      { href: "#shop", label: "Sand" },
      { href: "#shop", label: "Sage" },
    ],
  },
  {
    title: "House",
    links: [
      { href: "#story", label: "Our story" },
      { href: "#fabric", label: "The fabric" },
      { href: "#faq", label: "Care guide" },
      { href: "#faq", label: "Sustainability" },
      { href: "#reviews", label: "Reviews" },
    ],
  },
  {
    title: "Help",
    links: [
      { href: "#faq", label: "FAQ" },
      { href: "#faq", label: "Shipping" },
      { href: "#faq", label: "Returns" },
      { href: "#faq", label: "Size guide" },
      { href: "mailto:hello@aether.studio", label: "Contact" },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="mt-16 border-t border-ink/8 bg-ivory-deep/40">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href="#top" className="inline-flex items-center gap-2.5" aria-label="Aether home">
              <span className="relative grid h-8 w-8 place-items-center rounded-full border border-ink/20">
                <span className="block h-1.5 w-1.5 rounded-full bg-copper" />
              </span>
              <span className="font-display text-[17px] font-semibold tracking-[0.28em] uppercase">
                Aether
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
              Extra-long staple Pima tees, cut in Porto. Built to replace
              everything else in your drawer.
            </p>
            <form
              className="mt-8"
              onSubmit={(e) => {
                e.preventDefault();
                if (!email.trim()) return;
                setDone(true);
                setEmail("");
              }}
            >
              <label htmlFor="email" className="text-[11px] font-semibold tracking-[0.2em] text-ink uppercase">
                The edit, monthly
              </label>
              <div className="mt-3 flex h-12 items-center rounded-full border border-ink/15 bg-ivory pr-1.5 pl-5">
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-ink/35"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="grid h-9 w-9 place-items-center rounded-full bg-ink text-ivory transition-transform hover:scale-105"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              {done && (
                <p className="mt-2 text-xs text-sage">You’re on the list. Welcome.</p>
              )}
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-6 lg:col-start-7">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="text-[11px] font-semibold tracking-[0.2em] text-ink uppercase">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-ink-muted transition-colors hover:text-ink"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ink/8 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-ink/45">
            © {new Date().getFullYear()} Aether Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-ink/45">
            <a href="#faq" className="hover:text-ink">
              Privacy
            </a>
            <a href="#faq" className="hover:text-ink">
              Terms
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-ink"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

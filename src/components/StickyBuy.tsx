import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";

export function StickyBuy() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const shop = document.getElementById("shop");
      if (!shop) return;
      const top = shop.getBoundingClientRect().top;
      setShow(window.scrollY > 520 && top > 120);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-4 pb-4 transition-all duration-500 md:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"
      }`}
    >
      <a
        href="#shop"
        className="flex h-14 items-center justify-between rounded-full bg-ink px-6 text-ivory shadow-[0_16px_40px_-12px_rgba(22,20,18,0.6)]"
      >
        <span className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.14em] uppercase">
          <ShoppingBag className="h-4 w-4" />
          Shop The Essential
        </span>
        <span className="text-sm font-medium">$64</span>
      </a>
    </div>
  );
}

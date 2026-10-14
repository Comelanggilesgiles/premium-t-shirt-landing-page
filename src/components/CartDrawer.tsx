import { useEffect } from "react";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { cn } from "../utils/cn";

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQty, removeItem, subtotal, count } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCart]);
  const shipping = subtotal >= 100 || subtotal === 0 ? 0 : 8;
  const total = subtotal + shipping;

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-[70] bg-ink/40 backdrop-blur-sm transition-opacity duration-500",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={closeCart}
        aria-hidden={!isOpen}
      />
      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-[75] flex w-full max-w-md flex-col bg-ivory shadow-[-20px_0_60px_-28px_rgba(22,20,18,0.4)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping bag"
      >
        <div className="flex h-[72px] items-center justify-between border-b border-ink/8 px-6">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4" />
            <p className="text-sm font-semibold tracking-[0.14em] uppercase">
              Bag {count > 0 && `(${count})`}
            </p>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="grid h-10 w-10 place-items-center rounded-full hover:bg-ink/5"
            aria-label="Close bag"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-display text-3xl font-medium">Your bag is empty.</p>
              <p className="mt-2 max-w-xs text-sm text-ink-muted">
                The Essential is waiting. Four colors. One decision.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-6 rounded-full bg-ink px-6 py-3 text-[12px] font-semibold tracking-[0.16em] text-ivory uppercase"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div className="h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-ivory-deep">
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full object-contain p-1"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold">{item.name}</p>
                        <p className="text-xs text-ink-muted">
                          {item.color} · {item.size}
                        </p>
                      </div>
                      <p className="text-sm font-medium">${item.price * item.qty}</p>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <div className="flex items-center rounded-full border border-ink/15">
                        <button
                          type="button"
                          aria-label="Decrease"
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="grid h-8 w-8 place-items-center"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-5 text-center text-xs font-semibold">{item.qty}</span>
                        <button
                          type="button"
                          aria-label="Increase"
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="grid h-8 w-8 place-items-center"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-ink-muted underline-offset-2 hover:text-ink hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-ink/8 px-6 py-5">
            <div className="flex justify-between text-sm">
              <span className="text-ink-muted">Subtotal</span>
              <span className="font-medium">${subtotal}</span>
            </div>
            <div className="mt-2 flex justify-between text-sm">
              <span className="text-ink-muted">Shipping</span>
              <span className="font-medium">
                {shipping === 0 ? "Complimentary" : `$${shipping}`}
              </span>
            </div>
            {subtotal < 100 && (
              <p className="mt-2 text-xs text-ink-muted">
                Add ${100 - subtotal} more for complimentary shipping.
              </p>
            )}
            <div className="mt-4 flex justify-between font-semibold">
              <span>Total</span>
              <span>${total}</span>
            </div>
            <button
              type="button"
              className="btn-fill mt-5 flex h-12 w-full items-center justify-center rounded-full bg-copper text-[12px] font-semibold tracking-[0.18em] text-ivory uppercase"
            >
              Checkout
            </button>
            <p className="mt-3 text-center text-[11px] text-ink-muted">
              30-day fit guarantee · Lifetime repair
            </p>
          </div>
        )}
      </aside>
    </>
  );
}

export function Toast() {
  const { toast } = useCart();
  return (
    <div
      className={cn(
        "pointer-events-none fixed bottom-6 left-1/2 z-[90] -translate-x-1/2 rounded-full bg-ink px-5 py-3 text-sm text-ivory shadow-xl transition-all duration-500",
        toast ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
      )}
      role="status"
    >
      {toast ?? " "}
    </div>
  );
}

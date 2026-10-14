import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { type Product } from "../data";

export type CartItem = {
  id: string;
  productId: string;
  name: string;
  color: string;
  size: string;
  price: number;
  image: string;
  qty: number;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (product: Product, size: string, qty?: number) => void;
  addBundle: (planId: "rotation" | "wardrobe", size: string) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  count: number;
  subtotal: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toast: string | null;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const flash = useCallback((message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 2600);
  }, []);

  const addItem = useCallback(
    (product: Product, size: string, qty = 1) => {
      const id = `${product.id}-${size}`;
      setItems((prev) => {
        const existing = prev.find((i) => i.id === id);
        if (existing) {
          return prev.map((i) => (i.id === id ? { ...i, qty: i.qty + qty } : i));
        }
        return [
          ...prev,
          {
            id,
            productId: product.id,
            name: product.name,
            color: product.color,
            size,
            price: product.price,
            image: product.image,
            qty,
          },
        ];
      });
      setIsOpen(true);
      flash(`Added ${product.color} / ${size} to your bag`);
    },
    [flash],
  );

  const addBundle = useCallback(
    (planId: "rotation" | "wardrobe", size: string) => {
      const bundle =
        planId === "wardrobe"
          ? {
              id: `wardrobe-${size}`,
              productId: "wardrobe",
              name: "The Wardrobe",
              color: "Ivory, Ink, Sand, Sage",
              size,
              price: 239,
              image: "/images/collection-lay.png",
              qty: 1,
            }
          : {
              id: `rotation-${size}`,
              productId: "rotation",
              name: "The Rotation",
              color: "Ivory, Ink, Sand",
              size,
              price: 174,
              image: "/images/collection-lay.png",
              qty: 1,
            };

      setItems((prev) => {
        const existing = prev.find((i) => i.id === bundle.id);
        if (existing) {
          return prev.map((i) => (i.id === bundle.id ? { ...i, qty: i.qty + 1 } : i));
        }
        return [...prev, bundle];
      });
      setIsOpen(true);
      flash(`Added ${bundle.name} · ${size} to your bag`);
    },
    [flash],
  );

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQty = useCallback((id: string, qty: number) => {
    setItems((prev) =>
      qty <= 0 ? prev.filter((i) => i.id !== id) : prev.map((i) => (i.id === id ? { ...i, qty } : i)),
    );
  }, []);

  const count = useMemo(() => items.reduce((n, i) => n + i.qty, 0), [items]);
  const subtotal = useMemo(() => items.reduce((n, i) => n + i.price * i.qty, 0), [items]);

  const value = useMemo(
    () => ({
      items,
      addItem,
      addBundle,
      removeItem,
      updateQty,
      count,
      subtotal,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      toast,
    }),
    [items, addItem, addBundle, removeItem, updateQty, count, subtotal, isOpen, toast],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

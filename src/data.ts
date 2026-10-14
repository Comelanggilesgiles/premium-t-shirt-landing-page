export type Product = {
  id: string;
  name: string;
  color: string;
  colorHex: string;
  price: number;
  image: string;
  tag?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "ivory",
    name: "The Essential",
    color: "Ivory",
    colorHex: "#F4EFE6",
    price: 64,
    image: "/images/tee-white.png",
    tag: "Bestseller",
  },
  {
    id: "ink",
    name: "The Essential",
    color: "Ink",
    colorHex: "#1A1816",
    price: 64,
    image: "/images/tee-black.png",
  },
  {
    id: "sand",
    name: "The Essential",
    color: "Sand",
    colorHex: "#C9B8A0",
    price: 64,
    image: "/images/tee-sand.png",
    tag: "New",
  },
  {
    id: "sage",
    name: "The Essential",
    color: "Sage",
    colorHex: "#6B7F6A",
    price: 64,
    image: "/images/tee-sage.png",
  },
];

export const SIZES = ["XS", "S", "M", "L", "XL", "XXL"] as const;

export const FEATURES = [
  {
    title: "Extra-long staple Pima",
    body: "Fibers 40% longer than ordinary cotton. A surface so smooth it refuses to pill — wash after wash, year after year.",
    icon: "fiber",
  },
  {
    title: "220 GSM, considered",
    body: "Substantial enough to drape like a shirt. Light enough to forget. The rare weight that works in every season.",
    icon: "weight",
  },
  {
    title: "Pre-shrunk, true forever",
    body: "Washed and set before it ever reaches you. The size you choose is the size you keep. No guessing. No shrinking.",
    icon: "fit",
  },
  {
    title: "Side-seamed architecture",
    body: "Cut and sewn to hold its shape through a hundred wears. No twisting. No torque. Just a clean, lasting line.",
    icon: "cut",
  },
  {
    title: "GOTS organic, always",
    body: "Grown without pesticides, dyed without compromise, finished in a mill we visit. Certified from field to fold.",
    icon: "leaf",
  },
  {
    title: "Carbon-neutral delivery",
    body: "Every order is offset. Plastic-free packaging. A repair program that keeps your tee in rotation, not in landfill.",
    icon: "globe",
  },
];

export const STEPS = [
  { n: "01", title: "Fiber", body: "Extra-long staple Pima, grown in certified organic fields." },
  { n: "02", title: "Knit", body: "Tight, even jersey at 220 GSM — dense, breathable, quiet." },
  { n: "03", title: "Cut", body: "Patterned for drape. Side-seamed. Finished by hand in Porto." },
  { n: "04", title: "Wear", body: "Yours. Softer at wash ten than at wash one. Built to stay." },
];

export const TESTIMONIALS = [
  {
    quote:
      "I used to own twenty tees. I own four now, all Aether. The drape is unlike anything in my closet — it looks considered without trying.",
    name: "Maya Chen",
    role: "Creative Director",
    place: "Brooklyn",
    initials: "MC",
    tone: "bg-[#d9c7b0] text-ink",
  },
  {
    quote:
      "I travel every week. This is the only tee that still looks like a tee after a red-eye, a meeting, and dinner. That shouldn't be possible at this price.",
    name: "James Okonkwo",
    role: "Architect",
    place: "London",
    initials: "JO",
    tone: "bg-ink text-ivory",
  },
  {
    quote:
      "The Sand color is the one I get stopped for. Friends assume it cost three times as much. I let them.",
    name: "Sofia Rossi",
    role: "Photographer",
    place: "Milan",
    initials: "SR",
    tone: "bg-[#c4b5a0] text-ink",
  },
  {
    quote:
      "We put it through 100 industrial washes in our studio. Color held. Shape held. That's not marketing — that's the garment.",
    name: "Alexander Wright",
    role: "Studio Founder",
    place: "Copenhagen",
    initials: "AW",
    tone: "bg-sage text-ivory",
  },
];

export const PLANS = [
  {
    id: "single",
    name: "The Single",
    price: 64,
    original: null,
    cadence: "One Essential, any color",
    popular: false,
    perks: [
      "Any colorway",
      "Free carbon-neutral shipping over $100",
      "30-day fit guarantee",
      "Lifetime repair",
    ],
    cta: "Choose a color",
  },
  {
    id: "rotation",
    name: "The Rotation",
    price: 174,
    original: 192,
    cadence: "Three Essentials · save $18",
    popular: true,
    perks: [
      "Any three colorways",
      "Complimentary shipping",
      "30-day fit guarantee",
      "Lifetime repair",
      "Linen storage bag",
    ],
    cta: "Build your rotation",
  },
  {
    id: "wardrobe",
    name: "The Wardrobe",
    price: 239,
    original: 256,
    cadence: "All four colors · save $17",
    popular: false,
    perks: [
      "Ivory, Ink, Sand & Sage",
      "Complimentary shipping",
      "30-day fit guarantee",
      "Lifetime repair",
      "Linen storage bag",
      "Priority restock access",
    ],
    cta: "Own the set",
  },
];

export const FAQS = [
  {
    q: "How does The Essential fit?",
    a: "True to size, with a relaxed-tailored drape — clean through the shoulder, easy through the body, a hem that hits at the hip. If you live in an oversized look, size up. Our fit model is 6'1\" / 185 cm and wears L.",
  },
  {
    q: "Will it shrink in the wash?",
    a: "No. Every tee is pre-washed and heat-set at the mill before it is cut. The size on the label is the size you keep — even after years of weekly laundry.",
  },
  {
    q: "How should I care for it?",
    a: "Cold wash, inside out, with like colors. Hang dry or low tumble. The Pima actually improves with wear: the hand gets softer, the drape more personal. Avoid high heat and bleach.",
  },
  {
    q: "What's your return policy?",
    a: "Thirty days, no stories. If the fit isn't right or you simply change your mind, send it back — even if you've worn it. We also offer free exchanges on size, for life.",
  },
  {
    q: "Where are Aether tees made?",
    a: "Knit, cut, and sewn in a family-run mill outside Porto, Portugal. The Pima is GOTS-certified organic. We visit twice a year. Fair wages are a requirement, not a talking point.",
  },
  {
    q: "Why does it cost $64?",
    a: "Because the cotton is extra-long staple Pima, the GSM is 220, the construction is side-seamed, and we refuse to cut a corner you would feel in week three. Fast-fashion tees cost less because they are designed to fail. This one is designed to be the last you buy.",
  },
];

export const PRESS = [
  "VOGUE",
  "GQ",
  "MONOCLE",
  "HIGHSNOBIETY",
  "ESQUIRE",
  "WALL STREET JOURNAL",
  "THE GENTLEWOMAN",
  "KINFOLK",
];

export const STATS = [
  { value: "48k+", label: "Everyday wearers" },
  { value: "4.9", label: "Average rating" },
  { value: "100+", label: "Washes, still true" },
  { value: "30-day", label: "Fit guarantee" },
];

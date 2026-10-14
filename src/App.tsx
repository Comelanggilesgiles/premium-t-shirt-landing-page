import { CartProvider } from "./context/CartContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SocialProof } from "./components/SocialProof";
import { Features } from "./components/Features";
import { Showcase } from "./components/Showcase";
import { Benefits } from "./components/Benefits";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Lookbook } from "./components/Lookbook";
import { Footer } from "./components/Footer";
import { CartDrawer, Toast } from "./components/CartDrawer";
import { StickyBuy } from "./components/StickyBuy";

export default function App() {
  return (
    <CartProvider>
      <div className="grain min-h-screen bg-ivory text-ink">
        <Navbar />
        <main id="main">
          <Hero />
          <SocialProof />
          <Features />
          <Showcase />
          <Lookbook />
          <Benefits />
          <Testimonials />
          <Pricing />
          <FAQ />
          <CTA />
        </main>
        <Footer />
        <CartDrawer />
        <Toast />
        <StickyBuy />
      </div>
    </CartProvider>
  );
}

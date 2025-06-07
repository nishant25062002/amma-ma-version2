// components/Cart.jsx
import { CartSection, Footer, Navbar } from "@/components";

export default function Cart() {
  return (
    <main>
      <Navbar />
      <div className="h-[4.6rem]" />

      {/* CartSection */}
      <CartSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}

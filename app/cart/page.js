// components/Cart.jsx
import {
  AllergenAdvisorySection,
  CartSection,
  Footer,
  Navbar,
} from "@/components";

export default function Cart() {
  return (
    <main>
      <Navbar />
      <div className="h-[4.6rem]" />

      {/* CartSection */}
      <CartSection />

      <AllergenAdvisorySection className={"!pt-0"} />

      {/* Footer */}
      <Footer />
    </main>
  );
}

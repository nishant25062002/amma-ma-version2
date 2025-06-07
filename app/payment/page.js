"use client";

import { Footer, Navbar, PaymentSection } from "@/components";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
//   throw new Error("STRIPE_PUBLIC_KEY is not defined");
// }

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function PaymentPage() {
  return (
    <main>
      <Navbar />
      <div className="h-[4.6rem]" />

      <PaymentSection />

      <Footer />
    </main>
  );
}

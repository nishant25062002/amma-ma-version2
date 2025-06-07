"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { CheckoutSection, Heading } from "@/components";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const PaymentSection = () => {
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  useEffect(() => {
    if (cartItems.length == 0) {
      router.push("/products");
    }
  }, [total]);

  return (
    <section className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500 min-h-[30rem]">
      <div className="mb-10">
        <Heading level="h3" className="text-[#000]">
          Amma-ma Foods
        </Heading>
        <Heading level="h3" className="text-[#000]">
          has requested <span className="font-bold">£{total}</span>
        </Heading>
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(total),
          currency: "gbp",
        }}
      >
        <CheckoutSection amount={total} />
      </Elements>
    </section>
  );
};

export default PaymentSection;

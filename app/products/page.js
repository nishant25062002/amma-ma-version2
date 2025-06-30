"use client";

import {
  Navbar,
  ProductsSection,
  TestimonialSection,
  SubscribeSection,
  Footer,
  WhyUsSection,
} from "@/components";
import { scrollToId } from "@/lib/scrollToId";
import { useEffect } from "react";

export default function ProductsPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;
      const segments = pathname.split("/").filter(Boolean);
      const id = segments[segments.length - 1];
      scrollToId(id);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="h-[4.6rem]" />

      {/*  This section is new in present version*/}
      <WhyUsSection />

      {/* ProductsSection */}
      <ProductsSection />

      {/* TestimonialSection */}
      <TestimonialSection />

      {/* HeroFeature */}
      {/* <HeroFeature /> */}

      {/* <FeatureSection /> */}

      {/* CtaSection */}
      {/* <CtaSection /> */}

      {/* SubscribeSection */}
      <SubscribeSection />

      {/* Footer */}
      <Footer />
    </>
  );
}

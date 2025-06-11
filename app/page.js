"use client";

import {
  Hero,
  Navbar,
  CtaSection,
  ProductsSection,
  TestimonialSection,
  SubscribeSection,
  Footer,
  HeroFeature,
  WhyUsSection,
  FaqSection,
} from "@/components";
import { scrollToId } from "@/lib/scrollToId";
import { useEffect } from "react";

export default function Home() {
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

      <Hero />
      {/*  This section is not present in present version*/}
      {/* <BrandGrid /> */}

      {/*  This section is new in present version*/}
      <WhyUsSection />

      {/* ProductsSection */}
      <ProductsSection />

      {/* TestimonialSection */}
      <TestimonialSection />

      {/* HeroFeature */}
      <HeroFeature />

      {/* <FeatureSection /> */}

      {/* CtaSection */}
      <CtaSection />

      <FaqSection className="!pt-0" />

      {/* SubscribeSection */}
      <SubscribeSection />

      {/* Footer */}
      <Footer />
    </>
  );
}

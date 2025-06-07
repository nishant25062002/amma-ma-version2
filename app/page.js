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
  const pathname = window.location.pathname; // e.g. "/services/web-design"
  const segments = pathname.split("/").filter(Boolean); // removes empty strings
  const id = segments[segments.length - 1]; // "web-design"

  useEffect(() => {
    scrollToId(id);
  }, [id]);

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

      <FaqSection />

      {/* SubscribeSection */}
      <SubscribeSection />

      {/* Footer */}
      <Footer />
    </>
  );
}

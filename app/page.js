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
  HeroSectionExtend,
  TrustBadgesSlider,
} from "@/components";
import { scrollToId } from "@/lib/scrollToId";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

      <Hero isMobile={isMobile} />
      <HeroSectionExtend isMobile={isMobile} />
      {/*  This section is not present in present version*/}
      {/* <BrandGrid /> */}

      {/*  This section is new in present version*/}
      <WhyUsSection />
      <TrustBadgesSlider />

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

import {
  BrandGrid,
  FeatureSection,
  Hero,
  HeroFeatureSection,
  Navbar,
  CtaSection,
  ProductsSection,
  TestimonialSection,
  SubscribeSection,
  Footer,
} from "@/components";
import HeroFeature from "@/components/home/HeroFeature";
import WhyUsSection from "@/components/home/WhyUsSection";

export default function Home() {
  return (
    <>
      <Navbar />
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
      {/* SubscribeSection */}
      <SubscribeSection />
      {/* Footer */}
      <Footer />
    </>
  );
}

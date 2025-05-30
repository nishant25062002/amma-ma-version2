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
} from "@/components";

export default function Home() {
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

      {/* SubscribeSection */}
      <SubscribeSection />

      {/* Footer */}
      <Footer />
    </>
  );
}

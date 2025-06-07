import {
  Navbar,
  ProductsSection,
  TestimonialSection,
  SubscribeSection,
  Footer,
  WhyUsSection,
} from "@/components";

export default function ProductsPage() {
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

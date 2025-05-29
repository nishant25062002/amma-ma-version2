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
      {/* <Hero /> */}
      {/*  This section is not present in present version*/}
      {/* <BrandGrid /> */}

      {/* ProductsSection */}
      <ProductsSection />

      {/*  This section is new in present version*/}
      <WhyUsSection />

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

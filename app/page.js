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

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrandGrid />
      <FeatureSection />

      {/* HeroFeatureSection */}
      <div className="py-[5rem] space-y-[5rem] bg-[#FFC06D]">
        <HeroFeatureSection />
        <HeroFeatureSection className="md:!flex-row-reverse" />
      </div>

      {/* CtaSection */}
      <CtaSection />

      {/* ProductsSection */}
      <ProductsSection />

      {/* TestimonialSection */}
      <TestimonialSection />

      {/* SubscribeSection */}
      <SubscribeSection />

      {/* Footer */}
      <Footer />
    </>
  );
}

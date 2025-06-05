import {
  FaqSection,
  Footer,
  Navbar,
  PhotoGridWithModal,
  ProductDetail,
  ProductsSection,
  SubscribeSection,
  TestimonialSection,
} from "@/components";
import React from "react";

const ProductPage = () => {
  return (
    <main>
      <Navbar />
      <div className="h-[4.6rem]" />

      <PhotoGridWithModal />
      <ProductDetail />

      <ProductsSection />
      <TestimonialSection />
      <FaqSection />

      <SubscribeSection />
      <Footer />
    </main>
  );
};

export default ProductPage;

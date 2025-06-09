"use client";

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
import { productsData } from "@/data/global";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductPage = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    if (id) {
      const temp = productsData.find(
        (product) => product.id.toString() === id.toString()
      );

      setProductDetails(temp);
    }
  }, [id]);

  return (
    <main>
      <Navbar />
      <div className="h-[4.6rem]" />

      <PhotoGridWithModal productDetails={productDetails} />
      <ProductDetail productDetails={productDetails} />

      <ProductsSection />
      <TestimonialSection />
      <FaqSection />

      <SubscribeSection />
      <Footer />
    </main>
  );
};

export default ProductPage;

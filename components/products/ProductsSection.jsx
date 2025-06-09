// components/ProductsSection.js
"use client";

import { Button, Heading, ProductCard, Text } from "..";
import { useRouter } from "next/navigation";
import { productsData } from "@/data/global";

export default function ProductsSection() {
  const router = useRouter();

  const redirectToProducts = () => {
    router.push("/products");
  };

  return (
    <section className="py-[4rem] md:py-[7rem] px-4 md:px-8 bg-[#0C4539]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-[3rem] md:mb-[5rem] flex-wrap gap-4">
          <div>
            <Text
              size="regular"
              weight="semibold"
              className="text-[#F9C000] mb-[1rem]"
            >
              Delight
            </Text>
            <Heading level="h2" className="mb-[1rem] text-[#FDFDFD]">
              Products
            </Heading>
            <Text size="regular" className="text-[#FDFDFD]">
              Explore our range of delicious sugar-free sweets.
            </Text>
          </div>
          <Button
            variant="outline"
            className="hidden md:block"
            onClick={redirectToProducts}
          >
            View all
          </Button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1rem] gap-y-[3rem] md:gap-[2rem] md:gap-y-[4rem]">
          {productsData.map((product, idx) => (
            <ProductCard key={idx} {...product} index={idx} />
          ))}
        </div>
      </div>
      {/* <div className="flex justify-center mt-[4rem] md:mt-[5rem]">
        <Button variant="solid">Shop Now</Button>
      </div> */}
    </section>
  );
}

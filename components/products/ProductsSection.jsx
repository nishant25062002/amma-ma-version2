// components/ProductsSection.js

import { Laddu, Laddu2, Laddu3 } from "@/public";
import { Button, Heading, ProductCard, Text } from "..";

const products = [
  {
    image: Laddu,
    title: "Date Ladoo",
    subtitle: "Classic",
    price: 10,
  },
  {
    image: Laddu2,
    title: "Coconut Barfi",
    subtitle: "Traditional",
    price: 12,
  },
  {
    image: Laddu3,
    title: "Almond Halwa",
    subtitle: "Rich",
    price: 15,
  },
  {
    image: Laddu,
    title: "Cashew Burfi",
    subtitle: "Creamy",
    price: 14,
  },
  {
    image: Laddu,
    title: "Date Ladoo",
    subtitle: "Classic",
    price: 10,
  },
  {
    image: Laddu2,
    title: "Coconut Barfi",
    subtitle: "Traditional",
    price: 12,
  },
  {
    image: Laddu3,
    title: "Almond Halwa",
    subtitle: "Rich",
    price: 15,
  },
  {
    image: Laddu,
    title: "Cashew Burfi",
    subtitle: "Creamy",
    price: 14,
  },
];

export default function ProductsSection() {
  return (
    <section className="py-[4rem] md:py-[7rem] px-4 md:px-8 bg-[#0C4539]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
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
          <Button variant="outline" className="hidden md:block">
            View all
          </Button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1rem] gap-y-[3rem] md:gap-[2rem] md:gap-y-[4rem]">
          {products.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-[2rem] md:mt-[5rem]">
        <Button variant="outline">Shop Now</Button>
      </div>
    </section>
  );
}
